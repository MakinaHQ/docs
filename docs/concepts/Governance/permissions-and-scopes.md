---
id: "permissions-and-scopes"
sidebar_position: 1
---

# Permissions and Scopes

## Protocol-Wide Permissions

Protocol-wide permissions are covered by roles, managed through an Access Manager contract.

- **_MAKINA_ADMIN_ROLE_**: Grants permission to assign or update the entities responsible for managing strategies.
- **_DEPLOYER_ROLE_**: Grants permission to deploy new strategies to the protocol.
- **_MAINTAINER_ROLE_**: Grants permission to configure and maintain core contracts, including registries.

## Per-Strategy Permissions

Per-strategy permissions are covered by a set of entities, whose addresses are stored in the strategy instances.

- **_Operator_**: Responsible for day-to-day strategy operations, including position deployments, management, reward harvesting, swaps and transfers across chains. The operator also handles permissioned deposits and redemptions.
- **_Risk Manager_**: Can update key risk parameters such as: - Merkle Root for allowed Instructions - Loss thresholds - Accounting staleness thresholds - Fee minting frequency - Share minting limits  
  Most of these updates are protected by a timelock mechanism.
- **_Security Council_**: Monitors activities from operator and Risk Manager:
  - Can trigger recovery mode in emergency scenarios. When activated, all operator permissions are temporarily transferred to the Security Council.
  - Can veto updates from Risk Manager (risk parameters + Merkle Root for allowed Instructions).
- **_Root Guardians_**: Hold veto power over updates to the Merkle Root for allowed Instructions. This root defines authorized operations with external protocols (excluding swaps and bridging), and is critical to the strategy’s security model.
