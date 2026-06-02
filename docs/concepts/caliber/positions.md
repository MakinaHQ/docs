---
id: positions
sidebar_position: 3
---

# Positions

A **Position** is a deployment of capital from a [Caliber](overview) into an external protocol: a supply on a lending market, an LP position on a DEX, a deposit into a yield vault, a borrow, and so on. Positions are how a strategy actually earns its return.

Each position has a unique **position ID** and is registered in the Caliber. A Caliber can hold many positions, across multiple protocols or several on the same protocol. Internally a position tracks its **current value** (in accounting-token terms), the **time it was last accounted**, and whether it is a **debt**.

## Opening, resizing, and closing

Positions are changed exclusively through **Management Instructions** (see [MakinaVM](makina-vm#the-four-instruction-types)) executed by the [Operator](../governance/operator):

- a position is **opened or increased** by spending [base tokens](base-tokens),
- and **decreased or closed** by recovering base tokens.

Every Management instruction is paired with an **Accounting Instruction** that reports the position's value in base-token amounts. Because both the inputs/outputs (base tokens) and the position value are denominated in priceable assets, the Caliber can always express a position in accounting-token terms, which is what makes generalized loss checks possible.

## Loss checks

Whenever a position is managed, the Caliber measures the value of the affected base tokens **before and after** the operation, alongside the change in the position's accounted value, and verifies the move stays within a configured **maximum loss** tolerance (in basis points). Separate caps apply to position _increases_ and _decreases_. If an operation would leak more value than allowed (for example, an interaction that returns far less than it should), it reverts. This bounds how much value the Operator can lose in any single action, whether through error, a bad route, or malice.

## Cooldowns

Position management is rate-limited by a **cooldown**. Repeating the _same_ management action (the same position with the same command sequence and direction) before the cooldown has elapsed reverts. Combined with the per-action loss cap, the cooldown limits how much damage can be done over a short window, buying time for the [Security Council](../governance/security-council) to react to anomalous behavior.

## Risk caps and exclusivity

Positions carry risk attributes defined in the strategy's risk policy, so the [Risk Manager](../governance/risk-manager) can cap how large an individual position (or a group of related positions) may grow. Positions must also be **mutually exclusive** in the liquidity they account for: two positions cannot have accounting instructions that measure the same underlying liquidity, which prevents double-counting value.

## Debt positions

A position can also represent a **debt** (e.g. a borrow against collateral on a lending market). Debt positions are flagged as such and counted **negatively**: they are subtracted from the Caliber's total when computing [net AUM](caliber-accounting) and when evaluating risk-policy exposure. This lets a strategy express leverage and hedges correctly: the [share price](../machine/share-price) reflects assets _minus_ liabilities. In every other respect a debt position behaves like a normal one.
