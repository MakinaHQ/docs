# HubCoreRegistry

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/registries/HubCoreRegistry.sol)

**Inherits:**
[CoreRegistry](/docs/contracts/registries/CoreRegistry.sol/abstract.CoreRegistry.md), [IHubCoreRegistry](/docs/contracts/interfaces/IHubCoreRegistry.sol/interface.IHubCoreRegistry.md)

## State Variables

### HubCoreRegistryStorageLocation

```solidity
bytes32 private constant HubCoreRegistryStorageLocation =
    0x662caa641f82b896df85da03edbf3b36c0e08aa64db68d7994394899aadc4700;
```

## Functions

### \_getHubCoreRegistryStorage

```solidity
function _getHubCoreRegistryStorage() private pure returns (HubCoreRegistryStorage storage $);
```

### constructor

```solidity
constructor();
```

### initialize

```solidity
function initialize(address _oracleRegistry, address _tokenRegistry, address _chainRegistry, address _initialAuthority)
    external
    initializer;
```

### chainRegistry

Address of the chain registry.

```solidity
function chainRegistry() external view override returns (address);
```

### machineBeacon

Address of the machine beacon contract.

```solidity
function machineBeacon() external view override returns (address);
```

### preDepositVaultBeacon

Address of the pre-deposit vault beacon contract.

```solidity
function preDepositVaultBeacon() external view override returns (address);
```

### setChainRegistry

Sets the chain registry address.

```solidity
function setChainRegistry(address _chainRegistry) external override restricted;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_chainRegistry` | `address` | The chain registry address. |

### setMachineBeacon

Sets the machine beacon address.

```solidity
function setMachineBeacon(address _machineBeacon) external override restricted;
```

**Parameters**

| Name             | Type      | Description                 |
| ---------------- | --------- | --------------------------- |
| `_machineBeacon` | `address` | The machine beacon address. |

### setPreDepositVaultBeacon

Sets the pre-deposit vault beacon address.

```solidity
function setPreDepositVaultBeacon(address _preDepositVaultBeacon) external override restricted;
```

**Parameters**

| Name                     | Type      | Description                           |
| ------------------------ | --------- | ------------------------------------- |
| `_preDepositVaultBeacon` | `address` | The pre-deposit vault beacon address. |

## Structs

### HubCoreRegistryStorage

**Note:**
storage-location: erc7201:makina.storage.HubCoreRegistry

```solidity
struct HubCoreRegistryStorage {
    address _chainRegistry;
    address _machineBeacon;
    address _preDepositVaultBeacon;
}
```
