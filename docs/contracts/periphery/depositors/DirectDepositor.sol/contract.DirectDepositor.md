# DirectDepositor

[Git Source](https://github.com/MakinaHQ/makina-periphery/blob/e8b2b2411f6e534177e79953d4414e8369c7d524/src/depositors/DirectDepositor.sol)

**Inherits:**
[MachinePeriphery](/contracts/periphery/utils/MachinePeriphery.sol/abstract.MachinePeriphery.md), [Whitelist](/contracts/periphery/utils/Whitelist.sol/abstract.Whitelist.md), [IDirectDepositor](/contracts/periphery/interfaces/IDirectDepositor.sol/interface.IDirectDepositor.md)

## Functions

### constructor

```solidity
constructor(address _registry) MachinePeriphery(_registry);
```

### initialize

```solidity
function initialize(bytes calldata data) external virtual override initializer;
```

### deposit

Deposits accounting tokens into the machine and mints shares to the receiver.

```solidity
function deposit(uint256 assets, address receiver, uint256 minShares, bytes32 referralKey)
    public
    virtual
    override
    whitelistCheck
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

### setWhitelistStatus

Enables or disables the whitelist.

```solidity
function setWhitelistStatus(bool enabled) external override onlyRiskManager;
```

**Parameters**

| Name      | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `enabled` | `bool` | True to enable the whitelist, false to disable. |

### setWhitelistedUsers

Whitelists or unwhitelists a list of users.

```solidity
function setWhitelistedUsers(address[] calldata users, bool whitelisted) external override onlyRiskManager;
```

**Parameters**

| Name          | Type        | Description                                        |
| ------------- | ----------- | -------------------------------------------------- |
| `users`       | `address[]` | The addresses of the users to update.              |
| `whitelisted` | `bool`      | True to whitelist the users, false to unwhitelist. |
