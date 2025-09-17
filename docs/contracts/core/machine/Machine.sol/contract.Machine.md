# Machine

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/machine/Machine.sol)

**Inherits:**
[MakinaGovernable](/contracts/core/utils/MakinaGovernable.sol/abstract.MakinaGovernable.md), [BridgeController](/contracts/core/bridge/controller/BridgeController.sol/abstract.BridgeController.md), ReentrancyGuardUpgradeable, [IMachine](/contracts/core/interfaces/IMachine.sol/interface.IMachine.md)

## State Variables

### wormhole

Address of the Wormhole Core Bridge.

```solidity
address public immutable wormhole;
```

### MachineStorageLocation

```solidity
bytes32 private constant MachineStorageLocation = 0x55fe2a17e400bcd0e2125123a7fc955478e727b29a4c522f4f2bd95d961bd900;
```

## Functions

### \_getMachineStorage

```solidity
function _getMachineStorage() private pure returns (MachineStorage storage $);
```

### constructor

```solidity
constructor(address _registry, address _wormhole) MakinaContext(_registry);
```

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
) external override initializer;
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

### depositor

Address of the depositor.

```solidity
function depositor() external view override returns (address);
```

### redeemer

Address of the redeemer.

```solidity
function redeemer() external view override returns (address);
```

### shareToken

Address of the share token.

```solidity
function shareToken() external view override returns (address);
```

### accountingToken

Address of the accounting token.

```solidity
function accountingToken() external view override returns (address);
```

### hubCaliber

Address of the hub caliber.

```solidity
function hubCaliber() external view returns (address);
```

### feeManager

Address of the fee manager.

```solidity
function feeManager() external view override returns (address);
```

### caliberStaleThreshold

Maximum duration a caliber can remain unaccounted for before it is considered stale.

```solidity
function caliberStaleThreshold() external view override returns (uint256);
```

### maxFixedFeeAccrualRate

Maximum fixed fee accrual rate per second used to compute an upper bound on shares to be minted, 1e18 = 100%.

```solidity
function maxFixedFeeAccrualRate() external view override returns (uint256);
```

### maxPerfFeeAccrualRate

Maximum performance fee accrual rate per second used to compute an upper bound on shares to be minted, 1e18 = 100%.

```solidity
function maxPerfFeeAccrualRate() external view override returns (uint256);
```

### feeMintCooldown

Minimum time to be elapsed between two fee minting events.

```solidity
function feeMintCooldown() external view override returns (uint256);
```

### shareLimit

Share token supply limit that cannot be exceeded by new deposits.

```solidity
function shareLimit() external view override returns (uint256);
```

### maxMint

Maximum amount of shares that can currently be minted through asset deposits.

```solidity
function maxMint() public view override returns (uint256);
```

### maxWithdraw

Maximum amount of accounting tokens that can currently be withdrawn through share redemptions.

```solidity
function maxWithdraw() public view override returns (uint256);
```

### lastTotalAum

Last total machine AUM.

```solidity
function lastTotalAum() external view override returns (uint256);
```

### lastGlobalAccountingTime

Timestamp of the last global machine accounting.

```solidity
function lastGlobalAccountingTime() external view override returns (uint256);
```

### getSpokeCalibersLength

Number of calibers associated with the machine.

```solidity
function getSpokeCalibersLength() external view override returns (uint256);
```

### getSpokeChainId

Spoke caliber index => Spoke Chain ID.

```solidity
function getSpokeChainId(uint256 idx) external view override returns (uint256);
```

### getSpokeCaliberDetailedAum

Spoke Chain ID => Spoke caliber's AUM, individual positions values and accounting timestamp.

