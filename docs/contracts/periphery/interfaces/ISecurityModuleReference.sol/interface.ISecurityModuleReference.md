# ISecurityModuleReference

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/interfaces/ISecurityModuleReference.sol)

SPDX-License-Identifier: UNLICENSED

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
