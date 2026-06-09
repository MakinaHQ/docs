# MachineShareOracleFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/factories/MachineShareOracleFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [IMachineShareOracleFactory](/contracts/periphery/interfaces/IMachineShareOracleFactory.sol/interface.IMachineShareOracleFactory.md)

## State Variables

### MachineShareOracleFactoryStorageLocation

```solidity
bytes32 private constant MachineShareOracleFactoryStorageLocation =
    0x566402f20de4969fde1c09f6ddbae1c0f5590a4d61e4a12b6deb88f69bf7c700
```

## Functions

### \_getMachineShareOracleFactoryStorage

```solidity
function _getMachineShareOracleFactoryStorage() internal pure returns (MachineShareOracleFactoryStorage storage $);
```

### constructor

```solidity
constructor() ;
```

### initialize

```solidity
function initialize(address _machineShareOracleBeacon, address _initialAuthority) external initializer;
```

### machineShareOracleBeacon

Address of the machine share oracle beacon.

```solidity
function machineShareOracleBeacon() external view override returns (address);
```

### isMachineShareOracle

Address => Whether this is an oracle deployed by this factory.

```solidity
function isMachineShareOracle(address oracle) external view override returns (bool);
```

**Parameters**

| Name     | Type      | Description                  |
| -------- | --------- | ---------------------------- |
| `oracle` | `address` | The oracle address to check. |

### createMachineShareOracle

Creates an oracle for the given machine share.

```solidity
function createMachineShareOracle(address shareOwner, uint8 decimals)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name         | Type      | Description                                                             |
| ------------ | --------- | ----------------------------------------------------------------------- |
| `shareOwner` | `address` | The current owner contract of the share (machine or pre-deposit vault). |
| `decimals`   | `uint8`   | Decimals to use for the oracle price.                                   |

### setMachineShareOracleBeacon

Sets the machine share oracle beacon address.

```solidity
function setMachineShareOracleBeacon(address _machineShareOracleBeacon) external override restricted;
```

**Parameters**

| Name                        | Type      | Description                                     |
| --------------------------- | --------- | ----------------------------------------------- |
| `_machineShareOracleBeacon` | `address` | The address of the machine share oracle beacon. |

## Structs

### MachineShareOracleFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.MachineShareOracleFactory

```solidity
struct MachineShareOracleFactoryStorage {
    mapping(address oracle => bool isOracle) _isMachineShareOracle;
    address _machineShareOracleBeacon;
}
```
