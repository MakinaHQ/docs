# ISecurityModule

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/ISecurityModule.sol)

**Inherits:**
IERC20Metadata, [IMachinePeriphery](/contracts/periphery/interfaces/IMachinePeriphery.sol/interface.IMachinePeriphery.md)

## Functions

### machineShare

Address of the machine share token locked in this contract.

```solidity
function machineShare() external view returns (address);
```

### cooldownReceipt

Address of the cooldown receipt NFT.

```solidity
function cooldownReceipt() external view returns (address);
```

### cooldownDuration

Cooldown duration in seconds for unlocking.

```solidity
function cooldownDuration() external view returns (uint256);
```

### maxSlashableBps

Maximum slashable proportion of the vault balance in basis points.

```solidity
function maxSlashableBps() external view returns (uint256);
```

### minBalanceAfterSlash

Minimum balance that must remain in the vault after a slash.

```solidity
function minBalanceAfterSlash() external view returns (uint256);
```

### pendingCooldown

Returns data of a pending cooldown.

```solidity
function pendingCooldown(uint256 cooldownId)
    external
    view
    returns (uint256 shares, uint256 currentExpectedAssets, uint256 maturity);
```

**Parameters**

| Name         | Type      | Description                                                           |
| ------------ | --------- | --------------------------------------------------------------------- |
| `cooldownId` | `uint256` | The ID of the cooldown receipt NFT representing the pending cooldown. |

**Returns**

| Name                    | Type      | Description                                                                         |
| ----------------------- | --------- | ----------------------------------------------------------------------------------- |
| `shares`                | `uint256` | The amount of security shares to be redeemed.                                       |
| `currentExpectedAssets` | `uint256` | The current expected amount of machine shares that can be redeemed.                 |
| `maturity`              | `uint256` | The timestamp at which the cooldown period will end and the shares can be redeemed. |

### slashingMode

Whether the security module is in slashing mode.

```solidity
function slashingMode() external view returns (bool);
```

### totalLockedAmount

Total amount of machine shares locked in the module.

```solidity
function totalLockedAmount() external view returns (uint256);
```

### maxSlashable

Total amount of machine shares currently slashable in the module.

```solidity
function maxSlashable() external view returns (uint256);
```

### convertToShares

Converts machine shares to security shares.

```solidity
function convertToShares(uint256 assets) external view returns (uint256 shares);
```

**Parameters**

| Name     | Type      | Description                              |
| -------- | --------- | ---------------------------------------- |
| `assets` | `uint256` | The amount of machine shares to convert. |

**Returns**

| Name     | Type      | Description                                                              |
| -------- | --------- | ------------------------------------------------------------------------ |
| `shares` | `uint256` | The amount of security shares corresponding to the input machine shares. |

### convertToAssets

Converts security shares to machine shares.

```solidity
function convertToAssets(uint256 shares) external view returns (uint256 assets);
```

**Parameters**

| Name     | Type      | Description                               |
| -------- | --------- | ----------------------------------------- |
| `shares` | `uint256` | The amount of security shares to convert. |

**Returns**

| Name     | Type      | Description                                                              |
| -------- | --------- | ------------------------------------------------------------------------ |
| `assets` | `uint256` | The amount of machine shares corresponding to the input security shares. |

### previewLock

Estimates the amount of security shares that would be received for a given amount of machine shares.

```solidity
function previewLock(uint256 assets) external view returns (uint256 shares);
```

**Parameters**

| Name     | Type      | Description                              |
| -------- | --------- | ---------------------------------------- |
| `assets` | `uint256` | The amount of machine shares to convert. |

**Returns**

| Name     | Type      | Description                                                                        |
| -------- | --------- | ---------------------------------------------------------------------------------- |
| `shares` | `uint256` | The estimated amount of security shares corresponding to the input machine shares. |

### lock

Locks machine shares in the module and mints security shares.

```solidity
function lock(uint256 assets, address receiver, uint256 minShares) external returns (uint256 shares);
```

**Parameters**

| Name        | Type      | Description                                        |
| ----------- | --------- | -------------------------------------------------- |
| `assets`    | `uint256` | The amount of machine shares to lock.              |
| `receiver`  | `address` | The address that will receive the security shares. |
| `minShares` | `uint256` | The minimum amount of security shares to receive.  |

**Returns**

| Name     | Type      | Description                           |
| -------- | --------- | ------------------------------------- |
| `shares` | `uint256` | The amount of security shares minted. |

### startCooldown

Requests a cooldown for redeeming security shares.
Shares are locked in the contract until the cooldown is cancelled or expires.
A cooldown receipt NFT is minted to the specified receiver address.

```solidity
function startCooldown(uint256 shares, address receiver)
    external
    returns (uint256 cooldownId, uint256 maxAssets, uint256 maturity);
```

**Parameters**

| Name       | Type      | Description                                         |
| ---------- | --------- | --------------------------------------------------- |
| `shares`   | `uint256` | The amount of security shares to redeem.            |
| `receiver` | `address` | The address that will receive the cooldown receipt. |

**Returns**

| Name         | Type      | Description                                                                         |
| ------------ | --------- | ----------------------------------------------------------------------------------- |
| `cooldownId` | `uint256` | The ID of the minted cooldown receipt NFT representing the pending cooldown.        |
| `maxAssets`  | `uint256` | The maximum amount of machine shares that can be redeemed.                          |
| `maturity`   | `uint256` | The timestamp at which the cooldown period will end and the shares can be redeemed. |

### cancelCooldown

