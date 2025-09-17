# IHubPeripheryRegistry

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/interfaces/IHubPeripheryRegistry.sol)

## Functions

### peripheryFactory

Address of the periphery factory.

```solidity
function peripheryFactory() external view returns (address);
```

### depositorBeacon

Implementation ID => Address of the depositor beacon

```solidity
function depositorBeacon(uint16 implemId) external view returns (address);
```

### redeemerBeacon

Implementation ID => Address of the redeemer beacon

```solidity
function redeemerBeacon(uint16 implemId) external view returns (address);
```

### feeManagerBeacon

Implementation ID => Address of the fee manager beacon

```solidity
function feeManagerBeacon(uint16 implemId) external view returns (address);
```

### securityModuleBeacon

Address of the security module beacon.

```solidity
function securityModuleBeacon() external view returns (address);
```

### setPeripheryFactory

Sets the address of the periphery factory.

```solidity
function setPeripheryFactory(address _peripheryFactory) external;
```

**Parameters**

| Name                | Type      | Description                    |
| ------------------- | --------- | ------------------------------ |
| `_peripheryFactory` | `address` | The periphery factory address. |

### setDepositorBeacon

Sets the beacon address for the depositor implementation.

```solidity
function setDepositorBeacon(uint16 implemId, address _depositorBeacon) external;
```

**Parameters**

| Name               | Type      | Description                                     |
| ------------------ | --------- | ----------------------------------------------- |
| `implemId`         | `uint16`  | The ID of the machine depositor implementation. |
| `_depositorBeacon` | `address` | The machine depositor beacon address.           |

### setRedeemerBeacon

Sets the beacon address for the redeemer implementation.

```solidity
function setRedeemerBeacon(uint16 implemId, address _redeemerBeacon) external;
```

**Parameters**

| Name              | Type      | Description                            |
| ----------------- | --------- | -------------------------------------- |
| `implemId`        | `uint16`  | The ID of the redeemer implementation. |
| `_redeemerBeacon` | `address` | The machine redeemer beacon address.   |

### setFeeManagerBeacon

Sets the beacon address for the fee manager implementation.

```solidity
function setFeeManagerBeacon(uint16 implemId, address _feeManagerBeacon) external;
```

**Parameters**

| Name                | Type      | Description                               |
| ------------------- | --------- | ----------------------------------------- |
| `implemId`          | `uint16`  | The ID of the fee manager implementation. |
| `_feeManagerBeacon` | `address` | The fee manager beacon address.           |

### setSecurityModuleBeacon

Sets the security module beacon address.

```solidity
function setSecurityModuleBeacon(address _securityModuleBeacon) external;
```

**Parameters**

| Name                    | Type      | Description                         |
| ----------------------- | --------- | ----------------------------------- |
| `_securityModuleBeacon` | `address` | The security module beacon address. |

## Events

### DepositorBeaconChanged

```solidity
event DepositorBeaconChanged(
    uint16 indexed implemId, address indexed oldDepositorBeacon, address indexed newDepositorBeacon
);
```

### FeeManagerBeaconChanged

```solidity
event FeeManagerBeaconChanged(
    uint16 indexed implemId, address indexed oldFeeManagerBeacon, address indexed newFeeManagerBeacon
);
```

### PeripheryFactoryChanged

```solidity
event PeripheryFactoryChanged(address indexed oldPeripheryFactory, address indexed newPeripheryFactory);
```

### RedeemerBeaconChanged

```solidity
event RedeemerBeaconChanged(
    uint16 indexed implemId, address indexed oldRedeemerBeacon, address indexed newRedeemerBeacon
);
```

### SecurityModuleBeaconChanged

```solidity
event SecurityModuleBeaconChanged(address indexed oldSecurityModuleBeacon, address indexed newSecurityModuleBeacon);
```
