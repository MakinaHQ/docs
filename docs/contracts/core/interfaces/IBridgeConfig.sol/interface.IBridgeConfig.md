# IBridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/IBridgeConfig.sol)

## Functions

### isRouteSupported

Returns whether a bridge transfer route is supported for the associated bridge.

```solidity
function isRouteSupported(address inputToken, uint256 foreignChainId, address outputToken)
    external
    view
    returns (bool);
```

**Parameters**

| Name             | Type      | Description                                        |
| ---------------- | --------- | -------------------------------------------------- |
| `inputToken`     | `address` | The token being sent from the source chain.        |
| `foreignChainId` | `uint256` | The destination chain ID.                          |
| `outputToken`    | `address` | The token being received on the destination chain. |

**Returns**

| Name     | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| `<none>` | `bool` | True if the route is supported, false otherwise. |
