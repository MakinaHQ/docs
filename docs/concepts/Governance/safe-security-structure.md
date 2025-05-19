---
id: 'safe-security-structure'
sidebar_position: 2
---

# Safe Security Structure

All Multisigs within the protocol will adhere to standardized security safeguards:
 - Timelock in owner changes (min: 24h)
 - As a precautionary measure, the Safe implementation will be non-upgradable. This means that once deployed with a specific version (e.g., 1.4.1), it will remain on that version indefinitely.
 - Transactions will not be permissionless; execution will be strictly enforced and limited to the Safe owners leveraging Safe's [Guard](https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/OnlyOwnersGuard.sol).

In addition to these checks and balances, each owner can utilize an independent simulation engine, Pythia, to simulate transaction payloads in a separate communication channel of their choice (e.g., Telegram, Discord). This ensures independent validation and also enables verification of any root updates, which are critical at the protocol level.

An additional security layer for the Multisigs will be provided by our security partner's product, Hypernative Guardian. During the transaction lifecycle, it can detect malicious activity in the pre-transaction stage and block specific payloads once they reach the blockchain. The Guardian also enables each Multisig to define custom policies, allowing them to block transaction types that fall outside their intended role within the protocol.

This Multisig architecture is designed to prevent sudden ownership changes, allow a sufficient review period, safeguard against unauthorized or malicious implementation upgrades, and restricts the execution of targeted payloads to authorized owners. Given recent incidents related to access control, these measures significantly reduce the attack surface.
