# TokenRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/registries/TokenRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [ITokenRegistry](/docs/contracts/interfaces/ITokenRegistry.sol/interface.ITokenRegistry.md)

## State Variables

### TokenRegistryStorageLocation

```solidity
bytes32 private constant TokenRegistryStorageLocation =
    0x1aeafc547075d7f69f86c9a87aafb3edc5a48d01acbbe220b9a330d69702ed00;
```

## Functions

### \_getTokenRegistryStorage

```solidity
function _getTokenRegistryStorage() private pure returns (TokenRegistryStorage storage $);
```

### constructor

```solidity
constructor();
```

### initialize

```solidity
function initialize(address _accessManager) external initializer;
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address _localToken, uint256 _foreignEvmChainId) external view returns (address);
```

### getLocalToken

Foreign token address => Foreign EVM chain ID => Local Token address

```solidity
function getLocalToken(address _foreignToken, uint256 _foreignEvmChainId) external view returns (address);
```

### setToken

Associates a local and a foreign token addresse.

```solidity
function setToken(address _localToken, uint256 _foreignEvmChainId, address _foreignToken) external restricted;
```

**Parameters**

| Name                 | Type      | Description                |
| -------------------- | --------- | -------------------------- |
| `_localToken`        | `address` | The local token address.   |
| `_foreignEvmChainId` | `uint256` | The foreign EVM chain ID.  |
| `_foreignToken`      | `address` | The foreign token address. |

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
