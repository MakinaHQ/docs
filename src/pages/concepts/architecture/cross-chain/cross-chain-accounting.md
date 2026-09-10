---
searchPriority: 0
id: cross-chain-accounting
sidebar_position: 2
---

# Cross-Chain Accounting

For the [share price](../machine/share-price) to be correct, the [Machine](../machine/overview) must know the value of **every** Caliber, including those on other chains. Reading the Hub Caliber is a local call. Reading a Spoke Caliber is the hard part, because it lives on a different chain. Cross-chain accounting is how that value is brought to the Hub **without letting the parties that run the strategy report it themselves**.

## Chainlink Runtime Environment (CRE)

Makina relies on the [Chainlink Runtime Environment (CRE)](https://docs.chain.link/cre), Chainlink's off-chain compute platform, to relay spoke accounting to the Hub:

```mermaid
sequenceDiagram
    participant MB as Spoke Caliber Mailbox
    participant W as CRE workflow (Chainlink network)
    participant F as CRE forwarder (Hub)
    participant M as Machine (Hub)
    W->>MB: read getSpokeCaliberAccountingData()
    MB-->>W: accounting snapshot
    W->>F: report (one or more snapshots)
    F->>M: onReport(metadata, report)
    M->>M: check workflow ID, mailbox, freshness; store
```

1. Each [Caliber Mailbox](caliber-mailbox) exposes a **view function** returning its Caliber's accounting **snapshot**: net AUM, pending bridge amounts in both directions, and the context it was read in (chain ID, mailbox address, block number and timestamp).
2. A CRE **workflow** reads that view on the spoke chain and produces a report. The Chainlink network delivers it on the Hub through the CRE **forwarder** contract.
3. The forwarder calls the Machine, which checks that the report comes from the forwarder and carries an **authorized workflow ID**, that each snapshot targets a registered spoke and its expected Mailbox, and that the snapshot is **fresh**: strictly newer than the one already stored, within the configured staleness threshold, and not dated in the future. Only then is it stored.

Submission is therefore **not** permissionless: only the CRE forwarder, relaying an authorized workflow, can feed spoke data into the Machine. The set of authorized workflow IDs is managed by protocol governance (see [Permissions & Scopes](../../governance/permissions-and-scopes)).

:::info[Security Council fallback]
Should the CRE relaying path become unavailable, the [Security Council](../../governance/security-council) can call the same entry point directly and publish spoke snapshots itself, bypassing the forwarder and workflow checks. The mailbox and freshness checks still apply.
:::

## From spoke data to total AUM

Once the Machine holds fresh accounting for every enabled spoke, it can compute total AUM (see [Share Price](../machine/share-price)):

$\text{AUM} = \text{idle} + \text{Hub Caliber} + \sum \text{Spoke Calibers} + \text{in-flight bridges}$

If any enabled spoke's stored data is stale when an [AUM update](../machine/share-price#keeping-aum-fresh) is attempted, the update **reverts** rather than using outdated values, so the share price is never computed from stale cross-chain data.

### Disabling a spoke

A spoke that has been fully wound down can be **disabled**, so that its accounting no longer needs relaying. Disabling is only allowed once the spoke is empty by every measure the Machine has: its last reported net AUM is zero, and no bridge transfer is pending in either direction. A disabled spoke is skipped in the AUM sum and can no longer receive transfers from the Machine, though funds it sends back to the Hub are still accepted. It can be re-enabled at any time. Both actions are governance operations (see [Permissions & Scopes](../../governance/permissions-and-scopes)).

## Counting value in transit

The accounting data each Mailbox reports includes **pending bridge amounts**: capital that has left one side but not yet arrived on the other. The Machine tracks bridge transfers in both directions on both sides, and counts the in-flight difference toward AUM. This is what guarantees value isn't double-counted _or_ dropped while a [bridge transfer](liquidity-bridging) is in progress, which can take anywhere from minutes to days.

:::info[Implementation]
The CRE report handling lives in [`SpokeSnapshotConsumer`](/contracts/core/utils/abstract.SpokeSnapshotConsumer), inherited by the Machine, and in [`MachineUtils`](/contracts/core/libraries/library.MachineUtils). The spoke-side view is on [`CaliberMailbox`](/contracts/core/caliber/contract.CaliberMailbox).
:::
