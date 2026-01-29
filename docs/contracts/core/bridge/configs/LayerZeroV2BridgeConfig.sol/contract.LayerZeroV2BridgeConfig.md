# LayerZeroV2BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/bridge/configs/LayerZeroV2BridgeConfig.sol)

**Inherits:**
AccessManagedUpgradeable, [ILayerZeroV2BridgeConfig](/contracts/core/interfaces/ILayerZeroV2BridgeConfig.sol/interface.ILayerZeroV2BridgeConfig.md)

## State Variables

### LayerZeroV2BridgeConfigStorageLocation

```solidity
bytes32 private constant LayerZeroV2BridgeConfigStorageLocation =
    0x9968c8893e7d72567bf0ce47e55989cd61e749404314ded743fba239bde60b00;
```

## Functions

### \_getLayerZeroV2BridgeConfigStorage

```solidity
function _getLayerZeroV2BridgeConfigStorage() private pure returns (LayerZeroV2BridgeConfigStorage storage $);
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
function isRouteSupported(address inputToken, uint256 foreignChainId, address outputToken)
    external
    view
    override
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

### evmToLzChainId

EVM chain ID => LayerZero endpoint ID

```solidity
function evmToLzChainId(uint256 evmChainId) external view override returns (uint32);
```

### lzToEvmChainId

LayerZero endpoint ID => EVM chain ID

```solidity
function lzToEvmChainId(uint32 lzChainId) external view override returns (uint256);
```

### tokenToOft

Token address => LayerZero OFT address

```solidity
function tokenToOft(address token) external view override returns (address);
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view returns (address);
```

### setLzChainId

Associates an EVM chain ID with a LayerZero endpoint ID in the contract storage.

```solidity
function setLzChainId(uint256 evmChainId, uint32 lzChainId) external override restricted;
```

**Parameters**

| Name         | Type      | Description            |
| ------------ | --------- | ---------------------- |
| `evmChainId` | `uint256` | The EVM chain ID.      |
| `lzChainId`  | `uint32`  | The Wormhole chain ID. |

### setOft

Registers a LayerZero OFT for its associated token.

_Assumes that an OFT's associated token is immutable._

```solidity
function setOft(address oft) external override restricted;
```

**Parameters**

| Name  | Type      | Description                       |
| ----- | --------- | --------------------------------- |
| `oft` | `address` | The address of the LayerZero OFT. |

### setForeignToken

Associates a local token with its foreign counterpart used in LayerZero bridging.

```solidity
function setForeignToken(address localToken, uint256 foreignEvmChainId, address foreignToken) external restricted;
```

**Parameters**

| Name                | Type      | Description                |
| ------------------- | --------- | -------------------------- |
| `localToken`        | `address` | The local token address.   |
| `foreignEvmChainId` | `uint256` | The foreign EVM chain ID.  |
| `foreignToken`      | `address` | The foreign token address. |

## Structs

### LayerZeroV2BridgeConfigStorage

**Note:**
storage-location: erc7201:makina.storage.LayerZeroV2BridgeConfig

```solidity
struct LayerZeroV2BridgeConfigStorage {
    mapping(uint256 evmChainId => uint32 lzChainId) _evmToLzChainId;
    mapping(uint32 lzChainId => uint256 evmChainId) _lzToEvmChainId;
    mapping(address localToken => address oft) _tokenToOft;
    mapping(address localToken => mapping(uint256 foreignEvmChainId => address foreignToken)) _localToForeignTokens;
    mapping(address foreignToken => mapping(uint256 foreignEvmChainId => address localToken)) _foreignToLocalTokens;
}
```
