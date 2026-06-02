# IMetaMorphoOracleFactory

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IMetaMorphoOracleFactory.sol)

## Functions

### isMorphoFactory

Factory => Whether this is a whitelisted Morpho factory.

```solidity
function isMorphoFactory(address morphoFactory) external view returns (bool isFactory);
```

### isOracle

Oracle => Whether this is an oracle instance deployed by this factory.

```solidity
function isOracle(address oracle) external view returns (bool);
```

### setMorphoFactory

Whitelist or unwhitelist a Morpho factory.

```solidity
function setMorphoFactory(address morphoFactory, bool isFactory) external;
```

**Parameters**

| Name            | Type      | Description                                          |
| --------------- | --------- | ---------------------------------------------------- |
| `morphoFactory` | `address` | The address of the Morpho factory.                   |
| `isFactory`     | `bool`    | True to whitelist the factory, false to unwhitelist. |

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
