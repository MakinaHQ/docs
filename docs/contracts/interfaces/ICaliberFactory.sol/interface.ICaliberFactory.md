# ICaliberFactory
[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/interfaces/ICaliberFactory.sol)


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

