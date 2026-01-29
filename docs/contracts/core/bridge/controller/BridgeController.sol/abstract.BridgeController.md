# BridgeController

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/bridge/controller/BridgeController.sol)

**Inherits:**
AccessManagedUpgradeable, [MakinaContext](/contracts/core/utils/MakinaContext.sol/abstract.MakinaContext.md), [IBridgeController](/contracts/core/interfaces/IBridgeController.sol/interface.IBridgeController.md)

## State Variables

### MAX_BPS

_Full scale value in basis points_

```solidity
uint256 private constant MAX_BPS = 10_000;
```

### BridgeControllerStorageLocation

```solidity
bytes32 private constant BridgeControllerStorageLocation =
    0x7363d524082cdf545f1ac33985598b84d2470b8b4fbcc6cb47698cc1b2a03500;
```

## Functions

### \_getBridgeControllerStorage

```solidity
function _getBridgeControllerStorage() internal pure returns (BridgeControllerStorage storage $);
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
function getMaxBridgeLossBps(uint16 bridgeId) external view returns (uint256);
```

### createBridgeAdapter

Deploys a new BridgeAdapter instance.

```solidity
function createBridgeAdapter(uint16 bridgeId, uint256 initialMaxBridgeLossBps, bytes calldata initData)
    external
    restricted
    returns (address);
```

**Parameters**

| Name                      | Type      | Description                                                                           |
| ------------------------- | --------- | ------------------------------------------------------------------------------------- |
| `bridgeId`                | `uint16`  | The ID of the bridge.                                                                 |
| `initialMaxBridgeLossBps` | `uint256` | The initial maximum allowed value loss in basis points for transfers via this bridge. |
| `initData`                | `bytes`   | The optional initialization data for the bridge adapter.                              |

**Returns**

| Name     | Type      | Description                                |
| -------- | --------- | ------------------------------------------ |
| `<none>` | `address` | The address of the deployed BridgeAdapter. |

### \_setOutTransferEnabled

```solidity
function _setOutTransferEnabled(uint16 bridgeId, bool enabled) internal;
```

### \_setMaxBridgeLossBps

```solidity
function _setMaxBridgeLossBps(uint16 bridgeId, uint256 maxBridgeLossBps) internal;
```

### \_isBridgeAdapter

```solidity
function _isBridgeAdapter(address adapter) internal view returns (bool);
```

### \_scheduleOutBridgeTransfer

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

```solidity
function _sendOutBridgeTransfer(uint16 bridgeId, uint256 transferId, bytes calldata data) internal;
```

### \_authorizeInBridgeTransfer

```solidity
function _authorizeInBridgeTransfer(uint16 bridgeId, bytes32 messageHash) internal;
```

### \_claimInBridgeTransfer

```solidity
function _claimInBridgeTransfer(uint16 bridgeId, uint256 transferId) internal;
```

### \_cancelOutBridgeTransfer

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
