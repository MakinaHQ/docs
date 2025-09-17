# IMachinePeriphery

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/interfaces/IMachinePeriphery.sol)

## Functions

### initialize

Initializer of the contract.

```solidity
function initialize(bytes calldata _data) external;
```

**Parameters**

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| `_data` | `bytes` | The initialization data, if any. |

### machine

Address of the associated machine.

```solidity
function machine() external view returns (address);
```

### setMachine

Sets the machine address.

```solidity
function setMachine(address _machine) external;
```

## Events

### MachineSet

```solidity
event MachineSet(address indexed machine);
```
