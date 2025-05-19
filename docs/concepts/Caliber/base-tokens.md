---
id: base-tokens
sidebar_position: 2
---

# Base Tokens

Base Tokens are ERC20 tokens that can be held directly on the balance of a Caliber.

Each Caliber maintains a set of registered base tokens. In order to be marked as a base token, a valid pricing path must be configured in the [Oracle Registry](../oracle-registry) so that the token is priceable against the strategy's Accounting Token.

Base tokens should generally be very liquid against the Accounting Token of the Caliber, and relatively low risk. Some Base tokens can be bridged from the Hub Chain, or swapped into locally, on the Caliber's chain.

Base Tokens are accounted for as part of the Caliber AUM through simple balanceOf calls, and pricing against the Accounting Token.

Positions can only be deployed by spending base tokens and closed by withdrawing base tokens. Additionally, swaps can only be made into base tokens and the accounting token. Thus all undeployed assets on the Caliber will always be a combination of base tokens and accounting token.

Calibers perform slippage or loss checks whenever a position is managed or a swap is executed. For positions, the associated accounting instruction returns a list of base token amounts representing the position’s value. The Caliber compares the total value of these tokens before and after execution to ensure that no significant loss is incurred during the operation.
