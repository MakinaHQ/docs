# IMachineEndpoint

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/interfaces/IMachineEndpoint.sol)

**Inherits:**
[IBridgeController](/contracts/core/interfaces/IBridgeController.sol/interface.IBridgeController.md), [IMakinaGovernable](/contracts/core/interfaces/IMakinaGovernable.sol/interface.IMakinaGovernable.md)

## Functions

### manageTransfer

Manages the transfer of tokens between a machine and a caliber. The transfer direction depends on the caller.

```solidity
function manageTransfer(address token, uint256 amount, bytes calldata data) external;
```

**Parameters**

| Name     | Type      | Description                                                                                                                |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `token`  | `address` | The address of the token.                                                                                                  |
| `amount` | `uint256` | The amount of tokens to transfer.                                                                                          |
| `data`   | `bytes`   | ABI-encoded parameters required for bridge-related transfers. Ignored for transfers between a machine and its hub caliber. |
