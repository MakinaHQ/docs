---
title: rootfile.toml
sidebar_position: 5
---

# `rootfile.toml`

Rootfiles are the transpiler’s output. They contain the files needed to run the machine. They are stored in the rootfiles folder of the caliber and should follow the naming convention below:

```text
[machine-name]/[network-name]/rootfiles/[timestamp]-[name-of-the-migration1].toml
```

## Using the rootfile

Once the rootfile is generated, you can reference it from the [`config.toml`](./config.md#calibersnetwork) file.

## Updating rootfiles

It is recommended to keep the previous rootfiles as they will still be used until the new rootfile is deployed.

## References

:::info

As these are generated files, you won't need to edit them manually. This is provided for reference only.

:::

```toml title="[machine-name]/[network-name]/rootfiles/[timestamp]-[name-of-the-migration1].toml - Example"
[instructions.aavev3.borrow_asset.usdc]
position_id = "227329230297595858214811008018294296109"
is_debt = true
group_id = "0x0"
instruction_type = 0
affected_tokens = ["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]
commands = ["0xa415bcad010100020304ffff87870bca3f3fd6335c3f4ce8392d69350b4fa4e2"]
state = [
  "0x7bf7fd7e769077d7833cc51152c191499c412cb44e574448aaa15d7905e659ab",
  "0x000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "0x0000000000000000000000000000000000000000000000000000000000000002",
  "0x0000000000000000000000000000000000000000000000000000000000000000",
  "0x000000000000000000000000f8e88d73636b29bddec82d71da805dc3abe55936",
]
bitmap = "159507359494189904748456847233641349120"

[[instructions.aavev3.add_collateral.weth.inputs_slots]]
index = 0
name = "amount_to_borrow"
type = "Uint"
```

### `[[instructions.<PROTOCOL>.<ACTION>.<TOKEN>]]`

-

### `[instructions.<PROTOCOL>.<ACTION>.<TOKEN>]`

- `position_id`: String, the id of the position. As set in the [`positions`](./caliber.md#positionsid) section of the caliber.
- `is_debt`: Boolean, whether the instruction is a debt instruction.
- `group_id`: String, the group id of the position.
- `instruction_type`: Integer, the type of the instruction.
- `affected_tokens`: Array, the tokens affected by the instruction.
- `commands`: Array, the commands of the instruction. It is based on [weiroll](https://github.com/EnsoBuild/enso-weiroll).
- `state`: Array, the state of the instruction.
- `bitmap`: String, the bitmap of the instruction.
- `inputs_slots`: Object, the inputs slots of the instruction.
