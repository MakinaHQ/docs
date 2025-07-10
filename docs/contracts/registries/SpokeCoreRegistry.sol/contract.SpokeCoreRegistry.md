# SpokeCoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/registries/SpokeCoreRegistry.sol)

**Inherits:**
[CoreRegistry](docs/contracts/registries/CoreRegistry.sol/abstract.CoreRegistry.md), [ISpokeCoreRegistry](docs/contracts/interfaces/ISpokeCoreRegistry.sol/interface.ISpokeCoreRegistry.md)

## State Variables

### SpokeCoreRegistryStorageLocation

```solidity
bytes32 private constant SpokeCoreRegistryStorageLocation =
    0xbb04d69665b59d5499b254d643357a8f35f2bcb1c74ee39b02b1345680315500;
```

## Functions

### \_getSpokeCoreRegistryStorage

```solidity
function _getSpokeCoreRegistryStorage() private pure returns (SpokeCoreRegistryStorage storage $);
```

### constructor

```solidity
constructor();
```

### initialize

```solidity
function initialize(address _oracleRegistry, address _tokenRegistry, address _initialAuthority) external initializer;
```

### caliberMailboxBeacon

Address of the caliber mailbox beacon.

```solidity
function caliberMailboxBeacon() external view override returns (address);
```

### setCaliberMailboxBeacon

Sets the caliber mailbox beacon address.

```solidity
function setCaliberMailboxBeacon(address _caliberMailboxBeacon) external override restricted;
```

**Parameters**

| Name                    | Type      | Description                         |
| ----------------------- | --------- | ----------------------------------- |
| `_caliberMailboxBeacon` | `address` | The caliber mailbox beacon address. |

## Structs

### SpokeCoreRegistryStorage

**Note:**
storage-location: erc7201:makina.storage.SpokeCoreRegistry

```solidity
struct SpokeCoreRegistryStorage {
    address _caliberMailboxBeacon;
}
```
