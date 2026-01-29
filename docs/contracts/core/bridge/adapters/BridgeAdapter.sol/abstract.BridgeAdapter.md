# BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/bridge/adapters/BridgeAdapter.sol)

**Inherits:**
Initializable, ReentrancyGuard, [MakinaContext](/contracts/core/utils/MakinaContext.sol/abstract.MakinaContext.md), [IBridgeAdapter](/contracts/core/interfaces/IBridgeAdapter.sol/interface.IBridgeAdapter.md)

## State Variables

### MAX_BPS

_Full scale value in basis points_

```solidity
uint256 private constant MAX_BPS = 10_000;
```

### approvalTarget

Address of the external bridge approval target contract.

```solidity
address public immutable override approvalTarget;
```

### executionTarget

Address of the external bridge execution target contract.

```solidity
address public immutable override executionTarget;
```

### receiveSource

Address of the external bridge contract responsible for sending output funds.

```solidity
address public immutable override receiveSource;
```

### BridgeAdapterStorageLocation

```solidity
bytes32 private constant BridgeAdapterStorageLocation =
    0xe24ea70efbf545f0256b406d064fa196624401f48d56c665b3e8bc995282c700;
```

## Functions

### \_getBridgeAdapterStorage

```solidity
function _getBridgeAdapterStorage() internal pure returns (BridgeAdapterStorage storage $);
```

### constructor

```solidity
constructor(address _registry, address _approvalTarget, address _executionTarget, address _receiveSource)
    MakinaContext(_registry);
```

### \_\_BridgeAdapter_init

```solidity
function __BridgeAdapter_init(address _controller, uint16 _bridgeId) internal onlyInitializing;
```

### onlyController

```solidity
modifier onlyController();
```

### controller

Address of the bridge controller contract.

```solidity
function controller() external view override returns (address);
```

### bridgeId

ID of the adapted external bridge.

```solidity
function bridgeId() external view override returns (uint16);
```

### nextOutTransferId

ID of the next outgoing transfer.

```solidity
function nextOutTransferId() external view override returns (uint256);
```

### nextInTransferId

ID of the next incoming transfer.

```solidity
function nextInTransferId() external view override returns (uint256);
```

### outBridgeTransferCancelDefault

Returns the default amount that must be transferred to the adapter to cancel an outgoing bridge transfer.

_If the transfer has not yet been sent, or if the full amount was refunded to this contract by the external bridge, returns 0._

```solidity
function outBridgeTransferCancelDefault(uint256 transferId) public view returns (uint256);
```

**Parameters**

| Name         | Type      | Description                      |
| ------------ | --------- | -------------------------------- |
| `transferId` | `uint256` | The ID of the transfer to check. |

**Returns**

| Name     | Type      | Description                                 |
| -------- | --------- | ------------------------------------------- |
| `<none>` | `uint256` | The amount required to cancel the transfer. |

### scheduleOutBridgeTransfer

Schedules an outgoing bridge transfer and returns the message hash.

_Emits an event containing the id of the transfer and the hash of the bridge transfer message._

```solidity
function scheduleOutBridgeTransfer(
    uint256 destinationChainId,
    address recipient,
    address inputToken,
    uint256 inputAmount,
    address outputToken,
    uint256 minOutputAmount
) external override nonReentrant onlyController;
```

**Parameters**

| Name                 | Type      | Description                                               |
| -------------------- | --------- | --------------------------------------------------------- |
| `destinationChainId` | `uint256` | The ID of the destination chain.                          |
| `recipient`          | `address` | The address of the recipient on the destination chain.    |
| `inputToken`         | `address` | The address of the input token.                           |
| `inputAmount`        | `uint256` | The amount of the input token to transfer.                |
| `outputToken`        | `address` | The address of the output token on the destination chain. |
| `minOutputAmount`    | `uint256` | The minimum amount of the output token to receive.        |

### authorizeInBridgeTransfer

Registers a message hash as authorized for an incoming bridge transfer.

```solidity
function authorizeInBridgeTransfer(bytes32 messageHash) external override onlyController;
```

**Parameters**

| Name          | Type      | Description                           |
| ------------- | --------- | ------------------------------------- |
| `messageHash` | `bytes32` | The hash of the message to authorize. |

### sendOutBridgeTransfer

Executes a scheduled outgoing bridge transfer.

```solidity
function sendOutBridgeTransfer(uint256 transferId, bytes calldata data) external override nonReentrant onlyController;
```

