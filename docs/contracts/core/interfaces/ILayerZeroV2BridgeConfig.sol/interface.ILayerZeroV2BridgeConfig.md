# ILayerZeroV2BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ILayerZeroV2BridgeConfig.sol)

**Inherits:**
[IBridgeConfig](/contracts/core/interfaces/IBridgeConfig.sol/interface.IBridgeConfig.md)

## Functions

### getLzEndpointId

EVM chain ID => LayerZero endpoint ID

```solidity
function getLzEndpointId(uint256 evmChainId) external view returns (uint32);
```

### getOft

Local token address => LayerZero OFT address

```solidity
function getOft(address localToken) external view returns (address);
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view returns (address);
```

### setLzEndpointId

Associates an EVM chain ID with a LayerZero endpoint ID in the contract storage.

```solidity
function setLzEndpointId(uint256 evmChainId, uint32 lzEndpointId) external;
```

**Parameters**

| Name           | Type      | Description                |
| -------------- | --------- | -------------------------- |
| `evmChainId`   | `uint256` | The EVM chain ID.          |
| `lzEndpointId` | `uint32`  | The LayerZero endpoint ID. |

### setOft

Registers a LayerZero OFT for its associated token.

Assumes that an OFT's associated token is immutable.

Overwrites any previously registered OFT for the provided OFT's associated token.

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

### LzEndpointIdRegistered

```solidity
event LzEndpointIdRegistered(uint256 indexed evmChainId, uint32 indexed lzEndpointId);
```

### OftRegistered

```solidity
event OftRegistered(address indexed oft, address indexed token);
```
