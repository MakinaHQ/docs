# MetaMorphoOracleFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/factories/MetaMorphoOracleFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [IMetaMorphoOracleFactory](/contracts/periphery/interfaces/IMetaMorphoOracleFactory.sol/interface.IMetaMorphoOracleFactory.md)

## State Variables

### MetaMorphoOracleFactoryStorageLocation

```solidity
bytes32 private constant MetaMorphoOracleFactoryStorageLocation =
    0x8b272443f96f44d511b8bb6ad6efe08c8771f99b7e57f25c3f699349a99dca00
```

## Functions

### \_getMetaMorphoOracleFactoryStorage

```solidity
function _getMetaMorphoOracleFactoryStorage() internal pure returns (MetaMorphoOracleFactoryStorage storage $);
```

### constructor

```solidity
constructor() ;
```

### initialize

```solidity
function initialize(address _initialAuthority) external initializer;
```

### isMorphoFactory

Factory => Whether this is a whitelisted Morpho factory.

```solidity
function isMorphoFactory(address morphoFactory) external view override returns (bool);
```

### isOracle

Oracle => Whether this is an oracle instance deployed by this factory.

```solidity
function isOracle(address oracle) external view override returns (bool);
```

### setMorphoFactory

Whitelist or unwhitelist a Morpho factory.

```solidity
function setMorphoFactory(address morphoFactory, bool isFactory) external override restricted;
```

**Parameters**

| Name            | Type      | Description                                          |
| --------------- | --------- | ---------------------------------------------------- |
| `morphoFactory` | `address` | The address of the Morpho factory.                   |
| `isFactory`     | `bool`    | True to whitelist the factory, false to unwhitelist. |

### createMetaMorphoOracle

Creates an oracle for the given MetaMorpho Vault.

```solidity
function createMetaMorphoOracle(address factory, address metaMorphoVault, uint8 decimals)
    external
    override
    restricted
    returns (address);
```

**Parameters**

| Name              | Type      | Description                                      |
| ----------------- | --------- | ------------------------------------------------ |
| `factory`         | `address` | The factory used to create the MetaMorpho Vault. |
| `metaMorphoVault` | `address` | The Vault for which to create a wrapper oracle.  |
| `decimals`        | `uint8`   | Decimals to use for the oracle price.            |

## Structs

### MetaMorphoOracleFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.MetaMorphoOracleFactory

```solidity
struct MetaMorphoOracleFactoryStorage {
    mapping(address oracle => bool isOracle) _isOracle;
    mapping(address factory => bool isFactory) _isMorphoFactory;
}
```
