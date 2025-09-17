# IWeirollVM

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/interfaces/IWeirollVM.sol)

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
