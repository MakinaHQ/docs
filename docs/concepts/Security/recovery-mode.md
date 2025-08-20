---
id: recovery-mode
sidebar_position: 3
---

# Recovery Mode

Recovery Mode can be triggered at the discretion of the [Security Council](../governance/security-council) to protect Machine vault depositors when any of the following conditions are met:

- The Operator has been inactive for an extended period
- The share price exhibits abnormal behavior (e.g., sudden spikes or drops).
- Suspicious activity is detected that may indicate Operator deviation.

### Effects of Recovery Mode

When Recovery Mode is active, all Operator permissions are temporarily transferred to the Security Council, and operator is blocked from executing any actions. Moreover, the following restrictions and permissions are enforced:

- Caliber:
  - Positions can only be decreased.
  - Swaps are limited to conversions toward the accounting token only.
  - Cross-chain bridge transfers are limited to Spoke → Hub direction.
- Machine:
  - New deposits are disabled.
  - AUM updates are paused.
  - Bridge Transfers\*\*: Outbound transfers from Hub → Spoke chains are blocked.

### Scope and Exit

Recovery Mode is chain-specific: Each Spoke Caliber must have its Recovery Mode activated independently.

Exiting Recovery Mode is at the discretion of the Security Council, once the system’s state is deemed stable and secure.
