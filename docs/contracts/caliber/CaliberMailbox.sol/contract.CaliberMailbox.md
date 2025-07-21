# CaliberMailbox
[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/caliber/CaliberMailbox.sol)

**Inherits:**
[MakinaGovernable](/src/utils/MakinaGovernable.sol/abstract.MakinaGovernable.md), ReentrancyGuardUpgradeable, [BridgeController](/src/bridge/controller/BridgeController.sol/abstract.BridgeController.md), [ICaliberMailbox](/src/interfaces/ICaliberMailbox.sol/interface.ICaliberMailbox.md)


## State Variables
### hubChainId

```solidity
uint256 public immutable hubChainId;
```


### CaliberMailboxStorageLocation

```solidity
bytes32 private constant CaliberMailboxStorageLocation =
    0xc8f2c10c9147366283b13eb82b7eca93d88636f13eec15d81ed4c6aa5006aa00;
```


## Functions
### _getCaliberStorage


```solidity
function _getCaliberStorage() private pure returns (CaliberMailboxStorage storage $);
```

### constructor


```solidity
constructor(address _registry, uint256 _hubChainId) MakinaContext(_registry);
```

### initialize


```solidity
function initialize(IMakinaGovernable.MakinaGovernableInitParams calldata mgParams, address _hubMachine)
    external
    override
    initializer;
```

### onlyFactory


```solidity
modifier onlyFactory();
```

### caliber

Address of the associated caliber.


```solidity
function caliber() external view override returns (address);
```

### getHubBridgeAdapter

Returns the foreign address of the Hub bridge adapter for a given bridge ID.


```solidity
function getHubBridgeAdapter(uint16 bridgeId) external view override returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|


### getSpokeCaliberAccountingData

Returns the accounting data of the associated caliber.


```solidity
function getSpokeCaliberAccountingData() external view override returns (SpokeCaliberAccountingData memory data);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`data`|`SpokeCaliberAccountingData`|The accounting data.|


### manageTransfer

Manages the transfer of tokens between a machine and a caliber. The transfer direction depends on the caller.


```solidity
function manageTransfer(address token, uint256 amount, bytes calldata data) external override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token.|
|`amount`|`uint256`|The amount of tokens to transfer.|
|`data`|`bytes`|ABI-encoded parameters required for bridge-related transfers. Ignored for transfers between a machine and its hub caliber.|


### sendOutBridgeTransfer

Executes a scheduled outgoing bridge transfer.


```solidity
function sendOutBridgeTransfer(uint16 bridgeId, uint256 transferId, bytes calldata data) external onlyOperator;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`transferId`|`uint256`|The ID of the transfer to execute.|
|`data`|`bytes`|The optional data needed to execute the transfer.|


### authorizeInBridgeTransfer

Registers a message hash as authorized for an incoming bridge transfer.


```solidity
function authorizeInBridgeTransfer(uint16 bridgeId, bytes32 messageHash) external notRecoveryMode onlyMechanic;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`messageHash`|`bytes32`|The hash of the message to authorize.|


### claimInBridgeTransfer

Transfers a received bridge transfer out of the adapter.


```solidity
function claimInBridgeTransfer(uint16 bridgeId, uint256 transferId) external onlyOperator;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`transferId`|`uint256`|The ID of the transfer to claim.|


### cancelOutBridgeTransfer

Cancels an outgoing bridge transfer.


```solidity
function cancelOutBridgeTransfer(uint16 bridgeId, uint256 transferId) external onlyOperator;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`transferId`|`uint256`|The ID of the transfer to cancel.|


### setCaliber

Sets the associated caliber address.


```solidity
function setCaliber(address _caliber) external override onlyFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_caliber`|`address`||


### setHubBridgeAdapter

Registers a hub bridge adapter.


```solidity
function setHubBridgeAdapter(uint16 bridgeId, address adapter) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`adapter`|`address`|The foreign address of the bridge adapter.|


### setOutTransferEnabled

Sets the outgoing transfer enabled status for a bridge.


```solidity
function setOutTransferEnabled(uint16 bridgeId, bool enabled) external override onlyRiskManagerTimelock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`enabled`|`bool`|True to enable outgoing transfer for the given bridge ID, false to disable.|


### setMaxBridgeLossBps

Sets the maximum allowed value loss in basis points for a bridge.


```solidity
function setMaxBridgeLossBps(uint16 bridgeId, uint256 maxBridgeLossBps) external override onlyRiskManagerTimelock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`maxBridgeLossBps`|`uint256`|The maximum allowed value loss in basis points.|


### resetBridgingState

Resets internal bridge counters for a given token, and withdraw token balances held by all bridge adapters.

*This function is intended to be used by the DAO to realign bridge accounting state and maintain protocol consistency,
typically in response to operator deviations, external bridge discrepancies, or unbounded counter growth.*


```solidity
function resetBridgingState(address token) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token.|


## Structs
### CaliberMailboxStorage
**Note:**
storage-location: erc7201:makina.storage.CaliberMailbox


```solidity
struct CaliberMailboxStorage {
    address _hubMachine;
    address _caliber;
    mapping(uint16 bridgeId => address adapter) _hubBridgeAdapters;
    EnumerableMap.AddressToUintMap _bridgesIn;
    EnumerableMap.AddressToUintMap _bridgesOut;
}
```

