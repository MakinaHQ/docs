---
id: "machine-token"
sidebar_position: 1
---

# Machine Token (Shares)

The **Machine Token** (also called the **share**) is the ERC-20 token that represents a holder's proportional claim on a strategy. Holding shares is equivalent to holding a slice of everything the strategy controls. As the strategy's [AUM](share-price) grows, the value of each share grows with it.

The share token is a standard, fully composable ERC-20. It always uses **18 decimals**, regardless of the strategy's [accounting token](overview#the-accounting-token), which keeps share math precise even for low-decimal accounting tokens like USDC. See [`MachineShare.sol`](/contracts/core/machine/MachineShare.sol/contract.MachineShare.md).

## How shares are acquired

- **By depositing** the accounting token through the strategy's [Depositor](deposits). The Machine mints shares at the current [share price](share-price): `shares = assets / share price`.
- **On secondary markets**, since the token is a normal ERC-20 and can be listed and traded like any other asset.

Shares are burned when a holder [redeems](redemptions) them back into the accounting token.

## Composability

Because the share token is a plain ERC-20 whose value tracks a professionally managed, diversified strategy, it is useful well beyond simply holding:

- as **collateral** in lending markets;
- as one side of a **liquidity pool** on a DEX;
- held in **treasury** to earn the strategy's risk-adjusted return passively.

## Cross-chain transfer

The share token is a standard ERC-20, so moving it to another chain relies on external bridging infrastructure such as [Wormhole NTT](https://ntt.wormhole.com/) rather than anything built into the token itself.

:::note
This is a separate, optional transport layer for the share token. It is independent of the strategy's internal [cross-chain liquidity](../cross-chain/liquidity-bridging) and [accounting](../cross-chain/cross-chain-accounting) machinery, which move the _underlying_ capital between the Machine and its Spoke Calibers.
:::
