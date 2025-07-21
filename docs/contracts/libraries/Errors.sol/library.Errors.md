# Errors

[Git Source](https://github.com/MakinaHQ/makina-core/blob/238e21a4556f5ac790697eda30b32c943897a6d7docs/contracts/libraries/Errors.sol)

## Errors

### AccountingToken

```solidity
error AccountingToken();
```

### ActiveUpdatePending

```solidity
error ActiveUpdatePending();
```

### AlreadyBaseToken

```solidity
error AlreadyBaseToken();
```

### AlreadyRootGuardian

```solidity
error AlreadyRootGuardian();
```

### AmountOutTooLow

```solidity
error AmountOutTooLow();
```

### BridgeAdapterAlreadyExists

```solidity
error BridgeAdapterAlreadyExists();
```

### BridgeAdapterDoesNotExist

```solidity
error BridgeAdapterDoesNotExist();
```

### BridgeStateMismatch

```solidity
error BridgeStateMismatch();
```

### CaliberAccountingStale

```solidity
error CaliberAccountingStale(uint256 caliberChainId);
```

### CaliberAlreadySet

```solidity
error CaliberAlreadySet();
```

### DirectManageFlashLoanCall

```solidity
error DirectManageFlashLoanCall();
```

### EvmChainIdNotRegistered

```solidity
error EvmChainIdNotRegistered(uint256 chainId);
```

### ExceededMaxDeposit

```solidity
error ExceededMaxDeposit();
```

### ExceededMaxMint

```solidity
error ExceededMaxMint(uint256 shares, uint256 max);
```

### ExceededMaxWithdraw

```solidity
error ExceededMaxWithdraw(uint256 assets, uint256 max);
```

### ForeignTokenNotRegistered

```solidity
error ForeignTokenNotRegistered(address _token, uint256 _foreignEvmChainId);
```

### HubBridgeAdapterAlreadySet

```solidity
error HubBridgeAdapterAlreadySet();
```

### HubBridgeAdapterNotSet

```solidity
error HubBridgeAdapterNotSet();
```

### InstructionsMismatch

```solidity
error InstructionsMismatch();
```

### InsufficientBalance

```solidity
error InsufficientBalance();
```

### InsufficientOutputAmount

```solidity
error InsufficientOutputAmount();
```

### InvalidAccounting

```solidity
error InvalidAccounting();
```

### InvalidAffectedToken

```solidity
error InvalidAffectedToken();
```

### InvalidChainId

```solidity
error InvalidChainId();
```

### InvalidDebtFlag

```solidity
error InvalidDebtFlag();
```

### InvalidDecimals

```solidity
error InvalidDecimals();
```

### InvalidFeedRoute

```solidity
error InvalidFeedRoute();
```

### InvalidInputAmount

```solidity
error InvalidInputAmount();
```

### InvalidInstructionProof

```solidity
error InvalidInstructionProof();
```

### InvalidInstructionType

```solidity
error InvalidInstructionType();
```

### InvalidOutputToken

```solidity
error InvalidOutputToken();
```

### InvalidPositionChangeDirection

```solidity
error InvalidPositionChangeDirection();
```

### InvalidRecipientChainId

```solidity
error InvalidRecipientChainId();
```

### InvalidTransferStatus

```solidity
error InvalidTransferStatus();
```

### LocalTokenNotRegistered

```solidity
error LocalTokenNotRegistered(address _token, uint256 _foreignEvmChainId);
```

### ManageFlashLoanReentrantCall

```solidity
error ManageFlashLoanReentrantCall();
```

### MaxValueLossExceeded

```solidity
error MaxValueLossExceeded();
```

### MessageAlreadyAuthorized

```solidity
error MessageAlreadyAuthorized();
```

### Migrated

```solidity
error Migrated();
```

### MinOutputAmountExceedsInputAmount

```solidity
error MinOutputAmountExceedsInputAmount();
```

### MismatchedLength

```solidity
error MismatchedLength();
```

### MismatchedLengths

```solidity
error MismatchedLengths();
```

### NegativeTokenPrice

```solidity
error NegativeTokenPrice(address priceFeed);
```

### NoPendingUpdate

```solidity
error NoPendingUpdate();
```

### NonZeroBalance

```solidity
error NonZeroBalance();
```

### NotBaseToken

```solidity
error NotBaseToken();
```

### NotCaliber

```solidity
error NotCaliber();
```

### NotCaliberMailbox

```solidity
error NotCaliberMailbox();
```

### NotController

```solidity
error NotController();
```

### NotFactory

```solidity
error NotFactory();
```

### NotFlashLoanModule

```solidity
error NotFlashLoanModule();
```

### NotMachine

```solidity
error NotMachine();
```

### NotMigrated

```solidity
error NotMigrated();
```

### NotPendingMachine

```solidity
error NotPendingMachine();
```

### NotPreDepositVault

```solidity
error NotPreDepositVault();
```

### NotRootGuardian

```solidity
error NotRootGuardian();
```

### OngoingCooldown

```solidity
error OngoingCooldown();
```

### OutTransferDisabled

```solidity
error OutTransferDisabled();
```

### PendingBridgeTransfer

```solidity
error PendingBridgeTransfer();
```

### PositionAccountingStale

```solidity
error PositionAccountingStale(uint256 posId);
```

### PositionDoesNotExist

```solidity
error PositionDoesNotExist();
```

### PriceFeedRouteNotRegistered

```solidity
error PriceFeedRouteNotRegistered(address token);
```

### PriceFeedStale

```solidity
error PriceFeedStale(address priceFeed, uint256 updatedAt);
```

### ProtectedRootGuardian

```solidity
error ProtectedRootGuardian();
```

### RecoveryMode

```solidity
error RecoveryMode();
```

### SameRoot

```solidity
error SameRoot();
```

### SlippageProtection

```solidity
error SlippageProtection();
```

### SpokeBridgeAdapterAlreadySet

```solidity
error SpokeBridgeAdapterAlreadySet();
```

### SpokeBridgeAdapterNotSet

```solidity
error SpokeBridgeAdapterNotSet();
```

### SpokeCaliberAlreadySet

```solidity
error SpokeCaliberAlreadySet();
```

### StaleData

```solidity
error StaleData();
```

### SwapFailed

```solidity
error SwapFailed();
```

### SwapperTargetsNotSet

```solidity
error SwapperTargetsNotSet();
```

### UnauthorizedCaller

```solidity
error UnauthorizedCaller();
```

### UnauthorizedSource

```solidity
error UnauthorizedSource();
```

### UnexpectedMessage

```solidity
error UnexpectedMessage();
```

### UnexpectedResultLength

```solidity
error UnexpectedResultLength();
```

### InvalidBridgeId

```solidity
error InvalidBridgeId();
```

### WhChainIdNotRegistered

```solidity
error WhChainIdNotRegistered(uint16 chainId);
```

### ZeroBridgeAdapterAddress

```solidity
error ZeroBridgeAdapterAddress();
```

### ZeroChainId

```solidity
error ZeroChainId();
```

### ZeroPositionId

```solidity
error ZeroPositionId();
```

### ZeroTokenAddress

```solidity
error ZeroTokenAddress();
```
