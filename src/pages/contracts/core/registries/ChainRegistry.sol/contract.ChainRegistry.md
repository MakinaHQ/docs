# ChainRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/registries/ChainRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [IChainRegistry](/contracts/core/interfaces/IChainRegistry.sol/interface.IChainRegistry.md)

## State Variables

### ChainRegistryStorageLocation

```solidity
bytes32 private constant ChainRegistryStorageLocation =
    0x1fbdc0014f4c06b2b0ff2477b8b323f2857bce3cafc75fb45bc5110cee080300
```

## Functions

### \_getChainRegistryStorage

```solidity
function _getChainRegistryStorage() private pure returns (ChainRegistryStorage storage $);
```

### constructor

```solidity
constructor() ;
```

### initialize

```solidity
function initialize(address initialAuthority) external initializer;
```

### isEvmChainIdRegistered

EVM chain ID => Is the chain ID registered

```solidity
function isEvmChainIdRegistered(uint256 evmChainId) external view override returns (bool);
```

### isWhChainIdRegistered

Wormhole chain ID => Is the chain ID registered

```solidity
function isWhChainIdRegistered(uint16 whChainId) external view override returns (bool);
```

### evmToWhChainId

EVM chain ID => Wormhole chain ID

```solidity
function evmToWhChainId(uint256 evmChainId) external view override returns (uint16);
```

### whToEvmChainId

Wormhole chain ID => EVM chain ID

```solidity
function whToEvmChainId(uint16 whChainId) external view override returns (uint256);
```

### setChainIds

Associates an EVM chain ID with a Wormhole chain ID in the contract storage.

```solidity
function setChainIds(uint256 evmChainId, uint16 whChainId) external override restricted;
```

**Parameters**

| Name         | Type      | Description            |
| ------------ | --------- | ---------------------- |
| `evmChainId` | `uint256` | The EVM chain ID.      |
| `whChainId`  | `uint16`  | The Wormhole chain ID. |

## Structs

### ChainRegistryStorage

**Note:**
storage-location: erc7201:makina.storage.ChainRegistry

```solidity
struct ChainRegistryStorage {
    mapping(uint256 evmChainId => uint16 whChainId) _evmToWhChainId;
    mapping(uint16 whChainId => uint256 evmChainId) _whToEvmChainId;
}
```
