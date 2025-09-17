# MachineShare

[Git Source](https://github.com/MakinaHQ/makina-core/blob/5c13d0f918f7a44b1f21792a780c86b350caa4b2/src/machine/MachineShare.sol)

**Inherits:**
ERC20, Ownable2Step, [IMachineShare](/contracts/core/interfaces/IMachineShare.sol/interface.IMachineShare.md)

## Functions

### constructor

```solidity
constructor(string memory _name, string memory _symbol, address _initialMinter)
    ERC20(_name, _symbol)
    Ownable(_initialMinter);
```

### decimals

```solidity
function decimals() public pure override(ERC20, IERC20Metadata) returns (uint8);
```

### minter

Address of the authorized minter and burner.

```solidity
function minter() external view override returns (address);
```

### mint

Mints new shares to the specified address.

```solidity
function mint(address to, uint256 amount) external onlyOwner;
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
