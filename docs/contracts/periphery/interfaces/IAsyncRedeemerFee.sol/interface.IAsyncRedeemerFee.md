# IAsyncRedeemerFee

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IAsyncRedeemerFee.sol)

**Inherits:**
[IAsyncRedeemer](/contracts/periphery/interfaces/IAsyncRedeemer.sol/interface.IAsyncRedeemer.md)

## Functions

### redeemFeeRate

Redeem fee rate. 1e18 = 100%.

```solidity
function redeemFeeRate() external view returns (uint256);
```

### maxRedeemFeeRate

Maximum redeem fee rate that can be set. 1e18 = 100%.

```solidity
function maxRedeemFeeRate() external view returns (uint256);
```

### setRedeemFeeRate

Sets the redeem fee rate.

```solidity
function setRedeemFeeRate(uint256 newRedeemFeeRate) external;
```

**Parameters**

| Name               | Type      | Description                           |
| ------------------ | --------- | ------------------------------------- |
| `newRedeemFeeRate` | `uint256` | The new redeem fee rate. 1e18 = 100%. |

## Events

### RedeemFeeRateChanged

```solidity
event RedeemFeeRateChanged(uint256 oldRate, uint256 newRate);
```
