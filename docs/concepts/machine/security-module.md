---
id: security-module
sidebar_position: 7
---

# Security Module

The [Security Module](/contracts/periphery/security-module/SecurityModule.sol/contract.SecurityModule.md) serves as an insurance reserve, designed to mitigate losses in the event of a shortfall caused by incidents such as hacks, bad debt, or a depeg.

Machine tokenholders can lock their tokens in the Security Module, and get __Security Tokens__ in return. In the event of a shortfall, the locked tokens can be burnt to reduce the Machine Token supply and cover losses.

In return, security participants receive enhanced yields, distributed as a portion of the Machine’s minted fee tokens.

### Unstake Cooldown Period
A cooldown period for redeeming security tokens prevents users from profiting from boosted yields while retaining the ability to frontrun an expected slashing event in anticipation of losses through an early exit.
The Security Council determines the cooldown period, but a minimum of 7 days is recommended.

When initiating a cooldown period, users receive a Receipt NFT in exchange for their security tokens. The cooldown can be cancelled before it reaches maturity, in which case the security tokens are returned to the Receipt NFT holder.

### Max Slashing

The Security Module enforces a maximum slashing limit, defined by two parameters:
- a percentage of the Machine Token balance, and
- a minimum required remaining balance after slashing.

The effective limit is the more restrictive of the two. This guarantees that, in the event of slashing, the amount burnt never exceeds the configured maximum.
