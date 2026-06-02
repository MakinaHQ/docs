# DecimalsUtils

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/libraries/DecimalsUtils.sol)

## State Variables

### MIN_DECIMALS

Supported decimals range for assets

```solidity
uint8 private constant MIN_DECIMALS = 6
```

### MAX_DECIMALS

```solidity
uint8 private constant MAX_DECIMALS = 18
```

### SHARE_TOKEN_DECIMALS

Decimals and unit for machine share token.

```solidity
uint8 internal constant SHARE_TOKEN_DECIMALS = 18
```

### SHARE_TOKEN_UNIT

```solidity
uint256 internal constant SHARE_TOKEN_UNIT = 10 ** SHARE_TOKEN_DECIMALS
```

## Functions

### \_checkDecimals

Checks that asset exposes decimals() and that it is within the supported range.

```solidity
function _checkDecimals(address asset) internal view;
```
