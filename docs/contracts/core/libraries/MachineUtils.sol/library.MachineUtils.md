# MachineUtils

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/libraries/MachineUtils.sol)

## State Variables

### RATE_SCALE

```solidity
uint256 private constant RATE_SCALE = 1e18;
```

## Functions

### updateTotalAum

_Updates the total AUM of the machine and performs share price change check._

```solidity
function updateTotalAum(Machine.MachineStorage storage $, address oracleRegistry, bool sharePriceChangeCheck)
    external
    returns (uint256);
```

**Parameters**

| Name                    | Type                     | Description                                                   |
| ----------------------- | ------------------------ | ------------------------------------------------------------- |
| `$`                     | `Machine.MachineStorage` | The machine storage struct.                                   |
| `oracleRegistry`        | `address`                | The address of the oracle registry.                           |
| `sharePriceChangeCheck` | `bool`                   | True to perform share price change check, false to bypass it. |

**Returns**

| Name     | Type      | Description            |
| -------- | --------- | ---------------------- |
| `<none>` | `uint256` | The updated total AUM. |

### manageFees

_Manages the fee minting process, including calculating and minting fixed and performance fees._

```solidity
function manageFees(Machine.MachineStorage storage $) external returns (uint256);
```

**Parameters**

| Name | Type                     | Description                 |
| ---- | ------------------------ | --------------------------- |
| `$`  | `Machine.MachineStorage` | The machine storage struct. |

**Returns**

| Name     | Type      | Description                      |
| -------- | --------- | -------------------------------- |
| `<none>` | `uint256` | The fees minted in share tokens. |

### updateSpokeCaliberAccountingData

_Updates the spoke caliber accounting data in the machine storage._

```solidity
function updateSpokeCaliberAccountingData(
    Machine.MachineStorage storage $,
    address tokenRegistry,
    address chainRegistry,
    address wormhole,
    bytes calldata response,
    GuardianSignature[] calldata signatures
) external;
```

**Parameters**

| Name            | Type                     | Description                                                                           |
| --------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `$`             | `Machine.MachineStorage` | The machine storage struct.                                                           |
| `tokenRegistry` | `address`                | The address of the token registry.                                                    |
| `chainRegistry` | `address`                | The address of the chain registry.                                                    |
| `wormhole`      | `address`                | The address of the Core Wormhole contract.                                            |
| `response`      | `bytes`                  | The Wormhole CCQ response payload containing the accounting data.                     |
| `signatures`    | `GuardianSignature[]`    | The array of Wormhole guardians signatures attesting to the validity of the response. |

### migrateFromPreDeposit

_Manages the migration from a pre-deposit vault to a machine, and initializes the machine's accounting state._

```solidity
function migrateFromPreDeposit(Machine.MachineStorage storage $, address preDepositVault, address oracleRegistry)
    external;
```

**Parameters**

| Name              | Type                     | Description                           |
| ----------------- | ------------------------ | ------------------------------------- |
| `$`               | `Machine.MachineStorage` | The machine storage struct.           |
| `preDepositVault` | `address`                | The address of the pre-deposit vault. |
| `oracleRegistry`  | `address`                | The address of the oracle registry.   |

### getSharePrice

_Calculates the share price based on given AUM, share supply and share token decimals offset._

```solidity
function getSharePrice(uint256 aum, uint256 supply, uint256 shareTokenDecimalsOffset) public pure returns (uint256);
```

**Parameters**

| Name                       | Type      | Description                                                   |
| -------------------------- | --------- | ------------------------------------------------------------- |
| `aum`                      | `uint256` | The AUM of the machine.                                       |
| `supply`                   | `uint256` | The supply of the share token.                                |
| `shareTokenDecimalsOffset` | `uint256` | The decimals offset between share token and accounting token. |

**Returns**

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| `<none>` | `uint256` | The calculated share price. |

### \_handlePerChainQueryResponse

_Handles a received Wormhole CCQ PerChainQueryResponse object and updates the corresponding caliber accounting data in the machine storage._

```solidity
function _handlePerChainQueryResponse(
    Machine.MachineStorage storage $,
    address tokenRegistry,
    address chainRegistry,
    PerChainQueryResponse memory pcr
) private;
```

**Parameters**

| Name            | Type                     | Description                                                      |
| --------------- | ------------------------ | ---------------------------------------------------------------- |
| `$`             | `Machine.MachineStorage` | The machine storage struct.                                      |
| `tokenRegistry` | `address`                | The address of the token registry.                               |
| `chainRegistry` | `address`                | The address of the chain registry.                               |
| `pcr`           | `PerChainQueryResponse`  | The PerChainQueryResponse object containing the accounting data. |

### \_decodeAndMapBridgeAmounts

_Decodes (foreignToken, amount) pairs, resolves local tokens, and stores amounts in the map._

```solidity
function _decodeAndMapBridgeAmounts(
    uint256 chainId,
    bytes[] memory data,
    EnumerableMap.AddressToUintMap storage map,
    address tokenRegistry
) private;
```

### \_getTotalAum

_Computes the total AUM of the machine._

```solidity
function _getTotalAum(Machine.MachineStorage storage $, address oracleRegistry) private view returns (uint256);
```

**Parameters**

| Name             | Type                     | Description                         |
| ---------------- | ------------------------ | ----------------------------------- |
| `$`              | `Machine.MachineStorage` | The machine storage struct.         |
| `oracleRegistry` | `address`                | The address of the oracle registry. |

### \_checkBridgeState

_Checks if the bridge state is consistent between the machine and spoke caliber._

```solidity
function _checkBridgeState(
    EnumerableMap.AddressToUintMap storage insMap,
    EnumerableMap.AddressToUintMap storage outsMap
) private view;
```

### \_accountingValueOf

_Computes the accounting value of a given token amount._

```solidity
function _accountingValueOf(address oracleRegistry, address accountingToken, address token, uint256 amount)
    private
    view
    returns (uint256);
```

### \_checkMaxRelativeChange

_Checks that the relative change between two values does not exceed the maximum allowed rate over elapsed time._

```solidity
function _checkMaxRelativeChange(
    uint256 previousValue,
    uint256 newValue,
    uint256 maxPercentDeltaPerSecond,
    uint256 elapsedTime
) internal pure;
```
