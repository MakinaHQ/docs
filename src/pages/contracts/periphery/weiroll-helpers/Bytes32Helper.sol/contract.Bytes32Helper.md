# Bytes32Helper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/weiroll-helpers/Bytes32Helper.sol)

## State Variables

### \_INDEX_OUT_OF_BOUNDS_SELECTOR

```solidity
bytes4 private constant _INDEX_OUT_OF_BOUNDS_SELECTOR = 0x4e23d035
```

## Functions

### eq

Returns whether two values are equal.

```solidity
function eq(bytes32 a, bytes32 b) external pure returns (bool);
```

### ternary

Ternary evaluation for bytes32 type.

```solidity
function ternary(bool condition, bytes32 a, bytes32 b) external pure returns (bytes32);
```

### arrayOf

Returns an array from the two given values.

```solidity
function arrayOf(bytes32 a, bytes32 b) external pure returns (bytes32[] memory);
```

### getTupleWord

Returns the 32-byte word at a given index from a bytes-encoded tuple of consecutive 32-byte static values.

```solidity
function getTupleWord(bytes memory tuple, uint256 index) public pure returns (bytes32);
```

### getArrayWord

Returns the 32-byte word at a given index from a dynamic array.

```solidity
function getArrayWord(bytes32[] memory arr, uint256 index) public pure returns (bytes32);
```

## Errors

### IndexOutOfBounds

```solidity
error IndexOutOfBounds();
```
