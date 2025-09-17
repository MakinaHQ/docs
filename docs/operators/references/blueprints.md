---
title: Blueprints
sidebar_position: 4
---

# Blueprints

Blueprints are the building blocks of the Makina protocol. They are used to define the actions that can be executed by the machine.

Blueprints define protocol-specific actions as sequences of contract calls with type-checked parameters, optional returns, reserved state slots, and input slots. They can be included in machines' instruction files.

## Top-level schema

Here is an example of a blueprint file:

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

## References

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