```solidity
function getSpokeCaliberDetailedAum(uint256 chainId)
    external
    view
    override
    returns (uint256, bytes[] memory, bytes[] memory, uint256);
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

### isIdleToken

Token => Is the token an idle token.

```solidity
function isIdleToken(address token) external view override returns (bool);
```

### convertToShares

Returns the amount of shares that the Machine would exchange for the amount of accounting tokens provided.

```solidity
function convertToShares(uint256 assets) public view override returns (uint256);
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
function convertToAssets(uint256 shares) public view override returns (uint256);
```

**Parameters**

| Name     | Type      | Description           |
| -------- | --------- | --------------------- |
| `shares` | `uint256` | The amount of shares. |

**Returns**

| Name     | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| `<none>` | `uint256` | assets The amount of accounting tokens. |

### manageTransfer

Manages the transfer of tokens between a machine and a caliber. The transfer direction depends on the caller.

```solidity
function manageTransfer(address token, uint256 amount, bytes calldata data) external override nonReentrant;
```

**Parameters**

| Name     | Type      | Description                                                                                                                |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `token`  | `address` | The address of the token.                                                                                                  |
| `amount` | `uint256` | The amount of tokens to transfer.                                                                                          |
| `data`   | `bytes`   | ABI-encoded parameters required for bridge-related transfers. Ignored for transfers between a machine and its hub caliber. |

### transferToHubCaliber

Initiates a token transfers to the hub caliber.

```solidity
function transferToHubCaliber(address token, uint256 amount) external override notRecoveryMode onlyMechanic;
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
) external override nonReentrant notRecoveryMode onlyMechanic;
```

**Parameters**

| Name              | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| `bridgeId`        | `uint16`  | The ID of the bridge to use for the transfer.         |
| `chainId`         | `uint256` | The foreign EVM chain ID of the spoke caliber.        |
| `token`           | `address` | The address of the token to transfer.                 |
| `amount`          | `uint256` | The amount of token to transfer.                      |
| `minOutputAmount` | `uint256` | The minimum output amount expected from the transfer. |

### sendOutBridgeTransfer

Executes a scheduled outgoing bridge transfer.

```solidity
function sendOutBridgeTransfer(uint16 bridgeId, uint256 transferId, bytes calldata data)
    external
    override
    notRecoveryMode
    onlyMechanic;
```

**Parameters**

| Name         | Type      | Description                                       |
| ------------ | --------- | ------------------------------------------------- |
| `bridgeId`   | `uint16`  | The ID of the bridge.                             |
| `transferId` | `uint256` | The ID of the transfer to execute.                |
| `data`       | `bytes`   | The optional data needed to execute the transfer. |

### authorizeInBridgeTransfer

Registers a message hash as authorized for an incoming bridge transfer.

```solidity
function authorizeInBridgeTransfer(uint16 bridgeId, bytes32 messageHash) external override onlyOperator;
```

**Parameters**

| Name          | Type      | Description                           |
| ------------- | --------- | ------------------------------------- |
| `bridgeId`    | `uint16`  | The ID of the bridge.                 |
| `messageHash` | `bytes32` | The hash of the message to authorize. |

### claimInBridgeTransfer

Transfers a received bridge transfer out of the adapter.

```solidity
function claimInBridgeTransfer(uint16 bridgeId, uint256 transferId) external override onlyOperator;
```

**Parameters**

| Name         | Type      | Description                      |
| ------------ | --------- | -------------------------------- |
| `bridgeId`   | `uint16`  | The ID of the bridge.            |
| `transferId` | `uint256` | The ID of the transfer to claim. |

### cancelOutBridgeTransfer

Cancels an outgoing bridge transfer.

```solidity
function cancelOutBridgeTransfer(uint16 bridgeId, uint256 transferId) external override onlyOperator;
```

**Parameters**

| Name         | Type      | Description                       |
| ------------ | --------- | --------------------------------- |
| `bridgeId`   | `uint16`  | The ID of the bridge.             |
| `transferId` | `uint256` | The ID of the transfer to cancel. |

### updateTotalAum

Updates the total AUM of the machine.

```solidity
function updateTotalAum() external override nonReentrant notRecoveryMode returns (uint256);
```

**Returns**

| Name     | Type      | Description                     |
| -------- | --------- | ------------------------------- |
| `<none>` | `uint256` | totalAum The updated total AUM. |

### deposit

Deposits accounting tokens into the machine and mints shares to the receiver.

```solidity
function deposit(uint256 assets, address receiver, uint256 minShares)
    external
    nonReentrant
    notRecoveryMode
    returns (uint256);
