# ICaliberFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/ICaliberFactory.sol)

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
