# IWeirollVM
[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/IWeirollVM.sol)


## Functions
### execute

Executes a list of commands on the VM.


```solidity
function execute(bytes32[] calldata commands, bytes[] memory state) external returns (bytes[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`commands`|`bytes32[]`|The list of commands to execute.|
|`state`|`bytes[]`|The initial state to pass to the VM.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes[]`|outState The new state after executing the commands.|


