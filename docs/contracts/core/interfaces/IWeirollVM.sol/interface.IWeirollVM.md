# IWeirollVM

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/IWeirollVM.sol)

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
