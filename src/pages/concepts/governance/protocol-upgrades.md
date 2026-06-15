---
id: "protocol-upgrades"
title: Protocol Upgrades
sidebar_position: 6
---

# Protocol Upgrades

## 1. Upgrade primitives

Makina's upgrade and access-control infrastructure is built on the OpenZeppelin (OZ) contracts framework. All restricted entry points are gated by an `AccessManager` instance, and every upgradeable contract uses one of two OZ upgradeability patterns:

- **Transparent proxy** (`TransparentUpgradeableProxy` paired with a dedicated `ProxyAdmin`): one proxy points to a single implementation. Upgrading replaces the code behind that one proxy.
- **Upgradeable beacon** (`UpgradeableBeacon` paired with `BeaconProxy`): every proxy of a given class reads its implementation address from a shared beacon. Upgrading the beacon moves every proxy of that class to the new implementation in a single transaction.

These two patterns map onto two categories of Makina contracts, covered next.

### 1.1 Infrastructure contracts

Infrastructure contracts are the registries, factories, modules, and bridge configs that act as shared services for every strategy. They are deployed once per chain, and each one uses the transparent-proxy pattern: a `TransparentUpgradeableProxy` paired with its own `ProxyAdmin`. Upgrades are therefore scoped to a single contract at a time.

Infrastructure contracts present on **both hub and spokes**:

- `AccessManager`
- `OracleRegistry`, `TokenRegistry`
- `SwapModule`
- `AcrossV3BridgeConfig`, `LayerZeroV2BridgeConfig`, `CctpV2BridgeConfig`

Infrastructure contracts present **only on the hub** (Mainnet):

- `HubCoreRegistry`, `HubCoreFactory`
- `ChainRegistry`
- `HubPeripheryRegistry`, `HubPeripheryFactory`
- `MachineShareOracleFactory`, `MetaMorphoOracleFactory`

Infrastructure contracts present **only on spokes**:

- `SpokeCoreRegistry`, `SpokeCoreFactory`

### 1.2 Strategy contracts

Strategy (per-instance) contracts are deployed once per strategy on a given chain. Each instance is a `BeaconProxy`, and all instances of a given class read their implementation address from one shared `UpgradeableBeacon`. Upgrading a class is therefore a one-transaction operation that propagates to every instance at once.

Strategy contract classes present on **both hub and spokes**:

- `Caliber`
- `AcrossV3BridgeAdapter`, `LayerZeroV2BridgeAdapter`, `CctpV2BridgeAdapter`

Strategy contract classes present **only on the hub**:

- `Machine`, `PreDepositVault`
- `DirectDepositor`, `AsyncRedeemer`
- `WatermarkFeeManager`, `SecurityModule`
- `MachineShareOracle`

Strategy contract classes present **only on spokes**:

- `CaliberMailbox`

---

## 2. Governance stack

The AccessManager is simultaneously (i) the owner of every proxy admin and every beacon, and (ii) the authority backing all restricted functions across Makina contracts.

Among the eight roles defined on the AccessManager (covering, among other things, configuration tuning, strategy linking, strategy management, fee parameters, and deployment of new strategy components), only **`INFRA_UPGRADE_ROLE`** is relevant to the upgrade path described here. The rest of this section focuses on the upgrade role only.

`INFRA_UPGRADE_ROLE` is held by the DAO with a **2-day execution delay**, and its guardian is the Security Council. It gates every action that changes which implementation a Makina contract runs against:

- upgrading a singleton infra contract (via its proxy admin),
- upgrading a replicated component class (via its beacon),
- **repointing a registry entry**: changing which module, factory, or beacon address the Core and Periphery registries resolve to.

Registry repointing is intentionally gated by the same role and the same 2-day delay as a code upgrade: swapping the address of a registered component is operationally equivalent to upgrading it, since every contract that resolves through the registry will pick up the new target on the next call.

Other roles in the protocol can be granted with different delays (typically 1-2 days), but none of them can change the implementation a Makina contract runs against.

---

## 3. Timelocks & challenge windows

The AccessManager queues every operation made under a role with a non-zero delay. A scheduled operation can be cancelled by the original proposer, or by the guardian of the scheduling role if one has been assigned.

In this deployment, `INFRA_UPGRADE_ROLE` (and every other non-admin role) has `GUARDIAN_ROLE`, held by the Security Council, set as its guardian. `ADMIN_ROLE` has no guardian, so admin operations are not cancellable by anyone other than the DAO itself.

For the upgrade flow this means every scheduled upgrade or registry repoint sits in a 2-day queue during which the Security Council can cancel with a single transaction.

The lifecycle of an upgrade or registry repoint is:

1. The DAO schedules the operation on the AccessManager, targeting the proxy admin, beacon, or registry to be modified.
2. A 2-day delay elapses. The scheduled operation is visible on-chain and inspectable by anyone.
3. Either the Security Council cancels (at which point the operation is dropped permanently) or the delay expires and the DAO executes, applying the change.

Non-upgrade actions follow the same scheduled/cancellable pattern with shorter or zero delays depending on the role.

### 3.1 Self-governance

The AccessManager is itself behind a transparent proxy whose proxy admin is owned by the AccessManager. Upgrading the AccessManager is itself an `INFRA_UPGRADE_ROLE` operation, subject to the same 2-day delay and the same Security Council cancellation as other upgrades.

### 3.2 Threat model

- **Compromised DAO.** A compromised DAO can schedule any operation it holds a role for, but every such operation goes through the role's delay (2 days for upgrades, registry repoints, and admin actions, and 1-2 days for the other roles). Upgrades, registry repoints, and operations gated by the other non-admin roles can be cancelled by the Security Council during the delay window, so no malicious implementation reaches a live contract. Admin operations have no guardian and therefore cannot be cancelled on-chain. The 2-day delay is the only barrier, leaving time for an off-chain response before the attacker can gain additional privileges through role grants or target reconfiguration.
- **Compromised Security Council.** The Security Council has no upgrade powers. Its only involvement in the upgrade process is cancellation. A compromised Security Council can therefore _grief_ the DAO by cancelling every scheduled upgrade or registry repoint, but cannot push code itself. Because `ADMIN_ROLE` cannot have a guardian assigned, the DAO can still revoke `GUARDIAN_ROLE` from the compromised multisig via a 2-day admin operation that nobody else can cancel. Recovery is bounded by that 2-day window.
- **Both multisigs compromised simultaneously.** No on-chain mitigation. The 2-day delay still gives 48 hours for an off-chain response (community fork, social coordination).
- **Cross-chain.** Each chain runs its own AccessManager (same address, independent state). Upgrades and registry repoints do not propagate. The DAO must schedule and execute on each chain separately, and the Security Council guards each chain's queue independently. A live upgrade campaign must therefore be tracked per chain.

---

## 4. Appendix - Key addresses

The three addresses below are identical on all supported chains.

| Role                      | Address                                      |
| ------------------------- | -------------------------------------------- |
| AccessManager             | `0x0fCEfa3f1047F35521A49cD8B06faBd588665d7F` |
| DAO multisig              | `0x62244C74e1d09b3D86EF7342d354b5D7770bDE10` |
| Security Council multisig | `0x89faa3b02EF5aB185b8ACE489Af62748ACB50Afc` |
