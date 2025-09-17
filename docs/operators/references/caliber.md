---
title: caliber.yaml
sidebar_position: 2
---

# `caliber.yaml`

There is one [caliber](../../concepts/caliber/overview.md) per machine and per network. This file should be located at:

```
machines/<machine-name>/<network-name>/caliber.yaml
```

They are the input file for the transpiler, that will then generate the rootfiles.

```yaml title="caliber.yaml - Example"
config:
  caliber_address:
    type: "address"
    value: "0x000000000000000000000000000000000b0bcafe"

positions:
  - id: "194070608470725801208780068439756007916"
    group_id: "1"
    description: "Aave v3 supply WETH"
    instructions: !include "./instructions/aavev3-supply-weth.yaml"
  - id: "227329230297595858214811008018294296109"
    group_id: "1"
    description: "Aave v3 borrow USDC"
    instructions: !include "./instructions/aavev3-borrow-usdc.yaml"
  - id: "290856874055430279541720015104659950815"
    group_id: "0"
    description: "Tokemak USDC position"
    instructions: !include "./instructions/tokemak_usdc.yaml"
```

## References

### `config`

This part is used to define one or many configuration variables, identified by `<NAME>`. Instructions files can reference these variables using `${config.<NAME>}`.

### `config.<NAME>.type`

Required. The type of the configuration variable.

### `config.<NAME>.value`

Required. The value of the configuration variable.

---

### `positions`

This part is used to define the positions of the strategy.

### `positions[*].id`

Required. The id of the position.

<!-- TODO: currently these IDs are managed internally by the Makina team. Makina team can support to get the IDs for your positions. -->

### `positions[*].group_id`

Required. The group id of the position.

### `positions[*].description`

Required. The description of the position.

### `positions[*].instructions`

Required. The instructions of the position. You can reference [instructions files](./instructions.md) using `!include` and the path to the file.

Example:

```yaml
instructions: !include "./instructions/aavev3-supply-weth.yaml"
```
