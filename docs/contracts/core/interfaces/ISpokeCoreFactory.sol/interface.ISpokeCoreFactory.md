# ISpokeCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/ISpokeCoreFactory.sol)

**Inherits:**
[IBridgeAdapterFactory](/contracts/core/interfaces/IBridgeAdapterFactory.sol/interface.IBridgeAdapterFactory.md)

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
    address hubMachine,
    bytes32 salt
) external returns (address caliber);
```

**Parameters**

| Name              | Type                                           | Description                                            |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------ |
| `cParams`         | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                 |
| `mgParams`        | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.       |
| `accountingToken` | `address`                                      | The address of the accounting token.                   |
| `hubMachine`      | `address`                                      | The address of the hub machine.                        |
| `salt`            | `bytes32`                                      | The salt used to deploy the Caliber deterministically. |

**Returns**

| Name      | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `caliber` | `address` | The address of the deployed Caliber instance. |

## Events

### CaliberMailboxCreated

```solidity
event CaliberMailboxCreated(address indexed mailbox, address indexed caliber, address indexed hubMachine);
```
