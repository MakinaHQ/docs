# ISpokeCoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/ISpokeCoreRegistry.sol)

**Inherits:**
[ICoreRegistry](/contracts/core/interfaces/ICoreRegistry.sol/interface.ICoreRegistry.md)

## Functions

### caliberMailboxBeacon

Address of the caliber mailbox beacon.

```solidity
function caliberMailboxBeacon() external view returns (address);
```

### setCaliberMailboxBeacon

Sets the caliber mailbox beacon address.

```solidity
function setCaliberMailboxBeacon(address _caliberMailboxBeacon) external;
```

**Parameters**

| Name                    | Type      | Description                         |
| ----------------------- | --------- | ----------------------------------- |
| `_caliberMailboxBeacon` | `address` | The caliber mailbox beacon address. |

## Events

### CaliberMailboxBeaconChanged

```solidity
event CaliberMailboxBeaconChanged(address indexed oldCaliberMailboxBeacon, address indexed newCaliberMailboxBeacon);
```
