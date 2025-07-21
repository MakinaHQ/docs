# IChainRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/IChainRegistry.sol)

This interface is used to map EVM chain IDs to Wormhole chain IDs and vice versa.

## Functions

### isEvmChainIdRegistered

EVM chain ID => Is the chain ID registered

```solidity
function isEvmChainIdRegistered(uint256 _evmChainId) external view returns (bool);
```

### isWhChainIdRegistered

Wormhole chain ID => Is the chain ID registered

```solidity
function isWhChainIdRegistered(uint16 _whChainId) external view returns (bool);
```

### evmToWhChainId

_EVM chain ID => Wormhole chain ID_

```solidity
function evmToWhChainId(uint256 _evmChainId) external view returns (uint16);
```

### whToEvmChainId

_Wormhole chain ID => EVM chain ID_

```solidity
function whToEvmChainId(uint16 _whChainId) external view returns (uint256);
```

### setChainIds

Associates an EVM chain ID with a Wormhole chain ID in the contract storage.

```solidity
function setChainIds(uint256 _evmChainId, uint16 _whChainId) external;
```

**Parameters**

| Name          | Type      | Description            |
| ------------- | --------- | ---------------------- |
| `_evmChainId` | `uint256` | The EVM chain ID.      |
| `_whChainId`  | `uint16`  | The Wormhole chain ID. |

## Events

### ChainIdsRegistered

```solidity
event ChainIdsRegistered(uint256 indexed evmChainId, uint16 indexed whChainId);
```
