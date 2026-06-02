# ContextHelper

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/weiroll-helpers/ContextHelper.sol)

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
