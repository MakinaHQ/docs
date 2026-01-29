# ISecurityModuleReference

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/interfaces/ISecurityModuleReference.sol)

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
