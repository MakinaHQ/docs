# BooleanHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/weiroll-helpers/BooleanHelper.sol)

## Functions

### not

logical NOT operation

```solidity
function not(bool x) external pure returns (bool);
```

### and

logical AND operation

```solidity
function and(bool x, bool y) external pure returns (bool);
```

### or

logical OR operation

```solidity
function or(bool x, bool y) external pure returns (bool);
```

### revertIfTrue

Reverts if the condition is true.

```solidity
function revertIfTrue(bool x) external pure;
```

### revertIfFalse

Reverts if the condition is false.

```solidity
function revertIfFalse(bool x) external pure;
```

## Errors

### ConditionIsTrue

```solidity
error ConditionIsTrue();
```

### ConditionIsFalse

```solidity
error ConditionIsFalse();
```
