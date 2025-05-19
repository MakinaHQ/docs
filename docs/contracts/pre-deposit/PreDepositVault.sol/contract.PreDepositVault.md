# PreDepositVault
[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/pre-deposit/PreDepositVault.sol)

**Inherits:**
AccessManagedUpgradeable, [MakinaContext](docs/contracts/utils/MakinaContext.sol/abstract.MakinaContext.md), [IPreDepositVault](docs/contracts/interfaces/IPreDepositVault.sol/interface.IPreDepositVault.md)


## State Variables
### PreDepositVaultStorageLocation

```solidity
bytes32 private constant PreDepositVaultStorageLocation =
    0x88ccda4670a9221204e56c6b7ced9d52994799751a70ced770588fb180e5dd00;
```


## Functions
### _getPreDepositVaultStorage


```solidity
function _getPreDepositVaultStorage() private pure returns (PreDepositVaultStorage storage $);
```

### constructor


```solidity
constructor(address _registry) MakinaContext(_registry);
```

### initialize

Initializer of the contract.


```solidity
function initialize(
    PreDepositVaultInitParams calldata params,
    address _shareToken,
    address _depositToken,
    address _accountingToken
) external override initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`PreDepositVaultInitParams`|The initialization parameters.|
|`_shareToken`|`address`||
|`_depositToken`|`address`||
|`_accountingToken`|`address`||


### notMigrated


```solidity
modifier notMigrated();
```

### migrated

Whether the vault has migrated to a machine instance.


```solidity
function migrated() external view override returns (bool);
```

### machine

Address of the machine, set during migration.


```solidity
function machine() external view override returns (address);
```

### riskManager

Address of the risk manager.


```solidity
function riskManager() external view override returns (address);
```

### whitelistMode

True if the vault is in whitelist mode, false otherwise.


```solidity
function whitelistMode() external view override returns (bool);
```

### isWhitelistedUser

User => Whitelisting status.


```solidity
function isWhitelistedUser(address user) external view override returns (bool);
```

### depositToken

Address of the deposit token.


```solidity
function depositToken() external view override returns (address);
```

### accountingToken

Address of the accounting token.


```solidity
function accountingToken() external view override returns (address);
```

### shareToken

Address of the share token.


```solidity
function shareToken() external view override returns (address);
```

### shareLimit

Share token supply limit that cannot be exceeded by new deposits.


```solidity
function shareLimit() external view override returns (uint256);
```

### maxDeposit

Maximum amount of assets that can currently be deposited in the vault.


```solidity
function maxDeposit() public view override returns (uint256);
```

### totalAssets

Total amount of depositToken managed by the vault.


```solidity
function totalAssets() external view override returns (uint256);
```

### previewDeposit

Amount of shares minted against a given amount of assets.


```solidity
function previewDeposit(uint256 assets) public view override notMigrated returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`||


### previewRedeem

Amount of assets that can be withdrawn against a given amount of shares.


```solidity
function previewRedeem(uint256 shares) public view override notMigrated returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`||


### deposit

Deposits a given amount of assets and mints shares to the receiver.


```solidity
function deposit(uint256 assets, address receiver, uint256 minShares) external override notMigrated returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`||
|`receiver`|`address`|The receiver of the shares.|
|`minShares`|`uint256`|The minimum amount of shares to be minted.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares The amount of shares minted.|


### redeem

Burns exactly shares from caller and transfers the corresponding amount of assets to the receiver.


```solidity
function redeem(uint256 shares, address receiver, uint256 minAssets) external override notMigrated returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`||
|`receiver`|`address`|The receiver of withdrawn assets.|
|`minAssets`|`uint256`|The minimum amount of assets to be transferred.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|assets The amount of assets transferred.|


### migrateToMachine

Migrates the pre-deposit vault to the machine.


```solidity
function migrateToMachine() external override notMigrated;
```

### setPendingMachine

Sets the machine address to migrate to.


```solidity
function setPendingMachine(address _machine) external override notMigrated;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_machine`|`address`||


### setShareLimit

Sets the new share token supply limit that cannot be exceeded by new deposits.


```solidity
function setShareLimit(uint256 newShareLimit) external override notMigrated;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newShareLimit`|`uint256`|The new share limit|


### setRiskManager

Sets the risk manager address.


```solidity
function setRiskManager(address _riskManager) external override restricted notMigrated;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_riskManager`|`address`||


### setWhitelistedUsers

Whitelist or unwhitelist a list of users.


```solidity
function setWhitelistedUsers(address[] calldata users, bool whitelisted) external override restricted notMigrated;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`users`|`address[]`|The addresses of the users to update.|
|`whitelisted`|`bool`|True to whitelist the users, false to unwhitelist.|


### setWhitelistMode

Sets the whitelist mode for the vault.

*In whitelist mode, only whitelisted users can deposit.*


```solidity
function setWhitelistMode(bool enabled) external override restricted notMigrated;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|True to enable whitelist mode, false to disable.|


## Structs
### PreDepositVaultStorage
**Note:**
storage-location: erc7201:makina.storage.PreDepositVault


```solidity
struct PreDepositVaultStorage {
    address _depositToken;
    address _accountingToken;
    address _shareToken;
    uint256 _shareTokenDecimalsOffset;
    uint256 _shareLimit;
    address _riskManager;
    address _machine;
    bool _migrated;
    bool _whitelistMode;
    mapping(address => bool) _isWhitelistedUser;
}
```

