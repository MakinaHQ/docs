# ICaliber

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/ICaliber.sol)

## Functions

### initialize

Initializer of the contract.

```solidity
function initialize(CaliberInitParams calldata cParams, address _accountingToken, address _hubMachineEndpoint)
    external;
```

**Parameters**

| Name                  | Type                | Description                               |
| --------------------- | ------------------- | ----------------------------------------- |
| `cParams`             | `CaliberInitParams` | The caliber initialization parameters.    |
| `_accountingToken`    | `address`           | The address of the accounting token.      |
| `_hubMachineEndpoint` | `address`           | The address of the hub machine endpoints. |

### weirollVm

Address of the Weiroll VM.

```solidity
function weirollVm() external view returns (address);
```

### hubMachineEndpoint

Address of the hub machine endpoint.

```solidity
function hubMachineEndpoint() external view returns (address);
```

### accountingToken

Address of the accounting token.

```solidity
function accountingToken() external view returns (address);
```

### positionStaleThreshold

Maximum duration a position can remain unaccounted for before it is considered stale.

```solidity
function positionStaleThreshold() external view returns (uint256);
```

### allowedInstrRoot

Root of the Merkle tree containing allowed instructions.

```solidity
function allowedInstrRoot() external view returns (bytes32);
```

### timelockDuration

Duration of the allowedInstrRoot update timelock.

```solidity
function timelockDuration() external view returns (uint256);
```

### pendingAllowedInstrRoot

Value of the pending allowedInstrRoot, if any.

```solidity
function pendingAllowedInstrRoot() external view returns (bytes32);
```

### pendingTimelockExpiry

Effective time of the last scheduled allowedInstrRoot update.

```solidity
function pendingTimelockExpiry() external view returns (uint256);
```

### maxPositionIncreaseLossBps

Max allowed value loss (in basis point) when increasing a position.

```solidity
function maxPositionIncreaseLossBps() external view returns (uint256);
```

### maxPositionDecreaseLossBps

Max allowed value loss (in basis point) when decreasing a position.

```solidity
function maxPositionDecreaseLossBps() external view returns (uint256);
```

### maxSwapLossBps

Max allowed value loss (in basis point) for base token swaps.

```solidity
function maxSwapLossBps() external view returns (uint256);
```

### cooldownDuration

Duration of the cooldown period for swaps and position management.

```solidity
function cooldownDuration() external view returns (uint256);
```

### getPositionsLength

Length of the position IDs list.

```solidity
function getPositionsLength() external view returns (uint256);
```

### getPositionId

_Position index => Position ID_

_There are no guarantees on the ordering of values inside the Position ID list,
and it may change when values are added or removed._

```solidity
function getPositionId(uint256 idx) external view returns (uint256);
```

### getPosition

_Position ID => Position data_

```solidity
function getPosition(uint256 id) external view returns (Position memory);
```

### isBaseToken

_Token => Registered as base token in this caliber_

```solidity
function isBaseToken(address token) external view returns (bool);
```

### getBaseTokensLength

Length of the base tokens list.

```solidity
function getBaseTokensLength() external view returns (uint256);
```

### getBaseToken

_Base token index => Base token address_

_There are no guarantees on the ordering of values inside the base tokens list,
and it may change when values are added or removed._

```solidity
function getBaseToken(uint256 idx) external view returns (address);
```

### isInstrRootGuardian

_User => Whether the user is a root guardian
Guardians have veto power over updates of the Merkle root._

```solidity
function isInstrRootGuardian(address user) external view returns (bool);
```

### isAccountingFresh

_Checks if the accounting age of each position is below the position staleness threshold._

```solidity
function isAccountingFresh() external view returns (bool);
```

### getDetailedAum

Returns the caliber's net AUM along with detailed position and base token breakdowns.

```solidity
function getDetailedAum() external view returns (uint256 netAum, bytes[] memory positions, bytes[] memory baseTokens);
```

