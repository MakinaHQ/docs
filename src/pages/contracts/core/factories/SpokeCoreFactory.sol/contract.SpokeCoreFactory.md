# SpokeCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/factories/SpokeCoreFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [CaliberFactory](/contracts/core/factories/CaliberFactory.sol/abstract.CaliberFactory.md), [BridgeAdapterFactory](/contracts/core/factories/BridgeAdapterFactory.sol/abstract.BridgeAdapterFactory.md), [ISpokeCoreFactory](/contracts/core/interfaces/ISpokeCoreFactory.sol/interface.ISpokeCoreFactory.md)

## State Variables

### CaliberMailboxSaltDomain

```solidity
bytes32 private constant CaliberMailboxSaltDomain =
    0x4b3676c1328bb93bf4cdb2e4a60e8517fd898e78bd01e7956950c3ff62d3872f
```

### SpokeCoreFactoryStorageLocation

```solidity
bytes32 private constant SpokeCoreFactoryStorageLocation =
    0xcb1a6cd67f0aa55e138668b826a3a98a6a6ef973cbafe7a0845e7a69c97a6000
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
function initialize(address initialAuthority) external initializer;
```

### isCaliberMailbox

Address => Whether this is a CaliberMailbox instance deployed by this factory.

```solidity
function isCaliberMailbox(address caliberMailbox) external view override returns (bool);
```

### createCaliber

Deploys a new Caliber instance with an associated CaliberMailbox.

```solidity
function createCaliber(
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    BridgeAdapterInitParams[] calldata baParams,
    address accountingToken,
    bytes32 salt,
    bool setupAMFunctionRoles
) external override restricted returns (address);
```

**Parameters**

| Name                   | Type                                           | Description                                                                        |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cParams`              | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                                             |
| `mgParams`             | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.                                   |
| `baParams`             | `BridgeAdapterInitParams[]`                    | The list of bridge adapter initialization parameters and controller configuration. |
| `accountingToken`      | `address`                                      | The address of the accounting token.                                               |
| `salt`                 | `bytes32`                                      | The salt used to deploy the Caliber deterministically.                             |
| `setupAMFunctionRoles` | `bool`                                         | Whether to set roles for restricted functions on the deployed instance.            |

**Returns**

| Name     | Type      | Description                                           |
| -------- | --------- | ----------------------------------------------------- |
| `<none>` | `address` | caliber The address of the deployed Caliber instance. |

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

### \_createCaliberMailbox

Internal logic for caliber mailbox deployment via create3.
This function only performs the deployment. It does not update factory storage nor emit an event.

```solidity
function _createCaliberMailbox(
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    uint256 initialCooldownDuration,
    bytes32 salt
) internal returns (address);
```

### \_setupSpokeCaliberBundleAMFunctionRoles

Sets function roles for a deployed caliber mailbox instance and its associated caliber in the provided authority.

```solidity
function _setupSpokeCaliberBundleAMFunctionRoles(address _authority, address _mailbox, address _caliber) internal;
```

### \_setupCaliberMailboxAMFunctionRoles

Sets function roles in associated access manager for a deployed caliber mailbox instance.

```solidity
function _setupCaliberMailboxAMFunctionRoles(address _authority, address _mailbox) internal;
```

### \_checkAuthority

Checks that the provided authority matches the current authority.

```solidity
function _checkAuthority(address _authority) internal view;
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
