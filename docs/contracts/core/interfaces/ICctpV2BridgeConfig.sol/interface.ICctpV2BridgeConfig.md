# ICctpV2BridgeConfig

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ICctpV2BridgeConfig.sol)

**Inherits:**
[IBridgeConfig](/contracts/core/interfaces/IBridgeConfig.sol/interface.IBridgeConfig.md)

## Functions

### getCctpDomain

EVM chain ID => CCTP domain

```solidity
function getCctpDomain(uint256 evmChainId) external view returns (uint32);
```

### getForeignToken

Local token address => Foreign EVM chain ID => Foreign Token address

```solidity
function getForeignToken(address localToken, uint256 foreignEvmChainId) external view returns (address);
```

### setCctpDomain

Associates an EVM chain ID with a CCTP domain in the contract storage.

```solidity
function setCctpDomain(uint256 evmChainId, uint32 cctpDomain) external;
```

**Parameters**

| Name         | Type      | Description       |
| ------------ | --------- | ----------------- |
| `evmChainId` | `uint256` | The EVM chain ID. |
| `cctpDomain` | `uint32`  | The CCTP domain.  |

### setForeignToken

Associates a local token with its foreign counterpart used in CCTP bridging.

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

### CctpDomainRegistered

```solidity
event CctpDomainRegistered(uint256 indexed evmChainId, uint32 indexed cctpDomain);
```
