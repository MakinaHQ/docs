# ILayerZeroComposer

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/interfaces/ILayerZeroComposer.sol)

## Functions

### lzCompose

Composes a LayerZero message from an OApp.

```solidity
function lzCompose(address _from, bytes32 _guid, bytes calldata _message, address _executor, bytes calldata _extraData)
    external
    payable;
```

**Parameters**

| Name         | Type      | Description                                                                                   |
| ------------ | --------- | --------------------------------------------------------------------------------------------- |
| `_from`      | `address` | The address initiating the composition, typically the OApp where the lzReceive was called.    |
| `_guid`      | `bytes32` | The unique identifier for the corresponding LayerZero src/dst tx.                             |
| `_message`   | `bytes`   | The composed message payload in bytes. NOT necessarily the same payload passed via lzReceive. |
| `_executor`  | `address` | The address of the executor for the composed message.                                         |
| `_extraData` | `bytes`   | Additional arbitrary data in bytes passed by the entity who executes the lzCompose.           |
