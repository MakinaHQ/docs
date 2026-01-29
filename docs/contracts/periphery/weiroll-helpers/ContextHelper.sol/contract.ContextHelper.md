# ContextHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/weiroll-helpers/ContextHelper.sol)

## Functions

### blockTimestamp

Returns the current block timestamp.

```solidity
function blockTimestamp() external view returns (uint256);
```

### blockNumber

Returns the current block number.

```solidity
function blockNumber() external view returns (uint256);
```

### msgSender

Returns the msg.sender.

```solidity
function msgSender() external view returns (address);
```

### balance

Returns the balance of an account.

```solidity
function balance(address account) external view returns (uint256);
```
