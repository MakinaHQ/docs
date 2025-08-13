---
title: Blueprints
sidebar_position: 4
---

# Blueprints

Blueprints are the building blocks of the Makina protocol. They are used to define the actions that can be executed by the machine.

## Conventions and concepts

- Blueprint files: reusable protocol call graphs and input slots
- Positions root file: positions, configs, and concrete instruction bindings (can `!include` instruction lists)

### Conventions and concepts

- All files are YAML documents whose root is a mapping we call `root`.
- `solidity-type` uses default solidity types (e.g., `address`, `uint256`, `bytes`, `(address,uint256)`, `address[2]`, `uint256[]`).
- Template variables:
  - In blueprints: `${inputs.NAME}`, `${input_slots.NAME}`, `${returns.NAME}`, `${constants.NAME}`
  - In positions: `${config.NAME}`
  - Builtins everywhere: `${builtins.UINT256_MAX}`, `${builtins.UINT256_0}`, `${builtins.UINT256_1}`, `${builtins.ADDRESS_0}`
- Scalar types only in certain places: blueprint `inputs`, blueprint `input_slots`, blueprint `reserved_slots`, and position `instruction.inputs` must be scalar (not tuples/arrays).
- Addresses are 0x-prefixed hex strings; large integers are decimal strings unless otherwise noted.

---

## References

Blueprints define protocol-specific actions as sequences of contract calls with type-checked parameters, optional returns, reserved state slots, and input slots. They can be included in machines' instruction files.

TODO: make a link to the machine instruction file syntax which shows how to use blueprints.

### Top-level schema

```yaml
protocol: "<string>" # e.g. "aavev3" (required)

constants: # optional
  <NAME>:
    type: "<solidity-type>"
    value: "<literal>"

inputs: # optional (scalar-only)
  <NAME>:
    type: "<scalar-solidity-type>"
    description: "<string>" # optional

actions: # required
  <ACTION_NAME>:
    calls: # required, non-empty list
      - description: "<string>" # optional
        target: "<0xaddress|template>" # ${inputs.X} or ${constants.Y} or literal 0x...
        selector: "<fnName(type1,type2)>" # whitespace ignored
        parameters: # list, may be empty
          - type: "<solidity-type>"
            value: <value|template> # see Parameter values below
            description: "<string>" # optional
        return: # optional, defines a named return for this call
          name: "<RETURN_NAME>" # unique within the action
          type: "<solidity-type>"

    input_slots: # optional, scalar-only
      <SLOT_NAME>:
        type: "<scalar-solidity-type>"
        description: "<string>" # optional

    reserved_slots: # optional, scalar-only
      - type: "<scalar-solidity-type>"
        value: <literal|template> # ${returns.NAME} or ${constants.NAME}
        description: "<string>" # optional
```

### `protocol`

Required. The protocol name is used to identify the protocol. Example: `aavev3`, `morpho`...

---

### `constants`

Optional. To define protocol-specific constants, use this section. Constants can be used with the `${constants.NAME}` syntax.

### `constants.<NAME>.type`

Required. The solidity type of the constant (e.g., `address`, `uint256`, `bytes`, `bool`, `string`, `bytes32`).

### `constants.<NAME>.value`

Required. The value of the constant.

---

### `inputs`

Optional. To define protocol-specific inputs, use this section. Inputs can be used with the `${inputs.NAME}` syntax.

### `inputs.<NAME>.type`

Required. The solidity type of the input (e.g., `address`, `uint256`, `bytes`, `bool`, `string`, `bytes32`).

### `inputs.<NAME>.description`

Optional. A description of the input.

---

### `actions`

Required. The actions of the blueprint.

### `actions.<ACTION_NAME>.calls[*]`

Required. The ordered list of calls to perform the action. A serie of calls could be used to perform a complex action, like:

- flashloan token A
- deposit token A
- borrow token B
- swap token B for token C
- withdraw token C
- etc.

#### Example

To call the following solidity function, on a contract deployed at address `0xcafe000000000000000000000000000000000000`:

```solidity
function mul(uint256 a, uint256 b) public pure returns (uint256) {
    return a * b;
}
```

