# HubPeripheryFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/factories/HubPeripheryFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [MakinaPeripheryContext](/contracts/periphery/utils/MakinaPeripheryContext.sol/abstract.MakinaPeripheryContext.md), [IHubPeripheryFactory](/contracts/periphery/interfaces/IHubPeripheryFactory.sol/interface.IHubPeripheryFactory.md)

## State Variables

### HubPeripheryFactoryStorageLocation

```solidity
bytes32 private constant HubPeripheryFactoryStorageLocation =
    0x6b50a937759edff8a6a5b23fe11eb54a74c1c4f4d159fd3622707013a01a1e00;
```

## Functions

### \_getHubPeripheryFactoryStorage

```solidity
function _getHubPeripheryFactoryStorage() internal pure returns (HubPeripheryFactoryStorage storage $);
```

### constructor

```solidity
constructor(address _peripheryRegistry) MakinaPeripheryContext(_peripheryRegistry);
```

### initialize

```solidity
function initialize(address _initialAuthority) external initializer;
```

### isDepositor

Address => Whether this is a depositor deployed by this factory

```solidity
function isDepositor(address _depositor) external view override returns (bool);
```

### isRedeemer

Address => Whether this is a redeemer deployed by this factory

```solidity
function isRedeemer(address _redeemer) external view override returns (bool);
```

### isFeeManager

Address => Whether this is a fee manager deployed by this factory

```solidity
function isFeeManager(address _feeManager) external view override returns (bool);
```

### isSecurityModule

Address => Whether this is a security module deployed by this factory

```solidity
function isSecurityModule(address _securityModule) external view override returns (bool);
```

### depositorImplemId

Depositor => Implementation ID

```solidity
function depositorImplemId(address _depositor) external view override returns (uint16);
```

### redeemerImplemId

Redeemer => Implementation ID

```solidity
function redeemerImplemId(address _redeemer) external view override returns (uint16);
```

### feeManagerImplemId

Fee manager => Implementation ID

```solidity
function feeManagerImplemId(address _feeManager) external view override returns (uint16);
```

### setMachine

Sets the machine address in the machine periphery contract.

```solidity
function setMachine(address machinePeriphery, address machine) external override restricted;
```

**Parameters**

| Name               | Type      | Description                                    |
| ------------------ | --------- | ---------------------------------------------- |
| `machinePeriphery` | `address` | The address of the machine periphery contract. |
| `machine`          | `address` | The address of the machine to be set.          |

### setSecurityModule

Sets the security module address in the fee manager contract.

```solidity
function setSecurityModule(address feeManager, address securityModule) external override restricted;
```

**Parameters**

| Name             | Type      | Description                                   |
| ---------------- | --------- | --------------------------------------------- |
| `feeManager`     | `address` | The address of the fee manager contract.      |
| `securityModule` | `address` | The address of the security module to be set. |

### createDepositor

Creates a new machine depositor using the specified implementation ID.

```solidity
function createDepositor(uint16 _implemId, bytes calldata _initializationData)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name                  | Type     | Description |
| --------------------- | -------- | ----------- |
| `_implemId`           | `uint16` |             |
| `_initializationData` | `bytes`  |             |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | depositor The address of the newly created depositor. |

### createRedeemer

Creates a new machine redeemer using the specified implementation ID.

```solidity
function createRedeemer(uint16 _implemId, bytes calldata _initializationData)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name                  | Type     | Description |
| --------------------- | -------- | ----------- |
| `_implemId`           | `uint16` |             |
| `_initializationData` | `bytes`  |             |

**Returns**

| Name     | Type      | Description                                         |
| -------- | --------- | --------------------------------------------------- |
| `<none>` | `address` | redeemer The address of the newly created redeemer. |

### createFeeManager

Creates a new machine fee manager using the specified implementation ID.

```solidity
function createFeeManager(uint16 _implemId, bytes calldata _initializationData)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name                  | Type     | Description |
| --------------------- | -------- | ----------- |
| `_implemId`           | `uint16` |             |
| `_initializationData` | `bytes`  |             |

**Returns**

| Name     | Type      | Description                                              |
| -------- | --------- | -------------------------------------------------------- |
| `<none>` | `address` | feeManager The address of the newly created fee manager. |

### createSecurityModule

Creates a new security module.

```solidity
function createSecurityModule(ISecurityModule.SecurityModuleInitParams calldata smParams)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name       | Type                                       | Description                                    |
| ---------- | ------------------------------------------ | ---------------------------------------------- |
| `smParams` | `ISecurityModule.SecurityModuleInitParams` | The security module initialization parameters. |

**Returns**

| Name     | Type      | Description                                                      |
| -------- | --------- | ---------------------------------------------------------------- |
| `<none>` | `address` | securityModule The address of the newly created security module. |

## Structs

### HubPeripheryFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.HubPeripheryFactory

```solidity
struct HubPeripheryFactoryStorage {
    mapping(address depositor => bool isDepositor) _isDepositor;
    mapping(address redeemer => bool isRedeemer) _isRedeemer;
    mapping(address feeManager => bool isFeeManager) _isFeeManager;
    mapping(address securityModule => bool isSecurityModule) _isSecurityModule;
    mapping(address depositor => uint16 implemId) _depositorImplemId;
    mapping(address redeemer => uint16 implemId) _redeemerImplemId;
    mapping(address feeManager => uint16 implemId) _feeManagerImplemId;
}
```
