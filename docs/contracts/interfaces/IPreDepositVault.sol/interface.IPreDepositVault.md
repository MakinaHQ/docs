# IPreDepositVault
[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/interfaces/IPreDepositVault.sol)


## Functions
### initialize

Initializer of the contract.


```solidity
function initialize(
    PreDepositVaultInitParams calldata params,
    address shareToken,
    address depositToken,
    address accountingToken
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`PreDepositVaultInitParams`|The initialization parameters.|
|`shareToken`|`address`|The address of the share token.|
|`depositToken`|`address`|The address of the deposit token.|
|`accountingToken`|`address`|The address of the accounting token.|


### migrated

Whether the vault has migrated to a machine instance.


```solidity
function migrated() external view returns (bool);
```

### machine

Address of the machine, set during migration.


```solidity
function machine() external view returns (address);
```

### riskManager

Address of the risk manager.


```solidity
function riskManager() external view returns (address);
```

### whitelistMode

True if the vault is in whitelist mode, false otherwise.


```solidity
function whitelistMode() external view returns (bool);
```

### isWhitelistedUser

User => Whitelisting status.


```solidity
function isWhitelistedUser(address user) external view returns (bool);
```

### depositToken

Address of the deposit token.


```solidity
function depositToken() external view returns (address);
```

### accountingToken

Address of the accounting token.


```solidity
function accountingToken() external view returns (address);
```

### shareToken

Address of the share token.


```solidity
function shareToken() external view returns (address);
```

### shareLimit

Share token supply limit that cannot be exceeded by new deposits.


```solidity
function shareLimit() external view returns (uint256);
```

### maxDeposit

Maximum amount of assets that can currently be deposited in the vault.


```solidity
function maxDeposit() external view returns (uint256);
```

### totalAssets

Total amount of depositToken managed by the vault.


```solidity
function totalAssets() external view returns (uint256);
```

### previewDeposit

Amount of shares minted against a given amount of assets.


```solidity
function previewDeposit(uint256 amount) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of assets to be deposited.|


### previewRedeem

Amount of assets that can be withdrawn against a given amount of shares.


```solidity
function previewRedeem(uint256 amount) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of shares to be redeemed.|


### deposit

Deposits a given amount of assets and mints shares to the receiver.


```solidity
function deposit(uint256 amount, address receiver, uint256 minShares) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of assets to be deposited.|
|`receiver`|`address`|The receiver of the shares.|
|`minShares`|`uint256`|The minimum amount of shares to be minted.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares The amount of shares minted.|


### redeem

Burns exactly shares from caller and transfers the corresponding amount of assets to the receiver.


```solidity
function redeem(uint256 amount, address receiver, uint256 minAssets) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of shares to be redeemed.|
|`receiver`|`address`|The receiver of withdrawn assets.|
|`minAssets`|`uint256`|The minimum amount of assets to be transferred.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|assets The amount of assets transferred.|


### migrateToMachine

Migrates the pre-deposit vault to the machine.


```solidity
function migrateToMachine() external;
```

### setPendingMachine

Sets the machine address to migrate to.


```solidity
function setPendingMachine(address machine) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`machine`|`address`|The address of the machine.|


### setRiskManager

Sets the risk manager address.


```solidity
function setRiskManager(address newRiskManager) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRiskManager`|`address`|The address of the new risk manager.|


### setShareLimit

Sets the new share token supply limit that cannot be exceeded by new deposits.


```solidity
function setShareLimit(uint256 newShareLimit) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newShareLimit`|`uint256`|The new share limit|


### setWhitelistedUsers

Whitelist or unwhitelist a list of users.


```solidity
function setWhitelistedUsers(address[] calldata users, bool whitelisted) external;
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
function setWhitelistMode(bool enabled) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|True to enable whitelist mode, false to disable.|


## Events
### Deposit

```solidity
event Deposit(address indexed sender, address indexed receiver, uint256 assets, uint256 shares);
```

### MigrateToMachine

```solidity
event MigrateToMachine(address indexed machine);
```

### Redeem

```solidity
event Redeem(address indexed owner, address indexed receiver, uint256 assets, uint256 shares);
```

### RiskManagerChanged

```solidity
event RiskManagerChanged(address indexed oldRiskManager, address indexed newRiskManager);
```

### ShareLimitChanged

```solidity
event ShareLimitChanged(uint256 indexed oldShareLimit, uint256 indexed newShareLimit);
```

### UserWhitelistingChanged

```solidity
event UserWhitelistingChanged(address indexed user, bool indexed whitelisted);
```

### WhitelistModeChanged

```solidity
event WhitelistModeChanged(bool indexed enabled);
```

## Structs
### PreDepositVaultInitParams

```solidity
struct PreDepositVaultInitParams {
    uint256 initialShareLimit;
    bool initialWhitelistMode;
    address initialRiskManager;
    address initialAuthority;
}
```