**Returns**

| Name         | Type      | Description                                                                           |
| ------------ | --------- | ------------------------------------------------------------------------------------- |
| `netAum`     | `uint256` | The total value of all base token balances and positive positions, minus total debts. |
| `positions`  | `bytes[]` | The array of encoded tuples of the form (positionId, value, isDebt).                  |
| `baseTokens` | `bytes[]` | The array of encoded tuples of the form (token, value).                               |

### addBaseToken

Adds a new base token.

```solidity
function addBaseToken(address token) external;
```

**Parameters**

| Name    | Type      | Description                    |
| ------- | --------- | ------------------------------ |
| `token` | `address` | The address of the base token. |

### removeBaseToken

Removes a base token.

```solidity
function removeBaseToken(address token) external;
```

**Parameters**

| Name    | Type      | Description                    |
| ------- | --------- | ------------------------------ |
| `token` | `address` | The address of the base token. |

### accountForPosition

Accounts for a position.

_If the position value goes to zero, it is closed._

```solidity
function accountForPosition(Instruction calldata instruction) external returns (uint256 value, int256 change);
```

**Parameters**

| Name          | Type          | Description                 |
| ------------- | ------------- | --------------------------- |
| `instruction` | `Instruction` | The accounting instruction. |

**Returns**

| Name     | Type      | Description                       |
| -------- | --------- | --------------------------------- |
| `value`  | `uint256` | The new position value.           |
| `change` | `int256`  | The change in the position value. |

### accountForPositionBatch

Accounts for a batch of positions.

```solidity
function accountForPositionBatch(Instruction[] calldata instructions, uint256[] calldata groupIds)
    external
    returns (uint256[] memory values, int256[] memory changes);
```

**Parameters**

| Name           | Type            | Description                                                                                                                                                                                                                                                            |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instructions` | `Instruction[]` | The array of accounting instructions.                                                                                                                                                                                                                                  |
| `groupIds`     | `uint256[]`     | The array of position group IDs. An accounting instruction must be provided for every open position in each specified group. If an instruction's groupId corresponds to a group of open positions of size greater than 1, the group ID must be included in this array. |

**Returns**

| Name      | Type        | Description                         |
| --------- | ----------- | ----------------------------------- |
| `values`  | `uint256[]` | The new position values.            |
| `changes` | `int256[]`  | The changes in the position values. |

### managePosition

Manages a position's state through paired management and accounting instructions

\*Performs accounting updates and modifies contract storage by:

- Adding new positions to storage when created.
- Removing positions from storage when value reaches zero.\*

\*Applies value preservation checks using a validation matrix to prevent
economic inconsistencies between position changes and token flows.
The matrix evaluates three factors to determine required validations:

- Base Token Inflow - Whether the contract's base token balance increases during operation
- Debt Position - Whether position represents protocol liability (true) vs asset (false)
- Position Δ direction - Direction of position value change (increase/decrease)
  ┌───────────────────┬───────────────┬──────────────────────┬───────────────────────────┐
  │ Base Token Inflow │ Debt Position │ Position Δ direction │ Action │
  ├───────────────────┼───────────────┼──────────────────────┼───────────────────────────┤
  │ No │ No │ Decrease │ Revert: Invalid direction │
  │ No │ Yes │ Increase │ Revert: Invalid direction │
  │ No │ No │ Increase │ Minimum Δ Check │
  │ No │ Yes │ Decrease │ Minimum Δ Check │
  │ Yes │ No │ Decrease │ Maximum Δ Check │
  │ Yes │ Yes │ Increase │ Maximum Δ Check │
  │ Yes │ No │ Increase │ No check (favorable move) │
  │ Yes │ Yes │ Decrease │ No check (favorable move) │
  └───────────────────┴───────────────┴──────────────────────┴───────────────────────────┘\*

```solidity
function managePosition(Instruction calldata mgmtInstruction, Instruction calldata acctInstruction)
    external
    returns (uint256 value, int256 change);
