# Whitelist

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/utils/Whitelist.sol)

**Inherits:**
Initializable, [IWhitelist](/contracts/periphery/interfaces/IWhitelist.sol/interface.IWhitelist.md)

## State Variables

### WhitelistStorageLocation

```solidity
bytes32 private constant WhitelistStorageLocation =
    0x8ecd71e87c506d6932770ce52ba8e8dc85963cc6e1a5097e1b32e68fbabfcb00
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
modifier whitelistCheck() ;
```

### isWhitelistEnabled

True if whitelist is enabled, false otherwise.

```solidity
function isWhitelistEnabled() public view override returns (bool);
```

### isWhitelistedUser

User => Whitelisting status.

```solidity
function isWhitelistedUser(address user) public view override returns (bool);
```

### \_setWhitelistStatus

Internal function to set the whitelist status.

```solidity
function _setWhitelistStatus(bool enabled) internal;
```

### \_setWhitelistedUsers

Internal function to set the whitelisted users.

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
