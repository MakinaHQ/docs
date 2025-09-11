# SpokeCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/factories/SpokeCoreFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [CaliberFactory](/contracts/core/factories/CaliberFactory.sol/abstract.CaliberFactory.md), [BridgeAdapterFactory](/contracts/core/factories/BridgeAdapterFactory.sol/abstract.BridgeAdapterFactory.md), [ISpokeCoreFactory](/contracts/core/interfaces/ISpokeCoreFactory.sol/interface.ISpokeCoreFactory.md)

## State Variables

### CaliberMailboxSaltDomain

```solidity
bytes32 private constant CaliberMailboxSaltDomain = 0x4b3676c1328bb93bf4cdb2e4a60e8517fd898e78bd01e7956950c3ff62d3872f;
```

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
    address hubMachine,
    bytes32 salt
) external override restricted returns (address);
```

**Parameters**

| Name              | Type                                           | Description                                            |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------ |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                 |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.       |
| `accountingToken` | `address`                                      | The address of the accounting token.                   |
| `hubMachine`      | `address`                                      | The address of the hub machine.                        |
| `salt`            | `bytes32`                                      | The salt used to deploy the Caliber deterministically. |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | caliber The address of the deployed Caliber instance. |

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

### \_createCaliberMailbox

_Internal logic for caliber mailbox deployment via create3.
This function only performs the deployment. It does not update factory storage nor emit an event._

```solidity
function _createCaliberMailbox(
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    address hubMachine,
    bytes32 salt
) internal returns (address);
```

## Structs

### SpokeCoreFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.SpokeCoreFactory

```solidity
struct SpokeCoreFactoryStorage {
    mapping(address mailbox => bool isMailbox) _isCaliberMailbox;
    mapping(address mailbox => bytes32 salt) _instanceSalts;
}
```
