# CctpV2BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/bridge/configs/CctpV2BridgeConfig.sol)

**Inherits:**
AccessManagedUpgradeable, [ICctpV2BridgeConfig](/contracts/core/interfaces/ICctpV2BridgeConfig.sol/interface.ICctpV2BridgeConfig.md)

## State Variables

### MAINNET_CHAIN_ID

```solidity
uint256 private constant MAINNET_CHAIN_ID = 1
```

### MAINNET_CCTP_DOMAIN

```solidity
uint32 private constant MAINNET_CCTP_DOMAIN = 0
```

### CctpV2BridgeConfigStorageLocation

```solidity
bytes32 private constant CctpV2BridgeConfigStorageLocation =
    0xfddff817c79375fc2894a034cbd193828d9a03a3c9ab698ec061f44863e21100
```

## Functions

### \_getCctpV2BridgeConfigStorage

```solidity
function _getCctpV2BridgeConfigStorage() private pure returns (CctpV2BridgeConfigStorage storage $);
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

### getCctpDomain

EVM chain ID => CCTP domain

```solidity
function getCctpDomain(uint256 evmChainId) external view override returns (uint32);
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view override returns (address);
```

### setCctpDomain

Associates an EVM chain ID with a CCTP domain in the contract storage.

```solidity
function setCctpDomain(uint256 evmChainId, uint32 cctpDomain) external override restricted;
```

**Parameters**

| Name         | Type      | Description       |
| ------------ | --------- | ----------------- |
| `evmChainId` | `uint256` | The EVM chain ID. |
| `cctpDomain` | `uint32`  | The CCTP domain.  |

### setForeignToken

Associates a local token with its foreign counterpart used in CCTP bridging.

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

### CctpV2BridgeConfigStorage

**Note:**
storage-location: erc7201:makina.storage.CctpV2BridgeConfig

```solidity
struct CctpV2BridgeConfigStorage {
    mapping(uint256 evmChainId => uint32 cctpDomain) _evmToCctpId;
    mapping(uint32 cctpDomain => uint256 evmChainId) _cctpToEvmId;
    mapping(address localToken => mapping(uint256 foreignEvmChainId => address foreignToken)) _localToForeignToken;
    mapping(address foreignToken => mapping(uint256 foreignEvmChainId => address localToken)) _foreignToLocalToken;
}
```
