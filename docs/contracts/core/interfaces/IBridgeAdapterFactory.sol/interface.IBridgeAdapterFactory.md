# IBridgeAdapterFactory

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/IBridgeAdapterFactory.sol)

## Functions

### isBridgeAdapter

Address => Whether this is a BridgeAdapter instance deployed by this factory.

```solidity
function isBridgeAdapter(address adapter) external view returns (bool);
```

### createBridgeAdapter

Deploys a bridge adapter instance.

```solidity
function createBridgeAdapter(address controller, BridgeAdapterInitParams calldata baParams)
    external
    returns (address adapter);
```

**Parameters**

| Name         | Type                      | Description                                                                |
| ------------ | ------------------------- | -------------------------------------------------------------------------- |
| `controller` | `address`                 | The address of the bridge controller for which to deploy the adapter.      |
| `baParams`   | `BridgeAdapterInitParams` | The bridge adapter initialization parameters and controller configuration. |

**Returns**

| Name      | Type      | Description                                 |
| --------- | --------- | ------------------------------------------- |
| `adapter` | `address` | The address of the deployed bridge adapter. |

## Events

### BridgeAdapterCreated

```solidity
event BridgeAdapterCreated(address indexed controller, uint256 indexed bridgeId, address indexed adapter);
```

## Structs

### BridgeAdapterInitParams

Bridge adapter initialization parameters and controller configuration.

```solidity
struct BridgeAdapterInitParams {
    uint16 bridgeId;
    bytes initData;
    uint256 initialMaxBridgeLossBps;
}
```

**Properties**

| Name                      | Type      | Description                                                                        |
| ------------------------- | --------- | ---------------------------------------------------------------------------------- |
| `bridgeId`                | `uint16`  | The ID of the bridge for which the adapter is being created.                       |
| `initData`                | `bytes`   | The optional initialization data for the bridge adapter.                           |
| `initialMaxBridgeLossBps` | `uint256` | The initial maximum bridge loss in basis points for this bridge ID and controller. |
