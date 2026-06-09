# ICctpV2DestinationCaller

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/interfaces/ICctpV2DestinationCaller.sol)

## Functions

### receiveCctpV2Message

Handles reception of a CCTP V2 message and signature.

```solidity
function receiveCctpV2Message(bytes calldata message, bytes calldata attestation) external;
```

**Parameters**

| Name          | Type    | Description                    |
| ------------- | ------- | ------------------------------ |
| `message`     | `bytes` | The CCTP V2 message raw bytes. |
| `attestation` | `bytes` | The message signature.         |
