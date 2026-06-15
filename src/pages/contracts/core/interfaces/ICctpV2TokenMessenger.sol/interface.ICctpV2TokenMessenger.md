# ICctpV2TokenMessenger

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ICctpV2TokenMessenger.sol)

## Functions

### localMinter

```solidity
function localMinter() external view returns (address);
```

### getMinFeeAmount

```solidity
function getMinFeeAmount(uint256 amount) external view returns (uint256);
```

### depositForBurnWithHook

```solidity
function depositForBurnWithHook(
    uint256 amount,
    uint32 destinationDomain,
    bytes32 mintRecipient,
    address burnToken,
    bytes32 destinationCaller,
    uint256 maxFee,
    uint32 minFinalityThreshold,
    bytes calldata hookData
) external;
```
