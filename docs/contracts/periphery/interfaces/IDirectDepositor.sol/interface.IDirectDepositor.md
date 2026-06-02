# IDirectDepositor

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/392796cfaf86d8dc0e5b51f9530f6989211426e1/src/interfaces/IDirectDepositor.sol)

**Inherits:**
[IMachinePeriphery](/contracts/periphery/interfaces/IMachinePeriphery.sol/interface.IMachinePeriphery.md)

## Functions

### deposit

Deposits accounting tokens into the machine and mints shares to the receiver.

```solidity
function deposit(uint256 assets, address receiver, uint256 minShares, bytes32 referralKey)
    external
    returns (uint256);
```

**Parameters**

| Name          | Type      | Description                                              |
| ------------- | --------- | -------------------------------------------------------- |
| `assets`      | `uint256` | The amount of accounting tokens to deposit.              |
| `receiver`    | `address` | The receiver of minted shares.                           |
| `minShares`   | `uint256` | The minimum amount of shares to be minted.               |
| `referralKey` | `bytes32` | The optional identifier used to track a referral source. |

**Returns**

| Name     | Type      | Description                         |
| -------- | --------- | ----------------------------------- |
| `<none>` | `uint256` | shares The amount of shares minted. |
