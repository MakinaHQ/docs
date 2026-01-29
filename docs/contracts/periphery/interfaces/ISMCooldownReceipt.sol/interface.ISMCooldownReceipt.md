# ISMCooldownReceipt

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/interfaces/ISMCooldownReceipt.sol)

**Inherits:**
IERC721

## Functions

### nextTokenId

ID of the next token to be minted.

```solidity
function nextTokenId() external view returns (uint256);
```

### mint

Mints a new cooldown receipt NFT to the specified address.

```solidity
function mint(address to) external returns (uint256 tokenId);
```

**Parameters**

| Name | Type      | Description                     |
| ---- | --------- | ------------------------------- |
| `to` | `address` | The receiver of the minted NFT. |

**Returns**

| Name      | Type      | Description               |
| --------- | --------- | ------------------------- |
| `tokenId` | `uint256` | The ID of the minted NFT. |

### burn

Burns the specified cooldown receipt NFT.

```solidity
function burn(uint256 tokenId) external;
```

**Parameters**

| Name      | Type      | Description                |
| --------- | --------- | -------------------------- |
| `tokenId` | `uint256` | The ID of the NFT to burn. |
