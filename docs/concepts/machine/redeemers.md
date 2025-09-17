---
id: redeemers
sidebar_position: 4
---

# Redeemers

The Redeemer contract is the exit point through which users redeem Machine Shares from a given Machine and receive the underlying funds. Each Machine is linked to a dedicated Redeemer instance. The protocol supports multiple Redeemer implementations, allowing Machines with different strategies to handle different types of redemption flows. A Machine accepts redemptions only from its predefined Redeemer.

Given that assets deployed into positions are not liquid, atomic redemptions are not possible.

Redeemers are therefore always expected to be queue contracts which need to be managed and filled by the operator after closing positions to free up the capital required to meet redemption requests. Makina has no control over this process.

## AsyncRedeemer

[AsyncRedeemer](/contracts/periphery/redeemers/AsyncRedeemer.sol/contract.AsyncRedeemer.md) is an asynchronous ERC-721 Redeem Queue in which Machine tokenholders can request a redemption request. Requests are settled on a First-In First-Out basis, and once settled, users have unlimited time to claim their withdrawn funds.

The Queue implements a three step process.

1. A user requests a redemption, and locks their shares in the queue. In exchange they receive a non-fungible token representing their request.
2. The Operator settles the queue against the Machine which transfers the Shares to the Machine where they are instantly burned. In return, Accounting Tokens are sent from the Machine to the Queue contract at the current share price.
3. The user can claim their withdrawn funds by burning the non-fungible request token in exchange for the strategy's Accounting Token.

The contract suports an actionable whitelist, which enables to restrict redemption requests, as well as asset claiming to KYC-verified participants.