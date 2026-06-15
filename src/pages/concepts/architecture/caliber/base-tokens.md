---
id: base-tokens
sidebar_position: 2
---

# Base Tokens

**Base Tokens** are the curated set of ERC-20 tokens a [Caliber](overview) is allowed to hold directly. They are the raw materials of a strategy: positions are built by spending base tokens and unwound back into them, and swaps can only output base tokens.

## Pricing and valuation

Every base token must be **priceable against the [accounting token](overview#accounting-token-and-base-tokens)** through the [Oracle Registry](../pricing-oracles). A token cannot be registered as a base token without a valid pricing path. Its value is then read directly, by pricing the Caliber's balance against the accounting token, with no instruction required.

This pricing guarantee is the linchpin of the Caliber's safety model. Because every token the Caliber can hold is priceable, it can always value its entire balance, which is what makes [accounting](caliber-accounting) and the [loss checks](positions#loss-checks) on positions and swaps possible.

## Curation

Base tokens are added and removed by the [Risk Manager](../../governance/risk-manager) (through the timelocked path). A token can only be removed when the Caliber's balance of it is zero. In practice base tokens should be **liquid against the accounting token and relatively low risk**, since they are the assets the strategy parks value in between deployments. Some base tokens are bridged in from another chain, while others are obtained by swapping locally.
