---
id: share-price
sidebar_position: 2
---

# Share Price

The Machine calculates a Share Price at which it mints and redeems Machine Shares.

The Share Price reflects the total value — denominated in the Accounting Token — of all assets held by the Machine, including those in its Calibers and deployed positions. This represents the Machine’s total assets under management (AUM).

The successful execution of the strategy by the Operator leads to value accrual and increase in AUM, either through earned yield or appreciation of asset prices relative to the Accounting Token.

$$
\text{SharePrice} = \dfrac{\text{AUM}}{\text{ShareSupply}}
$$

An increase in AUM without corresponding increase in number of shares outstanding leads to an increase in Share Price. The total AUM of the Machine is the sum of any idle assets on the Machine's balance and the local [AUMs of all Calibers](../caliber/caliber-accounting) connected to the Machine.

Idle assets may be held on the Machine's balance in case new deposits came in that where not yet accounted for, or because they have just been bridged back. Operators may also decide to keep some idle assets as a buffer for withdraws.

$$
AUM = \sum Balance_{idle} + \sum Caliber_{AUM} + \sum Pending_{bridge}
$$

The AUM number's from the Calibers are received by the Machine through the [Cross-Chain Accounting](../cross-chain/cross-chain-accounting) flow.

Additionally, any pending bridge transfers that are not yet held by the Machine or its Calibers but are currently in transit are included in the AUM. This ensures that no value is lost during the bridging process, which can take up to several days.