```

**Parameters**

| Name              | Type          | Description                 |
| ----------------- | ------------- | --------------------------- |
| `mgmtInstruction` | `Instruction` | The management instruction. |
| `acctInstruction` | `Instruction` | The accounting instruction. |

**Returns**

| Name     | Type      | Description                      |
| -------- | --------- | -------------------------------- |
| `value`  | `uint256` | The new position value.          |
| `change` | `int256`  | The signed position value delta. |

### managePositionBatch

Manages a batch of positions.

_Convenience function to manage multiple positions in a single transaction._

```solidity
function managePositionBatch(Instruction[] calldata mgmtInstructions, Instruction[] calldata acctInstructions)
    external
    returns (uint256[] memory values, int256[] memory changes);
```

**Parameters**

| Name               | Type            | Description                           |
| ------------------ | --------------- | ------------------------------------- |
| `mgmtInstructions` | `Instruction[]` | The array of management instructions. |
| `acctInstructions` | `Instruction[]` | The array of accounting instructions. |

**Returns**

| Name      | Type        | Description                         |
| --------- | ----------- | ----------------------------------- |
| `values`  | `uint256[]` | The new position values.            |
| `changes` | `int256[]`  | The changes in the position values. |

### manageFlashLoan

Manages flashLoan funds.

```solidity
function manageFlashLoan(Instruction calldata instruction, address token, uint256 amount) external;
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
function harvest(Instruction calldata instruction, ISwapModule.SwapOrder[] calldata swapOrders) external;
```

**Parameters**

| Name          | Type                      | Description                                                |
| ------------- | ------------------------- | ---------------------------------------------------------- |
| `instruction` | `Instruction`             | The harvest instruction.                                   |
| `swapOrders`  | `ISwapModule.SwapOrder[]` | The array of swap orders to be executed after the harvest. |

### swap

Performs a swap via the swapModule module.

```solidity
function swap(ISwapModule.SwapOrder calldata order) external;
```

**Parameters**

| Name    | Type                    | Description                |
| ------- | ----------------------- | -------------------------- |
| `order` | `ISwapModule.SwapOrder` | The swap order parameters. |

### transferToHubMachine

Initiates a token transfer to the hub machine.

```solidity
function transferToHubMachine(address token, uint256 amount, bytes calldata data) external;
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
function notifyIncomingTransfer(address token, uint256 amount) external;
```

**Parameters**

| Name     | Type      | Description                                 |
| -------- | --------- | ------------------------------------------- |
| `token`  | `address` | The address of the token being transferred. |
| `amount` | `uint256` | The amount of tokens being transferred.     |

### setPositionStaleThreshold

Sets the position accounting staleness threshold.

```solidity
function setPositionStaleThreshold(uint256 newPositionStaleThreshold) external;
```

**Parameters**

| Name                        | Type      | Description                   |
| --------------------------- | --------- | ----------------------------- |
| `newPositionStaleThreshold` | `uint256` | The new threshold in seconds. |

### setTimelockDuration

Sets the duration of the allowedInstrRoot update timelock.

```solidity
function setTimelockDuration(uint256 newTimelockDuration) external;
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
function scheduleAllowedInstrRootUpdate(bytes32 newMerkleRoot) external;
```

**Parameters**

| Name            | Type      | Description          |
| --------------- | --------- | -------------------- |
| `newMerkleRoot` | `bytes32` | The new Merkle root. |

### cancelAllowedInstrRootUpdate

Cancels a scheduled update of the root of the Merkle tree containing allowed instructions.

_Reverts if no pending update exists or if the timelock has expired._

```solidity
function cancelAllowedInstrRootUpdate() external;
```

### setMaxPositionIncreaseLossBps

Sets the max allowed value loss for position increases.

```solidity
function setMaxPositionIncreaseLossBps(uint256 newMaxPositionIncreaseLossBps) external;
```

**Parameters**

| Name                            | Type      | Description                             |
| ------------------------------- | --------- | --------------------------------------- |
| `newMaxPositionIncreaseLossBps` | `uint256` | The new max value loss in basis points. |

### setMaxPositionDecreaseLossBps

Sets the max allowed value loss for position decreases.

```solidity
function setMaxPositionDecreaseLossBps(uint256 newMaxPositionDecreaseLossBps) external;
```

**Parameters**

| Name                            | Type      | Description                             |
| ------------------------------- | --------- | --------------------------------------- |
| `newMaxPositionDecreaseLossBps` | `uint256` | The new max value loss in basis points. |

### setMaxSwapLossBps

Sets the max allowed value loss for base token swaps.

```solidity
function setMaxSwapLossBps(uint256 newMaxSwapLossBps) external;
```

**Parameters**

| Name                | Type      | Description                             |
| ------------------- | --------- | --------------------------------------- |
| `newMaxSwapLossBps` | `uint256` | The new max value loss in basis points. |

### setCooldownDuration

Sets the duration of the cooldown period for swaps and position management.

```solidity
function setCooldownDuration(uint256 newCooldownDuration) external;
```

**Parameters**

| Name                  | Type      | Description                  |
| --------------------- | --------- | ---------------------------- |
| `newCooldownDuration` | `uint256` | The new duration in seconds. |

### addInstrRootGuardian

Adds a new guardian for the Merkle tree containing allowed instructions.

```solidity
function addInstrRootGuardian(address newGuardian) external;
```

**Parameters**

| Name          | Type      | Description                      |
| ------------- | --------- | -------------------------------- |
| `newGuardian` | `address` | The address of the new guardian. |

### removeInstrRootGuardian

Removes a guardian for the Merkle tree containing allowed instructions.

```solidity
function removeInstrRootGuardian(address guardian) external;
```

**Parameters**

| Name       | Type      | Description                            |
| ---------- | --------- | -------------------------------------- |
| `guardian` | `address` | The address of the guardian to remove. |

## Events

### BaseTokenAdded

```solidity
event BaseTokenAdded(address indexed token);
```

### BaseTokenRemoved

```solidity
event BaseTokenRemoved(address indexed token);
```

### CooldownDurationChanged

```solidity
event CooldownDurationChanged(uint256 indexed oldDuration, uint256 indexed newDuration);
```

### IncomingTransfer

```solidity
event IncomingTransfer(address indexed token, uint256 amount);
```

### InstrRootGuardianAdded

```solidity
event InstrRootGuardianAdded(address indexed newGuardian);
```

### InstrRootGuardianRemoved

```solidity
event InstrRootGuardianRemoved(address indexed guardian);
```

### MaxPositionDecreaseLossBpsChanged

```solidity
event MaxPositionDecreaseLossBpsChanged(
    uint256 indexed oldMaxPositionDecreaseLossBps, uint256 indexed newMaxPositionDecreaseLossBps
);
```

### MaxPositionIncreaseLossBpsChanged

```solidity
event MaxPositionIncreaseLossBpsChanged(
    uint256 indexed oldMaxPositionIncreaseLossBps, uint256 indexed newMaxPositionIncreaseLossBps
);
```

### MaxSwapLossBpsChanged

```solidity
event MaxSwapLossBpsChanged(uint256 indexed oldMaxSwapLossBps, uint256 indexed newMaxSwapLossBps);
```

### NewAllowedInstrRootCancelled

```solidity
event NewAllowedInstrRootCancelled(bytes32 indexed cancelledMerkleRoot);
```

### NewAllowedInstrRootScheduled

```solidity
event NewAllowedInstrRootScheduled(bytes32 indexed newMerkleRoot, uint256 indexed effectiveTime);
```

### PositionClosed

```solidity
event PositionClosed(uint256 indexed id);
```

### PositionCreated

```solidity
event PositionCreated(uint256 indexed id, uint256 value);
```

### PositionUpdated

```solidity
event PositionUpdated(uint256 indexed id, uint256 value);
```

### PositionStaleThresholdChanged

```solidity
event PositionStaleThresholdChanged(uint256 indexed oldThreshold, uint256 indexed newThreshold);
```

### TimelockDurationChanged

```solidity
event TimelockDurationChanged(uint256 indexed oldDuration, uint256 indexed newDuration);
```

### TransferToHubMachine

```solidity
event TransferToHubMachine(address indexed token, uint256 amount);
```

## Structs

### CaliberInitParams

Initialization parameters.

```solidity
struct CaliberInitParams {
    uint256 initialPositionStaleThreshold;
    bytes32 initialAllowedInstrRoot;
    uint256 initialTimelockDuration;
    uint256 initialMaxPositionIncreaseLossBps;
    uint256 initialMaxPositionDecreaseLossBps;
    uint256 initialMaxSwapLossBps;
    uint256 initialCooldownDuration;
}
```

**Properties**

| Name                                | Type      | Description                                                            |
| ----------------------------------- | --------- | ---------------------------------------------------------------------- |
| `initialPositionStaleThreshold`     | `uint256` | The position accounting staleness threshold in seconds.                |
| `initialAllowedInstrRoot`           | `bytes32` | The root of the Merkle tree containing allowed instructions.           |
| `initialTimelockDuration`           | `uint256` | The duration of the allowedInstrRoot update timelock.                  |
| `initialMaxPositionIncreaseLossBps` | `uint256` | The max allowed value loss (in basis point) for position increases.    |
| `initialMaxPositionDecreaseLossBps` | `uint256` | The max allowed value loss (in basis point) for position decreases.    |
| `initialMaxSwapLossBps`             | `uint256` | The max allowed value loss (in basis point) for base token swaps.      |
| `initialCooldownDuration`           | `uint256` | The duration of the cooldown period for swaps and position management. |

### Instruction

Instruction parameters.

```solidity
struct Instruction {
    uint256 positionId;
    bool isDebt;
    uint256 groupId;
    InstructionType instructionType;
    address[] affectedTokens;
    bytes32[] commands;
    bytes[] state;
    uint128 stateBitmap;
    bytes32[] merkleProof;
}
```

**Properties**

| Name              | Type              | Description                                                                                                                               |
| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `positionId`      | `uint256`         | The ID of the involved position.                                                                                                          |
| `isDebt`          | `bool`            | Whether the position is a debt.                                                                                                           |
| `groupId`         | `uint256`         | The ID of the position accounting group. Set to 0 if the instruction is not of type ACCOUNTING, or if the involved position is ungrouped. |
| `instructionType` | `InstructionType` | The type of the instruction.                                                                                                              |
| `affectedTokens`  | `address[]`       | The array of affected tokens.                                                                                                             |
| `commands`        | `bytes32[]`       | The array of commands.                                                                                                                    |
| `state`           | `bytes[]`         | The array of state.                                                                                                                       |
| `stateBitmap`     | `uint128`         | The state bitmap.                                                                                                                         |
| `merkleProof`     | `bytes32[]`       | The array of Merkle proof elements.                                                                                                       |

### Position

Position data.

```solidity
struct Position {
    uint256 lastAccountingTime;
    uint256 value;
    bool isDebt;
}
```

**Properties**

| Name                 | Type      | Description                                                   |
| -------------------- | --------- | ------------------------------------------------------------- |
| `lastAccountingTime` | `uint256` | The last block timestamp when the position was accounted for. |
| `value`              | `uint256` | The value of the position expressed in accounting token.      |
| `isDebt`             | `bool`    | Whether the position is a debt.                               |

## Enums

### InstructionType

```solidity
enum InstructionType {
    MANAGEMENT,
    ACCOUNTING,
    HARVEST,
    FLASHLOAN_MANAGEMENT
}
```
