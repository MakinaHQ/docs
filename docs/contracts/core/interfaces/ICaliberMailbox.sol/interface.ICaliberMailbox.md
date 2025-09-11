# ICaliberMailbox

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/ICaliberMailbox.sol)

**Inherits:**
[IMachineEndpoint](/contracts/core/interfaces/IMachineEndpoint.sol/interface.IMachineEndpoint.md)

## Functions

### initialize

Initializer of the contract.

```solidity
function initialize(IMakinaGovernable.MakinaGovernableInitParams calldata mgParams, address hubMachine) external;
```

**Parameters**

| Name         | Type                                           | Description                                      |
| ------------ | ---------------------------------------------- | ------------------------------------------------ |
| `mgParams`   | `IMakinaGovernable.MakinaGovernableInitParams` | The makina governable initialization parameters. |
| `hubMachine` | `address`                                      | The foreign address of the hub machine.          |

### caliber

Address of the associated caliber.

```solidity
function caliber() external view returns (address);
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
| `netAum`     | `uint256` | The net assets under management.                                                             |
| `positions`  | `bytes[]` | The list of positions of the caliber, each encoded as abi.encode(positionId, value, isDebt). |
| `baseTokens` | `bytes[]` | The list of base tokens of the caliber, each encoded as abi.encode(token, value).            |
| `bridgesIn`  | `bytes[]` | The list of incoming bridge amounts, each encoded as abi.encode(token, amount).              |
| `bridgesOut` | `bytes[]` | The list of outgoing bridge amounts, each encoded as abi.encode(token, amount).              |
