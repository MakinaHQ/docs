# HubPeripheryRegistry
[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/registries/HubPeripheryRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [IHubPeripheryRegistry](/src/interfaces/IHubPeripheryRegistry.sol/interface.IHubPeripheryRegistry.md)


## State Variables
### HubPeripheryRegistryStorageLocation

```solidity
bytes32 private constant HubPeripheryRegistryStorageLocation =
    0x60c7a8b9d2c96eeaf12a26c5fbe46f192e4cb2019fd3c31562f5d2011364b000;
```


## Functions
### _getHubPeripheryRegistryStorage


```solidity
function _getHubPeripheryRegistryStorage() internal pure returns (HubPeripheryRegistryStorage storage $);
```

### constructor


```solidity
constructor();
```

### initialize


```solidity
function initialize(address _initialAuthority) external initializer;
```

### peripheryFactory

Address of the periphery factory.


```solidity
function peripheryFactory() external view override returns (address);
```

### depositorBeacon

Implementation ID => Address of the depositor beacon


```solidity
function depositorBeacon(uint16 implemId) external view override returns (address);
```

### redeemerBeacon

Implementation ID => Address of the redeemer beacon


```solidity
function redeemerBeacon(uint16 implemId) external view override returns (address);
```

### feeManagerBeacon

Implementation ID => Address of the fee manager beacon


```solidity
function feeManagerBeacon(uint16 implemId) external view override returns (address);
```

### securityModuleBeacon

Address of the security module beacon.


```solidity
function securityModuleBeacon() external view override returns (address);
```

### setPeripheryFactory

Sets the address of the periphery factory.


```solidity
function setPeripheryFactory(address _peripheryFactory) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_peripheryFactory`|`address`|The periphery factory address.|


### setDepositorBeacon

Sets the beacon address for the depositor implementation.


```solidity
function setDepositorBeacon(uint16 implemId, address _depositorBeacon) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`implemId`|`uint16`|The ID of the machine depositor implementation.|
|`_depositorBeacon`|`address`|The machine depositor beacon address.|


### setRedeemerBeacon

Sets the beacon address for the redeemer implementation.


```solidity
function setRedeemerBeacon(uint16 implemId, address _redeemerBeacon) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`implemId`|`uint16`|The ID of the redeemer implementation.|
|`_redeemerBeacon`|`address`|The machine redeemer beacon address.|


### setFeeManagerBeacon

Sets the beacon address for the fee manager implementation.


```solidity
function setFeeManagerBeacon(uint16 implemId, address _feeManagerBeacon) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`implemId`|`uint16`|The ID of the fee manager implementation.|
|`_feeManagerBeacon`|`address`|The fee manager beacon address.|


### setSecurityModuleBeacon

Sets the security module beacon address.


```solidity
function setSecurityModuleBeacon(address _securityModuleBeacon) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_securityModuleBeacon`|`address`|The security module beacon address.|


## Structs
### HubPeripheryRegistryStorage
**Note:**
storage-location: erc7201:makina.storage.HubPeripheryRegistry


```solidity
struct HubPeripheryRegistryStorage {
    address _peripheryFactory;
    mapping(uint16 implemId => address depositor) _depositors;
    mapping(uint16 implemId => address redeemer) _redeemers;
    mapping(uint16 implemId => address feeManager) _feeManagers;
    address _securityModuleBeacon;
}
```

