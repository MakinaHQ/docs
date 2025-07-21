# IHubCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/IHubCoreFactory.sol)

**Inherits:**
[IBridgeAdapterFactory](/docs/contracts/interfaces/IBridgeAdapterFactory.sol/interface.IBridgeAdapterFactory.md)

## Functions

### isPreDepositVault

Address => Whether this is a PreDepositVault instance deployed by this factory.

```solidity
function isPreDepositVault(address preDepositVault) external view returns (bool);
```

### isMachine

Address => Whether this is a Machine instance deployed by this factory.

```solidity
function isMachine(address machine) external view returns (bool);
```

### createPreDepositVault

Deploys a new PreDepositVault instance.

```solidity
function createPreDepositVault(
    IPreDepositVault.PreDepositVaultInitParams calldata params,
    address depositToken,
    address accountingToken,
    string memory tokenName,
    string memory tokenSymbol
) external returns (address preDepositVault);
```

**Parameters**

| Name              | Type                                         | Description                          |
| ----------------- | -------------------------------------------- | ------------------------------------ |
| `params`          | `IPreDepositVault.PreDepositVaultInitParams` | The initialization parameters.       |
| `depositToken`    | `address`                                    | The address of the deposit token.    |
| `accountingToken` | `address`                                    | The address of the accounting token. |
| `tokenName`       | `string`                                     | The name of the share token.         |
| `tokenSymbol`     | `string`                                     | The symbol of the share token.       |

**Returns**

| Name              | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| `preDepositVault` | `address` | The address of the deployed PreDepositVault instance. |

### createMachineFromPreDeposit

Deploys a new Machine instance and migrates an existing PreDepositVault instance to it.

```solidity
function createMachineFromPreDeposit(
    IMachine.MachineInitParams calldata mParams,
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    address preDepositVault
) external returns (address machine);
```

**Parameters**

| Name              | Type                                           | Description                                             |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------- |
| `mParams`         | `IMachine.MachineInitParams`                   | The machine initialization parameters.                  |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                  |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.        |
| `preDepositVault` | `address`                                      | The address of the PreDepositVault instance to migrate. |

**Returns**

| Name      | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `machine` | `address` | The address of the deployed Machine instance. |

### createMachine

Deploys a new Machine instance.

```solidity
function createMachine(
    IMachine.MachineInitParams calldata mParams,
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    address accountingToken,
    string memory tokenName,
    string memory tokenSymbol
) external returns (address machine);
```

**Parameters**

| Name              | Type                                           | Description                                      |
| ----------------- | ---------------------------------------------- | ------------------------------------------------ |
| `mParams`         | `IMachine.MachineInitParams`                   | The machine initialization parameters.           |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.           |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters. |
| `accountingToken` | `address`                                      | The address of the accounting token.             |
| `tokenName`       | `string`                                       | The name of the share token.                     |
| `tokenSymbol`     | `string`                                       | The symbol of the share token.                   |

**Returns**

| Name      | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `machine` | `address` | The address of the deployed Machine instance. |

## Events

### MachineCreated

```solidity
event MachineCreated(address indexed machine, address indexed shareToken);
```

### PreDepositVaultCreated

```solidity
event PreDepositVaultCreated(address indexed preDepositVault, address indexed shareToken);
```

### ShareTokenCreated

```solidity
event ShareTokenCreated(address indexed shareToken);
```
