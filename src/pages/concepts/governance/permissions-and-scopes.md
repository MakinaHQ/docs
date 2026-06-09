---
id: "permissions-and-scopes"
sidebar_position: 5
---

# Permissions & Scopes

Makina's permissions live at two levels: **protocol-wide roles** managed by a shared AccessManager, and **per-strategy entities** stored on each strategy's contracts. This page enumerates both.

## Protocol-wide roles

A single **AccessManager** contract per chain gates every protocol-wide restricted action. Each role can carry an **execution delay**, a timelock between scheduling an action and executing it, and a **guardian** that can cancel an action during that window. The table below lists each role, who holds it, and its delay in the production deployment.

| Role                               | id  | Authorized to                                                                                                                                  | Holder, execution delay                                 |
| ---------------------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `ADMIN_ROLE`                       | 0   | Super admin of the AccessManager: configure roles, delays, and guardians. Has **no guardian** (its actions can't be cancelled by anyone else). | Core Factory: no delay<br/>DAO: 2-day delay             |
| `INFRA_CONFIG_ROLE`                | 1   | Configure shared core contracts (e.g. [oracle](../architecture/pricing-oracles) feed routes, chain/token mappings).                                                 | DAO: 1-day delay                                        |
| `STRATEGY_DEPLOYMENT_ROLE`         | 2   | Deploy new strategies.                                                                                                                         | DAO: no delay                                           |
| `STRATEGY_COMPONENTS_LINKING_ROLE` | 3   | Link a strategy's contracts together (depositor, redeemer, fee manager, spoke calibers, bridge adapters).                                      | DAO: 1-day delay on Hub Chain, no delay on Spoke chains |
| `STRATEGY_MANAGEMENT_CONFIG_ROLE`  | 4   | Designate the per-strategy entities (Operator, Risk Manager, Security Council, …) and manage accounting agents.                                | DAO: 2-day delay                                        |
| `STRATEGY_FEE_CONFIG_ROLE`         | 5   | Configure [fee](../architecture/machine/fees) parameters in periphery contracts.                                                                            | DAO: 2-day delay                                        |
| `INFRA_UPGRADE_ROLE`               | 6   | [Upgrade](protocol-upgrades) proxies and beacons, and repoint registry entries.                                                                | DAO: 2-day delay                                        |
| `GUARDIAN_ROLE`                    | 7   | Cancel operations scheduled under any other role (it is the guardian of all roles except `ADMIN_ROLE`).                                        | Security Council: no delay                              |

At deployment the **Core Factory** holds `ADMIN_ROLE` with no delay so it can wire up a new deployment, while the **DAO**'s own admin actions carry a 2-day delay. See [Protocol Upgrades](protocol-upgrades) for how the upgrade role, delays, and guardian interact in practice.

## Per-strategy entities

These are addresses stored on each Machine, Caliber, and Caliber Mailbox. They are set and changed by the `STRATEGY_MANAGEMENT_CONFIG_ROLE` (and the linking role for component wiring).

| Entity                                   | Scope                                                                                                                                                                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[Operator](operator)**                 | Day-to-day execution: position management, harvesting, swaps, and cross-chain transfers. Settles the [redemption queue](../architecture/machine/redemptions). _(On-chain: the `mechanic` address.)_                                  |
| **[Risk Manager](risk-manager)**         | Schedules [instruction-root updates](root-update-lifecycle), sets the share supply cap, and manages whitelists.                                                                                                         |
| **Risk Manager Timelock**                | The timelocked address through which risk-sensitive parameter changes are applied: loss caps, cooldowns, staleness and fee-rate limits, bridge limits.                                                                  |
| **[Security Council](security-council)** | Vetoes scheduled changes, triggers [Recovery Mode](../security/recovery-mode), initiates [Security Module](../security/security-module) slashing, and can force AUM updates. Becomes the Operator during Recovery Mode. |
| **Root Guardians**                       | Veto power over [instruction-root updates](root-update-lifecycle) only.                                                                                                                                                 |
| **Accounting Agents**                    | Optional addresses permitted to update AUM / account for positions when _restricted accounting mode_ is enabled.                                                                                                        |

## Restricted accounting mode

Whether accounting is permissionless or restricted is a configurable per-strategy setting. When permissionless, anyone can re-[account](../architecture/caliber/caliber-accounting) positions and trigger an [AUM update](../architecture/machine/share-price#keeping-aum-fresh) (when fresh and within limits). When **restricted accounting mode** is enabled, those actions are limited to the Operator and designated **accounting agents** (and the Security Council). Restricted mode is commonly used in practice. During [Recovery Mode](../security/recovery-mode), AUM updates are restricted to the Security Council regardless.
