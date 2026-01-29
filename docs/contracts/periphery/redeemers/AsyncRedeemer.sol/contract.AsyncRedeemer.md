# AsyncRedeemer

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/redeemers/AsyncRedeemer.sol)

**Inherits:**
ERC721Upgradeable, ReentrancyGuard, [MachinePeriphery](/contracts/periphery/utils/MachinePeriphery.sol/abstract.MachinePeriphery.md), [Whitelist](/contracts/periphery/utils/Whitelist.sol/abstract.Whitelist.md), [IAsyncRedeemer](/contracts/periphery/interfaces/IAsyncRedeemer.sol/interface.IAsyncRedeemer.md)

## State Variables

### AsyncRedeemerStorageLocation

```solidity
bytes32 private constant AsyncRedeemerStorageLocation =
    0x187c268ec5d498b5b6e4945b27f62abf37217cdbd80e6429181b3e4c2c378900;
```

## Functions

### \_getAsyncRedeemerStorage

```solidity
function _getAsyncRedeemerStorage() private pure returns (AsyncRedeemerStorage storage $);
```

### constructor

```solidity
constructor(address _registry) MachinePeriphery(_registry);
```

### initialize

Initializer of the contract.

```solidity
function initialize(bytes calldata data) external virtual override initializer;
```

**Parameters**

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| `data` | `bytes` |             |

### nextRequestId

ID of the next redeem request to be created.

```solidity
function nextRequestId() external view override returns (uint256);
```

### lastFinalizedRequestId

ID of the last finalized redeem request.

```solidity
function lastFinalizedRequestId() external view override returns (uint256);
```

### finalizationDelay

Minimum time (in seconds) to be elapsed between request submission and finalization.

```solidity
function finalizationDelay() external view override returns (uint256);
```

### minRedeemAmount

Minimum amount of shares required to create a redeem request.

```solidity
function minRedeemAmount() external view override returns (uint256);
```

### getShares

Request ID => Shares

```solidity
function getShares(uint256 requestId) external view override returns (uint256);
```

### getClaimableAssets

Request ID => Claimable Assets

_Reverts if the request is not finalized._

```solidity
function getClaimableAssets(uint256 requestId) public view override returns (uint256);
```

### previewFinalizeRequests

Returns the total shares and curreent expected assets for a batch of unfinalized requests up to given request ID.

```solidity
function previewFinalizeRequests(uint256 upToRequestId) public view override returns (uint256, uint256);
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
function requestRedeem(uint256 shares, address receiver, uint256 minAssets)
    public
    virtual
    override
    nonReentrant
    whitelistCheck
    returns (uint256);
```

**Parameters**

| Name        | Type      | Description                                                 |
| ----------- | --------- | ----------------------------------------------------------- |
| `shares`    | `uint256` | The amount of shares to redeem.                             |
| `receiver`  | `address` | The receiver of the receipt NFT.                            |
| `minAssets` | `uint256` | The minimum amount of assets for the request’s entry price. |

**Returns**

| Name     | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| `<none>` | `uint256` | requestId The ID of the redeem request. |

### finalizeRequests

Finalizes redeem requests up to a given request ID.

_Can only be called by the operator of the associated machine._

```solidity
function finalizeRequests(uint256 upToRequestId, uint256 minAssets)
    external
    override
    onlyMechanic
    nonReentrant
    returns (uint256, uint256);
```

**Parameters**

| Name            | Type      | Description                                                                           |
| --------------- | --------- | ------------------------------------------------------------------------------------- |
| `upToRequestId` | `uint256` | The request ID up to which to finalize requests.                                      |
| `minAssets`     | `uint256` | The minimum amount of assets that must be available for the requests to be finalized. |

### claimAssets

Claims the assets associated with a finalized redeem request and burns the associated NFT.

```solidity
function claimAssets(uint256 requestId) external override nonReentrant whitelistCheck returns (uint256);
```

**Parameters**

| Name        | Type      | Description                                      |
| ----------- | --------- | ------------------------------------------------ |
| `requestId` | `uint256` | the ID of the redeem request and associated NFT. |

### setFinalizationDelay

Sets the finalization delay for redeem requests.

```solidity
function setFinalizationDelay(uint256 newDelay) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name       | Type      | Description                            |
| ---------- | --------- | -------------------------------------- |
| `newDelay` | `uint256` | The new finalization delay in seconds. |

### setMinRedeemAmount

Sets the minimum redeem amount.

```solidity
function setMinRedeemAmount(uint256 newMinAmount) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name           | Type      | Description |
| -------------- | --------- | ----------- |
| `newMinAmount` | `uint256` |             |

### setWhitelistStatus

Enables or disables the whitelist.

```solidity
function setWhitelistStatus(bool enabled) external override onlyRiskManager;
```

**Parameters**

| Name      | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `enabled` | `bool` | True to enable the whitelist, false to disable. |

### setWhitelistedUsers

Whitelists or unwhitelists a list of users.

```solidity
function setWhitelistedUsers(address[] calldata users, bool whitelisted) external override onlyRiskManager;
```

**Parameters**

| Name          | Type        | Description                                        |
| ------------- | ----------- | -------------------------------------------------- |
| `users`       | `address[]` | The addresses of the users to update.              |
| `whitelisted` | `bool`      | True to whitelist the users, false to unwhitelist. |

### \_validateFinalizedRequest

_Checks that the request exists, is finalized, and has not yet been claimed._

```solidity
function _validateFinalizedRequest(uint256 requestId) internal view;
```

### \_validateFinalizableRequest

_Checks that the request exists and is eligible for finalization._

```solidity
function _validateFinalizableRequest(uint256 requestId) internal view;
```

## Structs

### AsyncRedeemerStorage

**Note:**
storage-location: erc7201:makina.storage.AsyncRedeemer

```solidity
struct AsyncRedeemerStorage {
    uint256 _nextRequestId;
    uint256 _lastFinalizedRequestId;
    uint256 _finalizationDelay;
    mapping(uint256 requestId => IAsyncRedeemer.RedeemRequest request) _requests;
    uint256 _minRedeemAmount;
}
```
