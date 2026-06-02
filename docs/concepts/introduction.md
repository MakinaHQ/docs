---
sidebar_position: 1
---

# Introduction

## What is Makina?

Makina is a protocol for **professionally managed, tokenized, cross-chain investment strategies**.

A strategy on Makina behaves like an onchain fund: users deposit a single asset and receive a fungible token (a _share_) that represents their proportional claim on everything the strategy holds. Behind that share token, a professional manager, the **Operator**, puts the capital to work across DeFi: lending markets, liquidity pools, yield vaults, derivatives, and other protocols, on Ethereum and on other chains.

What makes Makina different from a traditional smart-contract vault is the **execution model**. Instead of hard-coding each integration into the vault, Makina gives the Operator a generalized, permissioned execution engine ([the MakinaVM](caliber/makina-vm)) that can interact with almost any external protocol, but only through actions that governance has reviewed and explicitly approved in advance. This combines the flexibility of an actively managed fund with the safety of a tightly scoped vault.

## What problem does it solve?

Onchain asset management today forces a hard trade-off:

- **Rigid vaults** are safe but inflexible. Every new protocol integration requires writing, auditing, and deploying a custom adapter, which is slow, expensive, and error-prone. The strategy can only ever do what was anticipated at deployment time.
- **Discretionary, manually managed strategies** are flexible but require users to fully trust a manager who can move funds anywhere, at any time, with no onchain guardrails.

Makina removes the trade-off. The Operator can pursue opportunities across the entire DeFi landscape and adapt as markets change, **without unilateral control over user funds**. Every action the Operator can take is bounded by an onchain risk policy and a pre-approved instruction set, and a separate **Security Council** can intervene if something goes wrong. Adding a new integration is a single governance-reviewed update, not a new contract deployment.

## How does it create value?

A Makina strategy creates value the way any fund does, by generating returns on the capital it manages:

- **Yield** from lending, staking, liquidity provision, and yield-bearing assets.
- **Price appreciation** of the assets it holds relative to the strategy's reference asset.
- **Active management**: the Operator continuously rebalances toward the best risk-adjusted opportunities, across chains, within the limits set by governance.

As the strategy's total value grows, so does the value of each share. Holders capture returns through the appreciation of their [share token](machine/machine-token), which is fully composable and can itself be used as collateral, paired in liquidity pools, or held in treasury. Operators and the protocol are compensated through [fees](machine/fees), aligning their incentive with long-term share-price growth.

## Design principles

Makina is built to be **non-custodial, transparent, and trust-minimized**:

- **No unilateral control.** The Operator executes the strategy but cannot withdraw user funds, send assets to arbitrary destinations, or exceed the risk limits encoded onchain.
- **Pre-approved actions only.** Every protocol interaction must match an instruction that governance has reviewed and committed to onchain, subject to a timelock.
- **Defense in depth.** Loss caps, cooldowns, staleness checks, timelocks, a veto-holding Security Council, an emergency [Recovery Mode](security/recovery-mode), and an insurance [Security Module](security/security-module) each catch what the others miss.
- **Verifiable accounting.** [Share price](machine/share-price) is derived from the strategy's full, oracle-priced assets under management (including capital deployed on other chains), and is auditable by anyone at any time.

## The strategy mandate

When a strategy launches, its team publishes a **mandate**: a high-level description of the strategy's type, goal, risk profile, return expectations, and the opportunity segment it targets. The mandate is the human-readable charter that guides the [Risk Manager](governance/risk-manager) (who sets the onchain limits) and the [Operator](governance/operator) (who executes within them). It is the reference point against which a strategy's behavior can be judged.

## Who is this documentation for?

This Concepts section is the primary onboarding path for everyone encountering Makina:

- **Users** who want to understand how their deposits are managed and what protects them.
- **Partners, investors, and ecosystem participants** evaluating the protocol.
- **Integrators** building on top of Makina shares or strategies.
- **Solidity developers and auditors** who want a conceptual map before reading the contracts.

It is organized as a learning journey. Each section goes deeper into one part of the system, and links into the [Contracts](/contracts/core/summary) reference for implementation detail.

:::tip Where to go next
New to Makina? Read [Architecture](architecture) and [Asset Lifecycle](lifecycle) in order. Together they give you a complete mental model in a few minutes.
:::