```yaml
protocol: "math_helper"

inputs:
  a:
    type: "uint256"
  b:
    type: "uint256"

actions:
  my_action:
    calls:
      - description: "Multiply two numbers"
        target: "0xcafe000000000000000000000000000000000000"
        selector: "mul(uint256,uint256)"
        parameters:
          - type: "uint256"
            value: "${inputs.a}"
          - type: "uint256"
            value: "${inputs.b}"
        return:
          name: "result"
          type: "uint256"
```

### `actions.<ACTION_NAME>.calls[*].description`

Optional. The description of the action.

### `actions.<ACTION_NAME>.calls[*].target`

Required. The target of the call. Can be one of the following:

- an input `${inputs.X}`
- a constant `${constants.Y}`
- a literal `0x...`

### `actions.<ACTION_NAME>.calls[*].selector`

Required. The function selector for the call. Example: `"approve(address,uint256)"` or `"balanceOf(address)"`.

### `actions.<ACTION_NAME>.calls[*].parameters[*].type`

Required. The solidity type of the parameter. It also supports tuples, in that case, the parameter value is a list of values.

#### Example

```yaml
parameters:
  - type: "address"
    value: "${inputs.account}"
```

### `actions.<ACTION_NAME>.calls[*].parameters[*].value`

Required. If the parameter `type` is a scalar, it can be a literal or a template. If the parameter is a tuple, it should be an array (with type and value).

- Each parameter declares a `type` and a `value`.
- If `type` is scalar (e.g., `address`, `uint256`, `bytes`, `bool`, `string`, `bytes32`):
  - `value` can be:
    - A literal of that type (string-form), or
    - A template:
      - `${inputs.NAME}` (must match declared type)
      - `${input_slots.NAME}` (must match declared type)
      - `${returns.NAME}` (must match the named return type from a previous call in the same action)
      - `${constants.NAME}` (must match declared constant type)
- If `type` is a tuple `(T1,T2,...)`:
  - `value` is a YAML sequence with one element per tuple item.
  - Each element is a mapping `{ type: "Ti", value: <...> }` and is validated for exact type match and position.
- If `type` is a fixed array `T[N]`:
  - `value` is a YAML sequence of length `N` where each element is `{ type: "T", value: <...> }`.
- If `type` is a dynamic array `T[]`:
  - `value` is a YAML sequence of any length where each element is `{ type: "T", value: <...> }`.

#### Example

```yaml
# scalar parameter
parameters:
  - type: "address"
    value: "${inputs.account}"

# tuple parameter
parameters:
  - type: "(address,address,address,address,uint256)"
    value:
      - type: "address"
        value: "${returns.loan_token}"
      - type: "address"
        value: "${returns.collateral_token}"
      - type: "address"
        value: "${returns.oracle}"
      - type: "address"
        value: "${returns.irm}"
      - type: "uint256"
        value: "${returns.lltv}"
```

### `actions.<ACTION_NAME>.calls[*].parameters[*].value[*].type`

TODO: In that case, it would make more sense to call this parameter valueS.

Required if the parameter `type` is a tuple. The solidity type of the parameter. It also supports tuples and arrays.

### `actions.<ACTION_NAME>.calls[*].parameters[*].value[*].value`

Required if the parameter `type` is a tuple.

### `actions.<ACTION_NAME>.calls[*].parameters[*].description`

Optional. The description of the parameter.

### `actions.<ACTION_NAME>.calls[*].return.name`

Required if the function calls returns values. The name of the values returned by the call. They must be unique within the action.

The named return can be referenced later in the same action via `${returns.NAME}` (therefore, the return name must be unique within the action).

### `actions.<ACTION_NAME>.calls[*].return.type`

Required if the function calls returns values. The type of the return value. It can be scalar or tuple; they are strictly type-checked when referenced.

### `actions.<ACTION_NAME>.input_slots`

Optional. The input slots of the action.

- Named, typed, scalar placeholders that are exposed to the generated rootfile as `inputs_slots`.
- In parameters, `${input_slots.NAME}` resolves to the slot's hashed name placeholder and must match the declared slot type.
- Input slots are automatically appended to reserved slots in the execution plan as hashed names, preserving insertion order.

