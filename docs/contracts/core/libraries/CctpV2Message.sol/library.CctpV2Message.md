# CctpV2Message

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/libraries/CctpV2Message.sol)

## State Variables

### MESSAGE_SOURCE_DOMAIN_INDEX

Indexes in message

```solidity
uint256 private constant MESSAGE_SOURCE_DOMAIN_INDEX = 4
```

### MESSAGE_RECIPIENT_INDEX

```solidity
uint256 private constant MESSAGE_RECIPIENT_INDEX = 76
```

### MESSAGE_BODY_INDEX

```solidity
uint256 private constant MESSAGE_BODY_INDEX = 148
```

### BODY_BURN_TOKEN_INDEX

Indexes in message body

```solidity
uint256 private constant BODY_BURN_TOKEN_INDEX = 4
```

### BODY_MINT_RECIPIENT_INDEX

```solidity
uint256 private constant BODY_MINT_RECIPIENT_INDEX = 36
```

### BODY_HOOK_DATA_INDEX

```solidity
uint256 private constant BODY_HOOK_DATA_INDEX = 228
```

## Functions

### checkMessageLength

Checks that `message` has the minimum length required for parsing.
Must be called before parsing.

```solidity
function checkMessageLength(bytes calldata message) internal pure;
```

### getSourceDomain

Returns the source domain.

```solidity
function getSourceDomain(bytes calldata message) internal pure returns (uint32);
```

### getRecipient

Returns the recipient.

```solidity
function getRecipient(bytes calldata message) internal pure returns (address);
```

### getBurnToken

Returns the burn token from the message body.

```solidity
function getBurnToken(bytes calldata message) internal pure returns (bytes32);
```

### getMintRecipient

Returns the mint recipient from the message body.

```solidity
function getMintRecipient(bytes calldata message) internal pure returns (address);
```

### getHookData

Returns the hook data from the message body.

```solidity
function getHookData(bytes calldata message) internal pure returns (bytes memory);
```

### addressToBytes32

Converts an address to bytes32.

```solidity
function addressToBytes32(address addr) internal pure returns (bytes32);
```

### bytes32ToAddress

Converts a bytes32 to address.

```solidity
function bytes32ToAddress(bytes32 b) internal pure returns (address);
```
