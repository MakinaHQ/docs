---
id: swaps
sidebar_position: 4
---

# Swaps

Calibers can swap any arbitrary token into accounting or [Base Tokens](base-tokens) through a swapper module which can route swaps through external routers or aggregators.

This implies that the accounting token, base tokens and other tokens earned as rewards, incentives, or airdrops can be swapped into other tokens registered in the Caliber and priceable to accounting tokens with oracles through the [Oracle Registry](../oracle-registry).

The Caliber performs independent slippage checks enforcing that no large losses are taken during swaps by verifying the total value held on the caliber before and after the swap. This adds an additional layer of safety to swapping operation and enables Operators to swap through any atomically executed route, while still allowing for off-chain generated arbitrary calldata, as is commonly used in swap aggregators.

Swapping base tokens is subject to [Cooldown Duration](../../contracts/core/interfaces/ICaliber.sol/interface.ICaliber.md#cooldownduration), transactions attempting to swap a given base token before the CooldownDuration has elapsed will revert.

In the case of external unregistered tokens being swapped into accounting or base tokens the balance AUM of the Caliber can only increase.

Direct protocol swaps such as mint/redeem or wrap/unwrap of assets can also be done through Makina's swap infrastructure by enabling custom smart-contracts for those actions as external routers on the swap module.
