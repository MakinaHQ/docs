---
id: "risk-manager"
title: Risk Manager
sidebar_position: 2
---

# Risk Manager

If the [Operator](operator) decides _what_ to do, the **Risk Manager** decides _within what limits_. It sets the boundaries the Operator must operate inside (the instruction set, the loss caps, the staleness thresholds), balancing enough flexibility to pursue the [mandate](../introduction#the-strategy-mandate) against tight enough control to protect user funds.

Crucially, the Risk Manager **cannot execute the strategy**. It defines rules, and the Operator acts under them. This separation means neither can do the other's job, and neither alone can both set a limit and exploit it.

## Responsibilities

- **Curate the instruction set.** Review instructions proposed by the Operator and **schedule** the [Merkle-root update](root-update-lifecycle) that authorizes them on a Caliber.
- **Set risk parameters** on Machines and Calibers: position loss caps, swap loss caps, cooldowns, accounting staleness thresholds, fee accrual-rate caps, share-price change-rate limits, bridge loss limits.
- **Curate [base tokens](../architecture/caliber/base-tokens)**: register and unregister the tokens each Caliber may hold.
- **Set the share supply cap** that limits new deposits.
- **Manage strategy whitelists** on the [Depositor](../architecture/machine/deposits#whitelisting), [Redeemer](../architecture/machine/redemptions#whitelisting), and [Pre-Deposit Vault](../architecture/machine/pre-deposit).

## Two speeds: immediate vs. timelocked

Not every change carries the same risk, so they don't all move at the same speed:

- A small number of **lower-risk settings** can be applied **immediately** by the Risk Manager, for example the share supply cap and the deposit/redemption whitelists.
- The **risk-sensitive parameters** are applied through a separate **Risk Manager Timelock** address. Changes routed through it are **delayed**, so they cannot be applied atomically or unilaterally, and the [instruction-root update](root-update-lifecycle) can be **vetoed** during its delay by the [Security Council](security-council) or the [Root Guardians](root-update-lifecycle#who-can-veto).

The net effect is trust minimization: the Risk Manager can keep a strategy adaptive, but every consequential change is delayed and observable, giving users time to exit and the Security Council time to veto if a change is unacceptable.
