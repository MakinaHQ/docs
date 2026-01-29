# CastHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/weiroll-helpers/CastHelper.sol)

## Functions

### int256ToUint256

See [SafeCast-toUint256](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/SafeCast.sol#L574).

```solidity
function int256ToUint256(int256 value) external pure returns (uint256);
```

### uint256ToInt256

See [SafeCast-toInt256](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/a1a0a67a2050f5b0edac2bb64ba679cb07a88943/contracts/utils/math/SafeCast.sol#L1146).

```solidity
function uint256ToInt256(uint256 value) external pure returns (int256);
```

### bytesToString

Cast a bytes value to its string representation.

```solidity
function bytesToString(bytes calldata b) external pure returns (string memory);
```
