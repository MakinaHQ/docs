# CaliberAccountingCCQ

[Git Source](https://github.com/MakinaHQ/makina-core/blob/cf20345b13ba2a9921736997217bda8a8ae89044/src/libraries/CaliberAccountingCCQ.sol)

## Functions

### decodeAndVerifyQueryResponse

```solidity
function decodeAndVerifyQueryResponse(
    address wormhole,
    bytes calldata response,
    GuardianSignature[] calldata signatures
) external view returns (QueryResponse memory ret);
```

### getAccountingData

_Parses the PerChainQueryResponse and retrieves the accounting data for the given caliber mailbox._

```solidity
function getAccountingData(PerChainQueryResponse memory pcr, address caliberMailbox)
    external
    pure
    returns (ICaliberMailbox.SpokeCaliberAccountingData memory, uint256);
```

**Parameters**

| Name             | Type                    | Description                                             |
| ---------------- | ----------------------- | ------------------------------------------------------- |
| `pcr`            | `PerChainQueryResponse` | The PerChainQueryResponse containing the query results. |
| `caliberMailbox` | `address`               | The address of the queried caliber mailbox.             |

**Returns**

| Name     | Type                                         | Description                                            |
| -------- | -------------------------------------------- | ------------------------------------------------------ |
| `<none>` | `ICaliberMailbox.SpokeCaliberAccountingData` | data The accounting data for the given caliber mailbox |
| `<none>` | `uint256`                                    | responseTimestamp The timestamp of the response.       |
