---
id: "overview"
title: Overview
sidebar_position: 0
---

# Caliber

Calibers are the chain-local execution engines from which assets are deployed. Calibers contain an instance of the [MakinaVM](makina-vm) which execute Instructions for interactions with external DeFi Protocols.

A Caliber is always deployed on the Hub Chain. Additionally, if required, Calibers can also be deployed on Spoke Chains. Calibers are the effective sender of all transactions executed by the Operator. Each Caliber can hold multiple [Positions](positions) and independently account for all positions deployed through it.

Calibers can swap tokens, harvest external rewards from claiming contracts and take flashloans for additional liquidity.

Spoke chain Calibers can receive and send assets from and to the Machine on the Hub Chain through [Mailboxes](../cross-chain/caliber-mailbox) using Makina's native [Cross-Chain Liquidity](../cross-chain/liquidity-bridging) infrastructure.

Each Caliber has an Accounting Token and additionally Calibers have a notion of [Base Tokens](base-tokens). The Accounting Token is required to be equivalent or 1:1 redeemable for the Accounting Token of the Machine, and Base Tokens are required to be priceable against the Accounting Token of the Caliber through locally available price oracles stored in the [Oracle Registry](../oracle-registry).
