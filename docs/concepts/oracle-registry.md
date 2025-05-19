---
sidebar_position: 5
---

# Oracle Registry

The Oracle Registry acts as an aggregator of [Chainlink price feeds](https://docs.chain.link/data-feeds/price-feeds), and prices tokens in a reference currency (e.g. USD) using either one or two feed hops. This enables any priceable token to be valued relative to any other.

This component plays a crucial role in the protocol, ensuring accurate pricing of assets within the protocol in order to compute Calibers and Machines AUM.

#### Example: Pricing Token A in Token B

To determine the price of Token A in terms of Token B, the registry follows these steps:

1. **Check Token A → Reference Currency:** Given that a direct Chainlink price feed exists from Token A to the reference currency (e.g., USD), the registry uses it.
2. **Check Token B → Reference Currency (via intermediate):** Given that Token B lacks a direct feed to the reference currency, the registry can be provided with a 2-feeds path:
    - Token B → Token C
    - Token C → Reference Currency
It combines both feeds to compute Token B’s price in the reference currency.
3. **Compute Token A → Token B:** With both tokens priced in the reference currency, the final price of Token A in Token B is derived by dividing their reference prices.

### OracleRegistry Usage Scenarios

The OracleRegistry is specifically involved in the following scenarios:

- **Pricing Token Balances**: Computes the value of Machine and Caliber token balances relative to the accounting token.
- **Valuation of Caliber Positions:** Determines the total value of a position held within a Caliber.
- **Value Loss Checks:** After each Caliber operation (e.g., position management or swaps), the registry is used to verify that value loss remains within acceptable bounds.

The registry is governed by the DAO through a Timelock.
