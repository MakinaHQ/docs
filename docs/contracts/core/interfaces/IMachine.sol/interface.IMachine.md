# IMachine

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/IMachine.sol)

**Inherits:**
[IMachineEndpoint](/contracts/core/interfaces/IMachineEndpoint.sol/interface.IMachineEndpoint.md)

## Functions

### initialize

Initializer of the contract.

```solidity
function initialize(
    MachineInitParams calldata mParams,
    MakinaGovernableInitParams calldata mgParams,
    address _preDepositVault,
    address _shareToken,
    address _accountingToken,
    address _hubCaliber
) external;
```

**Parameters**

| Name               | Type                         | Description                                      |
| ------------------ | ---------------------------- | ------------------------------------------------ |
| `mParams`          | `MachineInitParams`          | The machine initialization parameters.           |
| `mgParams`         | `MakinaGovernableInitParams` | The makina governable initialization parameters. |
| `_preDepositVault` | `address`                    | The address of the pre-deposit vault.            |
| `_shareToken`      | `address`                    | The address of the share token.                  |
| `_accountingToken` | `address`                    | The address of the accounting token.             |
| `_hubCaliber`      | `address`                    | The address of the hub caliber.                  |

### wormhole

Address of the Wormhole Core Bridge.

```solidity
function wormhole() external view returns (address);
```

### depositor

Address of the depositor.

```solidity
function depositor() external view returns (address);
```

### redeemer

Address of the redeemer.

```solidity
function redeemer() external view returns (address);
```

### shareToken

Address of the share token.

```solidity
function shareToken() external view returns (address);
```

### accountingToken

Address of the accounting token.

```solidity
function accountingToken() external view returns (address);
```

### hubCaliber

Address of the hub caliber.

```solidity
function hubCaliber() external view returns (address);
```

### feeManager

Address of the fee manager.

```solidity
function feeManager() external view returns (address);
```

### caliberStaleThreshold

Maximum duration a caliber can remain unaccounted for before it is considered stale.

```solidity
function caliberStaleThreshold() external view returns (uint256);
```

### maxFixedFeeAccrualRate

Maximum fixed fee accrual rate per second used to compute an upper bound on shares to be minted, 1e18 = 100%.

```solidity
function maxFixedFeeAccrualRate() external view returns (uint256);
```

### maxPerfFeeAccrualRate

Maximum performance fee accrual rate per second used to compute an upper bound on shares to be minted, 1e18 = 100%.

```solidity
function maxPerfFeeAccrualRate() external view returns (uint256);
```

### feeMintCooldown

Minimum time to be elapsed between two fee minting events.

```solidity
function feeMintCooldown() external view returns (uint256);
```

### shareLimit

Share token supply limit that cannot be exceeded by new deposits.

```solidity
function shareLimit() external view returns (uint256);
```

### maxSharePriceChangeRate

Maximum relative share price change rate per second during total AUM updates, 1e18 = 100%.

```solidity
function maxSharePriceChangeRate() external view returns (uint256);
```

### maxMint

Maximum amount of shares that can currently be minted through asset deposits.

```solidity
function maxMint() external view returns (uint256);
```

### maxWithdraw

Maximum amount of accounting tokens that can currently be withdrawn through share redemptions.

```solidity
function maxWithdraw() external view returns (uint256);
```

### lastTotalAum

Last total machine AUM.

```solidity
function lastTotalAum() external view returns (uint256);
```

### lastGlobalAccountingTime

Timestamp of the last global machine accounting.

```solidity
function lastGlobalAccountingTime() external view returns (uint256);
```

### isIdleToken

Token => Is the token registered as an idle token in this machine.

```solidity
function isIdleToken(address token) external view returns (bool);
```

### getIdleTokensLength

Length of the idle tokens list.

```solidity
function getIdleTokensLength() external view returns (uint256);
```

### getIdleToken

Idle token index => Idle token address.

_There are no guarantees on the ordering of values inside the idle tokens list,
and it may change when values are added or removed._

```solidity
function getIdleToken(uint256 idx) external view returns (address);
```

