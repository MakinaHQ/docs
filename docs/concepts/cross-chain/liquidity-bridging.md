---
id: liquidity-bridging
sidebar_position: 1
---

# Liquidity Bridging

The protocol enables bridging of assets between a Hub Machine and Spoke Calibers.

Liquidity transfers rely on external bridge protocols and are facilitated by bridge adapter contract, which are managed by Hub Machines and Spoke Caliber Mailboxes. The protocol includes a dedicated adapter implementation for each supported bridge.

Bridging is a four-step process, executed by the operator, and functions symmetrically in both directions: Hub → Spoke and Spoke → Hub:

1. Schedule the outgoing transfer on the sender side, which generates a message hash.
2. Authorize the incoming transfer on the recipient side by registering the message hash.
3. Send the outgoing transfer through the bridge protocol from the sender side.
4. Claim the transfer on the recipient side to finalize fund delivery.

:::warning[token mapping]

The protocol assumes that the input and output tokens involved in a bridge transfer are homologous and share the same number of decimals. This assumption relies on the Token Registry, which maintains the mapping between local and equivalent foreign token addresses and must be correctly configured on all chains.

:::
