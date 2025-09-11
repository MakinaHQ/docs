# IBridgeAdapterFactory
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/IBridgeAdapterFactory.sol)


## Functions
### isBridgeAdapter

Address => Whether this is a BridgeAdapter instance deployed by this factory.


```solidity
function isBridgeAdapter(address adapter) external view returns (bool);
```

### createBridgeAdapter

Deploys a bridge adapter instance.


```solidity
function createBridgeAdapter(uint16 bridgeId, bytes calldata initData) external returns (address adapter);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge for which the adapter is being created.|
|`initData`|`bytes`|The optional initialization data for the bridge adapter.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`adapter`|`address`|The address of the deployed bridge adapter.|


## Events
### BridgeAdapterCreated

```solidity
event BridgeAdapterCreated(address indexed controller, uint256 indexed bridgeId, address indexed adapter);
```

