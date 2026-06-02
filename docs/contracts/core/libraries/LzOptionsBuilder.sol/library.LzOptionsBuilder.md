# LzOptionsBuilder

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/libraries/LzOptionsBuilder.sol)

**Title:**
LzOptionsBuilder

Library for building and encoding various LayerZero V2 message options.
Forked and simplified from layerzerolabs/oapp-evm/contracts/oapp/libs/OptionsBuilder.sol

## State Variables

### TYPE_3

```solidity
uint16 internal constant TYPE_3 = 3
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
