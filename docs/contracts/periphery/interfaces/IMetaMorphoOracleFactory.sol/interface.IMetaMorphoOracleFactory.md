# IMetaMorphoOracleFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/interfaces/IMetaMorphoOracleFactory.sol)

## Functions

### isMorphoFactory

Address => Whether this is a trusted Morpho factory.

```solidity
function isMorphoFactory(address morphoFactory) external view returns (bool isFactory);
```

**Parameters**

| Name            | Type      | Description                          |
| --------------- | --------- | ------------------------------------ |
| `morphoFactory` | `address` | The Morpho factory address to check. |

**Returns**

| Name        | Type   | Description                                      |
| ----------- | ------ | ------------------------------------------------ |
| `isFactory` | `bool` | True if the factory is trusted, false otherwise. |

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
function setMorphoFactory(address morphoFactory, bool isFactory) external;
```

**Parameters**

| Name            | Type      | Description                          |
| --------------- | --------- | ------------------------------------ |
| `morphoFactory` | `address` | The address of the Morpho Registry.  |
| `isFactory`     | `bool`    | Flags the factory as trusted or not. |

### createMetaMorphoOracle

Creates an oracle for the given MetaMorpho Vault.

```solidity
function createMetaMorphoOracle(address factory, address metaMorphoVault, uint8 decimals) external returns (address);
```

**Parameters**

| Name              | Type      | Description                                      |
| ----------------- | --------- | ------------------------------------------------ |
| `factory`         | `address` | The factory used to create the MetaMorpho Vault. |
| `metaMorphoVault` | `address` | The Vault for which to create a wrapper oracle.  |
| `decimals`        | `uint8`   | Decimals to use for the oracle price.            |

## Events

### MetaMorphoOracleCreated

```solidity
event MetaMorphoOracleCreated(address indexed oracle);
```

## Errors

### NotMetaMorphoVault

```solidity
error NotMetaMorphoVault();
```

### NotFactory

```solidity
error NotFactory();
```