```

**Parameters**

| Name        | Type      | Description                                 |
| ----------- | --------- | ------------------------------------------- |
| `assets`    | `uint256` | The amount of accounting tokens to deposit. |
| `receiver`  | `address` | The receiver of minted shares.              |
| `minShares` | `uint256` | The minimum amount of shares to be minted.  |

**Returns**

| Name     | Type      | Description                         |
| -------- | --------- | ----------------------------------- |
| `<none>` | `uint256` | shares The amount of shares minted. |

### redeem

Redeems shares from the machine and transfers accounting tokens to the receiver.

```solidity
function redeem(uint256 shares, address receiver, uint256 minAssets)
    external
    override
    nonReentrant
    notRecoveryMode
    returns (uint256);
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
function updateSpokeCaliberAccountingData(bytes calldata response, GuardianSignature[] calldata signatures)
    external
    override
    nonReentrant;
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
    uint256 foreignChainId,
    address spokeCaliberMailbox,
    uint16[] calldata bridges,
    address[] calldata adapters
) external restricted;
```

**Parameters**

| Name                  | Type        | Description                                                                               |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| `foreignChainId`      | `uint256`   |                                                                                           |
| `spokeCaliberMailbox` | `address`   | The address of the spoke caliber mailbox.                                                 |
| `bridges`             | `uint16[]`  | The list of bridges supported with the spoke caliber.                                     |
| `adapters`            | `address[]` | The list of corresponding adapters for each bridge. Must be the same length as `bridges`. |

### setSpokeBridgeAdapter

Registers a spoke bridge adapter.

```solidity
function setSpokeBridgeAdapter(uint256 foreignChainId, uint16 bridgeId, address adapter) external override restricted;
```

**Parameters**

| Name             | Type      | Description                                |
| ---------------- | --------- | ------------------------------------------ |
| `foreignChainId` | `uint256` |                                            |
| `bridgeId`       | `uint16`  | The ID of the bridge.                      |
| `adapter`        | `address` | The foreign address of the bridge adapter. |

### setDepositor

Sets the depositor address.

```solidity
function setDepositor(address newDepositor) external override restricted;
```

**Parameters**

| Name           | Type      | Description                       |
| -------------- | --------- | --------------------------------- |
| `newDepositor` | `address` | The address of the new depositor. |

### setRedeemer

Sets the redeemer address.

```solidity
function setRedeemer(address newRedeemer) external override restricted;
```

**Parameters**

| Name          | Type      | Description                      |
| ------------- | --------- | -------------------------------- |
| `newRedeemer` | `address` | The address of the new redeemer. |

### setFeeManager

Sets the fee manager address.

```solidity
function setFeeManager(address newFeeManager) external override restricted;
```

**Parameters**

| Name            | Type      | Description                         |
| --------------- | --------- | ----------------------------------- |
| `newFeeManager` | `address` | The address of the new fee manager. |

### setCaliberStaleThreshold

Sets the caliber accounting staleness threshold.

```solidity
function setCaliberStaleThreshold(uint256 newCaliberStaleThreshold) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                       | Type      | Description                   |
| -------------------------- | --------- | ----------------------------- |
| `newCaliberStaleThreshold` | `uint256` | The new threshold in seconds. |

### setMaxFixedFeeAccrualRate

Sets the maximum fixed fee accrual rate.

