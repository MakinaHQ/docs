---
id: staking-module
sidebar_position: 7
---

# Staking Module

The staking module serves as an insurance reserve, designed to mitigate losses in the event of a shortfall caused by incidents such as hacks, bad debt, or a depeg.

Machine shareholders can stake their shares in the staking module. In the event of a shortfall, the staked shares can be burnt to cover losses.

In return, staking participants receive enhanced yields, distributed as a portion of the machine’s minted fee shares.

### Unstake Cooldown Period

A cooldown period for unstaking is enforced to prevent users from free-riding on boosted yields and withdrawing in anticipation of an expected loss before a slashing event is triggered.
The Security Council determines the cooldown period, but a minimum of 7 days is recommended.

### Max Slashing

The slashing module enforces a maximum slashing limit, defined by two parameters:
- a percentage of the Machine token balance, and
- a minimum required remaining balance after slashing.

The effective limit is the more restrictive of the two. This guarantees that, in the event of slashing, the amount burnt never exceeds the configured maximum.
