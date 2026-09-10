---
sidebar_position: 1
---

# Architecture Overview

This section provides a technical overview of Makina's periphery smart contracts. The diagram below illustrates how the periphery contracts plug into a Machine and its Calibers, distinguishing between protocol-wide contracts shared across all strategies and per-strategy contracts.

```mermaid
flowchart LR
    subgraph Hub["Hub chain"]
        direction TB
        PR["HubPeripheryRegistry"]:::infra
        PF["HubPeripheryFactory"]:::infra
        MSOF["MachineShareOracleFactory"]:::infra
        MMOF["MetaMorphoOracleFactory"]:::infra
        FLA1["FlashloanAggregator"]:::infra
        WH1["Weiroll helpers"]:::infra
        DEP["Depositor"]:::strat
        RED["Redeemer"]:::strat
        FM["FeeManager"]:::strat
        SM["SecurityModule"]:::strat
        SMR["SMCooldownReceipt"]:::strat
        MSO["MachineShareOracle"]:::strat
        MMO["ERC4626Oracle"]:::strat
        M["Machine"]:::core
        MS["MachineShare"]:::core
        HC["Hub Caliber"]:::core
        PR -.-> PF
        PF -- deploys --> DEP
        PF -- deploys --> RED
        PF -- deploys --> FM
        PF -- deploys --> SM
        SM -- deploys --> SMR
        MSOF -- deploys --> MSO
        MMOF -- deploys --> MMO
        DEP == deposits ==> M
        M == redemptions ==> RED
        M -. fee computation .-> FM
        M == fee shares ==> FM
        MS == lock / unlock ==> SM
        MSO -. share price .-> M
        HC <== flash loans ==> FLA1
        HC -.-> WH1
    end
    subgraph Spoke["Spoke chain"]
        direction TB
        FLA2["FlashloanAggregator"]:::infra
        WH2["Weiroll helpers"]:::infra
        SC["Spoke Caliber"]:::core
        SC <== flash loans ==> FLA2
        SC -.-> WH2
    end
    subgraph Ext["External"]
        direction TB
        SANC["Chainalysis sanctions oracle"]:::ext
        FLP["Flash loan providers"]:::ext
        MMV["MetaMorpho vaults"]:::ext
    end
    DEP -. screening .-> SANC
    RED -. screening .-> SANC
    FLA1 <== borrow / repay ==> FLP
    FLA2 <== borrow / repay ==> FLP
    MMO -. vault price .-> MMV

    classDef infra fill:#1f6feb,stroke:#1f6feb,color:#fff;
    classDef strat fill:#238636,stroke:#238636,color:#fff;
    classDef core fill:#3a4150,stroke:#8b949e,stroke-dasharray:4 3,color:#fff;
    classDef ext fill:#8957e5,stroke:#8957e5,color:#fff;
```

- **Blue** nodes are protocol-wide periphery contracts, deployed once per chain for an instance; **green** nodes are per-strategy contracts created by the factories; **dashed grey** nodes are the [core contracts](../core/architecture-overview) the periphery attaches to; **purple** nodes are external systems.
- Thick arrows are fund or token transfers, solid arrows are deployments, and dotted arrows are data flows (registry lookups, pricing, fee computation, sanctions screening).
- Each Machine points at exactly one Depositor, Redeemer and Fee Manager, and optionally a Security Module and a MachineShareOracle. The FlashloanAggregator and the Weiroll helpers are called by Calibers on every chain of an instance.
