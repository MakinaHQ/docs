# SecurityModule
[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/security-module/SecurityModule.sol)

**Inherits:**
ERC20Upgradeable, ReentrancyGuardUpgradeable, [MachinePeriphery](/src/utils/MachinePeriphery.sol/abstract.MachinePeriphery.md), [ISecurityModule](/src/interfaces/ISecurityModule.sol/interface.ISecurityModule.md)


## State Variables
### MAX_BPS
*Full scale value in basis points*


```solidity
uint256 private constant MAX_BPS = 10_000;
```


### SecurityModuleStorageLocation

```solidity
bytes32 private constant SecurityModuleStorageLocation =
    0x008282b5c1b058474ce5feb89ba7468762b87f27435b2f525bf76e3e0c3af500;
```


## Functions
### _getSecurityModuleStorage


```solidity
function _getSecurityModuleStorage() private pure returns (SecurityModuleStorage storage $);
```

### constructor


```solidity
constructor(address _peripheryRegistry) MachinePeriphery(_peripheryRegistry);
```

### initialize


```solidity
function initialize(bytes calldata _data) external virtual initializer;
```

### NotSlashingMode


```solidity
modifier NotSlashingMode();
```

### decimals

*Returns the decimals places of the token.*


```solidity
function decimals() public pure override(ERC20Upgradeable, IERC20Metadata) returns (uint8);
```

### machine

Address of the associated machine.


```solidity
function machine() public view override(IMachinePeriphery, MachinePeriphery) returns (address);
```

### machineShare

Address of the machine share token locked in this contract.


```solidity
function machineShare() public view override returns (address);
```

### cooldownReceipt

Address of the cooldown receipt NFT.


```solidity
function cooldownReceipt() public view override returns (address);
```

### cooldownDuration

Cooldown duration in seconds for unlocking.


```solidity
function cooldownDuration() public view override returns (uint256);
```

### maxSlashableBps

Maximum slashable proportion of the vault balance in basis points.


```solidity
function maxSlashableBps() public view override returns (uint256);
```

### minBalanceAfterSlash

Minimum balance that must remain in the vault after a slash.


```solidity
function minBalanceAfterSlash() public view override returns (uint256);
```

### pendingCooldown

Cooldown ID => Pending cooldown data


```solidity
function pendingCooldown(uint256 cooldownId) external view override returns (uint256 shares, uint256 maturity);
```

### slashingMode

Whether the security module is in slashing mode.


```solidity
function slashingMode() public view override returns (bool);
```

### totalLockedAmount

Total amount of machine shares locked in the module.


```solidity
function totalLockedAmount() public view override returns (uint256);
```

### maxSlashable

Total amount of machine shares currently slashable in the module.


```solidity
function maxSlashable() public view override returns (uint256);
```

### convertToShares

Converts machine shares to security shares.


```solidity
function convertToShares(uint256 assets) public view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|Amount of machine shares to convert.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares Amount of security shares corresponding to the input machine shares.|


### convertToAssets

Converts security shares to machine shares.


```solidity
function convertToAssets(uint256 shares) public view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|Amount of security shares to convert.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|assets Amount of machine shares corresponding to the input security shares.|


### previewLock

Estimates the amount of security shares that would be received for a given amount of machine shares.


```solidity
function previewLock(uint256 assets) public view override NotSlashingMode returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|Amount of machine shares to convert.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares Estimated amount of security shares corresponding to the input machine shares.|


### lock

Locks machine shares in the module and mints security shares.


```solidity
function lock(uint256 assets, address receiver, uint256 minShares)
    external
    override
    nonReentrant
    NotSlashingMode
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|Amount of machine shares to lock.|
|`receiver`|`address`|Address that will receive the security shares.|
|`minShares`|`uint256`|Minimum amount of security shares to receive.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares Amount of security shares minted.|


### startCooldown

Requests a cooldown for redeeming security shares.
Shares are locked in the contract until the cooldown is cancelled or expires.
A cooldown receipt NFT is minted to the specified receiver address.


```solidity
function startCooldown(uint256 shares, address receiver) external override nonReentrant returns (uint256, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|Amount of security shares to redeem.|
|`receiver`|`address`|Address that will receive the cooldown receipt.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|cooldownId ID of the minted cooldown receipt NFT representing the pending cooldown.|
|`<none>`|`uint256`|maturity Timestamp at which the cooldown period will end and the shares can be redeemed.|


### cancelCooldown

Cancels a pending cooldown.
Shares for which the cooldown was cancelled are transferred back to caller.
The associated cooldown receipt NFT is burned.


```solidity
function cancelCooldown(uint256 cooldownId) external override nonReentrant returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`cooldownId`|`uint256`|ID of the cooldown receipt NFT representing the pending cooldown.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares Amount of security shares for which the cooldown was cancelled.|


### redeem

Redeems security shares and transfers machine shares to caller.


```solidity
function redeem(uint256 cooldownId, uint256 minAssets) external override nonReentrant returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`cooldownId`|`uint256`|ID of the cooldown receipt NFT representing the pending cooldown.|
|`minAssets`|`uint256`|Minimum amount of machine shares to receive.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|assets Amount of machine shares transferred to the receiver.|


### slash

Slashes a specified amount from the total locked amount and triggers the slashing mode.


```solidity
function slash(uint256 amount) external override nonReentrant onlySecurityCouncil;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|Amount to slash from the total locked amount.|


### settleSlashing

Settles the current slashing, allowing the contract to exit slashing mode and resume normal operations.


```solidity
function settleSlashing() external override onlySecurityCouncil;
```

### setCooldownDuration

Sets the cooldown duration for unlocking.


```solidity
function setCooldownDuration(uint256 newCooldownDuration) external override onlyRiskManagerTimelock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newCooldownDuration`|`uint256`||


### setMaxSlashableBps

Sets the maximum slashable proportion of the vault balance in basis points.


```solidity
function setMaxSlashableBps(uint256 newMaxSlashableBps) external override onlyRiskManagerTimelock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMaxSlashableBps`|`uint256`||


### setMinBalanceAfterSlash

Sets the minimum balance that must remain in the vault after a slash.


```solidity
function setMinBalanceAfterSlash(uint256 newMinBalanceAfterSlash) external override onlyRiskManagerTimelock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMinBalanceAfterSlash`|`uint256`||


### _setMachine

*Disables machine setter from parent MachinePeriphery contract.*


```solidity
function _setMachine(address) internal pure override;
```

### _checkReceiptOwner

*Checks that caller is the owner of the cooldown receipt NFT.*


```solidity
function _checkReceiptOwner(uint256 cooldownId) internal view returns (address);
```

## Structs
### SecurityModuleStorage
**Note:**
storage-location: erc7201:makina.storage.SecurityModule


```solidity
struct SecurityModuleStorage {
    address _machineShare;
    address _cooldownReceipt;
    uint256 _cooldownDuration;
    uint256 _maxSlashableBps;
    uint256 _minBalanceAfterSlash;
    mapping(uint256 cooldownId => PendingCooldown cooldownData) _pendingCooldowns;
    bool _slashingMode;
}
```

