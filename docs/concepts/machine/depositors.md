---
id: depositors
sidebar_position: 3
---

# Depositors

The Depositor contract is the entry point through which users deposit funds into a given Machine. Each Machine is linked to a dedicated Depositor instance. The protocol supports multiple Depositor implementations, enabling Machines with different strategies to support different types of deposit flows. A Machine accepts deposits only from its predefined Depositor.

## Direct Depositor

[DirectDepositor](/contracts/periphery/depositors/DirectDepositor.sol/contract.DirectDepositor.md) atomically forwards deposited assets to the Machine, and Machine Tokens are minted instantly to the depositor. The contract suports an actionable whitelist, which enables to restrict deposits to KYC-verified participants.
