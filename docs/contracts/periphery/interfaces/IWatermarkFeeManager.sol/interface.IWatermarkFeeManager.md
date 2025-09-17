# IWatermarkFeeManager

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/interfaces/IWatermarkFeeManager.sol)

**Inherits:**
IFeeManager, [ISecurityModuleReference](/contracts/periphery/interfaces/ISecurityModuleReference.sol/interface.ISecurityModuleReference.md), [IMachinePeriphery](/contracts/periphery/interfaces/IMachinePeriphery.sol/interface.IMachinePeriphery.md)

## Functions

### mgmtFeeRatePerSecond

Management fee rate per second, 1e18 = 100%.

```solidity
function mgmtFeeRatePerSecond() external view returns (uint256);
```

### smFeeRatePerSecond

Security module fee rate per second, 1e18 = 100%.

```solidity
function smFeeRatePerSecond() external view returns (uint256);
```

### perfFeeRate

Performance fee rate on profit, 1e18 = 100%.

```solidity
function perfFeeRate() external view returns (uint256);
```

### mgmtFeeReceivers

Fixed fee receivers.

```solidity
function mgmtFeeReceivers() external view returns (address[] memory);
```

### mgmtFeeSplitBps

Fixed fee split between receivers in basis points. Values must sum to 10_000.

```solidity
function mgmtFeeSplitBps() external view returns (uint256[] memory);
```

### perfFeeReceivers

Performance fee receivers.

```solidity
function perfFeeReceivers() external view returns (address[] memory);
```

### perfFeeSplitBps

Performance fee split between receivers in basis points. Values must sum to 10_000.

```solidity
function perfFeeSplitBps() external view returns (uint256[] memory);
```

### sharePriceWatermark

Current share price high watermark for the associated Machine.

```solidity
function sharePriceWatermark() external view returns (uint256);
```

### resetSharePriceWatermark

Resets the share price high watermark.

```solidity
function resetSharePriceWatermark(uint256 sharePrice) external;
```

### setMgmtFeeRatePerSecond

Sets the management fee rate per second.

```solidity
function setMgmtFeeRatePerSecond(uint256 newMgmtFeeRatePerSecond) external;
```

**Parameters**

| Name                      | Type      | Description                                          |
| ------------------------- | --------- | ---------------------------------------------------- |
| `newMgmtFeeRatePerSecond` | `uint256` | The new management fee rate per second. 1e18 = 100%. |

### setSmFeeRatePerSecond

Sets the security module fee rate per second.

```solidity
function setSmFeeRatePerSecond(uint256 newSmFeeRatePerSecond) external;
```

**Parameters**

| Name                    | Type      | Description                                               |
| ----------------------- | --------- | --------------------------------------------------------- |
| `newSmFeeRatePerSecond` | `uint256` | The new security module fee rate per second. 1e18 = 100%. |

### setPerfFeeRate

Sets the performance fee rate.

```solidity
function setPerfFeeRate(uint256 newPerfFeeRate) external;
```

**Parameters**

| Name             | Type      | Description                                          |
| ---------------- | --------- | ---------------------------------------------------- |
| `newPerfFeeRate` | `uint256` | The new performance fee rate on profit. 1e18 = 100%. |

### setMgmtFeeSplit

Sets the fixed fee split and receivers.

```solidity
function setMgmtFeeSplit(address[] calldata newMgmtFeeReceivers, uint256[] calldata newMgmtFeeSplitBps) external;
```

**Parameters**

| Name                  | Type        | Description                                                                           |
| --------------------- | ----------- | ------------------------------------------------------------------------------------- |
| `newMgmtFeeReceivers` | `address[]` | The new fixed fee receivers.                                                          |
| `newMgmtFeeSplitBps`  | `uint256[]` | The new fixed fee split between receivers in basis points. Values must sum to 10_000. |

### setPerfFeeSplit

Sets the performance fee split and receivers.

```solidity
function setPerfFeeSplit(address[] calldata newPerfFeeReceivers, uint256[] calldata newPerfFeeSplitBps) external;
```

**Parameters**

| Name                  | Type        | Description                                                                                 |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `newPerfFeeReceivers` | `address[]` | The new performance fee receivers.                                                          |
| `newPerfFeeSplitBps`  | `uint256[]` | The new performance fee split between receivers in basis points. Values must sum to 10_000. |

## Events

### MgmtFeeSplitChanged

```solidity
event MgmtFeeSplitChanged();
```

### MgmtFeeRatePerSecondChanged

```solidity
event MgmtFeeRatePerSecondChanged(uint256 oldRate, uint256 newRate);
```

### PerfFeeRateChanged

```solidity
event PerfFeeRateChanged(uint256 oldRate, uint256 newRate);
```

### PerfFeeSplitChanged

```solidity
event PerfFeeSplitChanged();
```

### SmFeeRatePerSecondChanged

```solidity
event SmFeeRatePerSecondChanged(uint256 oldRate, uint256 newRate);
```

### SecurityModuleSet

```solidity
event SecurityModuleSet(address indexed securityModule);
```

### WatermarkReset

```solidity
event WatermarkReset(uint256 indexed newWatermark);
```

## Structs

### WatermarkFeeManagerInitParams

Initialization parameters.

```solidity
struct WatermarkFeeManagerInitParams {
    uint256 initialMgmtFeeRatePerSecond;
    uint256 initialSmFeeRatePerSecond;
    uint256 initialPerfFeeRate;
    uint256[] initialMgmtFeeSplitBps;
    address[] initialMgmtFeeReceivers;
    uint256[] initialPerfFeeSplitBps;
    address[] initialPerfFeeReceivers;
}
```

**Properties**

| Name                          | Type        | Description                                                                         |
| ----------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `initialMgmtFeeRatePerSecond` | `uint256`   | Management fee rate per second, in 18 decimals precision.                           |
| `initialSmFeeRatePerSecond`   | `uint256`   | Security module fee rate per second, in 18 decimals precision.                      |
| `initialPerfFeeRate`          | `uint256`   | Performance fee rate on profit, in 18 decimals precision.                           |
| `initialMgmtFeeSplitBps`      | `uint256[]` | Fixed fee split between receivers in basis points. Values must sum to 10_000.       |
| `initialMgmtFeeReceivers`     | `address[]` | Fixed fee receivers.                                                                |
| `initialPerfFeeSplitBps`      | `uint256[]` | Performance fee split between receivers in basis points. Values must sum to 10_000. |
| `initialPerfFeeReceivers`     | `address[]` | Performance fee receivers.                                                          |
