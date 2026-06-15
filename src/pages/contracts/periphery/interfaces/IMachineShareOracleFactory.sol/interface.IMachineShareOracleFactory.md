# IMachineShareOracleFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IMachineShareOracleFactory.sol)

## Functions

### machineShareOracleBeacon

Address of the machine share oracle beacon.

```solidity
function machineShareOracleBeacon() external view returns (address);
```

### isMachineShareOracle

Address => Whether this is an oracle deployed by this factory.

```solidity
function isMachineShareOracle(address oracle) external view returns (bool);
```

**Parameters**

| Name     | Type      | Description                  |
| -------- | --------- | ---------------------------- |
| `oracle` | `address` | The oracle address to check. |

### createMachineShareOracle

Creates an oracle for the given machine share.

```solidity
function createMachineShareOracle(address shareOwner, uint8 decimals) external returns (address);
```

**Parameters**

| Name         | Type      | Description                                                             |
| ------------ | --------- | ----------------------------------------------------------------------- |
| `shareOwner` | `address` | The current owner contract of the share (machine or pre-deposit vault). |
| `decimals`   | `uint8`   | Decimals to use for the oracle price.                                   |

### setMachineShareOracleBeacon

Sets the machine share oracle beacon address.

```solidity
function setMachineShareOracleBeacon(address _machineShareOracleBeacon) external;
```

**Parameters**

| Name                        | Type      | Description                                     |
| --------------------------- | --------- | ----------------------------------------------- |
| `_machineShareOracleBeacon` | `address` | The address of the machine share oracle beacon. |

## Events

### MachineShareOracleCreated

```solidity
event MachineShareOracleCreated(address indexed oracle);
```

### MachineShareOracleBeaconChanged

```solidity
event MachineShareOracleBeaconChanged(address indexed oldBeacon, address indexed newBeacon);
```
