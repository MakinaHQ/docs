---
id: harvests
sidebar_position: 5
---

# Harvests

Many [positions](positions) earn **reward tokens**: emissions, incentives, or fees distributed by the underlying protocol through claim contracts. A [Caliber](overview) collects these with **Harvest Instructions** (see [MakinaVM](makina-vm#the-four-instruction-types)), which claim rewards and pull them onto the Caliber's balance. A Harvest instruction is receive-only: it can bring rewards _in_, but cannot spend the Caliber's existing holdings.

## Realizing harvested value

Claiming a reward token does **not** by itself increase the Caliber's [AUM](caliber-accounting). Only [base tokens](base-tokens) (which are priceable through the [Oracle Registry](../oracles)) count toward AUM, and a freshly claimed reward token usually isn't one. To turn rewards into measurable value, they must either be:

- **swapped** into a base token, or
- **registered** as a base token, provided an oracle price feed route is registered for them.

To make this efficient, harvested rewards can be **swapped immediately** within the same harvest call by attaching swap orders, claiming and realizing in one atomic operation.

## Why prompt harvesting matters

There is an incentive to harvest and realize rewards **frequently**. If unrealized rewards pile up, a gap opens between the strategy's _theoretical_ value and its _accounted_ AUM. Such gaps create free-riding opportunities (depositors and redeemers transacting at a stale price that doesn't yet reflect pending rewards), which ultimately degrades the strategy's performance, and therefore the [Operator's](../governance/operator) [fees](../machine/fees). Keeping harvested value current keeps the [share price](../machine/share-price) honest for everyone.
