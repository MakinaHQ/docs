# IAsyncRedeemer

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/interfaces/IAsyncRedeemer.sol)

**Inherits:**
[IMachinePeriphery](/contracts/periphery/interfaces/IMachinePeriphery.sol/interface.IMachinePeriphery.md)

## Functions

### nextRequestId

ID of the next redeem request to be created.

```solidity
function nextRequestId() external view returns (uint256);
```

### lastFinalizedRequestId

ID of the last finalized redeem request.

```solidity
function lastFinalizedRequestId() external view returns (uint256);
```

### finalizationDelay

Minimum time (in seconds) to be elapsed between request submission and finalization.

```solidity
function finalizationDelay() external view returns (uint256);
```

### getShares

Request ID => Shares

```solidity
function getShares(uint256 requestId) external view returns (uint256);
```

### getClaimableAssets

Request ID => Claimable Assets

_Reverts if the request is not finalized._

```solidity
function getClaimableAssets(uint256 requestId) external view returns (uint256);
```

### previewFinalizeRequests

Returns the total shares and curreent expected assets for a batch of unfinalized requests up to given request ID.

```solidity
function previewFinalizeRequests(uint256 upToRequestId) external view returns (uint256, uint256);
```

**Parameters**

| Name            | Type      | Description                                                          |
| --------------- | --------- | -------------------------------------------------------------------- |
| `upToRequestId` | `uint256` | The request ID up to which to calculate the total shares and assets. |

**Returns**

| Name     | Type      | Description                                                     |
| -------- | --------- | --------------------------------------------------------------- |
| `<none>` | `uint256` | totalShares The total shares for the batch of requests.         |
| `<none>` | `uint256` | totalAssets The current total assets for the batch of requests. |

### requestRedeem

Creates a redeem request and issues an associated NFT to the receiver.

```solidity
function requestRedeem(uint256 shares, address receiver) external returns (uint256);
```

**Parameters**

| Name       | Type      | Description                      |
| ---------- | --------- | -------------------------------- |
| `shares`   | `uint256` | The amount of shares to redeem.  |
| `receiver` | `address` | The receiver of the receipt NFT. |

**Returns**

| Name     | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| `<none>` | `uint256` | requestId The ID of the redeem request. |

### finalizeRequests

Finalizes redeem requests up to a given request ID.

_Can only be called by the operator of the associated machine._

```solidity
function finalizeRequests(uint256 upToRequestId, uint256 minAssets) external returns (uint256, uint256);
```

**Parameters**

| Name            | Type      | Description                                                                           |
| --------------- | --------- | ------------------------------------------------------------------------------------- |
| `upToRequestId` | `uint256` | The request ID up to which to finalize requests.                                      |
| `minAssets`     | `uint256` | The minimum amount of assets that must be available for the requests to be finalized. |

### claimAssets

Claims the assets associated with a finalized redeem request and burns the associated NFT.

```solidity
function claimAssets(uint256 requestId) external returns (uint256);
```

**Parameters**

| Name        | Type      | Description                                      |
| ----------- | --------- | ------------------------------------------------ |
| `requestId` | `uint256` | the ID of the redeem request and associated NFT. |

### setFinalizationDelay

Sets the finalization delay for redeem requests.

```solidity
function setFinalizationDelay(uint256 newDelay) external;
```

**Parameters**

| Name       | Type      | Description                            |
| ---------- | --------- | -------------------------------------- |
| `newDelay` | `uint256` | The new finalization delay in seconds. |

## Events

### FinalizationDelayChanged

```solidity
event FinalizationDelayChanged(uint256 indexed oldDelay, uint256 indexed newDelay);
```

### RedeemRequestCreated

```solidity
event RedeemRequestCreated(uint256 indexed requestId, uint256 shares, address indexed receiver);
```

### RedeemRequestClaimed

```solidity
event RedeemRequestClaimed(uint256 indexed requestId, uint256 shares, uint256 assets, address indexed receiver);
```

### RedeemRequestsFinalized

```solidity
event RedeemRequestsFinalized(
    uint256 indexed fromRequestId, uint256 indexed toRequestId, uint256 totalShares, uint256 totalAssets
);
```

## Structs

### RedeemRequest

```solidity
struct RedeemRequest {
    uint256 shares;
    uint256 assets;
    uint256 requestTime;
}
```
