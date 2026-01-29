# IAcrossV3SpokePool

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/IAcrossV3SpokePool.sol)

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
