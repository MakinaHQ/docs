# IWhitelist

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/interfaces/IWhitelist.sol)

## Functions

### isWhitelistEnabled

True if whitelist is enabled, false otherwise.

```solidity
function isWhitelistEnabled() external view returns (bool);
```

### isWhitelistedUser

User => Whitelisting status.

```solidity
function isWhitelistedUser(address user) external view returns (bool);
```

### setWhitelistStatus

Enables or disables the whitelist.

```solidity
function setWhitelistStatus(bool enabled) external;
```

**Parameters**

| Name      | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `enabled` | `bool` | True to enable the whitelist, false to disable. |

### setWhitelistedUsers

Whitelists or unwhitelists a list of users.

```solidity
function setWhitelistedUsers(address[] calldata users, bool whitelisted) external;
```

**Parameters**

| Name          | Type        | Description                                        |
| ------------- | ----------- | -------------------------------------------------- |
| `users`       | `address[]` | The addresses of the users to update.              |
| `whitelisted` | `bool`      | True to whitelist the users, false to unwhitelist. |

## Events

### UserWhitelistingChanged

```solidity
event UserWhitelistingChanged(address indexed user, bool indexed whitelisted);
```

### WhitelistStatusChanged

```solidity
event WhitelistStatusChanged(bool indexed enabled);
```
