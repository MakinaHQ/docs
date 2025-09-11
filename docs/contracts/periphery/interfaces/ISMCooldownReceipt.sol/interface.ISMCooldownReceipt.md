# ISMCooldownReceipt
[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/84fdbd342f970755d85ed1e44afeed01003e0e1f/src/interfaces/ISMCooldownReceipt.sol)

**Inherits:**
IERC721

SPDX-License-Identifier: UNLICENSED


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

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The receiver of the minted NFT.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the minted NFT.|


### burn

Burns the specified cooldown receipt NFT.


```solidity
function burn(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|The ID of the NFT to burn.|


