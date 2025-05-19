---
id: redeem-managers
sidebar_position: 4
---

# Redeem Managers

Each Machine defines a Redeem Manager contract. This allows for machines implementing different types of strategies to support different types of redemption flows.

Given that assets deployed into positions are not liquid, atomic redemptions are not possible.

The Redeem Manager are therefore always expected to be queue contracts which need to be filled by the operator after closing positions to free up the capital required to meet redemption requests.

### Permissionless Redeem Queue 

In the Permissionless Redeem Queue any users holding Machine Shares can request a redemption request with no additional checks. Requests are settled on a First-In First-Out basis, and once settled, users have unlimited time to claim their withdrawn funds. 

The Queue implements a three step process. 

1. A user requests a redemption, and locks their shares in the queue. In exchange they receive a non-fungible token representing their request. 
2. The Operator settles the queue against the Machine which transfers the Shares to the Machine where they are instantly burned. In return, Accounting Tokens are sent from the Machine to the Queue contract at the current share price.
3. The user can claim their withdrawn funds by burning the non-fungible request token in exchange for the strategy's Accounting Token.

### Allowlisted Redeem Queue

This queue functions the same way as the Permissionless Redeem Queue but redemption requests can only be created and claimed by addresses which are pre-approved and part of the allowlist. 