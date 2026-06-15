# AcrossV3BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/bridge/adapters/AcrossV3BridgeAdapter.sol)

**Inherits:**
[BridgeAdapter](/contracts/core/bridge/adapters/BridgeAdapter.sol/abstract.BridgeAdapter.md), [IAcrossV3MessageHandler](/contracts/core/interfaces/IAcrossV3MessageHandler.sol/interface.IAcrossV3MessageHandler.md)

## State Variables

### ACROSS_V3_BRIDGE_ID

```solidity
uint16 private constant ACROSS_V3_BRIDGE_ID = 1
```

## Functions

### constructor

```solidity
constructor(address _registry, address _acrossV3SpokePool)
    BridgeAdapter(_registry, _acrossV3SpokePool, _acrossV3SpokePool, _acrossV3SpokePool);
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

### handleV3AcrossMessage

```solidity
function handleV3AcrossMessage(address tokenSent, uint256 amount, address, bytes memory encodedMessage)
    external
    override;
```

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
