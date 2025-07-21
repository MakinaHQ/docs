# ISwapModule

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/interfaces/ISwapModule.sol)

## Functions

### getSwapperTargets

Returns approval and execution targets for a given swapper ID.

```solidity
function getSwapperTargets(uint16 swapperId) external view returns (address approvalTarget, address executionTarget);
```

**Parameters**

| Name        | Type     | Description     |
| ----------- | -------- | --------------- |
| `swapperId` | `uint16` | The swapper ID. |

**Returns**

| Name              | Type      | Description           |
| ----------------- | --------- | --------------------- |
| `approvalTarget`  | `address` | The approval target.  |
| `executionTarget` | `address` | The execution target. |

### swap

Swaps tokens using a given swapper.

```solidity
function swap(SwapOrder calldata order) external returns (uint256);
```

**Parameters**

| Name    | Type        | Description            |
| ------- | ----------- | ---------------------- |
| `order` | `SwapOrder` | The swap order object. |

### setSwapperTargets

Sets approval and execution targets for a given swapper ID.

```solidity
function setSwapperTargets(uint16 swapperId, address approvalTarget, address executionTarget) external;
```

**Parameters**

| Name              | Type      | Description          |
| ----------------- | --------- | -------------------- |
| `swapperId`       | `uint16`  | The swapper ID.      |
| `approvalTarget`  | `address` | The approval target. |
| `executionTarget` | `address` |                      |

## Events

### Swap

```solidity
event Swap(
    address indexed sender,
    uint16 swapperId,
    address indexed inputToken,
    address indexed outputToken,
    uint256 inputAmount,
    uint256 outputAmount
);
```

### SwapperTargetsSet

```solidity
event SwapperTargetsSet(uint16 indexed swapper, address approvalTarget, address executionTarget);
```

## Structs

### SwapperTargets

```solidity
struct SwapperTargets {
    address approvalTarget;
    address executionTarget;
}
```

### SwapOrder

Swap order object.

```solidity
struct SwapOrder {
    uint16 swapperId;
    bytes data;
    address inputToken;
    address outputToken;
    uint256 inputAmount;
    uint256 minOutputAmount;
}
```

**Properties**

| Name              | Type      | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| `swapperId`       | `uint16`  | The ID of the external swap protocol.                        |
| `data`            | `bytes`   | The swap calldata to pass to the swapper's execution target. |
| `inputToken`      | `address` | The input token.                                             |
| `outputToken`     | `address` | The output token.                                            |
| `inputAmount`     | `uint256` | The input amount.                                            |
| `minOutputAmount` | `uint256` | The minimum expected output amount.                          |
