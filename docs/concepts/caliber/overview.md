---
id: "overview"
title: Overview
sidebar_position: 0
---

# Caliber

A **Caliber** is a strategy's chain-local execution engine, the contract from which capital is actually deployed into external protocols. Where the [Machine](../machine/overview) is the vault and the accountant, the Caliber is the operator's workbench.

A strategy has **one Caliber per chain** it operates on. The Caliber on the [Hub Chain](../cross-chain/hub-and-spoke) sits beside the Machine, and additional Calibers on Spoke Chains extend the strategy elsewhere. Every transaction the [Operator](../governance/operator) executes against an external protocol is sent _by_ a Caliber, which is the on-chain identity that holds positions and interacts with DeFi.

## What a Caliber does

- Executes [Instructions](makina-vm) on its embedded [MakinaVM](makina-vm) to open, resize, and close [positions](positions) in external protocols.
- Holds and manages [base tokens](base-tokens): the priceable assets positions are built from.
- [Swaps](swaps) tokens through approved routers, [harvests](harvests) external rewards, and can take [flash loans](flash-loans) for temporary liquidity.
- Independently [accounts](caliber-accounting) for everything it holds, in accounting-token terms.
- On Spoke Chains, sends and receives capital to and from the Machine through its [Caliber Mailbox](../cross-chain/caliber-mailbox) using Makina's [cross-chain liquidity](../cross-chain/liquidity-bridging) infrastructure.

## Accounting token and base tokens

A Caliber works with a curated set of **[base tokens](base-tokens)**: the only tokens it may hold directly. Each base token must be **priceable** against the accounting token through the [Oracle Registry](../oracles), which is what lets the Caliber value everything it holds. Positions can only be built from, and unwound into, base tokens, and swaps can only produce base tokens. This guarantees every asset the Caliber touches can be valued, and therefore that loss checks and accounting always work.

The **accounting token** is a special base token: the unit the [Machine](../machine/overview) uses (or an asset 1:1 redeemable for it), in which the Caliber denominates all value. It is registered as a base token automatically and can never be removed.

## Bounded by design

A Caliber gives the Operator enormous reach (almost any protocol can be integrated), but every action is constrained:

- only [pre-approved instructions](makina-vm) may run;
- swaps may only output approved base tokens;
- each position-management action and swap is subject to a **loss cap** and a **cooldown**;
- in [Recovery Mode](../security/recovery-mode), positions may only be reduced and swaps may only move toward the accounting token.

These guardrails are what make discretionary, cross-protocol management safe. The rest of this section covers each capability in turn.

:::info Implementation
Caliber contract reference: [`Caliber.sol`](/contracts/core/caliber/Caliber.sol/contract.Caliber.md).
:::
