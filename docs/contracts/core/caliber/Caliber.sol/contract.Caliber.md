# Caliber

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/caliber/Caliber.sol)

**Inherits:**
[MakinaContext](/contracts/core/utils/MakinaContext.sol/abstract.MakinaContext.md), AccessManagedUpgradeable, ReentrancyGuardUpgradeable, ERC721HolderUpgradeable, ERC1155HolderUpgradeable, [ICaliber](/contracts/core/interfaces/ICaliber.sol/interface.ICaliber.md)

## State Variables

### MAX_BPS

_Full scale value in basis points._

```solidity
uint256 private constant MAX_BPS = 10_000;
```

### ACCOUNTING_OUTPUT_STATE_END

_Flag to indicate end of values in the accounting output state._

```solidity
bytes32 private constant ACCOUNTING_OUTPUT_STATE_END = bytes32(type(uint256).max);
```

### weirollVm

Address of the Weiroll VM.

```solidity
address public immutable weirollVm;
```

### CaliberStorageLocation

```solidity
bytes32 private constant CaliberStorageLocation = 0x32461bf02c7aa4aa351cd04411b6c7b9348073fbccf471c7b347bdaada044b00;
```

## Functions

### \_getCaliberStorage

```solidity
function _getCaliberStorage() private pure returns (CaliberStorage storage $);
```

### constructor

```solidity
constructor(address _registry, address _weirollVm) MakinaContext(_registry);
```

### initialize

Initializer of the contract.

```solidity
function initialize(CaliberInitParams calldata cParams, address _accountingToken, address _hubMachineEndpoint)
    external
    override
    initializer;
```

**Parameters**

| Name                  | Type                | Description                               |
| --------------------- | ------------------- | ----------------------------------------- |
| `cParams`             | `CaliberInitParams` | The caliber initialization parameters.    |
| `_accountingToken`    | `address`           | The address of the accounting token.      |
| `_hubMachineEndpoint` | `address`           | The address of the hub machine endpoints. |

### onlyOperator

```solidity
modifier onlyOperator();
```

### onlyRiskManager

```solidity
modifier onlyRiskManager();
```

### onlyRiskManagerTimelock

```solidity
modifier onlyRiskManagerTimelock();
```

### authority

_Returns the current authority._

```solidity
function authority() public view override returns (address);
```

### hubMachineEndpoint

Address of the hub machine endpoint.

```solidity
function hubMachineEndpoint() external view override returns (address);
```

### accountingToken

Address of the accounting token.

```solidity
function accountingToken() external view override returns (address);
```

### positionStaleThreshold

Maximum duration a position can remain unaccounted for before it is considered stale.

```solidity
function positionStaleThreshold() external view override returns (uint256);
```

### allowedInstrRoot

Root of the Merkle tree containing allowed instructions.

```solidity
function allowedInstrRoot() public view override returns (bytes32);
```

### timelockDuration

Duration of the allowedInstrRoot update timelock.

```solidity
function timelockDuration() external view override returns (uint256);
```

### pendingAllowedInstrRoot

Value of the pending allowedInstrRoot, if any.

```solidity
function pendingAllowedInstrRoot() public view override returns (bytes32);
```

### pendingTimelockExpiry

Effective time of the last scheduled allowedInstrRoot update.

```solidity
function pendingTimelockExpiry() public view override returns (uint256);
```

### maxPositionIncreaseLossBps

Max allowed value loss (in basis point) when increasing a position.

```solidity
function maxPositionIncreaseLossBps() external view override returns (uint256);
```

### maxPositionDecreaseLossBps

Max allowed value loss (in basis point) when decreasing a position.

```solidity
function maxPositionDecreaseLossBps() external view override returns (uint256);
```

### maxSwapLossBps

Max allowed value loss (in basis point) for base token swaps.

```solidity
function maxSwapLossBps() external view override returns (uint256);
```

### cooldownDuration

Duration of the cooldown period for swaps and position management.

```solidity
function cooldownDuration() external view returns (uint256);
```

### getPositionsLength

Length of the position IDs list.

```solidity
function getPositionsLength() external view override returns (uint256);
```

### getPositionId

Position index => Position ID