### `actions.<ACTION_NAME>.input_slots.<SLOT_NAME>.type`

Required. The type of the input slot.

### `actions.<ACTION_NAME>.input_slots.<SLOT_NAME>.description`

Optional. The description of the input slot.

### `actions.<ACTION_NAME>.reserved_slots[*].type`

Required. The type of the reserved slot.

- Extra state slots to be reserved in the planner prior to input slots.
- Each slot is scalar typed. `value` can be:
  - Literal scalar (e.g., `"0"`, `"0xffff..."`, `"0x...address"`), or
  - Template of the form:
    - `${returns.NAME}` (type must match)
    - `${constants.NAME}` (type must match)
- Using `inputs` or `input_slots` in reserved slots is invalid.

### `actions.<ACTION_NAME>.reserved_slots[*].value`

Required. The value of the reserved slot. Can be a literal or a template.

### `actions.<ACTION_NAME>.reserved_slots[*].description`

Optional. The description of the reserved slot.

### Blueprint example

Can be found in the [MakinaHQ/config](https://github.com/MakinaHQ/config/tree/main/blueprints) repository.

---

## Positions root file (and included instruction lists)

The positions file declares global `config`, defines one or more `positions`, and binds them to actual blueprint actions with concrete inputs and metadata. It can use `!include` to include other YAML fragments (e.g., separate instruction lists).

### Top-level schema

```yaml
config: # required
  <NAME>:
    type: "<solidity-type>"
    value: "<literal>"
    description: "<string>" # optional

positions: # required
  - id: "<U256-decimal>" # required
    group_id: "<U256-decimal>" # required
    description: "<string>" # optional
    instructions: # required
      - is_debt: <bool> # required
        instruction_type: "<TYPE>" # required, see allowed values
        description: "<string>" # optional
        affected_tokens: # required, list of 0x addresses
          - "0x..."
        instruction: # required
          label: "<token-label>" # required, becomes token key
          path: "<path/to/blueprint.yaml>:<ACTION>" # required, relative to this file unless absolute
          name: "<override-name>" # optional, overrides blueprint action name
          inputs: # required, scalar-only
            <INPUT_NAME>:
              type: "<scalar-solidity-type>"
              value: <literal|template> # literal or ${config.NAME}
              description: "<string>" # optional
```

### `instruction_type` allowed values

- `MANAGEMENT`
- `ACCOUNTING`
- `HARVEST`
- `FLASHLOAN_MANAGEMENT`

### Includes with `!include`

- Supported only in the positions root processing pipeline.
- Syntax: `key: !include "./relative/path.yaml"`
- Rules:
  - Only YAML files are supported (`.yaml` or `.yml`).
  - Paths are resolved relative to the current file (or absolute).
  - Files must exist and will be canonicalized; missing files cause an error.
  - Circular includes are detected and rejected.
  - Unknown tags are rejected.
  - After includes are resolved, builtins are expanded (see below).

### Templates in positions

- Only `${config.NAME}` is allowed within `instruction.inputs[*].value`.
- The referenced config must exist and the types must match exactly.

### Builtins

The following builtins can be used anywhere as `${builtins.NAME}` and will be replaced before parsing:

- `UINT256_MAX` → `0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`
- `UINT256_0` → `0`
- `UINT256_1` → `1`
- `ADDRESS_0` → `0x0000000000000000000000000000000000000000`

### Example: positions root with included instructions

```yaml
config:
  caliber_address:
    type: "address"
    value: "0xd1da9924c8ea15a8e35951b4702aa4937a9dd70a"

positions:
  - id: "241963968685402655309198654686298022078"
    group_id: "0"
    description: "Aave v3 supply WETH"
    instructions: !include "./instructions/aave3-supply-weth.yaml"
```

Included file (`instructions/aave3-supply-weth.yaml`):

```yaml
- name: add_collateral_weth # optional override name (maps to instruction.instruction.name)
  is_debt: false
  instruction_type: "MANAGEMENT"
  affected_tokens:
    - "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  instruction:
    label: "weth"
    path: "./blueprints/deposit.yaml:deposit"
    inputs:
      on_behalf_of:
        type: "address"
        value: ${config.caliber_address}
      token:
        type: "address"
        value: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

- is_debt: false
  instruction_type: "ACCOUNTING"
  affected_tokens:
    - "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  instruction:
    label: "weth"
    path: "./blueprints/account.yaml:account"
    inputs:
      aave_token:
        type: "address"
        value: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8"
      account:
        type: "address"
        value: "${config.caliber_address}"
```

---

## Type system and literals

- Types are parsed using Alloy's `DynSolType` grammar. Examples:
  - Scalars: `address`, `bool`, `string`, `bytes`, `bytes32`, `uint256`, `int128`, `uint8`, ...
  - Tuples: `(address,uint256)`
  - Arrays: `address[2]`, `uint256[]`
- Literal values:
  - `address`: 0x-prefixed hex, EIP-55 case accepted
  - `uint*`: decimal strings (e.g., `"0"`, `"1000000000000000000"`)
  - `int*`: decimal or `0x` hex strings
  - `bytes`: hex string without 0x prefix (raw bytes)
  - `fixedbytes` (e.g., `bytes32`): hex string without 0x prefix sized exactly, left-padded to 32 bytes when encoded
  - `bool`: `"true"` or `"false"`
  - `string`: raw string

Notes:

- Position `id` and `group_id` are parsed as decimal `U256` strings.
- Mismatched types, invalid addresses, or wrong tuple/array lengths are validation errors.

---

## Common validation rules and errors (non-exhaustive)

- Missing required field → error with the full path of the missing key
- Invalid YAML structure (expected mapping/sequence/string) → error with path and expected type
- Unsupported `!tag` or file extension in `!include` → error
- Circular include detection → error
- Invalid builtin name → error
- Type mismatch between declared and referenced template (e.g., `${returns.X}` type differs) → error
- Scalar-only constraints violated:
  - Blueprint `inputs`, `input_slots`, `reserved_slots` and position `instruction.inputs` cannot be tuples/arrays
- `target` can only use `${inputs.*}` or `${constants.*}`; other sources invalid
- `return.name` duplicates within the same action → error
- Tuple length, fixed array length mismatches → error
- Invalid address string formats in `affected_tokens`/literals → error

---

## Quick reference: where templates are allowed

- Blueprints
  - `target`: `${inputs.*}`, `${constants.*}`
  - Parameter `value` (scalar): `${inputs.*}`, `${input_slots.*}`, `${returns.*}`, `${constants.*}`
  - Reserved slot `value`: `${returns.*}`, `${constants.*}`
  - Anywhere: `${builtins.*}`
- Positions
  - Instruction input `value`: `${config.*}`
  - Anywhere: `${builtins.*}`

---

## Minimal examples

Blueprint with a read-only call and reserved slots:

```yaml
protocol: "aavev3"

inputs:
  aave_token:
    type: "address"
  account:
    type: "address"

actions:
  account:
    calls:
      - description: "Account the Aave token position"
        target: ${inputs.aave_token}
        selector: "balanceOf(address)"
        parameters:
          - type: "address"
            value: ${inputs.account}
        return:
          name: "aave_token_balance"
          type: "uint256"
    reserved_slots:
      - type: "uint256"
        value: ${returns.aave_token_balance}
      - type: "uint256"
        value: ${builtins.UINT256_MAX}
```

Positions root referencing the blueprint above:

```yaml
config:
  caliber_address:
    type: "address"
    value: "0x0000000000000000000000000000000000000000"

positions:
  - id: "1"
    group_id: "0"
    instructions:
      - is_debt: false
        instruction_type: "ACCOUNTING"
        affected_tokens:
          - "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        instruction:
          label: "weth"
          path: "./blueprints/account.yaml:account"
          inputs:
            aave_token:
              type: "address"
              value: "0x4d5F47FA6A74757f35C14fD3a6Ef8E3C9BC514E8"
            account:
              type: "address"
              value: ${config.caliber_address}
```
