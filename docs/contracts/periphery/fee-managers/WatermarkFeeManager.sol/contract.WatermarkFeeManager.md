# WatermarkFeeManager
[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/fee-managers/WatermarkFeeManager.sol)

**Inherits:**
[MachinePeriphery](/src/utils/MachinePeriphery.sol/abstract.MachinePeriphery.md), AccessManagedUpgradeable, [IWatermarkFeeManager](/src/interfaces/IWatermarkFeeManager.sol/interface.IWatermarkFeeManager.md)

SPDX-License-Identifier: UNLICENSED


## State Variables
### MAX_BPS
*Full scale value in basis points*


```solidity
uint256 private constant MAX_BPS = 10_000;
```


### MAX_FEE_RATE
*Full scale value for fee rates*


```solidity
uint256 private constant MAX_FEE_RATE = 1e18;
```


### WatermarkFeeManagerStorageLocation

```solidity
bytes32 private constant WatermarkFeeManagerStorageLocation =
    0xede173ec12f445c51c989a2ee4f565cf9b40f8a01bd556574a3890308cdf3900;
```


## Functions
### _getWatermarkFeeManagerStorage


```solidity
function _getWatermarkFeeManagerStorage() private pure returns (WatermarkFeeManagerStorage storage $);
```

### constructor


```solidity
constructor(address _registry) MachinePeriphery(_registry);
```

### initialize

Initializer of the contract.


```solidity
function initialize(bytes calldata data) external override initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`||


### onlyMachine


```solidity
modifier onlyMachine();
```

### authority

*Returns the current authority.*


```solidity
function authority() public view override returns (address);
```

### mgmtFeeRatePerSecond

Management fee rate per second, 1e18 = 100%.


```solidity
function mgmtFeeRatePerSecond() external view override returns (uint256);
```

### smFeeRatePerSecond

Security module fee rate per second, 1e18 = 100%.


```solidity
function smFeeRatePerSecond() external view override returns (uint256);
```

### perfFeeRate

Performance fee rate on profit, 1e18 = 100%.


```solidity
function perfFeeRate() external view override returns (uint256);
```

### mgmtFeeReceivers

Fixed fee receivers.


```solidity
function mgmtFeeReceivers() external view override returns (address[] memory);
```

### mgmtFeeSplitBps

Fixed fee split between receivers in basis points. Values must sum to 10_000.


```solidity
function mgmtFeeSplitBps() external view override returns (uint256[] memory);
```

### perfFeeReceivers

Performance fee receivers.


```solidity
function perfFeeReceivers() external view override returns (address[] memory);
```

### perfFeeSplitBps

Performance fee split between receivers in basis points. Values must sum to 10_000.


```solidity
function perfFeeSplitBps() external view override returns (uint256[] memory);
```

### securityModule

Security module address.


```solidity
function securityModule() external view override returns (address);
```

### sharePriceWatermark

Current share price high watermark for the associated Machine.


```solidity
function sharePriceWatermark() external view override returns (uint256);
```

### calculateFixedFee

Calculates the fixed fee for a given share supply and elapsed time.

*May update internal state related to fee accrual or realization.*


```solidity
function calculateFixedFee(uint256 currentShareSupply, uint256 elapsedTime) external view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`currentShareSupply`|`uint256`||
|`elapsedTime`|`uint256`|The elapsed time since the last fee realization.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|fee The calculated fixed fee.|


### calculatePerformanceFee

Calculates the performance fee based on the share supply, share price performance and elapsed time.

*May update internal state related to fee accrual or realization.*


```solidity
function calculatePerformanceFee(uint256 currentShareSupply, uint256, uint256 newSharePrice, uint256)
    external
    override
    onlyMachine
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`currentShareSupply`|`uint256`|The current total supply of shares.|
|`<none>`|`uint256`||
|`newSharePrice`|`uint256`|The new share price of reference.|
|`<none>`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|fee The calculated performance fee.|


### distributeFees

Distributes the fees to relevant recipients.


```solidity
function distributeFees(uint256 fixedFee, uint256 perfFee) external override onlyMachine;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`fixedFee`|`uint256`|The fixed fee amount to be distributed.|
|`perfFee`|`uint256`|The performance fee amount to be distributed.|


### resetSharePriceWatermark

Resets the share price high watermark.


```solidity
function resetSharePriceWatermark(uint256 sharePrice) external override restricted;
```

### setMgmtFeeRatePerSecond

Sets the management fee rate per second.


```solidity
function setMgmtFeeRatePerSecond(uint256 newMgmtFeeRatePerSecond) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMgmtFeeRatePerSecond`|`uint256`|The new management fee rate per second. 1e18 = 100%.|


### setSmFeeRatePerSecond

Sets the security module fee rate per second.


```solidity
function setSmFeeRatePerSecond(uint256 newSmFeeRatePerSecond) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newSmFeeRatePerSecond`|`uint256`|The new security module fee rate per second. 1e18 = 100%.|


### setPerfFeeRate

Sets the performance fee rate.


```solidity
function setPerfFeeRate(uint256 newPerfFeeRate) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newPerfFeeRate`|`uint256`|The new performance fee rate on profit. 1e18 = 100%.|


### setMgmtFeeSplit

Sets the fixed fee split and receivers.


```solidity
function setMgmtFeeSplit(address[] calldata newMgmtFeeReceivers, uint256[] calldata newMgmtFeeSplitBps)
    external
    override
    restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMgmtFeeReceivers`|`address[]`|The new fixed fee receivers.|
|`newMgmtFeeSplitBps`|`uint256[]`|The new fixed fee split between receivers in basis points. Values must sum to 10_000.|


### setPerfFeeSplit

Sets the performance fee split and receivers.


```solidity
function setPerfFeeSplit(address[] calldata newPerfFeeReceivers, uint256[] calldata newPerfFeeSplitBps)
    external
    override
    restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newPerfFeeReceivers`|`address[]`|The new performance fee receivers.|
|`newPerfFeeSplitBps`|`uint256[]`|The new performance fee split between receivers in basis points. Values must sum to 10_000.|


### setSecurityModule

Sets the security module address.


```solidity
function setSecurityModule(address _securityModule) external override onlyFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_securityModule`|`address`||


### _checkFeeSplit

Checks that the provided fee split setup is valid.


```solidity
function _checkFeeSplit(address[] calldata _feeReceivers, uint256[] calldata _feeSplitBps) internal pure;
```

## Structs
### WatermarkFeeManagerStorage
**Note:**
storage-location: erc7201:makina.storage.WatermarkFeeManager


```solidity
struct WatermarkFeeManagerStorage {
    uint256 _mgmtFeeRatePerSecond;
    uint256 _smFeeRatePerSecond;
    uint256 _perfFeeRate;
    uint256 _sharePriceWatermark;
    address[] _mgmtFeeReceivers;
    uint256[] _mgmtFeeSplitBps;
    address[] _perfFeeReceivers;
    uint256[] _perfFeeSplitBps;
    address _securityModule;
}
```

