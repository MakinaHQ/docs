# BridgeController

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/bridge/controller/BridgeController.sol)

**Inherits:**
[MakinaContext](/contracts/core/utils/MakinaContext.sol/abstract.MakinaContext.md), [IBridgeController](/contracts/core/interfaces/IBridgeController.sol/interface.IBridgeController.md)

## State Variables

### MAX_BPS

Full scale value in basis points

```solidity
uint256 private constant MAX_BPS = 10_000
```

### BridgeControllerStorageLocation

```solidity
bytes32 private constant BridgeControllerStorageLocation =
    0x7363d524082cdf545f1ac33985598b84d2470b8b4fbcc6cb47698cc1b2a03500
```

## Functions

### \_getBridgeControllerStorage

```solidity
function _getBridgeControllerStorage() internal pure returns (BridgeControllerStorage storage $);
```

### onlyFactory

```solidity
modifier onlyFactory() ;
```

### isBridgeSupported

Bridge ID => Is bridge adapter deployed.

```solidity
function isBridgeSupported(uint16 bridgeId) external view override returns (bool);
```

### isOutTransferEnabled

Bridge ID => Is outgoing transfer enabled.

```solidity
function isOutTransferEnabled(uint16 bridgeId) external view override returns (bool);
```

### getBridgeAdapter

Bridge ID => Address of the associated bridge adapter.

```solidity
function getBridgeAdapter(uint16 bridgeId) public view override returns (address);
```

### getMaxBridgeLossBps

Bridge ID => Max allowed value loss in basis points for transfers via this bridge.

```solidity
function getMaxBridgeLossBps(uint16 bridgeId) external view override returns (uint256);
```

### setBridgeAdapter

Sets a bridge adapter instance for a given bridge ID.

```solidity
function setBridgeAdapter(uint16 bridgeId, address bridgeAdapter, uint256 initialMaxBridgeLossBps)
    external
    override
    onlyFactory;
```

**Parameters**

| Name                      | Type      | Description                                                                           |
| ------------------------- | --------- | ------------------------------------------------------------------------------------- |
| `bridgeId`                | `uint16`  | The ID of the bridge.                                                                 |
| `bridgeAdapter`           | `address` | The address of the new bridge adapter instance.                                       |
| `initialMaxBridgeLossBps` | `uint256` | The initial maximum allowed value loss in basis points for transfers via this bridge. |

### \_setOutTransferEnabled

Internal logic to set the outgoing transfer enabled status for a given bridge.

```solidity
function _setOutTransferEnabled(uint16 bridgeId, bool enabled) internal;
```

### \_setMaxBridgeLossBps

Internal logic to set the max allowed value loss in basis points for transfers via a given bridge.

```solidity
function _setMaxBridgeLossBps(uint16 bridgeId, uint256 maxBridgeLossBps) internal;
```

### \_isBridgeAdapter

Returns whether the given address is a registered bridge adapter.

```solidity
function _isBridgeAdapter(address adapter) internal view returns (bool);
```

### \_scheduleOutBridgeTransfer

Internal logic to schedule an outgoing bridge transfer.

```solidity
function _scheduleOutBridgeTransfer(
    uint16 bridgeId,
    uint256 destinationChainId,
    address recipient,
    address inputToken,
    uint256 inputAmount,
    uint256 minOutputAmount
) internal;
```

### \_sendOutBridgeTransfer

Internal logic to execute a scheduled outgoing bridge transfer.

```solidity
function _sendOutBridgeTransfer(uint16 bridgeId, uint256 transferId, bytes calldata data) internal;
```

### \_authorizeInBridgeTransfer

Internal logic to register a message hash as authorized for an incoming bridge transfer.

```solidity
function _authorizeInBridgeTransfer(uint16 bridgeId, bytes32 messageHash) internal;
```

### \_claimInBridgeTransfer

Internal logic to transfer a received bridge transfer out of the corresponding bridge adapter.

```solidity
function _claimInBridgeTransfer(uint16 bridgeId, uint256 transferId) internal;
```

### \_cancelOutBridgeTransfer

Internal logic to cancel an outgoing bridge transfer.

```solidity
function _cancelOutBridgeTransfer(uint16 bridgeId, uint256 transferId) internal;
```

## Structs

### BridgeControllerStorage

**Note:**
storage-location: erc7201:makina.storage.BridgeController

```solidity
struct BridgeControllerStorage {
    uint16[] _supportedBridges;
    mapping(uint16 bridgeId => address adapter) _bridgeAdapters;
    mapping(uint16 bridgeId => uint256 maxBridgeLossBps) _maxBridgeLossBps;
    mapping(uint16 bridgeId => bool isOutTransferEnabled) _isOutTransferEnabled;
    mapping(address addr => bool isAdapter) _isBridgeAdapter;
}
```
