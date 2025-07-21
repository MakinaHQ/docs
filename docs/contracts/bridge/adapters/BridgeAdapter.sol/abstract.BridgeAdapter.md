# BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/bridge/adapters/BridgeAdapter.sol)

**Inherits:**
ReentrancyGuardUpgradeable, [IBridgeAdapter](/docs/contracts/interfaces/IBridgeAdapter.sol/interface.IBridgeAdapter.md)

## State Variables

### MAX_BPS

_Full scale value in basis points_

```solidity
uint256 private constant MAX_BPS = 10_000;
```

### approvalTarget

Returns the address of the external bridge approval target contract.

```solidity
address public immutable override approvalTarget;
```

### executionTarget

Returns the address of the external bridge execution target contract.

```solidity
address public immutable override executionTarget;
```

### receiveSource

Returns the address of the external bridge contract responsible for sending output funds.

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
constructor(address _approvalTarget, address _executionTarget, address _receiveSource);
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

Returns the address of the bridge controller contract.

```solidity
function controller() external view override returns (address);
```

### bridgeId

Returns the ID of the adapted external bridge.

```solidity
function bridgeId() external view override returns (uint16);
```

### nextOutTransferId

Returns the ID of the next outgoing transfer.

```solidity
function nextOutTransferId() external view override returns (uint256);
```

### nextInTransferId

Returns the ID of the next incoming transfer.

```solidity
function nextInTransferId() external view override returns (uint256);
```

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

### claimInBridgeTransfer

Transfers a received bridge transfer out of the adapter.

```solidity
function claimInBridgeTransfer(uint256 id) external override nonReentrant onlyController;
```

**Parameters**

| Name | Type      | Description |
| ---- | --------- | ----------- |
| `id` | `uint256` |             |

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

### \_beforeSendOutBridgeTransfer

_Updates contract state before sending out a bridge transfer._

```solidity
function _beforeSendOutBridgeTransfer(uint256 id) internal;
```

### \_cancelOutBridgeTransfer

_Cancels an outgoing bridge transfer that is either scheduled or refunded._

```solidity
function _cancelOutBridgeTransfer(uint256 id) internal;
```

### \_receiveInBridgeTransfer

_Updates contract state when receiving an incoming bridge transfer._

```solidity
function _receiveInBridgeTransfer(bytes memory encodedMessage, address receivedToken, uint256 receivedAmount)
    internal;
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
