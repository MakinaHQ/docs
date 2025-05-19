# MakinaGovernable
[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/utils/MakinaGovernable.sol)

**Inherits:**
AccessManagedUpgradeable, [IMakinaGovernable](docs/contracts/interfaces/IMakinaGovernable.sol/interface.IMakinaGovernable.md)


## State Variables
### MakinaGovernableStorageLocation

```solidity
bytes32 private constant MakinaGovernableStorageLocation =
    0x7e702089668346e906996be6de3dfc0cb2b0c125fc09b3c0391871825913e000;
```


## Functions
### _getMakinaGovernableStorage


```solidity
function _getMakinaGovernableStorage() internal pure returns (MakinaGovernableStorage storage $);
```

### constructor


```solidity
constructor();
```

### __MakinaGovernable_init


```solidity
function __MakinaGovernable_init(MakinaGovernableInitParams calldata params) internal onlyInitializing;
```

### onlyOperator


```solidity
modifier onlyOperator();
```

### onlyRiskManager


```solidity
modifier onlyRiskManager();
```

### onlyRiskManagerTimelock


```solidity
modifier onlyRiskManagerTimelock();
```

### notRecoveryMode


```solidity
modifier notRecoveryMode();
```

### mechanic

Address of the mechanic.


```solidity
function mechanic() public view override returns (address);
```

### securityCouncil

Address of the security council.


```solidity
function securityCouncil() public view override returns (address);
```

### riskManager

Address of the risk manager.


```solidity
function riskManager() public view override returns (address);
```

### riskManagerTimelock

Address of the risk manager timelock.


```solidity
function riskManagerTimelock() public view override returns (address);
```

### recoveryMode

True if the contract is in recovery mode, false otherwise.


```solidity
function recoveryMode() public view returns (bool);
```

### setMechanic

Sets a new mechanic.


```solidity
function setMechanic(address newMechanic) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMechanic`|`address`|The address of new mechanic.|


### setSecurityCouncil

Sets a new security council.


```solidity
function setSecurityCouncil(address newSecurityCouncil) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newSecurityCouncil`|`address`|The address of the new security council.|


### setRiskManager

Sets a new risk manager.


```solidity
function setRiskManager(address newRiskManager) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRiskManager`|`address`|The address of the new risk manager.|


### setRiskManagerTimelock

Sets a new risk manager timelock.


```solidity
function setRiskManagerTimelock(address newRiskManagerTimelock) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRiskManagerTimelock`|`address`|The address of the new risk manager timelock.|


### setRecoveryMode

Sets the recovery mode.


```solidity
function setRecoveryMode(bool enabled) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|True to enable recovery mode, false to disable it.|


## Structs
### MakinaGovernableStorage
**Note:**
storage-location: erc7201:makina.storage.MakinaGovernable


```solidity
struct MakinaGovernableStorage {
    address _mechanic;
    address _securityCouncil;
    address _riskManager;
    address _riskManagerTimelock;
    bool _recoveryMode;
}
```

