# AcrossV3BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/bridge/adapters/AcrossV3BridgeAdapter.sol)

**Inherits:**
[BridgeAdapter](/contracts/core/bridge/adapters/BridgeAdapter.sol/abstract.BridgeAdapter.md), [IAcrossV3MessageHandler](/contracts/core/interfaces/IAcrossV3MessageHandler.sol/interface.IAcrossV3MessageHandler.md)

## State Variables

### ACROSS_V3_BRIDGE_ID

```solidity
uint16 private constant ACROSS_V3_BRIDGE_ID = 1;
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

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `_controller` | `address` |             |
| `<none>`      | `bytes`   |             |

### handleV3AcrossMessage

```solidity
function handleV3AcrossMessage(address tokenSent, uint256 amount, address, bytes memory encodedMessage)
    external
    override;
```

### \_outBridgeTransferCancelDefault

_Internal logic for outgoing bridge transfer cancellation default._

```solidity
function _outBridgeTransferCancelDefault(uint256 transferId) internal view override returns (uint256);
```

### \_checkOutBridgeTransferIsCancellable

_Checks if an outgoing bridge transfer is in a cancellable state._

```solidity
function _checkOutBridgeTransferIsCancellable(uint256 transferId) internal override;
```

### \_sendOutBridgeTransfer

_Handles logic specific to the external bridge protocol for sending out a bridge transfer._

```solidity
function _sendOutBridgeTransfer(uint256 transferId, bytes calldata data) internal override;
```
