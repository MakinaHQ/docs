# IAcrossV3BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/IAcrossV3BridgeConfig.sol)

**Inherits:**
[IBridgeConfig](/contracts/core/interfaces/IBridgeConfig.sol/interface.IBridgeConfig.md)

## Functions

### isForeignChainSupported

Foreign Chain ID => Whether the chain is supported.

```solidity
function isForeignChainSupported(uint256 foreignChainId) external view returns (bool);
```

### setForeignChainSupported

Sets whether a foreign chain is supported.

```solidity
function setForeignChainSupported(uint256 foreignChainId, bool supported) external;
```

**Parameters**

| Name             | Type      | Description                                      |
| ---------------- | --------- | ------------------------------------------------ |
| `foreignChainId` | `uint256` | The foreign chain ID.                            |
| `supported`      | `bool`    | True if the chain is supported, false otherwise. |

## Events

### ForeignChainSupportUpdated

```solidity
event ForeignChainSupportUpdated(uint256 indexed foreignChainId, bool indexed supported);
```
