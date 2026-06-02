# HubCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/factories/HubCoreFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [CaliberFactory](/contracts/core/factories/CaliberFactory.sol/abstract.CaliberFactory.md), [BridgeAdapterFactory](/contracts/core/factories/BridgeAdapterFactory.sol/abstract.BridgeAdapterFactory.md), [IHubCoreFactory](/contracts/core/interfaces/IHubCoreFactory.sol/interface.IHubCoreFactory.md)

## State Variables

### HubCoreFactoryStorageLocation

```solidity
bytes32 private constant HubCoreFactoryStorageLocation =
    0xa73526acc519facb543e3fac63cbe361155292db6c01a81eec358613ec9ee100
```

## Functions

### \_getHubCoreFactoryStorage

```solidity
function _getHubCoreFactoryStorage() internal pure returns (HubCoreFactoryStorage storage $);
```

### constructor

```solidity
constructor(address _registry) MakinaContext(_registry);
```

### initialize

```solidity
function initialize(address initialAuthority) external initializer;
```

### isMachine

Address => Whether this is a Machine instance deployed by this factory.

```solidity
function isMachine(address machine) external view override returns (bool);
```

### isPreDepositVault

Address => Whether this is a PreDepositVault instance deployed by this factory.

```solidity
function isPreDepositVault(address preDepositVault) external view override returns (bool);
```

### createPreDepositVault

Deploys a new PreDepositVault instance.

```solidity
function createPreDepositVault(
    IPreDepositVault.PreDepositVaultInitParams calldata params,
    address depositToken,
    address accountingToken,
    string memory tokenName,
    string memory tokenSymbol,
    bool setupAMFunctionRoles
) external override restricted returns (address);
```

**Parameters**

| Name                   | Type                                         | Description                                                             |
| ---------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| `params`               | `IPreDepositVault.PreDepositVaultInitParams` | The initialization parameters.                                          |
| `depositToken`         | `address`                                    | The address of the deposit token.                                       |
| `accountingToken`      | `address`                                    | The address of the accounting token.                                    |
| `tokenName`            | `string`                                     | The name of the share token.                                            |
| `tokenSymbol`          | `string`                                     | The symbol of the share token.                                          |
| `setupAMFunctionRoles` | `bool`                                       | Whether to set roles for restricted functions on the deployed instance. |

**Returns**

| Name     | Type      | Description                                                           |
| -------- | --------- | --------------------------------------------------------------------- |
| `<none>` | `address` | preDepositVault The address of the deployed PreDepositVault instance. |

### createMachineFromPreDeposit

Deploys a new Machine instance and migrates an existing PreDepositVault instance to it.

```solidity
function createMachineFromPreDeposit(
    IMachine.MachineInitParams calldata mParams,
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    BridgeAdapterInitParams[] calldata baParams,
    address preDepositVault,
    bytes32 salt,
    bool setupAMFunctionRoles
) external override restricted returns (address);
```

**Parameters**

| Name                   | Type                                           | Description                                                                        |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mParams`              | `IMachine.MachineInitParams`                   | The machine initialization parameters.                                             |
| `cParams`              | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                                             |
| `mgParams`             | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.                                   |
| `baParams`             | `BridgeAdapterInitParams[]`                    | The list of bridge adapter initialization parameters and controller configuration. |
| `preDepositVault`      | `address`                                      | The address of the PreDepositVault instance to migrate.                            |
| `salt`                 | `bytes32`                                      | The salt used to deploy the Hub Caliber deterministically.                         |
| `setupAMFunctionRoles` | `bool`                                         | Whether to set roles for restricted functions on the deployed instance.            |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | machine The address of the deployed Machine instance. |

### createMachine

Deploys a new Machine instance.

```solidity
function createMachine(
    IMachine.MachineInitParams calldata mParams,
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    BridgeAdapterInitParams[] calldata baParams,
    address accountingToken,
    string memory tokenName,
    string memory tokenSymbol,
    bytes32 salt,
    bool setupAMFunctionRoles
) external override restricted returns (address);
```

**Parameters**

| Name                   | Type                                           | Description                                                                        |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mParams`              | `IMachine.MachineInitParams`                   | The machine initialization parameters.                                             |
| `cParams`              | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                                             |
| `mgParams`             | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.                                   |
| `baParams`             | `BridgeAdapterInitParams[]`                    | The list of bridge adapter initialization parameters and controller configuration. |
| `accountingToken`      | `address`                                      | The address of the accounting token.                                               |
| `tokenName`            | `string`                                       | The name of the share token.                                                       |
| `tokenSymbol`          | `string`                                       | The symbol of the share token.                                                     |
| `salt`                 | `bytes32`                                      | The salt used to deploy the Hub Caliber deterministically.                         |
| `setupAMFunctionRoles` | `bool`                                         | Whether to set roles for restricted functions on the deployed instance.            |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | machine The address of the deployed Machine instance. |

### createBridgeAdapter

Deploys a bridge adapter instance.

```solidity
function createBridgeAdapter(address controller, BridgeAdapterInitParams calldata baParams)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name         | Type                      | Description                                                                |
| ------------ | ------------------------- | -------------------------------------------------------------------------- |
| `controller` | `address`                 | The address of the bridge controller for which to deploy the adapter.      |
| `baParams`   | `BridgeAdapterInitParams` | The bridge adapter initialization parameters and controller configuration. |

**Returns**

| Name     | Type      | Description                                         |
| -------- | --------- | --------------------------------------------------- |
| `<none>` | `address` | adapter The address of the deployed bridge adapter. |

### \_createShareToken

Deploys a machine share token.

```solidity
function _createShareToken(string memory name, string memory symbol, address initialOwner)
    internal
    returns (address);
```

### \_setupPreDepositVaultAMFunctionRoles

Sets function roles for a deployed pre-deposit vault instance in the provided authority.

```solidity
function _setupPreDepositVaultAMFunctionRoles(address _authority, address _preDepositVault) internal;
```

### \_setupMachineBundleAMFunctionRoles

Sets function roles for a deployed machine instance, its hub caliber, and its initial fee manager if applicable, in the provided authority.

```solidity
function _setupMachineBundleAMFunctionRoles(
    address _authority,
    address _machine,
    address _caliber,
    address _initialFeeManager
) internal;
```

### \_setupMachineAMFunctionRoles

Sets function roles for a deployed machine instance.

```solidity
function _setupMachineAMFunctionRoles(address _authority, address _machine) internal;
```

### \_setupInitialFeeManagerAMFunctionRoles

Sets function roles for the initial fee manager of a deployed machine instance if applicable.

```solidity
function _setupInitialFeeManagerAMFunctionRoles(address _authority, address _feeManager) internal;
```

### \_checkAuthority

Checks that the provided authority matches the current authority.

```solidity
function _checkAuthority(address _authority) internal view;
```

## Structs

### HubCoreFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.HubCoreFactory

```solidity
struct HubCoreFactoryStorage {
    mapping(address preDepositVault => bool isPreDepositVault) _isPreDepositVault;
    mapping(address machine => bool isMachine) _isMachine;
    mapping(address machine => bytes32 salt) _instanceSalts;
}
```
