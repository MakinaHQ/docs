# IMachinePeriphery

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IMachinePeriphery.sol)

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
