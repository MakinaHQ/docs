---
sidebar_position: 1
---

# Introduction

Makina is an innovative protocol for superior onchain execution. It redefines how smart contract vaults operate by providing a highly agile infrastructure that is used to execute a wide variety of cross-chain strategies: from onchain yield aggregation, to index products, to long-short, delta hedged strategies or any other strategy that can be executed fully onchain.

With Makina, users can get access to tokenised assets issued by professionals with full DeFi composability, superior Risk Controls, risk underwriting through a Security Module.

Makina is designed to be fully non-custodial, transparent and trust minimised, providing a secure yet flexible platform on which [Operators](governance/operator) with different specialisation and expertise can offer their strategies to onchain users.

Each Strategy is composed of a [Machine](machine/overview) deployed on the Hub Chain, and one [Caliber](caliber/overview) per supported chain (including the Hub and each Spoke Chain).

- The Machine manages strategy-wide logic such as handling deposits and withdrawals, calculating share prices, and coordinating cross-chain liquidity bridging.
- Calibers serve as the execution layer for each chain, enabling operators to perform local actions such as opening and closing positions, harvesting rewards, and swapping tokens.

Upon deployment of a Machine, a mandate for the strategy should be published. The mandate is a high level description of the strategy type and goal, its risk profile, return expectation, opportunity segment and other attributes and charachteristics of the strategy. The mandate will act as a guideline for strategy [Risk Managers](governance/risk-manager) and [Operators](governance/operator).
