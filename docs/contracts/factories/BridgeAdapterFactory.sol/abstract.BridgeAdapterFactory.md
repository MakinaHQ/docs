# BridgeAdapterFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/factories/BridgeAdapterFactory.sol)

**Inherits:**
[MakinaContext](/docs/contracts/utils/MakinaContext.sol/abstract.MakinaContext.md), [IBridgeAdapterFactory](/docs/contracts/interfaces/IBridgeAdapterFactory.sol/interface.IBridgeAdapterFactory.md)

## State Variables

### BridgeAdapterFactoryStorageLocation

```solidity
bytes32 private constant BridgeAdapterFactoryStorageLocation =
    0xe2760819b7b5a09214c04233e2d29582188ee1a80d8fe8c82676ab96abf81c00;
```

## Functions

### \_getBridgeAdapterFactoryStorage

```solidity
function _getBridgeAdapterFactoryStorage() internal pure returns (BridgeAdapterFactoryStorage storage $);
```

### isBridgeAdapter

Address => Whether this is a BridgeAdapter instance deployed by this factory.

```solidity
function isBridgeAdapter(address adapter) external view returns (bool);
```

### \_createBridgeAdapter

_Internal logic for bridge adapter deployment._

```solidity
function _createBridgeAdapter(address controller, uint16 bridgeId, bytes calldata initData)
    internal
    returns (address);
```

## Structs

### BridgeAdapterFactoryStorage

**Note:**
storage-location: erc7201:makina.storage.BridgeAdapterFactory

```solidity
struct BridgeAdapterFactoryStorage {
    mapping(address adapter => bool isBridgeAdapter) _isBridgeAdapter;
}
```
