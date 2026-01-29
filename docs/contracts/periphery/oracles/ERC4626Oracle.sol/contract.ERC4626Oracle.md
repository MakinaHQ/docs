# ERC4626Oracle

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/oracles/ERC4626Oracle.sol)

**Inherits:**
AggregatorV2V3Interface

SPDX-License-Identifier: MIT

Chainlink-like price oracle wrapping ERC4626 vaults.
This oracle exposes the price of one share of the
vault it wraps in terms of its underlying asset (the exchange rate).

## State Variables

### version

The implementation version of this contract.

```solidity
uint256 public immutable version = 1;
```

### vault

The ERC4626 vault.

```solidity
IERC4626 public immutable vault;
```

### underlying

The underlying asset of the vault.

```solidity
IERC20Metadata public immutable underlying;
```

### decimals

The number of decimals of the price returned by this oracle.

```solidity
uint8 public immutable decimals;
```

### description

The description for this oracle.

```solidity
string public description;
```

### ONE_SHARE

One unit of the ERC4626 vault.

```solidity
uint256 public immutable ONE_SHARE;
```

### SCALING_NUMERATOR

Scaling factor numerator used to adjust price to the desired decimals.

```solidity
uint256 public immutable SCALING_NUMERATOR;
```

## Functions

### constructor

Creates a new ERC4626Wrapper for a given ERC4626 vault.

```solidity
constructor(IERC4626 _vault, uint8 _decimals);
```

**Parameters**

| Name        | Type       | Description                        |
| ----------- | ---------- | ---------------------------------- |
| `_vault`    | `IERC4626` | The ERC4626 vault.                 |
| `_decimals` | `uint8`    | The decimals to use for the price. |

### getPrice

```solidity
function getPrice() public view returns (uint256);
```

### latestAnswer

```solidity
function latestAnswer() external view override returns (int256);
```

### latestTimestamp

```solidity
function latestTimestamp() external view override returns (uint256);
```

### latestRound

```solidity
function latestRound() external pure override returns (uint256);
```

### getAnswer

```solidity
function getAnswer(uint256) external view override returns (int256);
```

### getTimestamp

```solidity
function getTimestamp(uint256) external view override returns (uint256);
```

### getRoundData

```solidity
function getRoundData(uint80)
    external
    view
    override
    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
```

### latestRoundData

```solidity
function latestRoundData()
    external
    view
    override
    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
```

### \_latestRoundData

```solidity
function _latestRoundData()
    internal
    view
    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
```
