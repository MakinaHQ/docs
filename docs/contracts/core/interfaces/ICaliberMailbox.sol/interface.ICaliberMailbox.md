# ICaliberMailbox

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/ICaliberMailbox.sol)

**Inherits:**
[IMachineEndpoint](/contracts/core/interfaces/IMachineEndpoint.sol/interface.IMachineEndpoint.md)

## Functions

### initialize

Initializer of the contract.

```solidity
function initialize(
    IMakinaGovernable.MakinaGovernableInitParams calldata mgParams,
    uint256 initialCooldownDuration,
    address hubMachine
) external;
```

**Parameters**

| Name                      | Type                                           | Description                                                        |
| ------------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| `mgParams`                | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters.                   |
| `initialCooldownDuration` | `uint256`                                      | The duration of the cooldown period for outgoing bridge transfers. |
| `hubMachine`              | `address`                                      | The foreign address of the hub machine.                            |

### caliber

Address of the associated caliber.

```solidity
function caliber() external view returns (address);
```

### cooldownDuration

Duration of the cooldown period for outgoing bridge transfers.

```solidity
function cooldownDuration() external view returns (uint256);
```

### getHubBridgeAdapter

Returns the foreign address of the Hub bridge adapter for a given bridge ID.

```solidity
function getHubBridgeAdapter(uint16 bridgeId) external view returns (address);
```

**Parameters**

| Name       | Type     | Description           |
| ---------- | -------- | --------------------- |
| `bridgeId` | `uint16` | The ID of the bridge. |

### hubChainId

Chain ID of the hub.

```solidity
function hubChainId() external view returns (uint256);
```

### getSpokeCaliberAccountingData

Returns the accounting data of the associated caliber.

```solidity
function getSpokeCaliberAccountingData() external view returns (SpokeCaliberAccountingData memory);
```

**Returns**

| Name     | Type                         | Description               |
| -------- | ---------------------------- | ------------------------- |
| `<none>` | `SpokeCaliberAccountingData` | data The accounting data. |

### setCaliber

Sets the associated caliber address.

```solidity
function setCaliber(address caliber) external;
```

**Parameters**

| Name      | Type      | Description                            |
| --------- | --------- | -------------------------------------- |
| `caliber` | `address` | The address of the associated caliber. |

### setCooldownDuration

Sets the duration of the cooldown period for outgoing bridge transfers.

```solidity
function setCooldownDuration(uint256 newCooldownDuration) external;
```

**Parameters**

| Name                  | Type      | Description                  |
| --------------------- | --------- | ---------------------------- |
| `newCooldownDuration` | `uint256` | The new duration in seconds. |

### setHubBridgeAdapter

Registers a hub bridge adapter.

```solidity
function setHubBridgeAdapter(uint16 bridgeId, address adapter) external;
```

**Parameters**

| Name       | Type      | Description                                |
| ---------- | --------- | ------------------------------------------ |
| `bridgeId` | `uint16`  | The ID of the bridge.                      |
| `adapter`  | `address` | The foreign address of the bridge adapter. |

## Events

### CaliberSet

```solidity
event CaliberSet(address indexed caliber);
```

### CooldownDurationChanged

```solidity
event CooldownDurationChanged(uint256 oldDuration, uint256 newDuration);
```

### HubBridgeAdapterSet

```solidity
event HubBridgeAdapterSet(uint256 indexed bridgeId, address indexed adapter);
```

## Structs

### SpokeCaliberAccountingData

Accounting data of the caliber.

```solidity
struct SpokeCaliberAccountingData {
    uint256 netAum;
    bytes[] positions;
    bytes[] baseTokens;
    bytes[] bridgesIn;
    bytes[] bridgesOut;
}
```

**Properties**

| Name         | Type      | Description                                                                                  |
| ------------ | --------- | -------------------------------------------------------------------------------------------- |
| `netAum`     | `uint256` | The net AUM expresses in caliber's accounting token.                                         |
| `positions`  | `bytes[]` | The list of positions of the caliber, each encoded as abi.encode(positionId, value, isDebt). |
| `baseTokens` | `bytes[]` | The list of base tokens of the caliber, each encoded as abi.encode(token, value).            |
| `bridgesIn`  | `bytes[]` | The list of incoming bridge amounts, each encoded as abi.encode(token, amount).              |
| `bridgesOut` | `bytes[]` | The list of outgoing bridge amounts, each encoded as abi.encode(token, amount).              |
