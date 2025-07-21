# IHubCoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/IHubCoreRegistry.sol)

**Inherits:**
[ICoreRegistry](/docs/contracts/interfaces/ICoreRegistry.sol/interface.ICoreRegistry.md)

## Functions

### chainRegistry

Address of the chain registry.

```solidity
function chainRegistry() external view returns (address);
```

### machineBeacon

Address of the machine beacon contract.

```solidity
function machineBeacon() external view returns (address);
```

### preDepositVaultBeacon

Address of the pre-deposit vault beacon contract.

```solidity
function preDepositVaultBeacon() external view returns (address);
```

### setChainRegistry

Sets the chain registry address.

```solidity
function setChainRegistry(address _chainRegistry) external;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_chainRegistry` | `address` | The chain registry address. |

### setMachineBeacon

Sets the machine beacon address.

```solidity
function setMachineBeacon(address _machineBeacon) external;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_machineBeacon` | `address` | The machine beacon address. |

### setPreDepositVaultBeacon

Sets the pre-deposit vault beacon address.

```solidity
function setPreDepositVaultBeacon(address _preDepositVaultBeacon) external;
```

**Parameters**

| Name                     | Type      | Description                           |
| ------------------------ | --------- | ------------------------------------- |
| `_preDepositVaultBeacon` | `address` | The pre-deposit vault beacon address. |

## Events

### ChainRegistryChanged

```solidity
event ChainRegistryChanged(address indexed oldChainRegistry, address indexed newChainRegistry);
```

### MachineBeaconChanged

```solidity
event MachineBeaconChanged(address indexed oldMachineBeacon, address indexed newMachineBeacon);
```

### PreDepositVaultBeaconChanged

```solidity
event PreDepositVaultBeaconChanged(address indexed oldPreDepositVaultBeacon, address indexed newPreDepositVaultBeacon);
```
