# IBridgeAdapter
[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/interfaces/IBridgeAdapter.sol)


## Functions
### initialize

Initializer of the contract.


```solidity
function initialize(address controller, bytes calldata initData) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`controller`|`address`|The bridge controller contract.|
|`initData`|`bytes`|The optional initialization data.|


### controller

Returns the address of the bridge controller contract.


```solidity
function controller() external view returns (address);
```

### bridgeId

Returns the ID of the adapted external bridge.


```solidity
function bridgeId() external view returns (uint16);
```

### approvalTarget

Returns the address of the external bridge approval target contract.


```solidity
function approvalTarget() external view returns (address);
```

### executionTarget

Returns the address of the external bridge execution target contract.


```solidity
function executionTarget() external view returns (address);
```

### receiveSource

Returns the address of the external bridge contract responsible for sending output funds.


```solidity
function receiveSource() external view returns (address);
```

### nextOutTransferId

Returns the ID of the next outgoing transfer.


```solidity
function nextOutTransferId() external view returns (uint256);
```

### nextInTransferId

Returns the ID of the next incoming transfer.


```solidity
function nextInTransferId() external view returns (uint256);
```

### scheduleOutBridgeTransfer

Schedules an outgoing bridge transfer and returns the message hash.

*Emits an event containing the id of the transfer and the hash of the bridge transfer message.*


```solidity
function scheduleOutBridgeTransfer(
    uint256 destinationChainId,
    address recipient,
    address inputToken,
    uint256 inputAmount,
    address outputToken,
    uint256 minOutputAmount
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`destinationChainId`|`uint256`|The ID of the destination chain.|
|`recipient`|`address`|The address of the recipient on the destination chain.|
|`inputToken`|`address`|The address of the input token.|
|`inputAmount`|`uint256`|The amount of the input token to transfer.|
|`outputToken`|`address`|The address of the output token on the destination chain.|
|`minOutputAmount`|`uint256`|The minimum amount of the output token to receive.|


### sendOutBridgeTransfer

Executes a scheduled outgoing bridge transfer.


```solidity
function sendOutBridgeTransfer(uint256 transferId, bytes calldata data) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`transferId`|`uint256`|The ID of the transfer to execute.|
|`data`|`bytes`|The optional data needed to execute the transfer.|


### outBridgeTransferCancelDefault

Returns the default amount that must be transferred to the adapter to cancel an outgoing bridge transfer.

*If the transfer has not yet been sent or if the full amount was refunded by the external bridge, returns 0.*

*If the bridge retains a fee upon cancellation, the returned value reflects that fee.*


```solidity
function outBridgeTransferCancelDefault(uint256 transferId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`transferId`|`uint256`|The ID of the transfer to check.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount required to cancel the transfer.|


### cancelOutBridgeTransfer

Cancels an outgoing bridge transfer.


```solidity
function cancelOutBridgeTransfer(uint256 transferId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`transferId`|`uint256`|The ID of the transfer to cancel.|


### authorizeInBridgeTransfer

Registers a message hash as authorized for an incoming bridge transfer.


```solidity
function authorizeInBridgeTransfer(bytes32 messageHash) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`messageHash`|`bytes32`|The hash of the message to authorize.|


### claimInBridgeTransfer

Transfers a received bridge transfer out of the adapter.


```solidity
function claimInBridgeTransfer(uint256 transferId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`transferId`|`uint256`|The ID of the transfer to claim.|


### withdrawPendingFunds

Resets internal state for a given token address, and transfers token balance to associated controller.

*This function is intended to be used by the DAO to unlock funds stuck in the adapter, typically
in response to operator deviations or external bridge discrepancies.*


```solidity
function withdrawPendingFunds(address token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token.|


## Events
### InBridgeTransferAuthorized

```solidity
event InBridgeTransferAuthorized(bytes32 indexed messageHash);
```

### OutBridgeTransferCancelled

```solidity
event OutBridgeTransferCancelled(uint256 indexed transferId);
```

### InBridgeTransferClaimed

```solidity
event InBridgeTransferClaimed(uint256 indexed transferId);
```

### InBridgeTransferReceived

```solidity
event InBridgeTransferReceived(uint256 indexed transferId);
```

### OutBridgeTransferSent

```solidity
event OutBridgeTransferSent(uint256 indexed transferId);
```

### OutBridgeTransferScheduled

```solidity
event OutBridgeTransferScheduled(uint256 indexed transferId, bytes32 indexed messageHash);
```

### PendingFundsWithdrawn

```solidity
event PendingFundsWithdrawn(address indexed token, uint256 amount);
```

## Structs
### OutBridgeTransfer

```solidity
struct OutBridgeTransfer {
    address recipient;
    uint256 destinationChainId;
    address inputToken;
    uint256 inputAmount;
    address outputToken;
    uint256 minOutputAmount;
    bytes encodedMessage;
}
```

### InBridgeTransfer

```solidity
struct InBridgeTransfer {
    address sender;
    uint256 originChainId;
    address inputToken;
    uint256 inputAmount;
    address outputToken;
    uint256 outputAmount;
}
```

### BridgeMessage

```solidity
struct BridgeMessage {
    uint256 outTransferId;
    address sender;
    address recipient;
    uint256 originChainId;
    uint256 destinationChainId;
    address inputToken;
    uint256 inputAmount;
    address outputToken;
    uint256 minOutputAmount;
}
```

