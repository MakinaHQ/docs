# SwapModule

[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/swap/SwapModule.sol)

**Inherits:**
AccessManagedUpgradeable, [MakinaContext](docs/contracts/utils/MakinaContext.sol/abstract.MakinaContext.md), [ISwapModule](docs/contracts/interfaces/ISwapModule.sol/interface.ISwapModule.md)

## State Variables

### SwapModuleStorageLocation

```solidity
bytes32 private constant SwapModuleStorageLocation = 0x2964c0594a3da0414db90b8d5f6c112accd22109f0399a98ea4b239ff3f7a200;
```

## Functions

### \_getSwapModuleStorage

```solidity
function _getSwapModuleStorage() private pure returns (SwapModuleStorage storage $);
```

### constructor

```solidity
constructor(address _registry) MakinaContext(_registry);
```

### initialize

```solidity
function initialize(address _initialAuthority) external initializer;
```

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
function swap(SwapOrder calldata order) external override returns (uint256);
```

**Parameters**

| Name    | Type        | Description            |
| ------- | ----------- | ---------------------- |
| `order` | `SwapOrder` | The swap order object. |

### setSwapperTargets

Sets approval and execution targets for a given swapper ID.

```solidity
function setSwapperTargets(uint16 swapperId, address approvalTarget, address executionTarget)
    external
    override
    restricted;
```

**Parameters**

| Name              | Type      | Description          |
| ----------------- | --------- | -------------------- |
| `swapperId`       | `uint16`  | The swapper ID.      |
| `approvalTarget`  | `address` | The approval target. |
| `executionTarget` | `address` |                      |

## Structs

### SwapModuleStorage

**Note:**
storage-location: erc7201:makina.storage.SwapModule

```solidity
struct SwapModuleStorage {
    mapping(uint16 swapperId => SwapperTargets targets) _swapperTargets;
}
```
