# LayerZeroV2BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/bridge/configs/LayerZeroV2BridgeConfig.sol)

**Inherits:**
AccessManagedUpgradeable, [ILayerZeroV2BridgeConfig](/contracts/core/interfaces/ILayerZeroV2BridgeConfig.sol/interface.ILayerZeroV2BridgeConfig.md)

## State Variables

### LayerZeroV2BridgeConfigStorageLocation

```solidity
bytes32 private constant LayerZeroV2BridgeConfigStorageLocation =
    0x9968c8893e7d72567bf0ce47e55989cd61e749404314ded743fba239bde60b00
```

## Functions

### \_getLayerZeroV2BridgeConfigStorage

```solidity
function _getLayerZeroV2BridgeConfigStorage() private pure returns (LayerZeroV2BridgeConfigStorage storage $);
```

### constructor

```solidity
constructor() ;
```

### initialize

```solidity
function initialize(address initialAuthority) external initializer;
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

### getLzEndpointId

EVM chain ID => LayerZero endpoint ID

```solidity
function getLzEndpointId(uint256 evmChainId) external view override returns (uint32);
```

### getOft

Local token address => LayerZero OFT address

```solidity
function getOft(address localToken) external view override returns (address);
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view override returns (address);
```

### setLzEndpointId

Associates an EVM chain ID with a LayerZero endpoint ID in the contract storage.

```solidity
function setLzEndpointId(uint256 evmChainId, uint32 lzEndpointId) external override restricted;
```

**Parameters**

| Name           | Type      | Description                |
| -------------- | --------- | -------------------------- |
| `evmChainId`   | `uint256` | The EVM chain ID.          |
| `lzEndpointId` | `uint32`  | The LayerZero endpoint ID. |

### setOft

Registers a LayerZero OFT for its associated token.

Assumes that an OFT's associated token is immutable.

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
function setForeignToken(address localToken, uint256 foreignEvmChainId, address foreignToken)
    external
    override
    restricted;
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
    mapping(uint256 evmChainId => uint32 lzEndpointId) _evmToLzId;
    mapping(uint32 lzEndpointId => uint256 evmChainId) _lzToEvmId;
    mapping(address localToken => address oft) _localTokenToOft;
    mapping(address localToken => mapping(uint256 foreignEvmChainId => address foreignToken)) _localToForeignToken;
    mapping(address foreignToken => mapping(uint256 foreignEvmChainId => address localToken)) _foreignToLocalToken;
}
```
