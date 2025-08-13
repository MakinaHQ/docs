---
title: Instructions
sidebar_position: 3
---

# Instructions

Instructions are the files that define the actions that can be executed by the machine. The [`caliber.yaml`](./caliber.md) file references them using the [`!include` directive](./caliber.md#positionsinstructions). They are not directly transpiled into rootfiles (the `caliber.yaml` file is the input for the transpiler), but they are used to generate the rootfiles.

```yaml title="[machine-name]/[network-name]/instructions/example.yaml - Example"
- is_debt: true
  instruction_type: "MANAGEMENT"
  affected_tokens:
    - "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" # USDC
  instruction:
    label: "usdc"
    path: "../../../blueprints/aave/borrow.yaml:borrow_asset"
    inputs:
      token:
        type: "address"
        value: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      interest_rate_mode:
        type: "uint256"
        value: "2"
      referral_code:
        type: "uint256"
        value: "0"
      receiver:
        type: "address"
        value: ${config.caliber_address}

# account for the borrowed USDC
- is_debt: true
  instruction_type: "ACCOUNTING"
  affected_tokens:
    - "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" # USDC
  instruction:
    label: "usdc"
    path: "../../../blueprints/aave/account.yaml:account"
    inputs:
      aave_token:
        type: "address"
        value: "0x72E95b8931767C79bA4EeE721354d6E99a61D004"
      account:
        type: "address"
        value: "${config.caliber_address}"

# repay the borrowed USDC
- is_debt: true
  instruction_type: "MANAGEMENT"
  affected_tokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
  instruction:
    label: "usdc"
    path: "../../../blueprints/aave/repay.yaml:repay_asset"
    inputs:
      token_address:
        type: "address"
        value: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" # USDC
      pool_address:
        type: "address"
        value: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2" # Aave V3 Pool
      caliber_address:
        type: "address"
        value: "${config.caliber_address}"
```

## References

### `[*].is_debt`

Required. Boolean. Whether the instruction is a debt instruction.

TODO: give examples of debt and non-debt instructions

### `[*].instruction_type`

Required. The type of the instruction. One of:

- `MANAGEMENT`
- `ACCOUNTING`
- `HARVEST`
- `FLASHLOAN_MANAGEMENT`

:::tip

This enum matches the [`InstructionType` enum](../../contracts/interfaces/ICaliber.sol/interface.ICaliber.md#instructiontype) defined in the smart contracts.

:::

### `[*].affected_tokens`

Required. List of tokens addresses affected by the instruction.

### `[*].instruction.label`

Required. The label of the instruction.

### `[*].instruction.path`

Required. The relative path to the [blueprint file](./blueprints.md).

TODO: explain how it works and how to use it.

### `[*].instruction.inputs`

TODO:

### `[*].instruction.inputs.<NAME>`

Required. The inputs of the instruction.

### `[*].instruction.inputs.<NAME>.type`

Required. The type of the input.

### `[*].instruction.inputs.<NAME>.value`
