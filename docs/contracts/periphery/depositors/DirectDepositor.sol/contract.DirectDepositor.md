# DirectDepositor
[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/depositors/DirectDepositor.sol)

**Inherits:**
[MachinePeriphery](/src/utils/MachinePeriphery.sol/abstract.MachinePeriphery.md), [Whitelist](/src/utils/Whitelist.sol/abstract.Whitelist.md), [IDirectDepositor](/src/interfaces/IDirectDepositor.sol/interface.IDirectDepositor.md)

SPDX-License-Identifier: UNLICENSED


## Functions
### constructor


```solidity
constructor(address _registry) MachinePeriphery(_registry);
```

### initialize


```solidity
function initialize(bytes calldata data) external virtual override initializer;
```

### deposit


```solidity
function deposit(uint256 assets, address receiver, uint256 minShares)
    public
    virtual
    override
    whitelistCheck
    returns (uint256);
```

### setWhitelistStatus

Enables or disables the whitelist.


```solidity
function setWhitelistStatus(bool enabled) external override onlyRiskManager;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|True to enable the whitelist, false to disable.|


### setWhitelistedUsers

Whitelists or unwhitelists a list of users.


```solidity
function setWhitelistedUsers(address[] calldata users, bool whitelisted) external override onlyRiskManager;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`users`|`address[]`|The addresses of the users to update.|
|`whitelisted`|`bool`|True to whitelist the users, false to unwhitelist.|


