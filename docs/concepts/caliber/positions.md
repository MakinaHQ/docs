---
id: positions
sidebar_position: 3
---

# Positions

Positions represent base asset deployments made from the Calibers into external protocol.

Operators can open positions on multiple protocols or on the same protocol. Each Position has a unique position ID, all open positions are registered in the Caliber.

Positions can be increased and decreased through [Position Management Instructions](makina-vm#instruction-types) sent by the Operator. The value of each Position, needs to be accounted for through an [Accounting Instruction](makina-vm#instruction-types).

Positions can only be increased by deploying [Base Tokens](base-tokens), and they can only be decreased by withdrawing them into base tokens. Accounting Instructions need to also return values denominated in base tokens.

This enables all positions to be ultimately valued in Accounting Tokens, and thus have generalised slippage or loss checks whenever a position is increased or decrease.

Each position has a list of risk attributes defined in the Risk Policy, and thus maximum exposure caps can be set on how large individual or groups of positions can be.

Position modification is subject to [Cooldown Duration](../../contracts/core/interfaces/ICaliber.sol/interface.ICaliber.md#cooldownduration), transactions attempting to modify positions before the CooldownDuration has elapsed will revert.

Positions are required to have mutual exclusivity on liquidity deployments, two positions can not have overlapping accounting instructions accounting for the same liquidity.

## Debt Positions

Positions can also be used to represent dept or borrow position in scenarios where assets are borrowed from lending markets.

Debt Positions are accounted for in the negative and subtracted from the total Caliber AUM for purposes of [share price](../machine/share-price) calculations and risk policy exposure calculations.

Debt positions behave the same as normal positions and are in all matters equivalent to positive value positions excpet that they are stored in the Caliber with a flag marking them as being debt.
