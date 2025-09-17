# AcrossV3BridgeAdapter

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/bridge/adapters/AcrossV3BridgeAdapter.sol)

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
constructor(address _acrossV3SpokePool) BridgeAdapter(_acrossV3SpokePool, _acrossV3SpokePool, _acrossV3SpokePool);
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

### handleV3AcrossMessage

```solidity
function handleV3AcrossMessage(address tokenSent, uint256 amount, address, bytes memory encodedMessage)
    external
    override;
```
