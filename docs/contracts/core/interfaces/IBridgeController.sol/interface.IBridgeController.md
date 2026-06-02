# IBridgeController

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/IBridgeController.sol)

## Functions

### isBridgeSupported

Bridge ID => Is bridge adapter deployed.

```solidity
function isBridgeSupported(uint16 bridgeId) external view returns (bool);
```

### isOutTransferEnabled

Bridge ID => Is outgoing transfer enabled.

```solidity
function isOutTransferEnabled(uint16 bridgeId) external view returns (bool);
```

### getBridgeAdapter

Bridge ID => Address of the associated bridge adapter.

```solidity
function getBridgeAdapter(uint16 bridgeId) external view returns (address);
```

### getMaxBridgeLossBps

Bridge ID => Max allowed value loss in basis points for transfers via this bridge.

```solidity
function getMaxBridgeLossBps(uint16 bridgeId) external view returns (uint256);
```

### setBridgeAdapter

Sets a bridge adapter instance for a given bridge ID.

```solidity
function setBridgeAdapter(uint16 bridgeId, address bridgeAdapter, uint256 initialMaxBridgeLossBps) external;
```

**Parameters**

| Name                      | Type      | Description                                                                           |
| ------------------------- | --------- | ------------------------------------------------------------------------------------- |
| `bridgeId`                | `uint16`  | The ID of the bridge.                                                                 |
| `bridgeAdapter`           | `address` | The address of the new bridge adapter instance.                                       |
| `initialMaxBridgeLossBps` | `uint256` | The initial maximum allowed value loss in basis points for transfers via this bridge. |

### setMaxBridgeLossBps

Sets the maximum allowed value loss in basis points for transfers via this bridge.

```solidity
function setMaxBridgeLossBps(uint16 bridgeId, uint256 maxBridgeLossBps) external;
```

**Parameters**

| Name               | Type      | Description                                     |
| ------------------ | --------- | ----------------------------------------------- |
| `bridgeId`         | `uint16`  | The ID of the bridge.                           |
| `maxBridgeLossBps` | `uint256` | The maximum allowed value loss in basis points. |

### setOutTransferEnabled

Sets the outgoing transfer enabled status for a bridge.

```solidity
function setOutTransferEnabled(uint16 bridgeId, bool enabled) external;
```

**Parameters**

| Name       | Type     | Description                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------- |
| `bridgeId` | `uint16` | The ID of the bridge.                                                       |
| `enabled`  | `bool`   | True to enable outgoing transfer for the given bridge ID, false to disable. |

### sendOutBridgeTransfer

Executes a scheduled outgoing bridge transfer.

```solidity
function sendOutBridgeTransfer(uint16 bridgeId, uint256 transferId, bytes calldata data) external;
```

**Parameters**

| Name         | Type      | Description                                       |
| ------------ | --------- | ------------------------------------------------- |
| `bridgeId`   | `uint16`  | The ID of the bridge.                             |
| `transferId` | `uint256` | The ID of the transfer to execute.                |
| `data`       | `bytes`   | The optional data needed to execute the transfer. |

### authorizeInBridgeTransfer

Registers a message hash as authorized for an incoming bridge transfer.

```solidity
function authorizeInBridgeTransfer(uint16 bridgeId, bytes32 messageHash) external;
```

**Parameters**

| Name          | Type      | Description                           |
| ------------- | --------- | ------------------------------------- |
| `bridgeId`    | `uint16`  | The ID of the bridge.                 |
| `messageHash` | `bytes32` | The hash of the message to authorize. |

### claimInBridgeTransfer

Transfers a received bridge transfer out of the corresponding bridge adapter.

```solidity
function claimInBridgeTransfer(uint16 bridgeId, uint256 transferId) external;
```

**Parameters**

| Name         | Type      | Description                      |
| ------------ | --------- | -------------------------------- |
| `bridgeId`   | `uint16`  | The ID of the bridge.            |
| `transferId` | `uint256` | The ID of the transfer to claim. |

### cancelOutBridgeTransfer

Cancels an outgoing bridge transfer.

```solidity
function cancelOutBridgeTransfer(uint16 bridgeId, uint256 transferId) external;
```

**Parameters**

| Name         | Type      | Description                       |
| ------------ | --------- | --------------------------------- |
| `bridgeId`   | `uint16`  | The ID of the bridge.             |
| `transferId` | `uint256` | The ID of the transfer to cancel. |

### resetBridgingState

Resets internal bridge counters for a given token, and withdraws token balances held by all bridge adapters.

This function is intended to be used by the DAO to realign bridge accounting state and maintain protocol consistency,
typically in response to operator deviations, external bridge discrepancies, or unbounded counter growth.

```solidity
function resetBridgingState(address token) external;
```

**Parameters**

| Name    | Type      | Description               |
| ------- | --------- | ------------------------- |
| `token` | `address` | The address of the token. |

## Events

### BridgeAdapterSet

```solidity
event BridgeAdapterSet(uint16 indexed bridgeId, address indexed adapter);
```

### MaxBridgeLossBpsChanged

```solidity
event MaxBridgeLossBpsChanged(
    uint16 indexed bridgeId, uint256 indexed oldMaxBridgeLossBps, uint256 indexed newMaxBridgeLossBps
);
```

### BridgingStateReset

```solidity
event BridgingStateReset(address indexed token);
```

### OutTransferEnabledSet

```solidity
event OutTransferEnabledSet(uint256 indexed bridgeId, bool enabled);
```
