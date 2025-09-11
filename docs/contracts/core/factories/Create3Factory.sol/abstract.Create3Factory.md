# Create3Factory
[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/factories/Create3Factory.sol)

Forked from 0xSequence (https://github.com/0xSequence/create3/blob/master/contracts/Create3.sol)


## State Variables
### PROXY_BYTECODE
*The bytecode for a contract that proxies the creation of another contract.
If this code is deployed using CREATE2 it can be used to decouple `creationCode` from the child contract address.
The proxy bytecode constant encodes two parts:
1. **Init code** (first table): runs once at deployment, writes the runtime code to memory, and returns it.
2. **Runtime code** (second table): becomes the code stored on-chain; when executed, it forwards calldata and value into a CREATE.
Initcode (runs once at deployment, writes runtime code to memory and returns it):
┌────────────┬───────────────────────┬──────────────────┬──────────────────────┐
│ Opcode     │ Opcode + Arguments    │ Mnemonic         │ Stack View           │
├────────────┼───────────────────────┼──────────────────┼──────────────────────┤
│ 0x67       │  0x67XXXXXXXXXXXXXXXX │ PUSH8 bytecode   │ bytecode             │
│ 0x3d       │  0x3d                 │ RETURNDATASIZE   │ 0 bytecode           │
│ 0x52       │  0x52                 │ MSTORE           │                      │
│ 0x60       │  0x6008               │ PUSH1 08         │ 0x08                 │
│ 0x60       │  0x6018               │ PUSH1 18         │ 0x18 0x08            │
│ 0xf3       │  0xf3                 │ RETURN           │                      │
└────────────┴───────────────────────┴──────────────────┴──────────────────────┘
Runtime code (becomes the code stored on-chain, forwards calldata and value into CREATE):
┌────────────┬───────────────────────┬──────────────────┬──────────────────────┐
│ Opcode     │ Opcode + Arguments    │ Mnemonic         │ Stack                │
├────────────┼───────────────────────┼──────────────────┼──────────────────────┤
│ 0x36       │  0x36                 │ CALLDATASIZE     │ cds                  │
│ 0x3d       │  0x3d                 │ RETURNDATASIZE   │ 0 cds                │
│ 0x3d       │  0x3d                 │ RETURNDATASIZE   │ 0 0 cds              │
│ 0x37       │  0x37                 │ CALLDATACOPY     │                      │
│ 0x36       │  0x36                 │ CALLDATASIZE     │ cds                  │
│ 0x3d       │  0x3d                 │ RETURNDATASIZE   │ 0 cds                │
│ 0x34       │  0x34                 │ CALLVALUE        │ value 0 cds          │
│ 0xf0       │  0xf0                 │ CREATE           │ newContract          │
└────────────┴───────────────────────┴──────────────────┴──────────────────────┘*


```solidity
bytes internal constant PROXY_BYTECODE = hex"67363d3d37363d34f03d5260086018f3";
```


### PROXY_BYTECODE_HASH
*keccak256 hash of `PROXY_BYTECODE`.*


```solidity
bytes32 internal constant PROXY_BYTECODE_HASH = 0x21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f;
```


## Functions
### _create3

Creates a new contract using CREATE3.

**


```solidity
function _create3(bytes32 _saltDomain, bytes32 _salt, bytes memory _initCode) internal returns (address);
```

### _computeAddress

Computes the resulting address of a contract deployed via CREATE3 from this factory, using address(this) and the given salt

*The address creation formula is: keccak256(rlp([keccak256(0xff ++ address(this) ++ _salt ++ keccak256(initCode))[12:], 0x01]))*


```solidity
function _computeAddress(bytes32 _namespacedSalt) internal view returns (address);
```

### _computeNamespacedSalt

Computes a namespaced salt from a domain and user-provided salt.


```solidity
function _computeNamespacedSalt(bytes32 domain, bytes32 userSalt) internal pure returns (bytes32);
```

