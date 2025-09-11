# OracleRegistry
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/registries/OracleRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [IOracleRegistry](/src/interfaces/IOracleRegistry.sol/interface.IOracleRegistry.md)


## State Variables
### OracleRegistryStorageLocation

```solidity
bytes32 private constant OracleRegistryStorageLocation =
    0x49c7e86ce354ebbf25fac336f41752d815bcb13797a06a09b85fd6c0c68ea000;
```


## Functions
### _getOracleRegistryStorage


```solidity
function _getOracleRegistryStorage() private pure returns (OracleRegistryStorage storage $);
```

### constructor


```solidity
constructor();
```

### initialize


```solidity
function initialize(address initialAuthority_) external initializer;
```

### getFeedStaleThreshold

Feed => Staleness threshold in seconds


```solidity
function getFeedStaleThreshold(address feed) external view override returns (uint256);
```

### isFeedRouteRegistered

Token => Is feed route registered for the token


```solidity
function isFeedRouteRegistered(address token) external view override returns (bool);
```

### getFeedRoute

Gets the price feed route for a given token.


```solidity
function getFeedRoute(address token) external view override returns (address, address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is requested.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|feed1 The address of the first price feed.|
|`<none>`|`address`|feed2 The address of the optional second price feed.|


### getPrice

Returns the price of one unit of baseToken in terms of quoteToken.


```solidity
function getPrice(address baseToken, address quoteToken) external view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`baseToken`|`address`|The address of the token for which the price is requested.|
|`quoteToken`|`address`|The address of the token in which the price is quoted.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|price The price of baseToken denominated in quoteToken (expressed in quoteToken decimals).|


### setFeedRoute

Sets the price feed route for a given token.

*Both feeds, if set, must be Chainlink-interface-compliant.
The combination of feed1 and feed2 must be able to price the token in the reference currency.
If feed2 is set to address(0), the token price in the reference currency is assumed to be returned by feed1.*


```solidity
function setFeedRoute(
    address token,
    address feed1,
    uint256 stalenessThreshold1,
    address feed2,
    uint256 stalenessThreshold2
) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is set.|
|`feed1`|`address`|The address of the first price feed.|
|`stalenessThreshold1`|`uint256`|The staleness threshold for the first price feed.|
|`feed2`|`address`|The address of the second price feed. Can be set to address(0).|
|`stalenessThreshold2`|`uint256`|The staleness threshold for the second price feed. Ignored if feed2 is address(0).|


### setFeedStaleThreshold

Sets the price staleness threshold for a given feed.


```solidity
function setFeedStaleThreshold(address feed, uint256 newThreshold) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`feed`|`address`|The address of the price feed.|
|`newThreshold`|`uint256`||


### _getFeedPrice

*Returns the last price of the feed.*

*Reverts if the feed is stale or the price is negative.*


```solidity
function _getFeedPrice(address feed) private view returns (uint256);
```

### _getFeedDecimals

*Returns the number of decimals of the feed.*

*Returns 0 if the feed is not set.*


```solidity
function _getFeedDecimals(address feed) private view returns (uint8);
```

## Structs
### OracleRegistryStorage
**Note:**
storage-location: erc7201:makina.storage.OracleRegistry


```solidity
struct OracleRegistryStorage {
    mapping(address token => FeedRoute feedRoute) _feedRoutes;
    mapping(address feed => uint256 stalenessThreshold) _feedStaleThreshold;
}
```

