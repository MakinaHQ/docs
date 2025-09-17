# IHubPeripheryFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/interfaces/IHubPeripheryFactory.sol)

## Functions

### isDepositor

Address => Whether this is a depositor deployed by this factory

```solidity
function isDepositor(address depositor) external view returns (bool);
```

### isRedeemer

Address => Whether this is a redeemer deployed by this factory

```solidity
function isRedeemer(address redeemer) external view returns (bool);
```

### isFeeManager

Address => Whether this is a fee manager deployed by this factory

```solidity
function isFeeManager(address feeManager) external view returns (bool);
```

### isSecurityModule

Address => Whether this is a security module deployed by this factory

```solidity
function isSecurityModule(address securityModule) external view returns (bool);
```

### depositorImplemId

Depositor => Implementation ID

```solidity
function depositorImplemId(address depositor) external view returns (uint16);
```

### redeemerImplemId

Redeemer => Implementation ID

```solidity
function redeemerImplemId(address redeemer) external view returns (uint16);
```

### feeManagerImplemId

Fee manager => Implementation ID

```solidity
function feeManagerImplemId(address feeManager) external view returns (uint16);
```

### setMachine

Sets the machine address in the machine periphery contract.

```solidity
function setMachine(address machinePeriphery, address machine) external;
```

**Parameters**

| Name               | Type      | Description                                    |
| ------------------ | --------- | ---------------------------------------------- |
| `machinePeriphery` | `address` | The address of the machine periphery contract. |
| `machine`          | `address` | The address of the machine to be set.          |

### setSecurityModule

Sets the security module address in the fee manager contract.

```solidity
function setSecurityModule(address feeManager, address securityModule) external;
```

**Parameters**

| Name             | Type      | Description                                   |
| ---------------- | --------- | --------------------------------------------- |
| `feeManager`     | `address` | The address of the fee manager contract.      |
| `securityModule` | `address` | The address of the security module to be set. |

### createDepositor

Creates a new machine depositor using the specified implementation ID.

```solidity
function createDepositor(uint16 implemId, bytes calldata initializationData) external returns (address depositor);
```

**Parameters**

| Name                 | Type     | Description                                        |
| -------------------- | -------- | -------------------------------------------------- |
| `implemId`           | `uint16` | The ID of the depositor implementation to be used. |
| `initializationData` | `bytes`  | Additional initialization data.                    |

**Returns**

| Name        | Type      | Description                                 |
| ----------- | --------- | ------------------------------------------- |
| `depositor` | `address` | The address of the newly created depositor. |

### createRedeemer

Creates a new machine redeemer using the specified implementation ID.

```solidity
function createRedeemer(uint16 implemId, bytes calldata initializationData) external returns (address redeemer);
```

**Parameters**

| Name                 | Type     | Description                                       |
| -------------------- | -------- | ------------------------------------------------- |
| `implemId`           | `uint16` | The ID of the redeemer implementation to be used. |
| `initializationData` | `bytes`  | Additional initialization data.                   |

**Returns**

| Name       | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| `redeemer` | `address` | The address of the newly created redeemer. |

### createFeeManager

Creates a new machine fee manager using the specified implementation ID.

```solidity
function createFeeManager(uint16 implemId, bytes calldata initializationData) external returns (address feeManager);
```

**Parameters**

| Name                 | Type     | Description                                          |
| -------------------- | -------- | ---------------------------------------------------- |
| `implemId`           | `uint16` | The ID of the fee manager implementation to be used. |
| `initializationData` | `bytes`  | Additional initialization data.                      |

**Returns**

| Name         | Type      | Description                                   |
| ------------ | --------- | --------------------------------------------- |
| `feeManager` | `address` | The address of the newly created fee manager. |

### createSecurityModule

Creates a new security module.

```solidity
function createSecurityModule(ISecurityModule.SecurityModuleInitParams calldata smParams)
    external
    returns (address securityModule);
```

**Parameters**

| Name       | Type                                       | Description                                    |
| ---------- | ------------------------------------------ | ---------------------------------------------- |
| `smParams` | `ISecurityModule.SecurityModuleInitParams` | The security module initialization parameters. |

**Returns**

| Name             | Type      | Description                                       |
| ---------------- | --------- | ------------------------------------------------- |
| `securityModule` | `address` | The address of the newly created security module. |

## Events

### DepositorCreated

```solidity
event DepositorCreated(address indexed depositor, uint16 indexed implemId);
```

### RedeemerCreated

```solidity
event RedeemerCreated(address indexed redeemer, uint16 indexed implemId);
```

### FeeManagerCreated

```solidity
event FeeManagerCreated(address indexed feeManager, uint16 indexed implemId);
```

### SecurityModuleCreated

```solidity
event SecurityModuleCreated(address indexed securityModule);
```
