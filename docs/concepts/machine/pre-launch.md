---
id: pre-launch
sidebar_position: 6
---

# Pre-Launch

Pre-launches enable strategies to build baseline liquidity prior to launch. This is helpful for bootstrapping, as it allows strategies to start with diversified exposure and efficient allocation across multiple opportunities.

Makina supports a standardised flow for pre-launchs through its Core Factory, providing a secure and efficient way for Operators to gather the liquidty required to launch new strategies.

The Pre-Launch Vault contract defines a pre-launch asset, this can be any yield-bearing token which has an oracle feed against the accounting token and which can later be enabled as a base token.

The Pre-Launch Vault contract specifies a pre-launch asset, typically a yield-bearing token, that:

- Is priceable against the accounting token through the [Oracle Registry](../oracle-registry).
- Will later be enabled as a base token within the strategy.

Users deposit this pre-launch token into the Pre-Launch Vault to earn baseline yield during the pre-launch phase. The vault’s share price increases in line with the yield accrued by the pre-launch token.

Importantly, the Pre-Launch Vault mints the [Shares](machine-token) of the future Machine it will eventually migrate into. When the Machine is deployed, there is no need to migrate user balances. Only the minting authority is transferred from the Pre-Launch Vault to the Machine, enabling a seamless transition into the active strategy.

![makina-pre-launch](/img/makina-pre-launch.png)
