# ICoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ICoreRegistry.sol)

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

Address of the swap module.

```solidity
function swapModule() external view returns (address);
```

### flashLoanModule

Address of the flash loan module.

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

### bridgeConfig

Bridge ID => Address of the bridge config contract.

```solidity
function bridgeConfig(uint16 bridgeId) external view returns (address);
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

| Name          | Type      | Description              |
| ------------- | --------- | ------------------------ |
| `_swapModule` | `address` | The swap module address. |

### setFlashLoanModule

Sets the flash loan module address.

```solidity
function setFlashLoanModule(address _flashLoanModule) external;
```

**Parameters**

| Name               | Type      | Description                    |
| ------------------ | --------- | ------------------------------ |
| `_flashLoanModule` | `address` | The flash loan module address. |

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
function setBridgeAdapterBeacon(uint16 bridgeId, address _bridgeAdapterBeacon) external;
```

**Parameters**

| Name                   | Type      | Description                        |
| ---------------------- | --------- | ---------------------------------- |
| `bridgeId`             | `uint16`  | The bridge ID.                     |
| `_bridgeAdapterBeacon` | `address` | The bridge adapter beacon address. |

### setBridgeConfig

Sets the bridge config address.

```solidity
function setBridgeConfig(uint16 bridgeId, address _bridgeConfig) external;
```

**Parameters**

| Name            | Type      | Description                |
| --------------- | --------- | -------------------------- |
| `bridgeId`      | `uint16`  | The bridge ID.             |
| `_bridgeConfig` | `address` | The bridge config address. |

## Events

### BridgeAdapterBeaconChanged

```solidity
event BridgeAdapterBeaconChanged(
    uint256 indexed bridgeId, address indexed oldBridgeAdapterBeacon, address indexed newBridgeAdapterBeacon
);
```

### BridgeConfigChanged

```solidity
event BridgeConfigChanged(
    uint256 indexed bridgeId, address indexed oldBridgeConfig, address indexed newBridgeConfig
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
