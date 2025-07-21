# IAcrossV3SpokePool

[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/interfaces/IAcrossV3SpokePool.sol)

## Functions

### depositV3Now

```solidity
function depositV3Now(
    address depositor,
    address recipient,
    address inputToken,
    address outputToken,
    uint256 inputAmount,
    uint256 outputAmount,
    uint256 destinationChainId,
    address exclusiveRelayer,
    uint32 fillDeadlineOffset,
    uint32 exclusivityParameter,
    bytes calldata message
) external payable;
```
