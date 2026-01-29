# ILayerZeroV2BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/ILayerZeroV2BridgeConfig.sol)

**Inherits:**
[IBridgeConfig](/contracts/core/interfaces/IBridgeConfig.sol/interface.IBridgeConfig.md)

## Functions

### evmToLzChainId

EVM chain ID => LayerZero endpoint ID

```solidity
function evmToLzChainId(uint256 evmChainId) external view returns (uint32);
```

### lzToEvmChainId

LayerZero endpoint ID => EVM chain ID

```solidity
function lzToEvmChainId(uint32 lzChainId) external view returns (uint256);
```

### tokenToOft

Token address => LayerZero OFT address

```solidity
function tokenToOft(address token) external view returns (address);
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view returns (address);
```

### setLzChainId

Associates an EVM chain ID with a LayerZero endpoint ID in the contract storage.

```solidity
function setLzChainId(uint256 evmChainId, uint32 lzChainId) external;
```

**Parameters**

| Name         | Type      | Description            |
| ------------ | --------- | ---------------------- |
| `evmChainId` | `uint256` | The EVM chain ID.      |
| `lzChainId`  | `uint32`  | The Wormhole chain ID. |

### setOft

Registers a LayerZero OFT for its associated token.

_Assumes that an OFT's associated token is immutable._

_Overwrites any previously registered OFT for the provided OFT's associated token._

```solidity
function setOft(address oft) external;
```

**Parameters**

| Name  | Type      | Description                       |
| ----- | --------- | --------------------------------- |
| `oft` | `address` | The address of the LayerZero OFT. |

### setForeignToken

Associates a local token with its foreign counterpart used in LayerZero bridging.

```solidity
function setForeignToken(address localToken, uint256 foreignEvmChainId, address foreignToken) external;
```

**Parameters**

| Name                | Type      | Description                |
| ------------------- | --------- | -------------------------- |
| `localToken`        | `address` | The local token address.   |
| `foreignEvmChainId` | `uint256` | The foreign EVM chain ID.  |
| `foreignToken`      | `address` | The foreign token address. |

## Events

### ForeignTokenRegistered

```solidity
event ForeignTokenRegistered(address indexed localToken, uint256 indexed evmChainId, address indexed foreignToken);
```

### LzChainIdRegistered

```solidity
event LzChainIdRegistered(uint256 indexed evmChainId, uint32 indexed lzChainId);
```

### OftRegistered

```solidity
event OftRegistered(address indexed oft, address indexed token);
```
