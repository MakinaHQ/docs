# ICaliberFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/interfaces/ICaliberFactory.sol)

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
