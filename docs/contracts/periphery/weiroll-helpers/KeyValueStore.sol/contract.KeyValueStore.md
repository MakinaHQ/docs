# KeyValueStore

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/weiroll-helpers/KeyValueStore.sol)

## State Variables

### caliber

Owner of the contract.

```solidity
address public immutable caliber
```

### \_store

Internal key-value storage mapping.

```solidity
mapping(bytes32 key => bytes32 value) private _store
```

## Functions

### onlyCaliber

```solidity
modifier onlyCaliber() ;
```

### constructor

```solidity
constructor(address _caliber) ;
```

### set

Stores a value associated with a specific key.

```solidity
function set(bytes32 key, bytes32 value) external onlyCaliber;
```

**Parameters**

| Name    | Type      | Description                               |
| ------- | --------- | ----------------------------------------- |
| `key`   | `bytes32` | The key to associate with the value.      |
| `value` | `bytes32` | The value to be stored for the given key. |

### get

Returns the value associated with a specific key.

```solidity
function get(bytes32 key) external view returns (bytes32);
```

**Parameters**

| Name  | Type      | Description                      |
| ----- | --------- | -------------------------------- |
| `key` | `bytes32` | The key whose value to retrieve. |

**Returns**

| Name     | Type      | Description                                       |
| -------- | --------- | ------------------------------------------------- |
| `<none>` | `bytes32` | value The value associated with the provided key. |

### reset

Deletes the value associated with a specific key.

```solidity
function reset(bytes32 key) external onlyCaliber;
```

**Parameters**

| Name  | Type      | Description                    |
| ----- | --------- | ------------------------------ |
| `key` | `bytes32` | The key whose value to delete. |

## Errors

### NotOwner

```solidity
error NotOwner();
```
