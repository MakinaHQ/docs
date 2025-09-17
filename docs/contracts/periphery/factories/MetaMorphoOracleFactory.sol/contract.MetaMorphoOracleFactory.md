# MetaMorphoOracleFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/factories/MetaMorphoOracleFactory.sol)

**Inherits:**
AccessManagedUpgradeable, [IMetaMorphoOracleFactory](/contracts/periphery/interfaces/IMetaMorphoOracleFactory.sol/interface.IMetaMorphoOracleFactory.md)

## State Variables

### MetaMorphoOracleFactoryStorageLocation

```solidity
bytes32 private constant MetaMorphoOracleFactoryStorageLocation =
    0x8b272443f96f44d511b8bb6ad6efe08c8771f99b7e57f25c3f699349a99dca00;
```

## Functions

### \_getMetaMorphoOracleFactoryStorage

```solidity
function _getMetaMorphoOracleFactoryStorage() internal pure returns (MetaMorphoOracleFactoryStorage storage $);
```

### constructor

```solidity
constructor();
```

### initialize

```solidity
function initialize(address _initialAuthority) external initializer;
```

### isMorphoFactory

Address => Whether this is a trusted Morpho factory.

```solidity
function isMorphoFactory(address morphoFactory) external view returns (bool);
```

**Parameters**

| Name            | Type      | Description                          |
| --------------- | --------- | ------------------------------------ |
| `morphoFactory` | `address` | The Morpho factory address to check. |

**Returns**

| Name     | Type   | Description                                                |
| -------- | ------ | ---------------------------------------------------------- |
| `<none>` | `bool` | isFactory True if the factory is trusted, false otherwise. |

### isOracle

Address => Whether this is an oracle deployed by this factory.

```solidity
function isOracle(address oracle) external view returns (bool);
```

**Parameters**

| Name     | Type      | Description                  |
| -------- | --------- | ---------------------------- |
| `oracle` | `address` | The oracle address to check. |

### setMorphoFactory

Sets the Morpho Registry in the factory contract.

```solidity
function setMorphoFactory(address morphoFactory, bool isFactory) external override restricted;
```

**Parameters**

| Name            | Type      | Description                          |
| --------------- | --------- | ------------------------------------ |
| `morphoFactory` | `address` | The address of the Morpho Registry.  |
| `isFactory`     | `bool`    | Flags the factory as trusted or not. |

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

```solidity
struct MetaMorphoOracleFactoryStorage {
    mapping(address oracle => bool isOracle) _isOracle;
    mapping(address factory => bool isFactory) _isMorphoFactory;
}
```
