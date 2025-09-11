# IFeeManager
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/IFeeManager.sol)


## Functions
### calculateFixedFee

Calculates the fixed fee for a given share supply and elapsed time.

*May update internal state related to fee accrual or realization.*


```solidity
function calculateFixedFee(uint256 shareSupply, uint256 elapsedTime) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shareSupply`|`uint256`|The total supply of shares.|
|`elapsedTime`|`uint256`|The elapsed time since the last fee realization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|fee The calculated fixed fee.|


### calculatePerformanceFee

Calculates the performance fee based on the share supply, share price performance and elapsed time.

*May update internal state related to fee accrual or realization.*


```solidity
function calculatePerformanceFee(
    uint256 currentShareSupply,
    uint256 oldSharePrice,
    uint256 newSharePrice,
    uint256 elapsedTime
) external returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`currentShareSupply`|`uint256`|The current total supply of shares.|
|`oldSharePrice`|`uint256`|The previous share price of reference.|
|`newSharePrice`|`uint256`|The new share price of reference.|
|`elapsedTime`|`uint256`|The elapsed time since the last fee realization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|fee The calculated performance fee.|


### distributeFees

Distributes the fees to relevant recipients.


```solidity
function distributeFees(uint256 fixedFee, uint256 perfFee) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`fixedFee`|`uint256`|The fixed fee amount to be distributed.|
|`perfFee`|`uint256`|The performance fee amount to be distributed.|


