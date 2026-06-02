# CastHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/weiroll-helpers/CastHelper.sol)

## Functions

### int256ToUint256

See [SafeCast-toUint256](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v5.6.1/lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol/library.SafeCast.md#touint256).

```solidity
function int256ToUint256(int256 value) external pure returns (uint256);
```

### uint256ToInt256

See [SafeCast-toInt256](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v5.6.1/lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol/library.SafeCast.md#toint256).

```solidity
function uint256ToInt256(uint256 value) external pure returns (int256);
```

### bytesToString

Cast a bytes value to its string representation.

```solidity
function bytesToString(bytes calldata b) external pure returns (string memory);
```
