# MachineUtils
[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/libraries/MachineUtils.sol)


## Functions
### updateTotalAum


```solidity
function updateTotalAum(Machine.MachineStorage storage $, address oracleRegistry) external returns (uint256);
```

### manageFees


```solidity
function manageFees(Machine.MachineStorage storage $) external returns (uint256);
```

### updateSpokeCaliberAccountingData

*Updates the spoke caliber accounting data in the machine storage.*


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

|Name|Type|Description|
|----|----|-----------|
|`$`|`Machine.MachineStorage`|The machine storage struct.|
|`tokenRegistry`|`address`|The address of the token registry.|
|`chainRegistry`|`address`|The address of the chain registry.|
|`wormhole`|`address`|The address of the Core Wormhole contract.|
|`response`|`bytes`|The Wormhole CCQ response payload containing the accounting data.|
|`signatures`|`GuardianSignature[]`|The array of Wormhole guardians signatures attesting to the validity of the response.|


### migrateFromPreDeposit

*Manages the migration from a pre-deposit vault to a machine, and initializes the machine's accounting state.*


```solidity
function migrateFromPreDeposit(Machine.MachineStorage storage $, address preDepositVault, address oracleRegistry)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`$`|`Machine.MachineStorage`|The machine storage struct.|
|`preDepositVault`|`address`|The address of the pre-deposit vault.|
|`oracleRegistry`|`address`|The address of the oracle registry.|


### getSharePrice

*Calculates the share price based on given AUM, share supply and share token decimals offset.*


```solidity
function getSharePrice(uint256 aum, uint256 supply, uint256 shareTokenDecimalsOffset) public pure returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`aum`|`uint256`|The AUM of the machine.|
|`supply`|`uint256`|The supply of the share token.|
|`shareTokenDecimalsOffset`|`uint256`|The decimals offset between share token and accounting token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The calculated share price.|


### _handlePerChainQueryResponse

*Handles a received Wormhole CCQ PerChainQueryResponse object and updates the corresponding caliber accounting data in the machine storage.*


```solidity
function _handlePerChainQueryResponse(
    Machine.MachineStorage storage $,
    address tokenRegistry,
    address chainRegistry,
    PerChainQueryResponse memory pcr
) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`$`|`Machine.MachineStorage`|The machine storage struct.|
|`tokenRegistry`|`address`|The address of the token registry.|
|`chainRegistry`|`address`|The address of the chain registry.|
|`pcr`|`PerChainQueryResponse`|The PerChainQueryResponse object containing the accounting data.|


### _decodeAndMapBridgeAmounts

*Decodes (foreignToken, amount) pairs, resolves local tokens, and stores amounts in the map.*


```solidity
function _decodeAndMapBridgeAmounts(
    uint256 chainId,
    bytes[] memory data,
    EnumerableMap.AddressToUintMap storage map,
    address tokenRegistry
) private;
```

### _getTotalAum

*Computes the total AUM of the machine.*


```solidity
function _getTotalAum(Machine.MachineStorage storage $, address oracleRegistry) private view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`$`|`Machine.MachineStorage`|The machine storage struct.|
|`oracleRegistry`|`address`|The address of the oracle registry.|


### _checkBridgeState

*Checks if the bridge state is consistent between the machine and spoke caliber.*


```solidity
function _checkBridgeState(
    EnumerableMap.AddressToUintMap storage insMap,
    EnumerableMap.AddressToUintMap storage outsMap
) private view;
```

### _accountingValueOf

*Computes the accounting value of a given token amount.*


```solidity
function _accountingValueOf(address oracleRegistry, address accountingToken, address token, uint256 amount)
    private
    view
    returns (uint256);
```

