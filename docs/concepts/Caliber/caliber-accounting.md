---
id: caliber-accounting
sidebar_position: 7
---

# Caliber Accounting

Each caliber can do a local accounting of all value held including open positions and base tokens held on the Caliber's balance. 

The caliber accounting requires all positions to not be stale, i.e. a recent enough value needs to be available for the positions. This requires the operator (or any other entity running a keeper) to execute the accounting script for each position on a continuous basis. 

Positions are accounted for every time they are changed. They can also be accounted for at any time permissionlessly by executing the relevant [accounting instruction](makina-vm#instruction-types) on the caliber.

Caliber accounting is permissionless and both the Operator and the Makina DAO have a direct incentive to keep position values up to date as their revenue is only distributed once a full accounting cycle is complete. 

Base tokens held in the calibers balance can be accounted for by just pricing the token balance against the account token using the registered oracle feed. 

The Caliber accounting function is a publicly exposed view function which is queried by the [Wormhole Cross-Chain Queries](https://wormhole.com/products/queries) service and published to the Machine's storage on the Hub Chain. See [Cross-Chain Accounting](../Cross-Chain/cross-chain-accounting) for more information.
