---
sidebar_position: 1
---

# Architecture Overview

This section provides a technical overview of Makina's core smart contracts. The diagram below illustrates the core contract interactions on a hub chain and on a spoke chain, distinguishing between protocol-wide contracts shared across all strategies and per-strategy contracts.

```mermaid
flowchart LR
    subgraph Hub["Hub chain"]
        direction TB
        HR["HubCoreRegistry"]:::infra
        HF["HubCoreFactory"]:::infra
        OR1["OracleRegistry"]:::infra
        TR1["TokenRegistry"]:::infra
        SW1["SwapModule"]:::infra
        M["Machine"]:::strat
        MS["MachineShare"]:::strat
        PDV["PreDepositVault"]:::strat
        HC["Hub Caliber"]:::strat
        HBA["Bridge Adapter"]:::strat
        HR -.-> HF
        HF -- deploys --> M
        HF -- deploys --> MS
        HF -- deploys --> PDV
        HF -- deploys --> HC
        HF -- deploys --> HBA
        M -.-> OR1
        M -.-> TR1
        HC -.-> OR1
        HC -.-> SW1
        M <== funds ==> HC
        M <== funds ==> HBA
        HC -. accounting .-> M
    end
    subgraph Spoke["Spoke chain"]
        direction TB
        SR["SpokeCoreRegistry"]:::infra
        SF["SpokeCoreFactory"]:::infra
        OR2["OracleRegistry"]:::infra
        TR2["TokenRegistry"]:::infra
        SW2["SwapModule"]:::infra
        MB["Caliber Mailbox"]:::strat
        SC["Spoke Caliber"]:::strat
        SBA["Bridge Adapter"]:::strat
        SR -.-> SF
        SF -- deploys --> MB
        SF -- deploys --> SC
        SF -- deploys --> SBA
        MB -.-> TR2
        SC -.-> OR2
        SC -.-> SW2
        MB <== funds ==> SC
        MB <== funds ==> SBA
        SC -. accounting .-> MB
    end
    subgraph Off["Off-chain and external"]
        direction TB
        LB["Liquidity bridge protocol"]:::ext
        CRE["Chainlink CRE workflow"]:::ext
        FWD["CRE forwarder"]:::ext
    end
    HBA <== funds ==> LB
    LB <== funds ==> SBA
    MB -. "accounting snapshot" .-> CRE
    CRE -. report .-> FWD
    FWD -. "onReport()" .-> M

    classDef infra fill:#1f6feb,stroke:#1f6feb,color:#fff;
    classDef strat fill:#238636,stroke:#238636,color:#fff;
    classDef ext fill:#8957e5,stroke:#8957e5,color:#fff;
```

- **Blue** nodes are protocol-wide contracts, deployed once per chain for an instance; **green** nodes are per-strategy contracts created by the factories; **purple** nodes are external systems.
- Thick arrows are fund transfers, solid arrows are deployments, and dotted arrows are data flows (registry lookups, pricing, swaps, accounting).
- `OracleRegistry` and `TokenRegistry` are shared by every instance present on a chain; the registries, factories, `SwapModule` and beacons are specific to one instance.