_There are no guarantees on the ordering of values inside the Position ID list,
and it may change when values are added or removed._

```solidity
function getPositionId(uint256 idx) external view override returns (uint256);
```

### getPosition

Position ID => Position data

```solidity
function getPosition(uint256 posId) external view override returns (Position memory);
```

### isBaseToken

Token => Registered as base token in this caliber

```solidity
function isBaseToken(address token) external view override returns (bool);
```

### getBaseTokensLength

Length of the base tokens list.

```solidity
function getBaseTokensLength() external view override returns (uint256);
```

### getBaseToken

Base token index => Base token address

_There are no guarantees on the ordering of values inside the base tokens list,
and it may change when values are added or removed._

```solidity
function getBaseToken(uint256 idx) external view override returns (address);
```

### isInstrRootGuardian

User => Whether the user is a root guardian
Guardians have veto power over updates of the Merkle root.

```solidity
function isInstrRootGuardian(address user) external view override returns (bool);
```

### isAccountingFresh

Checks if the accounting age of each position is below the position staleness threshold.

```solidity
function isAccountingFresh() external view returns (bool);
```

### getDetailedAum

Returns the caliber's net AUM along with detailed position and base token breakdowns.

```solidity
function getDetailedAum() external view override returns (uint256, bytes[] memory, bytes[] memory);
```

**Returns**

| Name     | Type      | Description                                                                                  |
| -------- | --------- | -------------------------------------------------------------------------------------------- |
| `<none>` | `uint256` | netAum The total value of all base token balances and positive positions, minus total debts. |
| `<none>` | `bytes[]` | positions The array of encoded tuples of the form (positionId, value, isDebt).               |
| `<none>` | `bytes[]` | baseTokens The array of encoded tuples of the form (token, value).                           |

### addBaseToken

Adds a new base token.

```solidity
function addBaseToken(address token) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name    | Type      | Description                    |
| ------- | --------- | ------------------------------ |
| `token` | `address` | The address of the base token. |

### removeBaseToken

Removes a base token.

```solidity
function removeBaseToken(address token) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name    | Type      | Description                    |
| ------- | --------- | ------------------------------ |
| `token` | `address` | The address of the base token. |

### accountForPosition

Accounts for a position.

_If the position value goes to zero, it is closed._

```solidity
function accountForPosition(Instruction calldata instruction)
    external
    override
    nonReentrant
    returns (uint256, int256);
```

**Parameters**

| Name          | Type          | Description                 |
| ------------- | ------------- | --------------------------- |
| `instruction` | `Instruction` | The accounting instruction. |

**Returns**

| Name     | Type      | Description                              |
| -------- | --------- | ---------------------------------------- |
| `<none>` | `uint256` | value The new position value.            |
| `<none>` | `int256`  | change The change in the position value. |

### accountForPositionBatch

Accounts for a batch of positions.

```solidity
function accountForPositionBatch(Instruction[] calldata instructions, uint256[] calldata groupIds)
    external
    override
    nonReentrant
    returns (uint256[] memory, int256[] memory);
```

**Parameters**

| Name           | Type            | Description                                                                                                                                                                                                                                                            |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instructions` | `Instruction[]` | The array of accounting instructions.                                                                                                                                                                                                                                  |
| `groupIds`     | `uint256[]`     | The array of position group IDs. An accounting instruction must be provided for every open position in each specified group. If an instruction's groupId corresponds to a group of open positions of size greater than 1, the group ID must be included in this array. |

**Returns**

| Name     | Type        | Description                                 |
| -------- | ----------- | ------------------------------------------- |
| `<none>` | `uint256[]` | values The new position values.             |
| `<none>` | `int256[]`  | changes The changes in the position values. |

### managePosition

Manages a position's state through paired management and accounting instructions

\*Performs accounting updates and modifies contract storage by:

- Adding new positions to storage when created.
- Removing positions from storage when value reaches zero.\*

```solidity
function managePosition(Instruction calldata mgmtInstruction, Instruction calldata acctInstruction)
    external
    override
    nonReentrant
    onlyOperator
    returns (uint256, int256);
