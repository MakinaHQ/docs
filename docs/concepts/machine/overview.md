---
id: "machine-overview"
title: "Overview"
sidebar_position: 0
---

# Machine

Makina defines the notion of a Machine as a strategy specific vault smart contract. The Machine is the main touch point for users. It handles Deposits and Withdraws, Share Price and Fee Calculations.

Machines are always deployed on the Hub Chain, which can be chosen by the Operator, but for most case is Ethereum Mainnet. Each Machine defines a single Accounting Token which will be the only token that can be deposited and withdrawn by users, and which denominates the share price.

Each Machine issues a Machine Token Token, an asset who's price depends on the performance of the Machine's strategy. The Operator’s goal and incentive is to always maximise the long-term price appreciation of the Machine Token.

Each Machine is connected to a Caliber on the Hub Chain as well as multiple other Calibers on the Spoke Chains.

Each Machine is required to have [Deposit Manager](deposit-managers) and [Redeem Manager](redeem-managers) contracts as well as a [Fee Manager](fee-managers) contract. These contracts may vary in their logic depending on the type of strategy executed and its specific requirements.

Machines are flexible enough to support various types of strategies, from yielding and fixed income strategies to volatile token indexes, Machines can be expanded with diverse manager contracts to best meet the strategie's needs.
