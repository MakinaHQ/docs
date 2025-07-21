# SpokeCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/factories/SpokeCoreFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [CaliberFactory](docs/contracts/factories/CaliberFactory.sol/abstract.CaliberFactory.md), [BridgeAdapterFactory](docs/contracts/factories/BridgeAdapterFactory.sol/abstract.BridgeAdapterFactory.md), [ISpokeCoreFactory](docs/contracts/interfaces/ISpokeCoreFactory.sol/interface.ISpokeCoreFactory.md)

## State Variables

### SpokeCoreFactoryStorageLocation

```solidity
bytes32 private constant SpokeCoreFactoryStorageLocation =
    0xcb1a6cd67f0aa55e138668b826a3a98a6a6ef973cbafe7a0845e7a69c97a6000;
```

## Functions

### \_getSpokeCoreFactoryStorage

```solidity
function _getSpokeCoreFactoryStorage() internal pure returns (SpokeCoreFactoryStorage storage $);
```

### constructor

```solidity
constructor(address _registry) MakinaContext(_registry);
```

### initialize

```solidity
function initialize(address _initialAuthority) external initializer;
```

### isCaliberMailbox

Address => Whether this is a CaliberMailbox instance deployed by this factory.

```solidity
function isCaliberMailbox(address caliberMailbox) external view override returns (bool);
```

### createCaliber

Deploys a new Caliber instance.

```solidity
function createCaliber(
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    address accountingToken,
    address hubMachine
) external override restricted returns (address);
```

**Parameters**

| Name              | Type                                           | Description                                      |
| ----------------- | ---------------------------------------------- | ------------------------------------------------ |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.           |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters. |
| `accountingToken` | `address`                                      | The address of the accounting token.             |
| `hubMachine`      | `address`                                      | The address of the hub machine.                  |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | caliber The address of the deployed Caliber instance. |

### createBridgeAdapter

Deploys a bridge adapter instance.

```solidity
function createBridgeAdapter(uint16 bridgeId, bytes calldata initData) external returns (address adapter);
```

**Parameters**

| Name       | Type     | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| `bridgeId` | `uint16` | The ID of the bridge for which the adapter is being created. |
| `initData` | `bytes`  | The optional initialization data for the bridge adapter.     |

**Returns**

| Name      | Type      | Description                                 |
| --------- | --------- | ------------------------------------------- |
| `adapter` | `address` | The address of the deployed bridge adapter. |

## Structs

### SpokeCoreFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.SpokeCoreFactory

```solidity
struct SpokeCoreFactoryStorage {
    mapping(address caliber => bool isCaliber) _isCaliberMailbox;
}
```
