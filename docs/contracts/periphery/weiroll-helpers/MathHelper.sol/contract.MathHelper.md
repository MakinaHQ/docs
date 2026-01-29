# MathHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/weiroll-helpers/MathHelper.sol)

## Functions

### add

Returns the addition of two uint256.

```solidity
function add(uint256 a, uint256 b) external pure returns (uint256);
```

### sub

Returns the subtraction of two uint256.

```solidity
function sub(uint256 a, uint256 b) external pure returns (uint256);
```

### mul

Returns the multiplication of two uint256.

```solidity
function mul(uint256 a, uint256 b) external pure returns (uint256);
```

### div

Returns the division of two uint256.

```solidity
function div(uint256 a, uint256 b) external pure returns (uint256);
```

### ceilDiv

See [Math-ceilDiv](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L183).

```solidity
function ceilDiv(uint256 a, uint256 b) external pure returns (uint256);
```

### mulDiv

See [Math-mulDiv](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L206).

```solidity
function mulDiv(uint256 x, uint256 y, uint256 denominator) external pure returns (uint256);
```

### ceilMulDiv

See [Math-mulDiv](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L206).

```solidity
function ceilMulDiv(uint256 x, uint256 y, uint256 denominator) external pure returns (uint256);
```

### sqrt

See [Math-sqrt](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L499).

```solidity
function sqrt(uint256 a) external pure returns (uint256);
```

### average

See [Math-average](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L170).

```solidity
function average(uint256 a, uint256 b) external pure returns (uint256);
```

### ternary

See [Math-ternary](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L143).

```solidity
function ternary(bool condition, uint256 a, uint256 b) external pure returns (uint256);
```

### max

See [Math-max](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L155).

```solidity
function max(uint256 a, uint256 b) external pure returns (uint256);
```

### min

See [Math-min](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L162).

```solidity
function min(uint256 a, uint256 b) external pure returns (uint256);
```

### log2

See [Math-log2](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L619).

```solidity
function log2(uint256 x) external pure returns (uint256 r);
```

### log10

See [Math-log10](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L675).

```solidity
function log10(uint256 x) external pure returns (uint256 r);
```

### log256

See [Math-log256](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/Math.sol#L726).

```solidity
function log256(uint256 x) external pure returns (uint256 r);
```

### eq

Returns whether two values are equal.

```solidity
function eq(uint256 a, uint256 b) external pure returns (bool);
```

### lt

Returns whether a value is less than another value.

```solidity
function lt(uint256 a, uint256 b) external pure returns (bool);
```

### lte

Returns whether a value is less than or equal to another value.

```solidity
function lte(uint256 a, uint256 b) external pure returns (bool);
```

### gt

Returns whether a value is greater than another value.

```solidity
function gt(uint256 a, uint256 b) external pure returns (bool);
```

### gte

Returns whether a value is greater than or equal to another value.

```solidity
function gte(uint256 a, uint256 b) external pure returns (bool);
```

### uint128Max

Returns the maximum value of uint128.

```solidity
function uint128Max() external pure returns (uint128);
```

### uint256Max

Returns the maximum value of uint256.

```solidity
function uint256Max() external pure returns (uint256);
```

### scaleAmount

Scales `amount` from `fromDecimals` to `toDecimals`.

_Converts token amounts between different decimal precisions._

**Note:**
warning: Scaling down reduces precision due to integer division truncation.

```solidity
function scaleAmount(uint256 amount, uint8 fromDecimals, uint8 toDecimals) public pure returns (uint256 scaled);
```

**Parameters**

| Name           | Type      | Description                   |
| -------------- | --------- | ----------------------------- |
| `amount`       | `uint256` | The amount to scale.          |
| `fromDecimals` | `uint8`   | The source decimal precision. |
| `toDecimals`   | `uint8`   | The target decimal precision. |

**Returns**

| Name     | Type      | Description                                 |
| -------- | --------- | ------------------------------------------- |
| `scaled` | `uint256` | The amount adjusted to the target decimals. |

## Errors

### DecimalsOutOfRange

```solidity
error DecimalsOutOfRange();
```