### getSpokeCalibersLength

Number of calibers associated with the machine.

```solidity
function getSpokeCalibersLength() external view returns (uint256);
```

### getSpokeChainId

Spoke caliber index => Spoke Chain ID.

```solidity
function getSpokeChainId(uint256 idx) external view returns (uint256);
```

### getSpokeCaliberDetailedAum

Spoke Chain ID => Spoke caliber's AUM, individual positions values and accounting timestamp.

```solidity
function getSpokeCaliberDetailedAum(uint256 chainId)
    external
    view
    returns (uint256 aum, bytes[] memory positions, bytes[] memory baseTokens, uint256 timestamp);
```

### getSpokeCaliberMailbox

Spoke Chain ID => Spoke Caliber Mailbox Address.

```solidity
function getSpokeCaliberMailbox(uint256 chainId) external view returns (address);
```

### getSpokeBridgeAdapter

Spoke Chain ID => Spoke Bridge ID => Spoke Bridge Adapter.

```solidity
function getSpokeBridgeAdapter(uint256 chainId, uint16 bridgeId) external view returns (address);
```

### convertToShares

Returns the amount of shares that the Machine would exchange for the amount of accounting tokens provided.

```solidity
function convertToShares(uint256 assets) external view returns (uint256);
```

**Parameters**

| Name     | Type      | Description                      |
| -------- | --------- | -------------------------------- |
| `assets` | `uint256` | The amount of accounting tokens. |

**Returns**

| Name     | Type      | Description                  |
| -------- | --------- | ---------------------------- |
| `<none>` | `uint256` | shares The amount of shares. |

### convertToAssets

Returns the amount of accounting tokens that the Machine would exchange for the amount of shares provided.

```solidity
function convertToAssets(uint256 shares) external view returns (uint256);
```

**Parameters**

| Name     | Type      | Description           |
| -------- | --------- | --------------------- |
| `shares` | `uint256` | The amount of shares. |

**Returns**

| Name     | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| `<none>` | `uint256` | assets The amount of accounting tokens. |

### transferToHubCaliber

Initiates a token transfers to the hub caliber.

```solidity
function transferToHubCaliber(address token, uint256 amount) external;
```

**Parameters**

| Name     | Type      | Description                           |
| -------- | --------- | ------------------------------------- |
| `token`  | `address` | The address of the token to transfer. |
| `amount` | `uint256` | The amount of token to transfer.      |

### transferToSpokeCaliber

Initiates a token transfers to the spoke caliber.

```solidity
function transferToSpokeCaliber(
    uint16 bridgeId,
    uint256 chainId,
    address token,
    uint256 amount,
    uint256 minOutputAmount
) external;
```

**Parameters**

| Name              | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| `bridgeId`        | `uint16`  | The ID of the bridge to use for the transfer.         |
| `chainId`         | `uint256` | The foreign EVM chain ID of the spoke caliber.        |
| `token`           | `address` | The address of the token to transfer.                 |
| `amount`          | `uint256` | The amount of token to transfer.                      |
| `minOutputAmount` | `uint256` | The minimum output amount expected from the transfer. |

### updateTotalAum

Updates the total AUM of the machine.

```solidity
function updateTotalAum() external returns (uint256);
```

**Returns**

| Name     | Type      | Description                     |
| -------- | --------- | ------------------------------- |
| `<none>` | `uint256` | totalAum The updated total AUM. |

### deposit

Deposits accounting tokens into the machine and mints shares to the receiver.

```solidity
function deposit(uint256 assets, address receiver, uint256 minShares, bytes32 referralKey) external returns (uint256);
```

**Parameters**

| Name          | Type      | Description                                              |
| ------------- | --------- | -------------------------------------------------------- |
| `assets`      | `uint256` | The amount of accounting tokens to deposit.              |
| `receiver`    | `address` | The receiver of minted shares.                           |
| `minShares`   | `uint256` | The minimum amount of shares to be minted.               |
| `referralKey` | `bytes32` | The optional identifier used to track a referral source. |

