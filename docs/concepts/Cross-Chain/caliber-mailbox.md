---
id: caliber-mailbox
sidebar_position: 3
---

# Caliber Mailbox

Deployed alongside each Spoke Caliber, Mailboxes serve as the Machine endpoint from the Caliber’s perspective and abstract away chain-specific logic.

### Liquidity bridging

Mailboxes control a set of bridge adapters through which assets can be transferred to and from the Hub Machine.

### Access Control

Similar to machines on the Hub Chain, mailboxes expose to calibers the permissionned addresses involved in their management.

### Accounting data

Mailboxes exposes a view function that returns detailed accounting data for the Caliber. This function is queried and signed by the Wormhole CCQ network in order to pass the fetched data to the Hub Machine.

![makina cross-chain structure](/img/makina-cross-chain.png)