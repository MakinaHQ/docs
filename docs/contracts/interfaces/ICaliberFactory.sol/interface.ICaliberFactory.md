# ICaliberFactory
[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/ICaliberFactory.sol)


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

