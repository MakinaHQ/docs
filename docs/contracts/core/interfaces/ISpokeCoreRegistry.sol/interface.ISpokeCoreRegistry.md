# ISpokeCoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/interfaces/ISpokeCoreRegistry.sol)

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