**Returns**

| Name     | Type      | Description                         |
| -------- | --------- | ----------------------------------- |
| `<none>` | `uint256` | shares The amount of shares minted. |

### redeem

Redeems shares from the machine and transfers accounting tokens to the receiver.

```solidity
function redeem(uint256 shares, address receiver, uint256 minAssets) external returns (uint256);
```

**Parameters**

| Name        | Type      | Description                                                |
| ----------- | --------- | ---------------------------------------------------------- |
| `shares`    | `uint256` | The amount of shares to redeem.                            |
| `receiver`  | `address` | The receiver of the accounting tokens.                     |
| `minAssets` | `uint256` | The minimum amount of accounting tokens to be transferred. |

**Returns**

| Name     | Type      | Description                                         |
| -------- | --------- | --------------------------------------------------- |
| `<none>` | `uint256` | assets The amount of accounting tokens transferred. |

### updateSpokeCaliberAccountingData

Updates spoke caliber accounting data using Wormhole Cross-Chain Queries (CCQ).

_Validates the Wormhole CCQ response and guardian signatures before updating state._

```solidity
function updateSpokeCaliberAccountingData(bytes memory response, GuardianSignature[] memory signatures) external;
```

**Parameters**

| Name         | Type                  | Description                                                                           |
| ------------ | --------------------- | ------------------------------------------------------------------------------------- |
| `response`   | `bytes`               | The Wormhole CCQ response payload containing the accounting data.                     |
| `signatures` | `GuardianSignature[]` | The array of Wormhole guardians signatures attesting to the validity of the response. |

### setSpokeCaliber

Registers a spoke caliber mailbox and related bridge adapters.

```solidity
function setSpokeCaliber(
    uint256 chainId,
    address spokeCaliberMailbox,
    uint16[] calldata bridges,
    address[] calldata adapters
) external;
```

**Parameters**

| Name                  | Type        | Description                                                                               |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `chainId`             | `uint256`   | The foreign EVM chain ID of the spoke caliber.                                            |
| `spokeCaliberMailbox` | `address`   | The address of the spoke caliber mailbox.                                                 |
| `bridges`             | `uint16[]`  | The list of bridges supported with the spoke caliber.                                     |
| `adapters`            | `address[]` | The list of corresponding adapters for each bridge. Must be the same length as `bridges`. |

### setSpokeBridgeAdapter

Registers a spoke bridge adapter.

```solidity
function setSpokeBridgeAdapter(uint256 chainId, uint16 bridgeId, address adapter) external;
```

**Parameters**

| Name       | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| `chainId`  | `uint256` | The foreign EVM chain ID of the adapter.   |
| `bridgeId` | `uint16`  | The ID of the bridge.                      |
| `adapter`  | `address` | The foreign address of the bridge adapter. |

### setDepositor

Sets the depositor address.

```solidity
function setDepositor(address newDepositor) external;
```

**Parameters**

| Name           | Type      | Description                       |
| -------------- | --------- | --------------------------------- |
| `newDepositor` | `address` | The address of the new depositor. |

### setRedeemer

Sets the redeemer address.

```solidity
function setRedeemer(address newRedeemer) external;
```

**Parameters**

| Name          | Type      | Description                      |
| ------------- | --------- | -------------------------------- |
| `newRedeemer` | `address` | The address of the new redeemer. |

### setFeeManager

Sets the fee manager address.

```solidity
function setFeeManager(address newFeeManager) external;
```

**Parameters**

| Name            | Type      | Description                         |
| --------------- | --------- | ----------------------------------- |
| `newFeeManager` | `address` | The address of the new fee manager. |

### setCaliberStaleThreshold

Sets the caliber accounting staleness threshold.

```solidity
function setCaliberStaleThreshold(uint256 newCaliberStaleThreshold) external;
```

**Parameters**

| Name                       | Type      | Description                   |
| -------------------------- | --------- | ----------------------------- |
| `newCaliberStaleThreshold` | `uint256` | The new threshold in seconds. |

### setMaxFixedFeeAccrualRate

