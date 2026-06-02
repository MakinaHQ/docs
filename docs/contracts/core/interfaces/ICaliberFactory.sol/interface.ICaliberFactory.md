# ICaliberFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ICaliberFactory.sol)

## Functions

### isCaliber

Address => Whether this is a Caliber instance deployed by this factory.

```solidity
function isCaliber(address caliber) external view returns (bool);
```

## Events

### CaliberCreated

```solidity
event CaliberCreated(address indexed caliber, address indexed machineEndpoint);
```
