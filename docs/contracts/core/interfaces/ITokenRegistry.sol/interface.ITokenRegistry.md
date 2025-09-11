# ITokenRegistry
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/ITokenRegistry.sol)

This interface is used to map token addresses from one evm chain to another.


## Functions
### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address


```solidity
function getForeignToken(address _localToken, uint256 _foreignEvmChainId) external view returns (address);
```

### getLocalToken

Foreign token address => Foreign EVM chain ID => Local Token address


```solidity
function getLocalToken(address _foreignToken, uint256 _foreignEvmChainId) external view returns (address);
```

### setToken

Associates a local and a foreign token addresse.


```solidity
function setToken(address _localToken, uint256 _foreignEvmChainId, address _foreignToken) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localToken`|`address`|The local token address.|
|`_foreignEvmChainId`|`uint256`|The foreign EVM chain ID.|
|`_foreignToken`|`address`|The foreign token address.|


## Events
### TokenRegistered

```solidity
event TokenRegistered(address indexed localToken, uint256 indexed evmChainId, address indexed foreignToken);
```

