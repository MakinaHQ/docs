# LzOptionsBuilder

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/libraries/LzOptionsBuilder.sol)

_Library for building and encoding various LayerZero V2 message options.
Forked and simplified from layerzerolabs/oapp-evm/contracts/oapp/libs/OptionsBuilder.sol_

## State Variables

### TYPE_3

```solidity
uint16 internal constant TYPE_3 = 3;
```

## Functions

### newOptions

```solidity
function newOptions() internal pure returns (bytes memory);
```

### addExecutorLzReceiveOption

```solidity
function addExecutorLzReceiveOption(bytes memory _options, uint128 _gas) internal pure returns (bytes memory);
```

### addExecutorLzComposeOption

```solidity
function addExecutorLzComposeOption(bytes memory _options, uint16 _index, uint128 _gas)
    internal
    pure
    returns (bytes memory);
```

### addExecutorOption

```solidity
function addExecutorOption(bytes memory _options, uint8 _optionType, bytes memory _option)
    internal
    pure
    returns (bytes memory);
```
