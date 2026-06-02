# ITokenRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ITokenRegistry.sol)

This interface is used to map token addresses from one EVM chain to another.

## Functions

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view returns (address);
```

### getLocalToken

Foreign token address => Foreign EVM chain ID => Local Token address

```solidity
function getLocalToken(address foreignToken, uint256 foreignEvmChainId) external view returns (address);
```

### setToken

Associates a local and a foreign token address.

```solidity
function setToken(address localToken, uint256 foreignEvmChainId, address foreignToken) external;
```

**Parameters**

| Name                | Type      | Description                |
| ------------------- | --------- | -------------------------- |
| `localToken`        | `address` | The local token address.   |
| `foreignEvmChainId` | `uint256` | The foreign EVM chain ID.  |
| `foreignToken`      | `address` | The foreign token address. |

## Events

### TokenRegistered

```solidity
event TokenRegistered(address indexed localToken, uint256 indexed evmChainId, address indexed foreignToken);
```