Sets the maximum fixed fee accrual rate.

```solidity
function setMaxFixedFeeAccrualRate(uint256 newMaxAccrualRate) external;
```

**Parameters**

| Name                | Type      | Description                                                     |
| ------------------- | --------- | --------------------------------------------------------------- |
| `newMaxAccrualRate` | `uint256` | The new maximum fixed fee accrual rate per second, 1e18 = 100%. |

### setMaxPerfFeeAccrualRate

Sets the maximum performance fee accrual rate.

```solidity
function setMaxPerfFeeAccrualRate(uint256 newMaxAccrualRate) external;
```

**Parameters**

| Name                | Type      | Description                                                           |
| ------------------- | --------- | --------------------------------------------------------------------- |
| `newMaxAccrualRate` | `uint256` | The new maximum performance fee accrual rate per second, 1e18 = 100%. |

### setFeeMintCooldown

Sets the minimum time to be elapsed between two fee minting events.

```solidity
function setFeeMintCooldown(uint256 newFeeMintCooldown) external;
```

**Parameters**

| Name                 | Type      | Description                  |
| -------------------- | --------- | ---------------------------- |
| `newFeeMintCooldown` | `uint256` | The new cooldown in seconds. |

### setShareLimit

Sets the new share token supply limit that cannot be exceeded by new deposits.

```solidity
function setShareLimit(uint256 newShareLimit) external;
```

**Parameters**

| Name            | Type      | Description          |
| --------------- | --------- | -------------------- |
| `newShareLimit` | `uint256` | The new share limit. |

### setMaxSharePriceChangeRate

Sets the new maximum relative share price change rate per second during total AUM updates, 1e18 = 100%.

```solidity
function setMaxSharePriceChangeRate(uint256 newMaxSharePriceChangeRate) external;
```

**Parameters**

| Name                         | Type      | Description                                       |
| ---------------------------- | --------- | ------------------------------------------------- |
| `newMaxSharePriceChangeRate` | `uint256` | The new maximum relative share price change rate. |

## Events

### CaliberStaleThresholdChanged

```solidity
event CaliberStaleThresholdChanged(uint256 indexed oldThreshold, uint256 indexed newThreshold);
```

### Deposit

```solidity
event Deposit(
    address indexed sender, address indexed receiver, uint256 assets, uint256 shares, bytes32 indexed referralKey
);
```

### DepositorChanged

```solidity
event DepositorChanged(address indexed oldDepositor, address indexed newDepositor);
```

### FeeManagerChanged

```solidity
event FeeManagerChanged(address indexed oldFeeManager, address indexed newFeeManager);
```

### FeeMintCooldownChanged

```solidity
event FeeMintCooldownChanged(uint256 indexed oldFeeMintCooldown, uint256 indexed newFeeMintCooldown);
```

### FeesMinted

```solidity
event FeesMinted(uint256 shares);
```

### MaxFixedFeeAccrualRateChanged

```solidity
event MaxFixedFeeAccrualRateChanged(uint256 indexed oldMaxAccrualRate, uint256 indexed newMaxAccrualRate);
```

### MaxPerfFeeAccrualRateChanged

```solidity
event MaxPerfFeeAccrualRateChanged(uint256 indexed oldMaxAccrualRate, uint256 indexed newMaxAccrualRate);
```

### MaxSharePriceChangeRateChanged

```solidity
event MaxSharePriceChangeRateChanged(uint256 indexed oldMaxChangeRate, uint256 indexed newMaxChangeRate);
```

### Redeem

```solidity
event Redeem(address indexed owner, address indexed receiver, uint256 assets, uint256 shares);
```

### RedeemerChanged

```solidity
event RedeemerChanged(address indexed oldRedeemer, address indexed newRedeemer);
```

### ShareLimitChanged

```solidity
event ShareLimitChanged(uint256 indexed oldShareLimit, uint256 indexed newShareLimit);
```

### SpokeBridgeAdapterSet

```solidity
event SpokeBridgeAdapterSet(uint256 indexed chainId, uint256 indexed bridgeId, address indexed adapter);
```

