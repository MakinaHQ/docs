---
id: 'security-council'
title: Security Council
sidebar_position: 6
---

# Security Council

Besides the Operator and Risk Manager, each strategy is overseen by a dedicated Security Council. Its primary role is to safeguard user funds by providing oversight and emergency intervention capabilities.

Key responsibilities include:

- **Reviewing Pending Timelock Transactions:** The Security Council reviews all pending timelock transactions submitted by the Risk Manager (e.g., Root updates, risk parameter changes) and may veto any that introduce unacceptable risk to user funds.
- **Triggering Recovery Mode:** In response to security threats such as hacks, Operator or Risk Manager misbehavior, or funds being at risk, the Security Council can activate Recovery Mode. While in Recovery Mode, the Security Council assumes the Operator’s role until the strategy is stabilized.
- **Veto Authority:** Outside of Recovery Mode, the Security Council cannot execute actions directly but retains full veto rights over timelocked changes.
- **Operator Slashing:** When necessary, the Security Council can initiate slashing via the Security Module.

The Security Council acts as a final line of defense, ensuring that neither the Operator nor the Risk Manager can introduce harmful changes without oversight.