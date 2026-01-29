# IBridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/IBridgeConfig.sol)

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
