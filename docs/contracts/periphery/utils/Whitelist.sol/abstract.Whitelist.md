# Whitelist

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/utils/Whitelist.sol)

**Inherits:**
Initializable, [IWhitelist](/contracts/periphery/interfaces/IWhitelist.sol/interface.IWhitelist.md)

## State Variables

### WhitelistStorageLocation

```solidity
bytes32 private constant WhitelistStorageLocation = 0x8ecd71e87c506d6932770ce52ba8e8dc85963cc6e1a5097e1b32e68fbabfcb00;
```

## Functions

### \_getWhitelistStorage

```solidity
function _getWhitelistStorage() private pure returns (WhitelistStorage storage $);
```

### \_\_Whitelist_init

```solidity
function __Whitelist_init(bool _initialWhitelistStatus) internal onlyInitializing;
```

### whitelistCheck

```solidity
modifier whitelistCheck();
```

### isWhitelistEnabled

True if whitelist is enabled, false otherwise.

```solidity
function isWhitelistEnabled() public view returns (bool);
```

### isWhitelistedUser

User => Whitelisting status.

```solidity
function isWhitelistedUser(address user) public view override returns (bool);
```

### \_setWhitelistStatus

_Internal function to set the whitelist status._

```solidity
function _setWhitelistStatus(bool enabled) internal;
```

### \_setWhitelistedUsers

_Internal function to set the whitelisted users._

```solidity
function _setWhitelistedUsers(address[] calldata users, bool whitelisted) internal;
```

## Structs

### WhitelistStorage

**Note:**
storage-location: erc7201:makina.storage.Whitelist

```solidity
struct WhitelistStorage {
    mapping(address user => bool isWhitelisted) _isWhitelistedUser;
    bool _isWhitelistEnabled;
}
```
