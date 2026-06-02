# TokenRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/registries/TokenRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [ITokenRegistry](/contracts/core/interfaces/ITokenRegistry.sol/interface.ITokenRegistry.md)

## State Variables

### TokenRegistryStorageLocation

```solidity
bytes32 private constant TokenRegistryStorageLocation =
    0x1aeafc547075d7f69f86c9a87aafb3edc5a48d01acbbe220b9a330d69702ed00
```

## Functions

### \_getTokenRegistryStorage

```solidity
function _getTokenRegistryStorage() private pure returns (TokenRegistryStorage storage $);
```

### constructor

```solidity
constructor() ;
```

### initialize

```solidity
function initialize(address initialAuthority) external initializer;
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view override returns (address);
```

### getLocalToken

Foreign token address => Foreign EVM chain ID => Local Token address

```solidity
function getLocalToken(address foreignToken, uint256 foreignEvmChainId) external view override returns (address);
```

### setToken

Associates a local and a foreign token address.

```solidity
function setToken(address localToken, uint256 foreignEvmChainId, address foreignToken)
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

### TokenRegistryStorage

**Note:**
storage-location: erc7201:makina.storage.TokenRegistry

```solidity
struct TokenRegistryStorage {
    mapping(address localToken => mapping(uint256 foreignEvmChainId => address foreignToken)) _localToForeignTokens;
    mapping(address foreignToken => mapping(uint256 foreignEvmChainId => address localToken)) _foreignToLocalTokens;
}
```
