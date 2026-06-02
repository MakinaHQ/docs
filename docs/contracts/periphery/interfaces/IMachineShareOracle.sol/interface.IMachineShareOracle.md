# IMachineShareOracle

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IMachineShareOracle.sol)

## Functions

### initialize

Initializer of the contract.

```solidity
function initialize(address _shareOwner, uint8 _decimals) external;
```

**Parameters**

| Name          | Type      | Description                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| `_shareOwner` | `address` | The current owner contract of the share (machine or pre-deposit vault). |
| `_decimals`   | `uint8`   | Decimals to use for the oracle price.                                   |

### decimals

Decimals of the oracle.

```solidity
function decimals() external view returns (uint8);
```

### description

Description of the oracle.

```solidity
function description() external view returns (string memory);
```

### shareOwner

Address of the share owner (machine or pre-deposit vault).

```solidity
function shareOwner() external view returns (address);
```

### getSharePrice

Returns the price of one machine share token expressed in machine accounting tokens.

The price is expressed with `decimals` precision.

```solidity
function getSharePrice() external view returns (uint256 sharePrice);
```

**Returns**

| Name         | Type      | Description                                                                                                  |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------ |
| `sharePrice` | `uint256` | The price of one machine share token expressed in machine accounting tokens, scaled to `decimals` precision. |

### notifyPdvMigration

Notifies the migration of the original share owner from a pre-deposit vault to a machine.

Can only be called once and only if the share owner was initially a pre-deposit vault.

This function can be called permissionlessly and allows to optimize gas costs for users of the oracle.

```solidity
function notifyPdvMigration() external;
```

## Events

### ShareOwnerMigrated

```solidity
event ShareOwnerMigrated(address indexed oldShareOwner, address indexed newShareOwner);
```

## Errors

### InvalidShareOwner

```solidity
error InvalidShareOwner();
```
