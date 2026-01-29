# SignedMathHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/weiroll-helpers/SignedMathHelper.sol)

## Functions

### add

Returns the addition of two int256.

```solidity
function add(int256 a, int256 b) external pure returns (int256);
```

### sub

Returns the subtraction of two int256.

```solidity
function sub(int256 a, int256 b) external pure returns (int256);
```

### mul

Returns the multiplication of two int256.

```solidity
function mul(int256 a, int256 b) external pure returns (int256);
```

### div

Returns the division of two int256.

```solidity
function div(int256 a, int256 b) external pure returns (int256);
```

### max

_See [SignedMath-max](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/SignedMath.sol#L31)._

```solidity
function max(int256 a, int256 b) external pure returns (int256);
```

### min

_See [SignedMath-min](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/SignedMath.sol#L38)._

```solidity
function min(int256 a, int256 b) external pure returns (int256);
```

### average

_See [SignedMath-average](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/SignedMath.sol#L46)._

```solidity
function average(int256 a, int256 b) external pure returns (int256);
```

### abs

_See [SignedMath-abs](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/SignedMath.sol#L55)._

```solidity
function abs(int256 a) external pure returns (uint256);
```
