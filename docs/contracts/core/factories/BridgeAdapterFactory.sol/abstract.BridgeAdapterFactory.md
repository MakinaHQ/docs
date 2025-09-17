# BridgeAdapterFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/factories/BridgeAdapterFactory.sol)

**Inherits:**
[Create3Factory](/contracts/core/factories/Create3Factory.sol/abstract.Create3Factory.md), [MakinaContext](/contracts/core/utils/MakinaContext.sol/abstract.MakinaContext.md), [IBridgeAdapterFactory](/contracts/core/interfaces/IBridgeAdapterFactory.sol/interface.IBridgeAdapterFactory.md)

## State Variables

### BridgeAdapterSaltDomain

```solidity
bytes32 private constant BridgeAdapterSaltDomain = 0xabde28237b51fa1256b2a1c49d990c305c6556881cd721a86b97a8ef9073992c;
```

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

_Internal logic for bridge adapter deployment via create3._

```solidity
function _createBridgeAdapter(address controller, uint16 bridgeId, bytes calldata initData, bytes32 salt)
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
