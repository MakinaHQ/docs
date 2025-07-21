# IWeirollVM

[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/interfaces/IWeirollVM.sol)

## Functions

### execute

Executes a list of commands on the VM.

```solidity
function execute(bytes32[] calldata commands, bytes[] memory state) external returns (bytes[] memory);
```

**Parameters**

| Name       | Type        | Description                          |
| ---------- | ----------- | ------------------------------------ |
| `commands` | `bytes32[]` | The list of commands to execute.     |
| `state`    | `bytes[]`   | The initial state to pass to the VM. |

**Returns**

| Name     | Type      | Description                                          |
| -------- | --------- | ---------------------------------------------------- |
| `<none>` | `bytes[]` | outState The new state after executing the commands. |
