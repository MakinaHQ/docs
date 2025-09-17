# CoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/registries/CoreRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [ICoreRegistry](/contracts/core/interfaces/ICoreRegistry.sol/interface.ICoreRegistry.md)

## State Variables

### CoreRegistryStorageLocation

```solidity
bytes32 private constant CoreRegistryStorageLocation =
    0x12dc8e8f7173ac8c2e47b3781b91f41f03f310bb59e154cde6d484a5b5f20300;
```

## Functions

### \_getCoreRegistryStorage

```solidity
function _getCoreRegistryStorage() private pure returns (CoreRegistryStorage storage $);
```

### \_\_CoreRegistry_init

```solidity
function __CoreRegistry_init(address _oracleRegistry, address _tokenRegistry, address _initialAuthority)
    internal
    onlyInitializing;
```

### coreFactory

Address of the core factory.

```solidity
function coreFactory() external view override returns (address);
```

### oracleRegistry

Address of the oracle registry.

```solidity
function oracleRegistry() external view override returns (address);
```

### tokenRegistry

Address of the token registry.

```solidity
function tokenRegistry() external view override returns (address);
```

### swapModule

Address of the swapModule module.

```solidity
function swapModule() external view override returns (address);
```

### flashLoanModule

Address of the flashLoan module.

```solidity
function flashLoanModule() external view override returns (address);
```

### caliberBeacon

Address of the caliber beacon contract.

```solidity
function caliberBeacon() external view override returns (address);
```

### bridgeAdapterBeacon

Bridge ID => Address of the bridge adapter beacon contract.

```solidity
function bridgeAdapterBeacon(uint16 bridgeId) external view override returns (address);
```

### setCoreFactory

Sets the core factory address.

```solidity
function setCoreFactory(address _coreFactory) external override restricted;
```

**Parameters**

| Name           | Type      | Description               |
| -------------- | --------- | ------------------------- |
| `_coreFactory` | `address` | The core factory address. |

### setOracleRegistry

Sets the oracle registry address.

```solidity
function setOracleRegistry(address _oracleRegistry) external override restricted;
```

**Parameters**

| Name              | Type      | Description                  |
| ----------------- | --------- | ---------------------------- |
| `_oracleRegistry` | `address` | The oracle registry address. |

### setTokenRegistry

Sets the token registry address.

```solidity
function setTokenRegistry(address _tokenRegistry) external override restricted;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_tokenRegistry` | `address` | The token registry address. |

### setSwapModule

Sets the swap module address.

```solidity
function setSwapModule(address _swapModule) external override restricted;
```

**Parameters**

| Name          | Type      | Description             |
| ------------- | --------- | ----------------------- |
| `_swapModule` | `address` | The swapModule address. |

### setFlashLoanModule

Sets the flashLoan module address.

```solidity
function setFlashLoanModule(address _flashLoanModule) external restricted;
```

**Parameters**

| Name               | Type      | Description                   |
| ------------------ | --------- | ----------------------------- |
| `_flashLoanModule` | `address` | The flashLoan module address. |

### setCaliberBeacon

Sets the caliber beacon address.

```solidity
function setCaliberBeacon(address _caliberBeacon) external override restricted;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_caliberBeacon` | `address` | The caliber beacon address. |

### setBridgeAdapterBeacon

Sets the bridge adapter beacon address.

```solidity
function setBridgeAdapterBeacon(uint16 bridgeId, address _bridgeAdapter) external override restricted;
```

**Parameters**

| Name             | Type      | Description                        |
| ---------------- | --------- | ---------------------------------- |
| `bridgeId`       | `uint16`  | The bridge ID.                     |
| `_bridgeAdapter` | `address` | The bridge adapter beacon address. |

## Structs

### CoreRegistryStorage

**Note:**
storage-location: erc7201:makina.storage.CoreRegistry

```solidity
struct CoreRegistryStorage {
    address _coreFactory;
    address _oracleRegistry;
    address _tokenRegistry;
    address _swapModule;
    address _flashLoanModule;
    address _caliberBeacon;
    mapping(uint16 => address) _bridgeAdapters;
}
```
