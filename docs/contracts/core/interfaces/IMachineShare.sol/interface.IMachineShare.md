# IMachineShare

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/IMachineShare.sol)

**Inherits:**
IERC20Metadata

## Functions

### minter

Address of the authorized minter and burner.

```solidity
function minter() external view returns (address);
```

### mint

Mints new shares to the specified address.

```solidity
function mint(address to, uint256 amount) external;
```

**Parameters**

| Name     | Type      | Description                         |
| -------- | --------- | ----------------------------------- |
| `to`     | `address` | The recipient of the minted shares. |
| `amount` | `uint256` | The amount of shares to mint.       |

### burn

Burns shares from the specified address.

```solidity
function burn(address from, uint256 amount) external;
```

**Parameters**

| Name     | Type      | Description                      |
| -------- | --------- | -------------------------------- |
| `from`   | `address` | The owner of the shares to burn. |
| `amount` | `uint256` | The amount of shares to burn.    |
