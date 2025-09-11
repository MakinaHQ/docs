# ICaliberFactory
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/ICaliberFactory.sol)


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

