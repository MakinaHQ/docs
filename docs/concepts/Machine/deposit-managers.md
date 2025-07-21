---
id: deposit-managers
sidebar_position: 3
---

# Deposit Managers

Each Machine defines a Deposit Manager contract. This allows for machines implementing different types of strategies to support different types of deposit flows. The Machine can only receive deposits from the predefined deposit manager.

### Permissionless Deposit Manager

The PermissionlessDepositManager atomically forwards deposited assets to the Machine without performing any checks. Machine Shares are minted instantly to the depositor.

### Permissioned Deposit Manager

The Permissioned Deposit Manager restricts deposits to a predefined allowlist, enabling permissioned Machines limited to KYC-verified participants.

Same as above, it acts as an atomic deposit manager, forwarding deposited assets directly to the Machine, which mints the corresponding Machine Shares to the depositor.

### Queued Deposit Manager

For high-volatility strategies, issues like share price free-riding and arbitrage can arise. In such cases, a Queued Deposit Manager is recommended. It batches deposits and settles them at a uniform share price immediately after an update.

Queued Deposit Managers can be implemented as either permissioned or permissionless.
