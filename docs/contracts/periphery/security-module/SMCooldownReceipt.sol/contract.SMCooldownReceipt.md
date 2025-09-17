# SMCooldownReceipt

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/3ff217c9c76d6d34e1bcbab84ac6946048ceaeb7/src/security-module/SMCooldownReceipt.sol)

**Inherits:**
ERC721, Ownable2Step, [ISMCooldownReceipt](/contracts/periphery/interfaces/ISMCooldownReceipt.sol/interface.ISMCooldownReceipt.md)

## State Variables

### nextTokenId

ID of the next token to be minted.

```solidity
uint256 public nextTokenId;
```

## Functions

### constructor

```solidity
constructor(address _initialMinter)
    ERC721("Makina Security Module Cooldown NFT", "MakinaSMCooldownNFT")
    Ownable(_initialMinter);
```

### mint

Mints a new cooldown receipt NFT to the specified address.

```solidity
function mint(address to) external onlyOwner returns (uint256);
```

**Parameters**

| Name | Type      | Description                     |
| ---- | --------- | ------------------------------- |
| `to` | `address` | The receiver of the minted NFT. |

**Returns**

| Name     | Type      | Description                       |
| -------- | --------- | --------------------------------- |
| `<none>` | `uint256` | tokenId The ID of the minted NFT. |

### burn

Burns the specified cooldown receipt NFT.

```solidity
function burn(uint256 tokenId) external onlyOwner;
```

**Parameters**

| Name      | Type      | Description                |
| --------- | --------- | -------------------------- |
| `tokenId` | `uint256` | The ID of the NFT to burn. |
