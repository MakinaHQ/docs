---
id: pre-deposit
sidebar_position: 6
---

# Pre-Deposit

Pre-deposits enable strategies to build baseline liquidity prior to launch. This is helpful for bootstrapping, as it allows strategies to start with diversified exposure and efficient allocation across multiple opportunities.

Makina supports a standardised flow for pre-deposits through its Core Factory, providing a secure and efficient way for Operators to gather the liquidty required to launch new strategies.

The [PreDepositVault](/contracts/core/pre-deposit/PreDepositVault.sol/contract.PreDepositVault.md) contract defines a pre-deposit asset, this can be any yield-bearing token which has an oracle feed against the accounting token and which can later be enabled as a base token.

`PreDepositVault` specifies a pre-deposit asset, typically a yield-bearing token, that:

- Is priceable against the accounting token through the [Oracle Registry](../oracle-registry).
- Will later be enabled as a base token within the strategy.

Users deposit this pre-deposit token into `PreDepositVault` to earn baseline yield during the pre-deposit phase. The vault’s share price increases in line with the yield accrued by the pre-deposit token.

Importantly, `PreDepositVault` mints the [Shares](machine-token) of the future Machine it will eventually migrate into. When the Machine is deployed, there is no need to migrate user balances. Only the minting authority is transferred from the Pre-Deposit Vault to the Machine, enabling a seamless transition into the active strategy.

![makina-pre-deposit](/img/makina-pre-deposit.png)
