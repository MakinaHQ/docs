# Errors

[Git Source](https://github.com/MakinaHQ/makina-core/blob/ff6f03628cb41a65b3551e1decac61d49e6eb0ba/src/libraries/Errors.sol)

## Errors

### AccountingToken

```solidity
error AccountingToken();
```

### ActiveUpdatePending

```solidity
error ActiveUpdatePending();
```

### AlreadyAccountingAgent

```solidity
error AlreadyAccountingAgent();
```

### AlreadyBaseToken

```solidity
error AlreadyBaseToken();
```

### AlreadyPositionToken

```solidity
error AlreadyPositionToken();
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

### BridgeConfigNotSet

```solidity
error BridgeConfigNotSet();
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

### Create3ContractDeploymentFailed

```solidity
error Create3ContractDeploymentFailed();
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

### ExceededMaxFee

```solidity
error ExceededMaxFee(uint256 fee, uint256 max);
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
error ForeignTokenNotRegistered(address token, uint256 foreignEvmChainId);
```

### HubBridgeAdapterAlreadySet

```solidity
error HubBridgeAdapterAlreadySet();
```

### HubBridgeAdapterNotSet

```solidity
error HubBridgeAdapterNotSet();
```

### GroupIdNotProvided

```solidity
error GroupIdNotProvided();
```

### InstructionsMismatch

```solidity
error InstructionsMismatch();
```

### InsufficientBalance

```solidity
error InsufficientBalance();
```

### InvalidAccounting

```solidity
error InvalidAccounting();
```

### InvalidAffectedToken

```solidity
error InvalidAffectedToken();
```

### InvalidBridgeTransferRoute

```solidity
error InvalidBridgeTransferRoute();
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

### InvalidInputToken

```solidity
error InvalidInputToken();
```

### InvalidInstructionProof

```solidity
error InvalidInstructionProof();
```

### InvalidInstructionType

```solidity
error InvalidInstructionType();
```

### InvalidLzSentAmount

```solidity
error InvalidLzSentAmount();
```

### InvalidOft

```solidity
error InvalidOft();
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
error LocalTokenNotRegistered(address token, uint256 foreignEvmChainId);
```

### LzChainIdNotRegistered

```solidity
error LzChainIdNotRegistered(uint32 chainId);
```

### LzForeignTokenNotRegistered

```solidity
error LzForeignTokenNotRegistered(address token, uint256 foreignEvmChainId);
```

### OftNotRegistered

```solidity
error OftNotRegistered(address token);
```

### ManageFlashLoanReentrantCall

```solidity
error ManageFlashLoanReentrantCall();
```

### MaxAuthorizedPriceChangeExceeded

```solidity
error MaxAuthorizedPriceChangeExceeded();
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

### MissingInstructionForGroup

```solidity
error MissingInstructionForGroup(uint256 groupId);
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

### NotAccountingAgent

```solidity
error NotAccountingAgent();
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

### NotMachineEndpoint

```solidity
error NotMachineEndpoint();
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

### PositionIsGrouped

```solidity
error PositionIsGrouped();
```

### PositionToken

```solidity
error PositionToken();
```

### PositionTokenIsBaseToken

```solidity
error PositionTokenIsBaseToken();
```

### PriceFeedRouteNotRegistered

```solidity
error PriceFeedRouteNotRegistered(address token);
```

### PriceFeedStale

```solidity
error PriceFeedStale(address priceFeed, uint256 updatedAt);
```

### ProtectedAccountingAgent

```solidity
error ProtectedAccountingAgent();
```

### ProtectedRootGuardian

```solidity
error ProtectedRootGuardian();
```

### Create3ProxyDeploymentFailed

```solidity
error Create3ProxyDeploymentFailed();
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

### TargetAlreadyExists

```solidity
error TargetAlreadyExists();
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

### ZeroGroupId

```solidity
error ZeroGroupId();
```

### ZeroOftAddress

```solidity
error ZeroOftAddress();
```

### ZeroPositionId

```solidity
error ZeroPositionId();
```

### ZeroSalt

```solidity
error ZeroSalt();
```

### ZeroTokenAddress

```solidity
error ZeroTokenAddress();
```