### SpokeCaliberMailboxSet

```solidity
event SpokeCaliberMailboxSet(uint256 indexed chainId, address indexed caliberMailbox);
```

### TotalAumUpdated

```solidity
event TotalAumUpdated(uint256 totalAum);
```

### TransferToCaliber

```solidity
event TransferToCaliber(uint256 indexed chainId, address indexed token, uint256 amount);
```

## Structs

### MachineInitParams

Initialization parameters.

```solidity
struct MachineInitParams {
    address initialDepositor;
    address initialRedeemer;
    address initialFeeManager;
    uint256 initialCaliberStaleThreshold;
    uint256 initialMaxFixedFeeAccrualRate;
    uint256 initialMaxPerfFeeAccrualRate;
    uint256 initialFeeMintCooldown;
    uint256 initialShareLimit;
    uint256 initialMaxSharePriceChangeRate;
}
```

**Properties**

| Name                             | Type      | Description                                                                                    |
| -------------------------------- | --------- | ---------------------------------------------------------------------------------------------- |
| `initialDepositor`               | `address` | The address of the initial depositor.                                                          |
| `initialRedeemer`                | `address` | The address of the initial redeemer.                                                           |
| `initialFeeManager`              | `address` | The address of the initial fee manager.                                                        |
| `initialCaliberStaleThreshold`   | `uint256` | The caliber accounting staleness threshold in seconds.                                         |
| `initialMaxFixedFeeAccrualRate`  | `uint256` | The maximum fixed fee accrual rate per second, 1e18 = 100%.                                    |
| `initialMaxPerfFeeAccrualRate`   | `uint256` | The maximum performance fee accrual rate per second, 1e18 = 100%.                              |
| `initialFeeMintCooldown`         | `uint256` | The minimum time to be elapsed between two fee minting events in seconds.                      |
| `initialShareLimit`              | `uint256` | The share cap value.                                                                           |
| `initialMaxSharePriceChangeRate` | `uint256` | The maximum relative share price change rate per second during total AUM updates, 1e18 = 100%. |

### SpokeCaliberData

_Internal state structure for a spoke caliber data._

```solidity
struct SpokeCaliberData {
    address mailbox;
    mapping(uint16 bridgeId => address adapter) bridgeAdapters;
    uint256 timestamp;
    uint256 netAum;
    bytes[] positions;
    bytes[] baseTokens;
    EnumerableMap.AddressToUintMap caliberBridgesIn;
    EnumerableMap.AddressToUintMap caliberBridgesOut;
    EnumerableMap.AddressToUintMap machineBridgesIn;
    EnumerableMap.AddressToUintMap machineBridgesOut;
}
```

**Properties**

| Name                | Type                                          | Description                                                                                |
| ------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `mailbox`           | `address`                                     | The foreign address of the spoke caliber mailbox.                                          |
| `bridgeAdapters`    | `mapping(uint16 bridgeId => address adapter)` | The mapping of bridge IDs to their corresponding adapters.                                 |
| `timestamp`         | `uint256`                                     | The timestamp of the last accounting.                                                      |
| `netAum`            | `uint256`                                     | The net AUM of the spoke caliber.                                                          |
| `positions`         | `bytes[]`                                     | The list of positions of the spoke caliber, each encoded as abi.encode(positionId, value). |
| `baseTokens`        | `bytes[]`                                     | The list of base tokens of the spoke caliber, each encoded as abi.encode(token, value).    |
| `caliberBridgesIn`  | `EnumerableMap.AddressToUintMap`              | The mapping of spoke caliber incoming bridge amounts.                                      |
| `caliberBridgesOut` | `EnumerableMap.AddressToUintMap`              | The mapping of spoke caliber outgoing bridge amounts.                                      |
| `machineBridgesIn`  | `EnumerableMap.AddressToUintMap`              | The mapping of machine incoming bridge amounts.                                            |
| `machineBridgesOut` | `EnumerableMap.AddressToUintMap`              | The mapping of machine outgoing bridge amounts.                                            |
