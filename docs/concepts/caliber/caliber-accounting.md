---
id: caliber-accounting
sidebar_position: 7
---

# Caliber Accounting

Each [Caliber](overview) independently computes the value of everything it holds, denominated in the [accounting token](overview#accounting-token-and-base-tokens). This per-Caliber value is the building block the [Machine](../machine/overview) sums into the strategy's total [AUM](../machine/share-price) and, ultimately, the share price.

## What a Caliber's AUM contains

$$
\text{net AUM} = \big(\text{base-token balances} + \text{asset positions}\big) - \text{debt positions}
$$

- **Base-token balances** are valued directly: the Caliber reads each balance and prices it against the accounting token via the [Oracle Registry](../oracles). No instruction needed.
- **Positions** contribute their last accounted value ([asset positions](positions) add, [debt positions](positions#debt-positions) subtract), yielding a _net_ figure that correctly reflects leverage and hedges.

## Freshness: positions must not be stale

A position's value is only meaningful if it's recent. Each position records when it was last accounted, and the Caliber enforces a **staleness threshold**: if any position is too old, an attempt to read the Caliber's AUM **fails** rather than returning a stale number. This is a deliberate safety property: a wrong AUM would corrupt the share price.

Positions are re-accounted:

- **automatically** every time they are managed, and
- **on demand**, by running the relevant [Accounting Instruction](makina-vm#the-four-instruction-types).

## Who can re-account

Whether re-accounting is **permissionless** or **restricted** is a configurable per-strategy setting. When permissionless, anyone can re-account a position. When **restricted accounting mode** is enabled, both position accounting and the Machine's [AUM update](../machine/share-price) are limited to the [Operator](../governance/operator) and a set of designated accounting agents. Restricted mode is commonly used in practice. During [Recovery Mode](../security/recovery-mode) the AUM update is restricted further, to the [Security Council](../governance/security-council). See [Permissions & Scopes](../governance/permissions-and-scopes#restricted-accounting-mode).

Whoever is allowed to do it, the [Operator](../governance/operator) and the Makina DAO both have a direct incentive to keep values current: [fees](../machine/fees) only crystallize on a complete accounting cycle, and a stale Caliber blocks the Machine's AUM update entirely. In practice the Operator (or a keeper) re-accounts positions continuously.

## Feeding the Machine

The Caliber exposes its accounting as a **public view function**. On the Hub Chain the Machine reads it directly. On Spoke Chains the same data is queried by the [Wormhole Cross-Chain Queries](https://wormhole.com/products/queries) network, signed, and delivered to the Machine. See [Cross-Chain Accounting](../cross-chain/cross-chain-accounting).
