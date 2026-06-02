# Errors

[Git Source](https://github.com/MakinaHQ/makina-core/blob/fe2d7e28c60829f2585cd683b56c6c9a185eb0ea/src/libraries/Errors.sol)

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

### CctpDomainNotRegistered

```solidity
error CctpDomainNotRegistered();
```

### CctpForeignTokenNotRegistered

```solidity
error CctpForeignTokenNotRegistered();
```

### CctpMessageReceptionFailed

```solidity
error CctpMessageReceptionFailed();
```

### Create3ContractDeploymentFailed

```solidity
error Create3ContractDeploymentFailed();
```

### Create3ProxyDeploymentFailed

```solidity
error Create3ProxyDeploymentFailed();
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

### GroupIdNotProvided

```solidity
error GroupIdNotProvided();
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

### InvalidAccounting

```solidity
error InvalidAccounting();
```

### InvalidAffectedToken

```solidity
error InvalidAffectedToken();
```

### InvalidBridgeController

```solidity
error InvalidBridgeController();
```

### InvalidBridgeId

```solidity
error InvalidBridgeId();
```

### InvalidBridgeTransferRoute

```solidity
error InvalidBridgeTransferRoute();
```

### InvalidCctpMessage

```solidity
error InvalidCctpMessage();
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

### LzEndpointIdNotRegistered

```solidity
error LzEndpointIdNotRegistered();
```

### LzForeignTokenNotRegistered

```solidity
error LzForeignTokenNotRegistered();
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

### NotController

```solidity
error NotController();
```

### NotFactory

```solidity
error NotFactory();
```

### NotFactoryAuthority

```solidity
error NotFactoryAuthority();
```

### NotFlashLoanModule

```solidity
error NotFlashLoanModule();
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

### OftNotRegistered

```solidity
error OftNotRegistered();
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

### ProtectedCctpDomain

```solidity
error ProtectedCctpDomain();
```

### ProtectedChainId

```solidity
error ProtectedChainId();
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

### ZeroLzEndpointId

```solidity
error ZeroLzEndpointId();
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

### ZeroSpokeCaliberMailbox

```solidity
error ZeroSpokeCaliberMailbox();
```

### ZeroTokenAddress

```solidity
error ZeroTokenAddress();
```
