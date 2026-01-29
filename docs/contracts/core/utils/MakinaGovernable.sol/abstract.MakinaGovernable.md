# MakinaGovernable

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/utils/MakinaGovernable.sol)

**Inherits:**
AccessManagedUpgradeable, [IMakinaGovernable](/contracts/core/interfaces/IMakinaGovernable.sol/interface.IMakinaGovernable.md)

## State Variables

### MakinaGovernableStorageLocation

```solidity
bytes32 private constant MakinaGovernableStorageLocation =
    0x7e702089668346e906996be6de3dfc0cb2b0c125fc09b3c0391871825913e000;
```

## Functions

### \_getMakinaGovernableStorage

```solidity
function _getMakinaGovernableStorage() internal pure returns (MakinaGovernableStorage storage $);
```

### constructor

```solidity
constructor();
```

### \_\_MakinaGovernable_init

```solidity
function __MakinaGovernable_init(MakinaGovernableInitParams calldata params) internal onlyInitializing;
```

### onlyOperator

```solidity
modifier onlyOperator();
```

### onlyMechanic

```solidity
modifier onlyMechanic();
```

### onlySecurityCouncil

```solidity
modifier onlySecurityCouncil();
```

### onlyRiskManager

```solidity
modifier onlyRiskManager();
```

### onlyRiskManagerTimelock

```solidity
modifier onlyRiskManagerTimelock();
```

### notRecoveryMode

```solidity
modifier notRecoveryMode();
```

### onlyAccountingAuthorized

```solidity
modifier onlyAccountingAuthorized();
```

### mechanic

Address of the mechanic.

```solidity
function mechanic() external view override returns (address);
```

### securityCouncil

Address of the security council.

```solidity
function securityCouncil() public view override returns (address);
```

### riskManager

Address of the risk manager.

```solidity
function riskManager() external view override returns (address);
```

### riskManagerTimelock

Address of the risk manager timelock.

```solidity
function riskManagerTimelock() external view override returns (address);
```

### recoveryMode

True if the contract is in recovery mode, false otherwise.

```solidity
function recoveryMode() external view returns (bool);
```

### restrictedAccountingMode

True if the contract is in restricted accounting mode, false otherwise.

```solidity
function restrictedAccountingMode() external view override returns (bool);
```

### isAccountingAgent

User => Whether the user is an accounting agent

```solidity
function isAccountingAgent(address user) external view override returns (bool);
```

### isOperator

User => Whether the user is the current operator
The operator is either the mechanic or the security council depending on the recovery mode.

```solidity
function isOperator(address user) public view override returns (bool);
```

### isAccountingAuthorized

User => Whether the user is authorized to perform accounting operations under current settings

```solidity
function isAccountingAuthorized(address user) public view override returns (bool);
```

### setMechanic

Sets a new mechanic.

```solidity
function setMechanic(address newMechanic) external override restricted;
```

**Parameters**

| Name          | Type      | Description                  |
| ------------- | --------- | ---------------------------- |
| `newMechanic` | `address` | The address of new mechanic. |

### setSecurityCouncil

Sets a new security council.

```solidity
function setSecurityCouncil(address newSecurityCouncil) external override restricted;
```

**Parameters**

| Name                 | Type      | Description                              |
| -------------------- | --------- | ---------------------------------------- |
| `newSecurityCouncil` | `address` | The address of the new security council. |

### setRiskManager

Sets a new risk manager.

```solidity
function setRiskManager(address newRiskManager) external override restricted;
```

**Parameters**

| Name             | Type      | Description                          |
| ---------------- | --------- | ------------------------------------ |
| `newRiskManager` | `address` | The address of the new risk manager. |

### setRiskManagerTimelock

Sets a new risk manager timelock.

```solidity
function setRiskManagerTimelock(address newRiskManagerTimelock) external override restricted;
```

**Parameters**

| Name                     | Type      | Description                                   |
| ------------------------ | --------- | --------------------------------------------- |
| `newRiskManagerTimelock` | `address` | The address of the new risk manager timelock. |

### setRecoveryMode

Sets the recovery mode.

```solidity
function setRecoveryMode(bool enabled) external onlySecurityCouncil;
```

**Parameters**

| Name      | Type   | Description                                        |
| --------- | ------ | -------------------------------------------------- |
| `enabled` | `bool` | True to enable recovery mode, false to disable it. |

### setRestrictedAccountingMode

Sets the restricted accounting mode.

```solidity
function setRestrictedAccountingMode(bool enabled) external restricted;
```

**Parameters**

| Name      | Type   | Description                                                     |
| --------- | ------ | --------------------------------------------------------------- |
| `enabled` | `bool` | True to enable restricted accounting mode, false to disable it. |

### addAccountingAgent

Adds a new accounting agent.

```solidity
function addAccountingAgent(address newAgent) external override restricted;
```

**Parameters**

| Name       | Type      | Description                              |
| ---------- | --------- | ---------------------------------------- |
| `newAgent` | `address` | The address of the new accounting agent. |

### removeAccountingAgent

Removes an accounting agent.

```solidity
function removeAccountingAgent(address agent) external override restricted;
```

**Parameters**

| Name    | Type      | Description                                    |
| ------- | --------- | ---------------------------------------------- |
| `agent` | `address` | The address of the accounting agent to remove. |

## Structs

### MakinaGovernableStorage

**Note:**
storage-location: erc7201:makina.storage.MakinaGovernable

```solidity
struct MakinaGovernableStorage {
    address _mechanic;
    address _securityCouncil;
    address _riskManager;
    address _riskManagerTimelock;
    bool _recoveryMode;
    bool _restrictedAccountingMode;
    mapping(address user => bool isAccountingAgent) _isAccountingAgent;
}
```
