---
sidebar_position: 1
---

# Introduction to Makina

Welcome to the Makina documentation. This guide will help you understand the core concepts, architecture, and usage of the Makina protocol.

## What is Makina?

Makina is a protocol for professionally managed, tokenized, cross-chain investment strategies. Users deposit a single asset and receive a machine token representing their claim on the strategy, which a professional Operator manages across DeFi, within strict, governance-defined onchain limits.

See the [Introduction](/concepts/introduction) for the full overview.

## Core Components

- [**Machine**](/concepts/machine/overview): the per-strategy vault on the Hub Chain that handles deposits, redemptions, shares, fees, and total AUM.
- [**Caliber**](/concepts/caliber/overview): the per-chain execution engine that deploys assets into external protocols.
- [**Cross-Chain**](/concepts/cross-chain/hub-and-spoke): the hub-and-spoke model that lets one strategy span multiple chains.
- [**Governance**](/concepts/governance/overview): the roles, permissions, and timelocks that bound what each actor can do.

New here? Start with [Architecture](/concepts/architecture) and [Asset Lifecycle](/concepts/lifecycle).

## Audits and Security

Makina smart contracts have undergone multiple rounds of audits by top auditors.

- **ChainSecurity**: [Makina-Core - May 2026](https://www.chainsecurity.com/security-audit/makina-core)
- **ChainSecurity**: [Makina-Periphery - May 2026](https://www.chainsecurity.com/security-audit/makina-periphery)
- **Ottersec**: [Makina-Core & Makina-Periphery - Nov 2025](https://ottersec.notion.site/Sampled-Public-Audit-Reports-a296e98838aa4fdb8f3b192663400772?p=2a284d4e41468027b796e222fbbb8939&pm=s)
- **Cantina**: [CTF - Oct 2025](https://cantina.xyz/code/2adf7150-27ba-4cba-86a2-bd8ea175e7da/overview)
- **Enigma Dark**: [Makina-Core Fuzz/Invariant Testing - Jul 2025](https://github.com/Enigma-Dark/security-review-reports/blob/main/2025-07_Invariant_Testing_Engagement_Makina_Finance_Makina_Core.pdf)
- **Enigma Dark**: [Makina-Periphery, Machine Share Oracle - Sep 2025](/audits/2025-09_Security_Review_Makina_Finance_Makina_Periphery_Machine_Share_Oracle.pdf)
- **SigmaPrime**: [Makina-Core & Makina-Periphery - Aug 2025](https://github.com/sigp/public-audits/blob/master/reports/makina/review.pdf)

Read more about the audits in the [Audits](/contracts/security) section.

Bug bounty program: [Makina Contracts on Cantina](https://cantina.xyz/code/4e88f4df-c483-47d3-8d78-b9d7cc67be73/overview)

All other security inquiries: [security@makina.finance](mailto:security@makina.finance)

## Getting Started

To get started with Makina:

1. Explore the [Concepts](/concepts/introduction) section to understand the system architecture
2. Review the [Core](/contracts/core/summary) and [Periphery](/contracts/periphery/summary) contracts for implementation details
