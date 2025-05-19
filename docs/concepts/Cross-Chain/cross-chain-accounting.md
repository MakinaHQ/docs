---
id: cross-chain-accounting
sidebar_position: 2
---

# Cross-Chain Accounting

As operators can allocate Machine funds to various Spoke chains, it is crucial to maintain awareness of the accounting from each chain, in order to aggregate it and compute the total Machine AUM.

In order to compute a machine's total AUM, accounting data of each caliber needs to be aggregated. For spoke calibers, the protocol relies on Wormhole Cross-Chain Queries. This technology leverages a network of validators (guardians) to execute cross-chain data retrieval in a pull-based fashion.

Each Spoke Caliber Mailbox exposes a view function returning the detailed AUM of the associated caliber. This data can be retrieved by the Wormhole CCQ network, signed, and then aggregated in the machine contract storage.

Once the machine has fresh accounting data of all involved Spoke chains, this data allows to calculate the total machine AUM.

![cross-chain-accounting](/img/makina-wh-ccq.png)