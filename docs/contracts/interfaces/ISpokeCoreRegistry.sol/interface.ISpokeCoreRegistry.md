# ISpokeCoreRegistry
[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/interfaces/ISpokeCoreRegistry.sol)

**Inherits:**
[ICoreRegistry](docs/contracts/interfaces/ICoreRegistry.sol/interface.ICoreRegistry.md)


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

