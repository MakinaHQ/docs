# ChainRegistry
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/registries/ChainRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [IChainRegistry](/src/interfaces/IChainRegistry.sol/interface.IChainRegistry.md)


## State Variables
### ChainRegistryStorageLocation

```solidity
bytes32 private constant ChainRegistryStorageLocation =
    0x1fbdc0014f4c06b2b0ff2477b8b323f2857bce3cafc75fb45bc5110cee080300;
```


## Functions
### _getChainRegistryStorage


```solidity
function _getChainRegistryStorage() private pure returns (ChainRegistryStorage storage $);
```

### constructor


```solidity
constructor();
```

### initialize


```solidity
function initialize(address _accessManager) external initializer;
```

### isEvmChainIdRegistered

EVM chain ID => Is the chain ID registered


```solidity
function isEvmChainIdRegistered(uint256 _evmChainId) external view override returns (bool);
```

### isWhChainIdRegistered

Wormhole chain ID => Is the chain ID registered


```solidity
function isWhChainIdRegistered(uint16 _whChainId) external view override returns (bool);
```

### evmToWhChainId

*EVM chain ID => Wormhole chain ID*


```solidity
function evmToWhChainId(uint256 _evmChainId) external view override returns (uint16);
```

### whToEvmChainId

*Wormhole chain ID => EVM chain ID*


```solidity
function whToEvmChainId(uint16 _whChainId) external view override returns (uint256);
```

### setChainIds

Associates an EVM chain ID with a Wormhole chain ID in the contract storage.


```solidity
function setChainIds(uint256 _evmChainId, uint16 _whChainId) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_evmChainId`|`uint256`|The EVM chain ID.|
|`_whChainId`|`uint16`|The Wormhole chain ID.|


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

