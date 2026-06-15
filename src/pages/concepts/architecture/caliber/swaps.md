---
id: swaps
sidebar_position: 4
---

# Swaps

A [Caliber](overview) frequently needs to convert one token into another: to assemble the [base tokens](base-tokens) a position requires, to realize [harvested](harvests) rewards, or to consolidate holdings. It does this through the **Swap Module**, a shared piece of [infrastructure](../pricing-oracles) that routes swaps through approved external routers and aggregators.

## What can be swapped, and into what

- The **output** of a swap must be a registered [base token](base-tokens) (the accounting token is one). The Caliber will not accept arbitrary tokens as the result of a swap, which is what keeps its holdings priceable.
- The **input** can be almost any token the Caliber holds: base tokens, or unregistered tokens such as reward, incentive, or airdrop tokens. The only exception is tokens that are part of an open position (those must be unwound through [position management](positions), not sold out from under the accounting).

Swapping an _unregistered_ token into a base token can only **increase** the Caliber's measurable AUM, since the input wasn't being counted in the first place.

## Routing and slippage

The Swap Module forwards execution to a router selected by a `swapperId`, using calldata supplied by the Operator (typically generated off-chain by an aggregator). Makina does not need to understand the route, only to verify the outcome. Two layers of protection apply:

- a **minimum output amount** enforced by the Swap Module, and
- an independent **value-loss check** by the Caliber, which compares the accounting-token value held before and after the swap and reverts if the loss exceeds the configured tolerance.

This lets the Operator use any atomically executed route while guaranteeing the strategy can't be drained through a bad or malicious swap.

## Cooldowns

Like position management, swapping **base tokens** is subject to a **cooldown**: a base-token swap cannot be followed by another until the cooldown elapses. (Swaps whose input is _not_ a base token, such as realizing a reward token, are not cooldown-limited.)

## Direct protocol swaps

Operations like mint/redeem or wrap/unwrap (e.g. converting a token to its yield-bearing wrapper) can also be performed through the Swap Module by registering the relevant contract as a router. This brings asset conversions that aren't classic DEX trades under the same approved-router-and-loss-check safety model.

## In Recovery Mode

During [Recovery Mode](../../security/recovery-mode), swaps are restricted to producing **only the accounting token**: the strategy can consolidate toward its safest asset but cannot rotate between base tokens.

:::info[Implementation]
Swap Module reference: [`SwapModule.sol`](/contracts/core/swap/SwapModule.sol/contract.SwapModule.md).
:::