**Parameters**

| Name         | Type      | Description                                       |
| ------------ | --------- | ------------------------------------------------- |
| `transferId` | `uint256` | The ID of the transfer to execute.                |
| `data`       | `bytes`   | The optional data needed to execute the transfer. |

### cancelOutBridgeTransfer

Cancels an outgoing bridge transfer.

```solidity
function cancelOutBridgeTransfer(uint256 transferId) external override nonReentrant onlyController;
```

**Parameters**

| Name         | Type      | Description                       |
| ------------ | --------- | --------------------------------- |
| `transferId` | `uint256` | The ID of the transfer to cancel. |

### claimInBridgeTransfer

Transfers a received bridge transfer out of the adapter.

```solidity
function claimInBridgeTransfer(uint256 transferId) external override nonReentrant onlyController;
```

**Parameters**

| Name         | Type      | Description                      |
| ------------ | --------- | -------------------------------- |
| `transferId` | `uint256` | The ID of the transfer to claim. |

### withdrawPendingFunds

Resets internal state for a given token address, and transfers token balance to associated controller.

_This function is intended to be used by the DAO to unlock funds stuck in the adapter, typically
in response to operator deviations or external bridge discrepancies._

```solidity
function withdrawPendingFunds(address token) external nonReentrant onlyController;
```

**Parameters**

| Name    | Type      | Description               |
| ------- | --------- | ------------------------- |
| `token` | `address` | The address of the token. |

### \_receiveInBridgeTransfer

_Updates contract state when receiving an incoming bridge transfer._

```solidity
function _receiveInBridgeTransfer(bytes memory encodedMessage, address receivedToken, uint256 receivedAmount)
    internal
    virtual;
```

### \_getSet

_Returns a reference to the current active set for this versioned set._

```solidity
function _getSet(VersionedUintSet storage self) internal view returns (EnumerableSet.UintSet storage);
```

### \_clearSet

_Virtually clears the set by incrementing the version.
All future operations will apply to a fresh, empty set.
Previous versions remain in storage and are not deleted._

```solidity
function _clearSet(VersionedUintSet storage self) internal;
```

### \_checkOutBridgeTransferRouteIsSupported

_Checks if an outgoing bridge transfer route is supported._

```solidity
function _checkOutBridgeTransferRouteIsSupported(
    uint256 destinationChainId,
    address inputToken,
    uint256,
    address outputToken
) internal view virtual;
```

### \_getConfig

_Returns the address of the config contract associated with this bridge adapter._

```solidity
function _getConfig() internal view returns (address);
```

### \_checkOutBridgeTransferIsCancellable

_Checks if an outgoing bridge transfer is in a cancellable state._

```solidity
function _checkOutBridgeTransferIsCancellable(uint256 transferId) internal virtual;
```

### \_sendOutBridgeTransfer

_Handles logic specific to the external bridge protocol for sending out a bridge transfer._

```solidity
function _sendOutBridgeTransfer(uint256 transferId, bytes calldata data) internal virtual;
```

### \_outBridgeTransferCancelDefault

_Internal logic for outgoing bridge transfer cancellation default._

```solidity
function _outBridgeTransferCancelDefault(uint256 transferId) internal view virtual returns (uint256);
```

## Structs

### VersionedUintSet

_EnumerableSet wrapper supporting efficient clearing by switching to a new version._

```solidity
struct VersionedUintSet {
    mapping(uint256 => EnumerableSet.UintSet) _sets;
    uint256 _currentVersion;
}
```

### BridgeAdapterStorage

**Note:**
storage-location: erc7201:makina.storage.BridgeAdapter

```solidity
struct BridgeAdapterStorage {
    address _controller;
    uint16 _bridgeId;
    uint256 _nextOutTransferId;
    uint256 _nextInTransferId;
    mapping(uint256 outTransferId => OutBridgeTransfer transfer) _outgoingTransfers;
    mapping(uint256 inTransferId => InBridgeTransfer transfer) _incomingTransfers;
    mapping(address token => VersionedUintSet) _pendingOutTransferIds;
    mapping(address token => VersionedUintSet) _sentOutTransferIds;
    mapping(address token => VersionedUintSet) _pendingInTransferIds;
    mapping(bytes32 messageHash => bool isExpected) _expectedInMessages;
    mapping(address token => uint256 amount) _reservedBalances;
}
```
