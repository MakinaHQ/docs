# IMakinaGovernable

[Git Source](https://github.com/MakinaHQ/makina-core/blob/96cabc5a8ea74d6880f72f6b2a1ea81df86856a4/src/interfaces/IMakinaGovernable.sol)

## Functions

### mechanic

Address of the mechanic.

```solidity
function mechanic() external view returns (address);
```

### securityCouncil

Address of the security council.

```solidity
function securityCouncil() external view returns (address);
```

### riskManager

Address of the risk manager.

```solidity
function riskManager() external view returns (address);
```

### riskManagerTimelock

Address of the risk manager timelock.

```solidity
function riskManagerTimelock() external view returns (address);
```

### recoveryMode

True if the contract is in recovery mode, false otherwise.

```solidity
function recoveryMode() external view returns (bool);
```

### setMechanic

Sets a new mechanic.

```solidity
function setMechanic(address newMechanic) external;
```

**Parameters**

| Name          | Type      | Description                  |
| ------------- | --------- | ---------------------------- |
| `newMechanic` | `address` | The address of new mechanic. |

### setSecurityCouncil

Sets a new security council.

```solidity
function setSecurityCouncil(address newSecurityCouncil) external;
```

**Parameters**

| Name                 | Type      | Description                              |
| -------------------- | --------- | ---------------------------------------- |
| `newSecurityCouncil` | `address` | The address of the new security council. |

### setRiskManager

Sets a new risk manager.

```solidity
function setRiskManager(address newRiskManager) external;
```

**Parameters**

| Name             | Type      | Description                          |
| ---------------- | --------- | ------------------------------------ |
| `newRiskManager` | `address` | The address of the new risk manager. |

### setRiskManagerTimelock

Sets a new risk manager timelock.

```solidity
function setRiskManagerTimelock(address newRiskManagerTimelock) external;
```

**Parameters**

| Name                     | Type      | Description                                   |
| ------------------------ | --------- | --------------------------------------------- |
| `newRiskManagerTimelock` | `address` | The address of the new risk manager timelock. |

### setRecoveryMode

Sets the recovery mode.

```solidity
function setRecoveryMode(bool enabled) external;
```

**Parameters**

| Name      | Type   | Description                                        |
| --------- | ------ | -------------------------------------------------- |
| `enabled` | `bool` | True to enable recovery mode, false to disable it. |

## Events

### MechanicChanged

```solidity
event MechanicChanged(address indexed oldMechanic, address indexed newMechanic);
```

### RecoveryModeChanged

```solidity
event RecoveryModeChanged(bool recoveryMode);
```

### RiskManagerChanged

```solidity
event RiskManagerChanged(address indexed oldRiskManager, address indexed newRiskManager);
```

### RiskManagerTimelockChanged

```solidity
event RiskManagerTimelockChanged(address indexed oldRiskManagerTimelock, address indexed newRiskManagerTimelock);
```

### SecurityCouncilChanged

```solidity
event SecurityCouncilChanged(address indexed oldSecurityCouncil, address indexed newSecurityCouncil);
```

## Structs

### MakinaGovernableInitParams

Initialization parameters.

```solidity
struct MakinaGovernableInitParams {
    address initialMechanic;
    address initialSecurityCouncil;
    address initialRiskManager;
    address initialRiskManagerTimelock;
    address initialAuthority;
}
```

**Properties**

| Name                         | Type      | Description                                       |
| ---------------------------- | --------- | ------------------------------------------------- |
| `initialMechanic`            | `address` | The address of the initial mechanic.              |
| `initialSecurityCouncil`     | `address` | The address of the initial security council.      |
| `initialRiskManager`         | `address` | The address of the initial risk manager.          |
| `initialRiskManagerTimelock` | `address` | The address of the initial risk manager timelock. |
| `initialAuthority`           | `address` | The address of the initial authority.             |
