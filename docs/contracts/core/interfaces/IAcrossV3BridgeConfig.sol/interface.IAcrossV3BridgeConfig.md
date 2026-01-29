# IAcrossV3BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/IAcrossV3BridgeConfig.sol)

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
