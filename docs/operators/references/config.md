---
title: config.toml
sidebar_position: 1
---

# `config.toml`

Each [machine](../../concepts/machine/overview.md) should have a `config.toml` file. This file is used to define the machine configuration.

```toml title="[machine-name]/config.toml - Example"
name = "mteth"
chain = "mainnet"
address = "0x444f2fd17048b4ae220a1a47d073fb453248e7ec"

[calibers.mainnet]
address = "0xf8e88d73636b29bddec82d71da805dc3abe55936"
swapper = "0x88f6ff4d868044B4b79bD4164D6E5959B0985b95"
rootfiles = "github:MakinaHQ/config/machines/mteth/mainnet/rootfiles"

[calibers.mainnet.accounting_token]
address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
decimals = 18
name = "Wrapped Ether"
symbol = "WETH"

[calibers.base]
address = "0xd1da9924c8ea15a8e35951b4702aa4937a9dd70a"
swapper = "0x3288F966821B08B81EE82e30B1412C43Ba7dfAAD"
rootfiles = "github:MakinaHQ/config/machines/mteth/base/rootfiles"

[calibers.base.accounting_token]
address = "0x4200000000000000000000000000000000000006"
decimals = 18
name = "Wrapped Ether"
symbol = "WETH"
```

The above machine is deployed on the `mainnet` chain. It has two calibers, one on `mainnet` network and one on `base`.

## References

### `name`

Required. The name of the machine.

### `chain`

Required. The chain of the machine. (Also called "Hub Chain").

### `address`

Required. The address of the machine, on the chain specified in the `chain` field.

### `calibers.<network>`

Required. The [calibers](./caliber.md) of the machine. You will need to define one caliber per network. For each network, you will need to have the corresponding `[networkName]` folder.

- `address`: Required. The address of the caliber, on the chain specified in the `<network>`.
- `swapper`: Required. The address of the swapper contract.
- `rootfiles`: Required. The rootfiles of the caliber. It should point to the rootfiles folder of the caliber for that network. The rootfiles are the output of the transpiled instructions files. You can reference remote files using the `github:` prefix, or local files using the `local:` prefix.

### `calibers.<network>.accounting_token`

Required. The accounting token of the caliber. You will need to define one accounting token per network.

- `address`: Required. The address of the accounting token.
- `decimals`: Required. The decimals of the accounting token.
- `name`: Required. The name of the accounting token.
- `symbol`: Required. The symbol of the accounting token.