```

**Parameters**

| Name              | Type          | Description                 |
| ----------------- | ------------- | --------------------------- |
| `mgmtInstruction` | `Instruction` | The management instruction. |
| `acctInstruction` | `Instruction` | The accounting instruction. |

**Returns**

| Name     | Type      | Description                             |
| -------- | --------- | --------------------------------------- |
| `<none>` | `uint256` | value The new position value.           |
| `<none>` | `int256`  | change The signed position value delta. |

### managePositionBatch

Manages a batch of positions.

_Convenience function to manage multiple positions in a single transaction._

```solidity
function managePositionBatch(Instruction[] calldata mgmtInstructions, Instruction[] calldata acctInstructions)
    external
    override
    nonReentrant
    onlyOperator
    returns (uint256[] memory, int256[] memory);
```

**Parameters**

| Name               | Type            | Description                           |
| ------------------ | --------------- | ------------------------------------- |
| `mgmtInstructions` | `Instruction[]` | The array of management instructions. |
| `acctInstructions` | `Instruction[]` | The array of accounting instructions. |

**Returns**

| Name     | Type        | Description                                 |
| -------- | ----------- | ------------------------------------------- |
| `<none>` | `uint256[]` | values The new position values.             |
| `<none>` | `int256[]`  | changes The changes in the position values. |

### manageFlashLoan

Manages flashLoan funds.

```solidity
function manageFlashLoan(Instruction calldata instruction, address token, uint256 amount) external override;
```

**Parameters**

| Name          | Type          | Description                           |
| ------------- | ------------- | ------------------------------------- |
| `instruction` | `Instruction` | The flashLoan management instruction. |
| `token`       | `address`     | The loan token.                       |
| `amount`      | `uint256`     | The loan amount.                      |

### harvest

Harvests one or multiple positions.

```solidity
function harvest(Instruction calldata instruction, ISwapModule.SwapOrder[] calldata swapOrders)
    external
    override
    nonReentrant
    onlyOperator;
```

**Parameters**

| Name          | Type                      | Description                                                |
| ------------- | ------------------------- | ---------------------------------------------------------- |
| `instruction` | `Instruction`             | The harvest instruction.                                   |
| `swapOrders`  | `ISwapModule.SwapOrder[]` | The array of swap orders to be executed after the harvest. |

### swap

Performs a swap via the swapModule module.

```solidity
function swap(ISwapModule.SwapOrder calldata order) external override nonReentrant onlyOperator;
```

**Parameters**

| Name    | Type                    | Description                |
| ------- | ----------------------- | -------------------------- |
| `order` | `ISwapModule.SwapOrder` | The swap order parameters. |

### transferToHubMachine

Initiates a token transfer to the hub machine.

```solidity
function transferToHubMachine(address token, uint256 amount, bytes calldata data) external override onlyOperator;
```

**Parameters**

| Name     | Type      | Description                                                                                           |
| -------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `token`  | `address` | The address of the token to transfer.                                                                 |
| `amount` | `uint256` | The amount of tokens to transfer.                                                                     |
| `data`   | `bytes`   | ABI-encoded parameters required for bridge-related transfers. Ignored when called from a hub caliber. |

### notifyIncomingTransfer

Instructs the Caliber to pull the specified token amount from the calling hub machine endpoint.

```solidity
function notifyIncomingTransfer(address token, uint256 amount) external override nonReentrant;
```

**Parameters**

| Name     | Type      | Description                                 |
| -------- | --------- | ------------------------------------------- |
| `token`  | `address` | The address of the token being transferred. |
| `amount` | `uint256` | The amount of tokens being transferred.     |

### setPositionStaleThreshold

Sets the position accounting staleness threshold.

```solidity
function setPositionStaleThreshold(uint256 newPositionStaleThreshold) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                        | Type      | Description                   |
| --------------------------- | --------- | ----------------------------- |
| `newPositionStaleThreshold` | `uint256` | The new threshold in seconds. |

### setTimelockDuration

Sets the duration of the allowedInstrRoot update timelock.

