# IChainRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/IChainRegistry.sol)

This interface is used to map EVM chain IDs to Wormhole chain IDs and vice versa.

## Functions

### isEvmChainIdRegistered

EVM chain ID => Is the chain ID registered

```solidity
function isEvmChainIdRegistered(uint256 evmChainId) external view returns (bool);
```

### isWhChainIdRegistered

Wormhole chain ID => Is the chain ID registered

```solidity
function isWhChainIdRegistered(uint16 whChainId) external view returns (bool);
```

### evmToWhChainId

EVM chain ID => Wormhole chain ID

```solidity
function evmToWhChainId(uint256 evmChainId) external view returns (uint16);
```

### whToEvmChainId

Wormhole chain ID => EVM chain ID

```solidity
function whToEvmChainId(uint16 whChainId) external view returns (uint256);
```

### setChainIds

Associates an EVM chain ID with a Wormhole chain ID in the contract storage.

```solidity
function setChainIds(uint256 evmChainId, uint16 whChainId) external;
```

**Parameters**

| Name         | Type      | Description            |
| ------------ | --------- | ---------------------- |
| `evmChainId` | `uint256` | The EVM chain ID.      |
| `whChainId`  | `uint16`  | The Wormhole chain ID. |

## Events

### ChainIdsRegistered

```solidity
event ChainIdsRegistered(uint256 indexed evmChainId, uint16 indexed whChainId);
```
