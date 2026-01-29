# MachinePeriphery

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/utils/MachinePeriphery.sol)

**Inherits:**
Initializable, [MakinaPeripheryContext](/contracts/periphery/utils/MakinaPeripheryContext.sol/abstract.MakinaPeripheryContext.md), [IMachinePeriphery](/contracts/periphery/interfaces/IMachinePeriphery.sol/interface.IMachinePeriphery.md)

## State Variables

### MachinePeripheryStorageLocation

```solidity
bytes32 private constant MachinePeripheryStorageLocation =
    0xf8e170f38959918ab7e583dba012d1b8610047e073c7ca874900b1e0c133c900;
```

## Functions

### \_getMachinePeripheryStorage

```solidity
function _getMachinePeripheryStorage() internal pure returns (MachinePeripheryStorage storage $);
```

### constructor

```solidity
constructor(address _peripheryRegistry) MakinaPeripheryContext(_peripheryRegistry);
```

### onlyFactory

```solidity
modifier onlyFactory();
```

### onlyMechanic

```solidity
modifier onlyMechanic();
```

### onlySecurityCouncil

```solidity
modifier onlySecurityCouncil();
```

### onlyRiskManager

```solidity
modifier onlyRiskManager();
```

### onlyRiskManagerTimelock

```solidity
modifier onlyRiskManagerTimelock();
```

### machine

Address of the associated machine.

```solidity
function machine() public view virtual returns (address);
```

### setMachine

Sets the machine address.

```solidity
function setMachine(address _machine) external onlyFactory;
```

### \_setMachine

_Sets the machine this contract is associated with._

```solidity
function _setMachine(address _machine) internal virtual;
```

## Structs

### MachinePeripheryStorage

**Note:**
storage-location: erc7201:makina.storage.MachinePeriphery

```solidity
struct MachinePeripheryStorage {
    address _machine;
}
```
