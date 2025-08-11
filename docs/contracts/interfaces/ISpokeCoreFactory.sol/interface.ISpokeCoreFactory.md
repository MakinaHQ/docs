# ISpokeCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/ISpokeCoreFactory.sol)

**Inherits:**
[IBridgeAdapterFactory](/contracts/interfaces/IBridgeAdapterFactory.sol/interface.IBridgeAdapterFactory.md)

## Functions

### isCaliberMailbox

Address => Whether this is a CaliberMailbox instance deployed by this factory.

```solidity
function isCaliberMailbox(address mailbox) external view returns (bool);
```

### createCaliber

Deploys a new Caliber instance.

```solidity
function createCaliber(
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    address accountingToken,
    address hubMachine
) external returns (address caliber);
```

**Parameters**

| Name              | Type                                           | Description                                      |
| ----------------- | ---------------------------------------------- | ------------------------------------------------ |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.           |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters. |
| `accountingToken` | `address`                                      | The address of the accounting token.             |
| `hubMachine`      | `address`                                      | The address of the hub machine.                  |

**Returns**

| Name      | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `caliber` | `address` | The address of the deployed Caliber instance. |

## Events

### CaliberMailboxCreated

```solidity
event CaliberMailboxCreated(address indexed mailbox, address indexed caliber, address indexed hubMachine);
```
