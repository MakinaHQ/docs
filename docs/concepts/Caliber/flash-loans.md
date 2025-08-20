---
id: flash-loans
sidebar_label: Flash Loans
sidebar_position: 6
---

# Flash Loans

Calibers can take flashloans for additional temporary liquidity during the execution of [Position Management Instructions](./makina-vm#instruction-types).

The flashloans are taken before executing the instructions to make the extra liquidity available to the Caliber and need to be repaid after the position management instruction is executed.

The flashloan liquidity can be used to open leveraged and looped positions on lending markets, execute complex swaps through protocols or rebalance positions on DEX liquidity pools.

The Caliber interacts with protocols providing flashloans through an external Flashloan Module which can act as an adapter to different flashloan callback interfaces.
