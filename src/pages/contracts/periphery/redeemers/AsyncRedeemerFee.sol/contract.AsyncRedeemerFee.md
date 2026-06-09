# AsyncRedeemerFee

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/redeemers/AsyncRedeemerFee.sol)

**Inherits:**
[AsyncRedeemer](/contracts/periphery/redeemers/AsyncRedeemer.sol/contract.AsyncRedeemer.md), [IAsyncRedeemerFee](/contracts/periphery/interfaces/IAsyncRedeemerFee.sol/interface.IAsyncRedeemerFee.md)

## State Variables

### MAX_FEE_RATE

Full scale value for fee rates

```solidity
uint256 private constant MAX_FEE_RATE = 1e18
```

### AsyncRedeemerFeeStorageLocation

```solidity
bytes32 private constant AsyncRedeemerFeeStorageLocation =
    0x4eaf1c06329b25f7c60609294578a9146a4886ea6d8691dc44ba3ed4cef8b500
```

## Functions

### \_getAsyncRedeemerFeeStorage

```solidity
function _getAsyncRedeemerFeeStorage() private pure returns (AsyncRedeemerFeeStorage storage $);
```

### constructor

```solidity
constructor(address _registry) AsyncRedeemer(_registry);
```

### initialize

Initializer of the contract.

```solidity
function initialize(bytes calldata data) external virtual override(AsyncRedeemer, IMachinePeriphery) initializer;
```

**Parameters**

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| `data` | `bytes` |             |

### redeemFeeRate

Redeem fee rate. 1e18 = 100%.

```solidity
function redeemFeeRate() external view override returns (uint256);
```

### maxRedeemFeeRate

Maximum redeem fee rate that can be set. 1e18 = 100%.

```solidity
function maxRedeemFeeRate() external view override returns (uint256);
```

### setRedeemFeeRate

Sets the redeem fee rate.

```solidity
function setRedeemFeeRate(uint256 newRedeemFeeRate) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name               | Type      | Description                           |
| ------------------ | --------- | ------------------------------------- |
| `newRedeemFeeRate` | `uint256` | The new redeem fee rate. 1e18 = 100%. |

### \_previewRedeem

Returns the amount of assets that can be obtained against a given amount of shares, under current market conditions.

```solidity
function _previewRedeem(uint256 shares) internal view virtual override returns (uint256);
```

## Structs

### AsyncRedeemerFeeStorage

**Note:**
storage-location: erc7201:makina.storage.AsyncRedeemerFee

```solidity
struct AsyncRedeemerFeeStorage {
    uint256 _redeemFeeRate;
    uint256 _maxRedeemFeeRate;
}
```
