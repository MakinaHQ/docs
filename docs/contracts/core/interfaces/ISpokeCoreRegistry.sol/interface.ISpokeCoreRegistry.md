# ISpokeCoreRegistry
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/ISpokeCoreRegistry.sol)

**Inherits:**
[ICoreRegistry](/src/interfaces/ICoreRegistry.sol/interface.ICoreRegistry.md)


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

|Name|Type|Description|
|----|----|-----------|
|`_caliberMailboxBeacon`|`address`|The caliber mailbox beacon address.|


## Events
### CaliberMailboxBeaconChanged

```solidity
event CaliberMailboxBeaconChanged(address indexed oldCaliberMailboxBeacon, address indexed newCaliberMailboxBeacon);
```