```solidity
function setMaxFixedFeeAccrualRate(uint256 newMaxAccrualRate) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                | Type      | Description                                                     |
| ------------------- | --------- | --------------------------------------------------------------- |
| `newMaxAccrualRate` | `uint256` | The new maximum fixed fee accrual rate per second, 1e18 = 100%. |

### setMaxPerfFeeAccrualRate

Sets the maximum performance fee accrual rate.

```solidity
function setMaxPerfFeeAccrualRate(uint256 newMaxAccrualRate) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                | Type      | Description                                                           |
| ------------------- | --------- | --------------------------------------------------------------------- |
| `newMaxAccrualRate` | `uint256` | The new maximum performance fee accrual rate per second, 1e18 = 100%. |

### setFeeMintCooldown

Sets the minimum time to be elapsed between two fee minting events.

```solidity
function setFeeMintCooldown(uint256 newFeeMintCooldown) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                 | Type      | Description                  |
| -------------------- | --------- | ---------------------------- |
| `newFeeMintCooldown` | `uint256` | The new cooldown in seconds. |

### setShareLimit

Sets the new share token supply limit that cannot be exceeded by new deposits.

```solidity
function setShareLimit(uint256 newShareLimit) external override onlyRiskManager;
```

**Parameters**

| Name            | Type      | Description         |
| --------------- | --------- | ------------------- |
| `newShareLimit` | `uint256` | The new share limit |

### setOutTransferEnabled

Sets the outgoing transfer enabled status for a bridge.

```solidity
function setOutTransferEnabled(uint16 bridgeId, bool enabled) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name       | Type     | Description                                                                 |
| ---------- | -------- | --------------------------------------------------------------------------- |
| `bridgeId` | `uint16` | The ID of the bridge.                                                       |
| `enabled`  | `bool`   | True to enable outgoing transfer for the given bridge ID, false to disable. |

### setMaxBridgeLossBps

Sets the maximum allowed value loss in basis points for transfers via this bridge.

```solidity
function setMaxBridgeLossBps(uint16 bridgeId, uint256 maxBridgeLossBps) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name               | Type      | Description                                     |
| ------------------ | --------- | ----------------------------------------------- |
| `bridgeId`         | `uint16`  | The ID of the bridge.                           |
| `maxBridgeLossBps` | `uint256` | The maximum allowed value loss in basis points. |

### resetBridgingState

Resets internal bridge counters for a given token, and withdraw token balances held by all bridge adapters.

_This function is intended to be used by the DAO to realign bridge accounting state and maintain protocol consistency,
typically in response to operator deviations, external bridge discrepancies, or unbounded counter growth._

```solidity
function resetBridgingState(address token) external override onlySecurityCouncil;
```

**Parameters**

| Name    | Type      | Description               |
| ------- | --------- | ------------------------- |
| `token` | `address` | The address of the token. |

### \_setSpokeBridgeAdapter

_Sets the spoke bridge adapter for a given foreign chain ID and bridge ID._

```solidity
function _setSpokeBridgeAdapter(uint256 foreignChainId, uint16 bridgeId, address adapter) internal;
```

### \_notifyIdleToken

_Checks token balance, and registers token if needed._

```solidity
function _notifyIdleToken(address token) internal;
```

## Structs

### MachineStorage

**Note:**
storage-location: erc7201:makina.storage.Machine

```solidity
struct MachineStorage {
    address _shareToken;
    address _accountingToken;
    address _depositor;
    address _redeemer;
    address _feeManager;
    uint256 _caliberStaleThreshold;
    uint256 _lastTotalAum;
    uint256 _lastGlobalAccountingTime;
    uint256 _lastMintedFeesTime;
    uint256 _lastMintedFeesSharePrice;
    uint256 _maxFixedFeeAccrualRate;
    uint256 _maxPerfFeeAccrualRate;
    uint256 _feeMintCooldown;
    uint256 _shareTokenDecimalsOffset;
    uint256 _shareLimit;
    uint256 _hubChainId;
    address _hubCaliber;
    uint256[] _foreignChainIds;
    mapping(uint256 foreignChainId => SpokeCaliberData data) _spokeCalibersData;
    EnumerableSet.AddressSet _idleTokens;
}
```
