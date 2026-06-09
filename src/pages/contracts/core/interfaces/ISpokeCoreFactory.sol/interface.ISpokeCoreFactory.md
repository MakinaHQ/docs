# ISpokeCoreFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ISpokeCoreFactory.sol)

**Inherits:**
[IBridgeAdapterFactory](/contracts/core/interfaces/IBridgeAdapterFactory.sol/interface.IBridgeAdapterFactory.md)

## Functions

### isCaliberMailbox

Address => Whether this is a CaliberMailbox instance deployed by this factory.

```solidity
function isCaliberMailbox(address caliberMailbox) external view returns (bool);
```

### createCaliber

Deploys a new Caliber instance with an associated CaliberMailbox.

```solidity
function createCaliber(
    ICaliber.CaliberInitParams calldata cParams,
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    BridgeAdapterInitParams[] calldata baParams,
    address accountingToken,
    bytes32 salt,
    bool setupAMFunctionRoles
) external returns (address caliber);
```

**Parameters**

| Name                   | Type                                           | Description                                                                        |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cParams`              | `ICaliber.CaliberInitParams`                   | The caliber initialization parameters.                                             |
| `mgParams`             | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.                                   |
| `baParams`             | `BridgeAdapterInitParams[]`                    | The list of bridge adapter initialization parameters and controller configuration. |
| `accountingToken`      | `address`                                      | The address of the accounting token.                                               |
| `salt`                 | `bytes32`                                      | The salt used to deploy the Caliber deterministically.                             |
| `setupAMFunctionRoles` | `bool`                                         | Whether to set roles for restricted functions on the deployed instance.            |

**Returns**

| Name      | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `caliber` | `address` | The address of the deployed Caliber instance. |

## Events

### CaliberMailboxCreated

```solidity
event CaliberMailboxCreated(address indexed mailbox);
```
