# AcrossV3BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/bridge/configs/AcrossV3BridgeConfig.sol)

**Inherits:**
AccessManagedUpgradeable, [IAcrossV3BridgeConfig](/contracts/core/interfaces/IAcrossV3BridgeConfig.sol/interface.IAcrossV3BridgeConfig.md)

## State Variables

### AcrossV3BridgeConfigStorageLocation

```solidity
bytes32 private constant AcrossV3BridgeConfigStorageLocation =
    0x55c9f27624440face9d60f824f50119631f5ca1c165e4b047f325c445d2b2500;
```

## Functions

### \_getAcrossV3BridgeConfigStorage

```solidity
function _getAcrossV3BridgeConfigStorage() internal pure returns (AcrossV3BridgeConfigStorage storage $);
```

### constructor

```solidity
constructor();
```

### initialize

```solidity
function initialize(address _initialAuthority) external initializer;
```

### isRouteSupported

Returns whether a bridge transfer route is supported for the associated bridge.

```solidity
function isRouteSupported(address, uint256 foreignChainId, address) external view override returns (bool);
```

**Parameters**

| Name             | Type      | Description               |
| ---------------- | --------- | ------------------------- |
| `<none>`         | `address` |                           |
| `foreignChainId` | `uint256` | The destination chain ID. |
| `<none>`         | `address` |                           |

**Returns**

| Name     | Type   | Description                                      |
| -------- | ------ | ------------------------------------------------ |
| `<none>` | `bool` | True if the route is supported, false otherwise. |

### isForeignChainSupported

Foreign Chain ID => Whether the chain is supported.

```solidity
function isForeignChainSupported(uint256 foreignChainId) public view override returns (bool);
```

### setForeignChainSupported

Sets whether a foreign chain is supported.

```solidity
function setForeignChainSupported(uint256 foreignChainId, bool supported) external override restricted;
```

**Parameters**

| Name             | Type      | Description                                      |
| ---------------- | --------- | ------------------------------------------------ |
| `foreignChainId` | `uint256` | The foreign chain ID.                            |
| `supported`      | `bool`    | True if the chain is supported, false otherwise. |

## Structs

### AcrossV3BridgeConfigStorage

**Note:**
storage-location: erc7201:makina.storage.AcrossV3BridgeConfig

```solidity
struct AcrossV3BridgeConfigStorage {
    mapping(uint256 evmChainId => bool isSupported) _isForeignChainSupported;
}
```
