# CctpV2BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/bridge/adapters/CctpV2BridgeAdapter.sol)

**Inherits:**
[BridgeAdapter](/contracts/core/bridge/adapters/BridgeAdapter.sol/abstract.BridgeAdapter.md), [ICctpV2DestinationCaller](/contracts/core/interfaces/ICctpV2DestinationCaller.sol/interface.ICctpV2DestinationCaller.md)

## State Variables

### CCTP_V2_BRIDGE_ID

```solidity
uint16 private constant CCTP_V2_BRIDGE_ID = 3
```

## Functions

### constructor

```solidity
constructor(address _registry, address _tokenMessenger, address _messageTransmitter)
    BridgeAdapter(_registry, _tokenMessenger, _tokenMessenger, _messageTransmitter);
```

### initialize

Initializer of the contract.

```solidity
function initialize(address _controller, bytes calldata) external override initializer;
```

**Parameters**

| Name          | Type      | Description                     |
| ------------- | --------- | ------------------------------- |
| `_controller` | `address` | The bridge controller contract. |
| `<none>`      | `bytes`   |                                 |

### receiveCctpV2Message

Handles reception of a CCTP V2 message and signature.

```solidity
function receiveCctpV2Message(bytes calldata message, bytes calldata attestation) external override nonReentrant;
```

**Parameters**

| Name          | Type    | Description                    |
| ------------- | ------- | ------------------------------ |
| `message`     | `bytes` | The CCTP V2 message raw bytes. |
| `attestation` | `bytes` | The message signature.         |

### \_outBridgeTransferCancelDefault

Internal logic for outgoing bridge transfer cancellation default.

```solidity
function _outBridgeTransferCancelDefault(uint256 transferId) internal view override returns (uint256);
```

### \_checkOutBridgeTransferIsCancellable

Checks if an outgoing bridge transfer is in a cancellable state.

```solidity
function _checkOutBridgeTransferIsCancellable(uint256 transferId) internal override;
```

### \_sendOutBridgeTransfer

Handles logic specific to the external bridge protocol for sending out a bridge transfer.

```solidity
function _sendOutBridgeTransfer(uint256 transferId, bytes calldata data) internal override;
```
