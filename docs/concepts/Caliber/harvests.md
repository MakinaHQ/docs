---
id: harvests
sidebar_position: 5
---

# Harvests

Some [Positions](positions) may issue reward tokens through various claim contracts. These can be harvested by the Caliber with [Harvest Instructions](makina-vm#instruction-types) and transferred onto the Caliber's balance. 

Harvesting tokens that are not registered on the Caliber as [Base Tokens](base-tokens) will not increase the Caliber's AUM, as these tokens may not be priceable through oracles. To realise the value as AUM the harvested tokens need to be swapped to base tokens, or registered as base tokens by providing a corresponding oracle price feed. 

Harvested tokens can be swapped instantly after being received by passing a swap order to the harvest function on the Caliber, allowing for instant realisation of the value of the harvested tokens. 

Operators are incentivised to harvest positions frequently and realise their value quickly to avoid a gap building between the theoretical AUM of the caliber and the realise value. Such gaps can potentially lead to free-riding issues which results in lower performance on the Caliber and thus less fees for the operator.
