# IMachinePeriphery
[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/interfaces/IMachinePeriphery.sol)

SPDX-License-Identifier: UNLICENSED


## Functions
### initialize

Initializer of the contract.


```solidity
function initialize(bytes calldata _data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The initialization data, if any.|


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

