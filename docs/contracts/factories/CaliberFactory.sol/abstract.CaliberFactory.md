# CaliberFactory
[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/factories/CaliberFactory.sol)

**Inherits:**
[MakinaContext](/src/utils/MakinaContext.sol/abstract.MakinaContext.md), [ICaliberFactory](/src/interfaces/ICaliberFactory.sol/interface.ICaliberFactory.md)


## State Variables
### CaliberFactoryStorageLocation

```solidity
bytes32 private constant CaliberFactoryStorageLocation =
    0x092f83b0a9c245bf0116fc4aaf5564ab048ff47d6596f1c61801f18d9dfbea00;
```


## Functions
### _getCaliberFactoryStorage


```solidity
function _getCaliberFactoryStorage() internal pure returns (CaliberFactoryStorage storage $);
```

### isCaliber

Address => Whether this is a Caliber instance deployed by this factory.


```solidity
function isCaliber(address adapter) external view override returns (bool);
```

### _createCaliber

*Internal logic for caliber deployment.*


```solidity
function _createCaliber(ICaliber.CaliberInitParams calldata cParams, address accountingToken, address machineEndpoint)
    internal
    returns (address);
```

## Structs
### CaliberFactoryStorage
**Note:**
storage-location: erc7201:makina.storage.CaliberFactory


```solidity
struct CaliberFactoryStorage {
    mapping(address caliber => bool isCaliber) _isCaliber;
}
```

