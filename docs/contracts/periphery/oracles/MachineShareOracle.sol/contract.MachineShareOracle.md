# MachineShareOracle

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/oracles/MachineShareOracle.sol)

**Inherits:**
MakinaContext, Initializable, [IMachineShareOracle](/contracts/periphery/interfaces/IMachineShareOracle.sol/interface.IMachineShareOracle.md)

## State Variables

### MachineShareOracleStorageLocation

```solidity
bytes32 private constant MachineShareOracleStorageLocation =
    0x4f70fa92dc3700b8f04f54ea7fbeb33f50a8cec0cd9f676fee937dccebe28100;
```

## Functions

### \_getMachineShareOracleStorage

```solidity
function _getMachineShareOracleStorage() internal pure returns (MachineShareOracleStorage storage $);
```

### constructor

```solidity
constructor(address coreRegistry) MakinaContext(coreRegistry);
```

### initialize

Initializer of the contract.

```solidity
function initialize(address _shareOwner, uint8 _decimals) external initializer;
```

**Parameters**

| Name          | Type      | Description                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| `_shareOwner` | `address` | The current owner contract of the share (machine or pre-deposit vault). |
| `_decimals`   | `uint8`   | Decimals to use for the oracle price.                                   |

### decimals

Decimals of the oracle.

```solidity
function decimals() external view override returns (uint8);
```

### description

Description of the oracle.

```solidity
function description() external view override returns (string memory);
```

### shareOwner

Address of the share owner (machine or pre-deposit vault).

```solidity
function shareOwner() public view override returns (address);
```

### getSharePrice

Returns the price of one machine share token expressed in machine accounting tokens

_The price is expressed with `decimals` precision._

```solidity
function getSharePrice() external view override returns (uint256);
```

**Returns**

| Name     | Type      | Description                                                                                                             |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `<none>` | `uint256` | sharePrice The price of one machine share token expressed in machine accounting tokens, scaled to `decimals` precision. |

### notifyPdvMigration

Notifies the migration of the original share owner from a pre-deposit vault to a machine.

_Can only be called once and only if the share owner was initially a pre-deposit vault._

```solidity
function notifyPdvMigration() external override;
```

## Structs

### MachineShareOracleStorage

```solidity
struct MachineShareOracleStorage {
    address _shareOwner;
    bool _isShareOwnerPdv;
    uint8 _decimals;
    uint256 _scalingNumerator;
    uint256 _shareTokenDecimalsOffset;
    string _description;
}
```
