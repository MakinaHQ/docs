# ICoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/interfaces/ICoreRegistry.sol)

## Functions

### coreFactory

Address of the core factory.

```solidity
function coreFactory() external view returns (address);
```

### oracleRegistry

Address of the oracle registry.

```solidity
function oracleRegistry() external view returns (address);
```

### tokenRegistry

Address of the token registry.

```solidity
function tokenRegistry() external view returns (address);
```

### swapModule

Address of the swapModule module.

```solidity
function swapModule() external view returns (address);
```

### flashLoanModule

Address of the flashLoan module.

```solidity
function flashLoanModule() external view returns (address);
```

### caliberBeacon

Address of the caliber beacon contract.

```solidity
function caliberBeacon() external view returns (address);
```

### bridgeAdapterBeacon

Bridge ID => Address of the bridge adapter beacon contract.

```solidity
function bridgeAdapterBeacon(uint16 bridgeId) external view returns (address);
```

### setCoreFactory

Sets the core factory address.

```solidity
function setCoreFactory(address _coreFactory) external;
```

**Parameters**

| Name           | Type      | Description               |
| -------------- | --------- | ------------------------- |
| `_coreFactory` | `address` | The core factory address. |

### setOracleRegistry

Sets the oracle registry address.

```solidity
function setOracleRegistry(address _oracleRegistry) external;
```

**Parameters**

| Name              | Type      | Description                  |
| ----------------- | --------- | ---------------------------- |
| `_oracleRegistry` | `address` | The oracle registry address. |

### setTokenRegistry

Sets the token registry address.

```solidity
function setTokenRegistry(address _tokenRegistry) external;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_tokenRegistry` | `address` | The token registry address. |

### setSwapModule

Sets the swap module address.

```solidity
function setSwapModule(address _swapModule) external;
```

**Parameters**

| Name          | Type      | Description             |
| ------------- | --------- | ----------------------- |
| `_swapModule` | `address` | The swapModule address. |

### setFlashLoanModule

Sets the flashLoan module address.

```solidity
function setFlashLoanModule(address _flashLoanModule) external;
```

**Parameters**

| Name               | Type      | Description                   |
| ------------------ | --------- | ----------------------------- |
| `_flashLoanModule` | `address` | The flashLoan module address. |

### setCaliberBeacon

Sets the caliber beacon address.

```solidity
function setCaliberBeacon(address _caliberBeacon) external;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_caliberBeacon` | `address` | The caliber beacon address. |

### setBridgeAdapterBeacon

Sets the bridge adapter beacon address.

```solidity
function setBridgeAdapterBeacon(uint16 bridgeId, address _bridgeAdapter) external;
```

**Parameters**

| Name             | Type      | Description                        |
| ---------------- | --------- | ---------------------------------- |
| `bridgeId`       | `uint16`  | The bridge ID.                     |
| `_bridgeAdapter` | `address` | The bridge adapter beacon address. |

## Events

### BridgeAdapterBeaconChanged

```solidity
event BridgeAdapterBeaconChanged(
    uint256 indexed bridgeId, address indexed oldBridgeAdapterBeacon, address indexed newBridgeAdapterBeacon
);
```

### CaliberBeaconChanged

```solidity
event CaliberBeaconChanged(address indexed oldCaliberBeacon, address indexed newCaliberBeacon);
```

### CoreFactoryChanged

```solidity
event CoreFactoryChanged(address indexed oldCoreFactory, address indexed newCoreFactory);
```

### FlashLoanModuleChanged

```solidity
event FlashLoanModuleChanged(address indexed oldFlashLoanModule, address indexed newFlashLoanModule);
```

### OracleRegistryChanged

```solidity
event OracleRegistryChanged(address indexed oldOracleRegistry, address indexed newOracleRegistry);
```

### SwapModuleChanged

```solidity
event SwapModuleChanged(address indexed oldSwapModule, address indexed newSwapModule);
```

### TokenRegistryChanged

```solidity
event TokenRegistryChanged(address indexed oldTokenRegistry, address indexed newTokenRegistry);
```
