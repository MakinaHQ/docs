---
id: "machine-token"
sidebar_position: 1
---

# Machine Token

[Machine Tokens](/contracts/core/machine/MachineShare.sol/contract.MachineShare.md) are tokenized ERC20 representations of the strategy operating on the Machine.

Shares are fully DeFi compatible, and can be acquired in two ways:

- Minted by depositing Accounting Tokens directly into the Machine
- Purchased on secondary markets.

The Machine mint and redeems Shares at its current [Share Price](share-price). This price is periodically updated based on the total assets the Machine controls, including funds held directly and those managed by [Calibers](../caliber/overview).

Machine Tokens can be integrated into external protocols such as lending market, where they can provide superior collateral qualities; into DEXs where it can be paired with other assets to provide higher LP returns; or they can simply be held in treasury to benefit from the high risk adjusted return.

Machine Tokens leverage [Wormhole NTT](https://ntt.wormhole.com/) for fast and secure cross-chain transfer between Ethereum Mainnet, it's L2s and non-EVM chains such as Solana.
