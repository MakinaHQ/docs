---
id: 'operator'
title: Operator
sidebar_position: 4
---

# Operator

Each strategy has a dedicated Operator responsible for executing strategies to the best of their ability. Operators are granted discretion specifically for executing rebalance actions via Instructions and swaps, as well as initiating cross-chain bridge transfers between Hub and Spoke chains.

The Operator must operate within the boundaries of the Risk Policy, ensuring strict adherence to Risk Policy Caps by never over-allocating funds to any given risk factor. The primary objective is to generate compelling, risk-adjusted returns for Makina users.

At a high level, the Operator has the following responsibilities:

- Identify new opportunities and submit [Root Updates](root-update-lifecycle) for the Risk Manager to review and approve.
- Execute and maintain their strategies, periodically rebalancing the Portfolio to ensure maximal efficiency and deliver strong, risk-adjusted returns.

The standard operating assumptions on Operators are:

- Operators are incentivised to maximise performance through performance fees
- Operators are competent and able to use the provided tooling to effectively 

Operators could have their private keys compromised or turn malicious, they could also have software bugs or make operational mistakes, therefore Makina limits trust assumptions on Operators.

The Operator restrictions are:

- Execution limited to only pre-approved Instructions
- Swaps allowed only into pre-approved Base Tokens 
- Liquidity Bridging allowed only to pre-approved chains through pre-approved bridges
- Max loss caps and cooldowns on any position management action
- Max loss caps and cooldowns on any swap transactions
- Max loss caps on liquidity bridge transactions

This prevents Operators from willfully or accidentally causing significant losses to a strategy's AUM over a short period, giving the [Security Council](security-council) sufficient time to intervene, activate Recovery Mode, and revoke the Operator's ability to execute further actions in the event of deviations.

Active monitoring tooling will be run by the Makina Foundation on all Strategies to detect any unusual behaviour quickly and notify the Security Council.
