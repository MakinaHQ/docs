# HubCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/factories/HubCoreFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [CaliberFactory](/contracts/core/factories/CaliberFactory.sol/abstract.CaliberFactory.md), [BridgeAdapterFactory](/contracts/core/factories/BridgeAdapterFactory.sol/abstract.BridgeAdapterFactory.md), [IHubCoreFactory](/contracts/core/interfaces/IHubCoreFactory.sol/interface.IHubCoreFactory.md)

## State Variables

### HubCoreFactoryStorageLocation

```solidity
bytes32 private constant HubCoreFactoryStorageLocation =
    0xa73526acc519facb543e3fac63cbe361155292db6c01a81eec358613ec9ee100;
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
function initialize(address _initialAuthority) external initializer;
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
    string memory tokenSymbol
) external override restricted returns (address);
```

**Parameters**

| Name              | Type                                         | Description                          |
| ----------------- | -------------------------------------------- | ------------------------------------ |
| `params`          | `IPreDepositVault.PreDepositVaultInitParams` | The initialization parameters.       |
| `depositToken`    | `address`                                    | The address of the deposit token.    |
| `accountingToken` | `address`                                    | The address of the accounting token. |
| `tokenName`       | `string`                                     | The name of the share token.         |
| `tokenSymbol`     | `string`                                     | The symbol of the share token.       |

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
    address preDepositVault,
    bytes32 salt
) external override restricted returns (address);
```

**Parameters**

| Name              | Type                                           | Description                                                |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| `mParams`         | `IMachine.MachineInitParams`                   | The machine initialization parameters.                     |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                     |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.           |
| `preDepositVault` | `address`                                      | The address of the PreDepositVault instance to migrate.    |
| `salt`            | `bytes32`                                      | The salt used to deploy the Hub Caliber deterministically. |

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
    address accountingToken,
    string memory tokenName,
    string memory tokenSymbol,
    bytes32 salt
) external override restricted returns (address);
```

**Parameters**

| Name              | Type                                           | Description                                                |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| `mParams`         | `IMachine.MachineInitParams`                   | The machine initialization parameters.                     |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                     |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.           |
| `accountingToken` | `address`                                      | The address of the accounting token.                       |
| `tokenName`       | `string`                                       | The name of the share token.                               |
| `tokenSymbol`     | `string`                                       | The symbol of the share token.                             |
| `salt`            | `bytes32`                                      | The salt used to deploy the Hub Caliber deterministically. |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | machine The address of the deployed Machine instance. |

### createBridgeAdapter

Deploys a bridge adapter instance.

```solidity
function createBridgeAdapter(uint16 bridgeId, bytes calldata initData) external returns (address);
```

**Parameters**

| Name       | Type     | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| `bridgeId` | `uint16` | The ID of the bridge for which the adapter is being created. |
| `initData` | `bytes`  | The optional initialization data for the bridge adapter.     |

**Returns**

| Name     | Type      | Description                                         |
| -------- | --------- | --------------------------------------------------- |
| `<none>` | `address` | adapter The address of the deployed bridge adapter. |

### \_createShareToken

_Deploys a machine share token._

```solidity
function _createShareToken(string memory name, string memory symbol, address initialOwner) internal returns (address);
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