```solidity
function setTimelockDuration(uint256 newTimelockDuration) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                  | Type      | Description                  |
| --------------------- | --------- | ---------------------------- |
| `newTimelockDuration` | `uint256` | The new duration in seconds. |

### scheduleAllowedInstrRootUpdate

Schedules an update of the root of the Merkle tree containing allowed instructions.

_The update will take effect after the timelock duration stored in the contract
at the time of the call._

```solidity
function scheduleAllowedInstrRootUpdate(bytes32 newAllowedInstrRoot) external override onlyRiskManager;
```

**Parameters**

| Name                  | Type      | Description |
| --------------------- | --------- | ----------- |
| `newAllowedInstrRoot` | `bytes32` |             |

### cancelAllowedInstrRootUpdate

Cancels a scheduled update of the root of the Merkle tree containing allowed instructions.

_Reverts if no pending update exists or if the timelock has expired._

```solidity
function cancelAllowedInstrRootUpdate() external override;
```

### setMaxPositionIncreaseLossBps

Sets the max allowed value loss for position increases.

```solidity
function setMaxPositionIncreaseLossBps(uint256 newMaxPositionIncreaseLossBps)
    external
    override
    onlyRiskManagerTimelock;
```

**Parameters**

| Name                            | Type      | Description                             |
| ------------------------------- | --------- | --------------------------------------- |
| `newMaxPositionIncreaseLossBps` | `uint256` | The new max value loss in basis points. |

### setMaxPositionDecreaseLossBps

Sets the max allowed value loss for position decreases.

```solidity
function setMaxPositionDecreaseLossBps(uint256 newMaxPositionDecreaseLossBps)
    external
    override
    onlyRiskManagerTimelock;
```

**Parameters**

| Name                            | Type      | Description                             |
| ------------------------------- | --------- | --------------------------------------- |
| `newMaxPositionDecreaseLossBps` | `uint256` | The new max value loss in basis points. |

### setMaxSwapLossBps

Sets the max allowed value loss for base token swaps.

```solidity
function setMaxSwapLossBps(uint256 newMaxSwapLossBps) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                | Type      | Description                             |
| ------------------- | --------- | --------------------------------------- |
| `newMaxSwapLossBps` | `uint256` | The new max value loss in basis points. |

### setCooldownDuration

Sets the duration of the cooldown period for swaps and position management.

```solidity
function setCooldownDuration(uint256 newCooldownDuration) external override onlyRiskManagerTimelock;
```

**Parameters**

| Name                  | Type      | Description                  |
| --------------------- | --------- | ---------------------------- |
| `newCooldownDuration` | `uint256` | The new duration in seconds. |

### addInstrRootGuardian

Adds a new guardian for the Merkle tree containing allowed instructions.

```solidity
function addInstrRootGuardian(address newGuardian) external override restricted;
```

**Parameters**

| Name          | Type      | Description                      |
| ------------- | --------- | -------------------------------- |
| `newGuardian` | `address` | The address of the new guardian. |

### removeInstrRootGuardian

Removes a guardian for the Merkle tree containing allowed instructions.

```solidity
function removeInstrRootGuardian(address guardian) external override restricted;
```

**Parameters**

| Name       | Type      | Description                            |
| ---------- | --------- | -------------------------------------- |
| `guardian` | `address` | The address of the guardian to remove. |

### \_addBaseToken

_Adds a new base token to storage._

```solidity
function _addBaseToken(address token) internal;
```

### \_managePosition

_Manages and accounts for a position by executing the provided instructions._

```solidity
function _managePosition(Instruction calldata mgmtInstruction, Instruction calldata acctInstruction)
    internal
    returns (uint256, int256);
```

### \_accountForPosition

_Computes the accounting value of a position. Depending on last and current value, the
position is then either created, closed or simply updated in storage._

```solidity
function _accountForPosition(Instruction calldata instruction, bool checks) internal returns (uint256, int256);
```

### \_decodeAccountingOutputState

_Decodes the output state of an accounting instruction into an array of amounts._

```solidity
function _decodeAccountingOutputState(bytes[] memory state) internal pure returns (uint256[] memory);
```

### \_invalidateGroupedPositions

_Marks all positions in a given group as stale, except for the position currently being managed._

```solidity
function _invalidateGroupedPositions(uint256 groupId) internal;
```

### \_includesGroupId

_Checks if a given group ID is included in the provided array of group IDs._

```solidity
function _includesGroupId(uint256[] calldata groupIds, uint256 groupId) internal pure returns (bool);
```

