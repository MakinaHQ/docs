---
id: caliber-mailbox
sidebar_position: 4
---

# Caliber Mailbox

A **Caliber Mailbox** is deployed alongside every Spoke [Caliber](../caliber/overview). It is the **Machine's local endpoint on the spoke chain**: from the Caliber's perspective, the Mailbox stands in for the [Machine](../machine/overview), and it absorbs all the chain-specific logic so the Caliber behaves identically on every chain.

![makina cross-chain structure](/img/makina-cross-chain.png)

It plays three roles.

## 1. Liquidity gateway

The Mailbox controls the spoke side's set of [bridge adapters](liquidity-bridging) and is the contract through which capital is sent to and received from the Hub Machine. It is the spoke-side counterpart to the Machine's hub-side bridging, executing the same [four-step transfer](liquidity-bridging#a-deliberate-four-step-transfer) and tracking pending in- and out-bound amounts per token.

## 2. Governance endpoint

Mirroring the Machine on the Hub Chain, the Mailbox exposes the per-strategy [roles](../governance/overview) (Operator, Risk Manager, Security Council, …) to its Caliber, so the same permission model (including [Recovery Mode](../security/recovery-mode)) applies on the spoke. Recovery Mode is **per-chain**: it must be triggered on each spoke's Mailbox independently.

## 3. Accounting source

The Mailbox exposes the **view function** that the [Wormhole CCQ](cross-chain-accounting) network reads and signs, returning the spoke Caliber's detailed accounting (net AUM, positions, base tokens, and pending bridge amounts). This is how the spoke's value reaches the Machine for total-AUM computation.

:::info Implementation
Caliber Mailbox reference: [`CaliberMailbox.sol`](/contracts/core/caliber/CaliberMailbox.sol/contract.CaliberMailbox.md).
:::
