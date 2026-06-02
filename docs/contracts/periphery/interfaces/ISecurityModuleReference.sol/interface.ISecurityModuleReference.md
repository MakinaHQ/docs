# ISecurityModuleReference

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/ISecurityModuleReference.sol)

## Functions

### securityModule

Security module address.

```solidity
function securityModule() external view returns (address);
```

### setSecurityModule

Sets the security module address.

```solidity
function setSecurityModule(address _securityModule) external;
```

**Parameters**

| Name              | Type      | Description                         |
| ----------------- | --------- | ----------------------------------- |
| `_securityModule` | `address` | The address of the security module. |
