# ISecurityModuleReference

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/interfaces/ISecurityModuleReference.sol)

## Functions

### securityModule

Security module address.

```solidity
function securityModule() external view returns (address);
```

### setSecurityModule

Sets the security module address.

```solidity
function setSecurityModule(address securityModule) external;
```

**Parameters**

| Name             | Type      | Description                         |
| ---------------- | --------- | ----------------------------------- |
| `securityModule` | `address` | The address of the security module. |