Cancels a pending cooldown.
Shares for which the cooldown was cancelled are transferred back to caller.
The associated cooldown receipt NFT is burned.

```solidity
function cancelCooldown(uint256 cooldownId) external returns (uint256 shares);
```

**Parameters**

| Name         | Type      | Description                                                           |
| ------------ | --------- | --------------------------------------------------------------------- |
| `cooldownId` | `uint256` | The ID of the cooldown receipt NFT representing the pending cooldown. |

**Returns**

| Name     | Type      | Description                                                         |
| -------- | --------- | ------------------------------------------------------------------- |
| `shares` | `uint256` | The amount of security shares for which the cooldown was cancelled. |

### redeem

Redeems security shares and transfers machine shares to caller.

```solidity
function redeem(uint256 cooldownId, uint256 minAssets) external returns (uint256 assets);
```

**Parameters**

| Name         | Type      | Description                                                           |
| ------------ | --------- | --------------------------------------------------------------------- |
| `cooldownId` | `uint256` | The ID of the cooldown receipt NFT representing the pending cooldown. |
| `minAssets`  | `uint256` | The minimum amount of machine shares to receive.                      |

**Returns**

| Name     | Type      | Description                                               |
| -------- | --------- | --------------------------------------------------------- |
| `assets` | `uint256` | The amount of machine shares transferred to the receiver. |

### slash

Slashes a specified amount from the total locked amount and triggers the slashing mode.

```solidity
function slash(uint256 amount) external;
```

**Parameters**

| Name     | Type      | Description                                       |
| -------- | --------- | ------------------------------------------------- |
| `amount` | `uint256` | The amount to slash from the total locked amount. |

### settleSlashing

Settles the current slashing, allowing the contract to exit slashing mode and resume normal operations.

```solidity
function settleSlashing() external;
```

### setCooldownDuration

Sets the cooldown duration for unlocking.

```solidity
function setCooldownDuration(uint256 newCooldownDuration) external;
```

**Parameters**

| Name                  | Type      | Description                           |
| --------------------- | --------- | ------------------------------------- |
| `newCooldownDuration` | `uint256` | The new cooldown duration in seconds. |

### setMaxSlashableBps

Sets the maximum slashable proportion of the vault balance in basis points.

```solidity
function setMaxSlashableBps(uint256 newMaxSlashableBps) external;
```

**Parameters**

| Name                 | Type      | Description                                           |
| -------------------- | --------- | ----------------------------------------------------- |
| `newMaxSlashableBps` | `uint256` | The new maximum slashable proportion in basis points. |

### setMinBalanceAfterSlash

Sets the minimum balance that must remain in the vault after a slash.

```solidity
function setMinBalanceAfterSlash(uint256 newMinBalanceAfterSlash) external;
```

**Parameters**

| Name                      | Type      | Description                          |
| ------------------------- | --------- | ------------------------------------ |
| `newMinBalanceAfterSlash` | `uint256` | The new minimum balance after slash. |

## Events

### Cooldown

```solidity
event Cooldown(
    uint256 indexed cooldownId, address indexed account, address indexed receiver, uint256 shares, uint256 maturity
);
```

### CooldownCancelled

```solidity
event CooldownCancelled(uint256 indexed cooldownId, address indexed receiver, uint256 shares);
```

### CooldownDurationChanged

```solidity
event CooldownDurationChanged(uint256 oldCooldownDuration, uint256 newCooldownDuration);
```

### MaxSlashableBpsChanged

```solidity
event MaxSlashableBpsChanged(uint256 oldMaxSlashableBps, uint256 newMaxSlashableBps);
```

### MinBalanceAfterSlashChanged

```solidity
event MinBalanceAfterSlashChanged(uint256 oldMinBalanceAfterSlash, uint256 newMinBalanceAfterSlash);
```

### Lock

```solidity
event Lock(address indexed account, address indexed receiver, uint256 assets, uint256 shares);
```

### Redeem

```solidity
event Redeem(uint256 indexed cooldownId, address indexed receiver, uint256 assets, uint256 shares);
```

### Slash

```solidity
event Slash(uint256 amount);
```

### SlashingSettled

```solidity
event SlashingSettled();
```

## Structs

### SecurityModuleInitParams

Initialization parameters.

```solidity
struct SecurityModuleInitParams {
    address machineShare;
    uint256 initialCooldownDuration;
    uint256 initialMaxSlashableBps;
    uint256 initialMinBalanceAfterSlash;
}
```

**Properties**

| Name                          | Type      | Description                                                            |
| ----------------------------- | --------- | ---------------------------------------------------------------------- |
| `machineShare`                | `address` | The address of the machine share token locked in this contract.        |
| `initialCooldownDuration`     | `uint256` | The cooldown duration in seconds for unlocking.                        |
| `initialMaxSlashableBps`      | `uint256` | The maximum slashable proportion of the vault balance in basis points. |
| `initialMinBalanceAfterSlash` | `uint256` | The minimum balance that must remain in the vault after a slash.       |

### PendingCooldown

Pending cooldown parameters.

```solidity
struct PendingCooldown {
    uint256 shares;
    uint256 maxAssets;
    uint256 maturity;
}
```

**Properties**

| Name        | Type      | Description                                                                         |
| ----------- | --------- | ----------------------------------------------------------------------------------- |
| `shares`    | `uint256` | The amount of security shares to be redeemed.                                       |
| `maxAssets` | `uint256` | The maximum amount of machine shares that can be redeemed.                          |
| `maturity`  | `uint256` | The timestamp at which the cooldown period will end and the shares can be redeemed. |
