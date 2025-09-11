# MachineShare

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/machine/MachineShare.sol)

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

```solidity
function minter() external view override returns (address);
```

### mint

```solidity
function mint(address to, uint256 amount) external onlyOwner;
```

### burn

```solidity
function burn(address from, uint256 amount) external;
```
