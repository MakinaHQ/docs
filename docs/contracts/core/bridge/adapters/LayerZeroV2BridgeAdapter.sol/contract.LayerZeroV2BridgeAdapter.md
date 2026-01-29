# LayerZeroV2BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/bridge/adapters/LayerZeroV2BridgeAdapter.sol)

**Inherits:**
[BridgeAdapter](/contracts/core/bridge/adapters/BridgeAdapter.sol/abstract.BridgeAdapter.md), [ILayerZeroComposer](/contracts/core/interfaces/ILayerZeroComposer.sol/interface.ILayerZeroComposer.md)

## State Variables

### LAYER_ZERO_V2_BRIDGE_ID

```solidity
uint16 private constant LAYER_ZERO_V2_BRIDGE_ID = 2;
```

## Functions

### constructor

```solidity
constructor(address _registry, address _layerZeroV2Endpoint)
    BridgeAdapter(_registry, address(0), address(0), _layerZeroV2Endpoint);
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

### receive

_Allows the contract to receive Ether._

```solidity
receive() external payable;
```

### lzCompose

Composes a LayerZero message from an OApp.

```solidity
function lzCompose(address _from, bytes32, bytes calldata _message, address, bytes calldata) external payable;
```

**Parameters**

| Name       | Type      | Description                                                                                   |
| ---------- | --------- | --------------------------------------------------------------------------------------------- |
| `_from`    | `address` | The address initiating the composition, typically the OApp where the lzReceive was called.    |
| `<none>`   | `bytes32` |                                                                                               |
| `_message` | `bytes`   | The composed message payload in bytes. NOT necessarily the same payload passed via lzReceive. |
| `<none>`   | `address` |                                                                                               |
| `<none>`   | `bytes`   |                                                                                               |

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

## Events

### LzGuidCreated

```solidity
event LzGuidCreated(bytes32 indexed guid, uint256 indexed transferId);
```