### \_accountingValueOf

_Computes the accounting value of a given token amount._

```solidity
function _accountingValueOf(address token, uint256 amount) internal view returns (uint256);
```

### \_checkPositionMinDelta

_Checks that absolute position value change is greater than minimum value relative to affected token balance changes and loss tolerance._

```solidity
function _checkPositionMinDelta(uint256 positionValChange, uint256 affectedTokensValChange, uint256 maxLossBps)
    internal
    pure;
```

### \_checkPositionMaxDelta

_Checks that absolute position value change is less than maximum value relative to affected token balance changes and loss tolerance._

```solidity
function _checkPositionMaxDelta(uint256 positionValChange, uint256 affectedTokensValChange, uint256 maxLossBps)
    internal
    pure;
```

### \_checkInstructionIsAllowed

_Checks if the given instruction is allowed by verifying its Merkle proof against the allowed instructions root._

```solidity
function _checkInstructionIsAllowed(Instruction calldata instruction) internal;
```

**Parameters**

| Name          | Type          | Description               |
| ------------- | ------------- | ------------------------- |
| `instruction` | `Instruction` | The instruction to check. |

### \_getStateHash

_Computes a hash of the state array, selectively including elements as specified by a bitmap.
This enables a weiroll script to have both fixed and variable parameters._

```solidity
function _getStateHash(bytes[] calldata state, uint128 bitmap) internal pure returns (bytes32);
```

**Parameters**

| Name     | Type      | Description                                                                                                                     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `state`  | `bytes[]` | The state array to hash.                                                                                                        |
| `bitmap` | `uint128` | The bitmap where each bit determines whether the corresponding element in state is included or ignored in the hash computation. |

**Returns**

| Name     | Type      | Description                       |
| -------- | --------- | --------------------------------- |
| `<none>` | `bytes32` | hash The hash of the state array. |

### \_updateAllowedInstrRoot

_Updates the allowed instructions root if a pending update is scheduled and the timelock has expired._

```solidity
function _updateAllowedInstrRoot() internal returns (bytes32);
```

**Returns**

| Name     | Type      | Description                                        |
| -------- | --------- | -------------------------------------------------- |
| `<none>` | `bytes32` | currentRoot The current allowed instructions root. |

### \_swap

```solidity
function _swap(ISwapModule.SwapOrder calldata order) internal;
```

### \_execute

_Executes a set of commands on the Weiroll VM, via a delegatecall._

```solidity
function _execute(bytes32[] calldata commands, bytes[] memory state) internal returns (bytes[] memory);
```

**Parameters**

| Name       | Type        | Description                  |
| ---------- | ----------- | ---------------------------- |
| `commands` | `bytes32[]` | The commands to execute.     |
| `state`    | `bytes[]`   | The state to pass to the VM. |

**Returns**

| Name     | Type      | Description                                          |
| -------- | --------- | ---------------------------------------------------- |
| `<none>` | `bytes[]` | outState The new state after executing the commands. |

## Structs

### CaliberStorage

**Note:**
storage-location: erc7201:makina.storage.Caliber

```solidity
struct CaliberStorage {
    address _hubMachineEndpoint;
    address _accountingToken;
    uint256 _positionStaleThreshold;
    bytes32 _allowedInstrRoot;
    uint256 _timelockDuration;
    bytes32 _pendingAllowedInstrRoot;
    uint256 _pendingTimelockExpiry;
    uint256 _maxPositionIncreaseLossBps;
    uint256 _maxPositionDecreaseLossBps;
    uint256 _maxSwapLossBps;
    uint256 _managedPositionId;
    bool _isManagedPositionDebt;
    bool _isManagingFlashloan;
    uint256 _cooldownDuration;
    uint256 _lastBTSwapTimestamp;
    mapping(bytes32 executionHash => uint256 timestamp) _lastExecutionTimestamp;
    mapping(uint256 posId => Position pos) _positionById;
    mapping(uint256 groupId => EnumerableSet.UintSet positionIds) _positionIdGroups;
    EnumerableSet.UintSet _positionIds;
    EnumerableSet.AddressSet _baseTokens;
    EnumerableSet.AddressSet _instrRootGuardians;
}
```
