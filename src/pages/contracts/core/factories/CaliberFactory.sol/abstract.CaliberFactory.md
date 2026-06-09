# CaliberFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/factories/CaliberFactory.sol)

**Inherits:**
[Create3Factory](/contracts/core/factories/Create3Factory.sol/abstract.Create3Factory.md), [MakinaContext](/contracts/core/utils/MakinaContext.sol/abstract.MakinaContext.md), [ICaliberFactory](/contracts/core/interfaces/ICaliberFactory.sol/interface.ICaliberFactory.md)

## State Variables

### CaliberSaltDomain

```solidity
bytes32 private constant CaliberSaltDomain = 0x53f0f8ad4fe517b9d8040b0fb31dfde7b5d276d4ebc6abb801ed7f52ea0563a8
```

### CaliberFactoryStorageLocation

```solidity
bytes32 private constant CaliberFactoryStorageLocation =
    0x092f83b0a9c245bf0116fc4aaf5564ab048ff47d6596f1c61801f18d9dfbea00
```

## Functions

### \_getCaliberFactoryStorage

```solidity
function _getCaliberFactoryStorage() internal pure returns (CaliberFactoryStorage storage $);
```

### isCaliber

Address => Whether this is a Caliber instance deployed by this factory.

```solidity
function isCaliber(address caliber) external view override returns (bool);
```

### \_createCaliber

Internal logic for caliber deployment via create3.

```solidity
function _createCaliber(
    ICaliber.CaliberInitParams calldata cParams,
    address accountingToken,
    address machineEndpoint,
    bytes32 salt
) internal returns (address);
```

### \_setupCaliberAMFunctionRoles

Sets function roles in associated access manager for a deployed caliber instance.

```solidity
function _setupCaliberAMFunctionRoles(address _authority, address _caliber) internal;
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
