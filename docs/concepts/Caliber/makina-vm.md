---
id: makina-vm
sidebar_position: 1
---

# MakinaVM

Integrating with external protocols traditionally requires writing custom smart contract adapters, an approach that is time-consuming, error-prone, and difficult to maintain.

Makina introduces a new execution model: MakinaVM, a scope-limited, generalized onchain engine designed to execute pre-approved smart contract instructions.

The goal is for Calibers to be highly adaptable while maintaining strong security guarantees, enabling fast and reliable integration with a broad range of external protocols to maximize diversification and capture optimal opportunities.

### Key Benefits of MakinaVM

- **Pre-approved execution:** Function selectors, target addresses, and selected parameters must be pre-approved. Only the Merkle root is stored onchain, ensuring minimal onchain storage while maintaining strict control.
- **Efficient updates:** Adding or removing instructions requires only a single Merkle Root update.
- **Scalability:** Proof size grows logarithmically (log₂(N)) with the number of instructions, ensuring scalability as the instruction set expands.
- **Transparency & verification:** Anyone can verify the active instruction set by computing the Merkle root locally and comparing it to the one stored in the Caliber contract.

## Instructions

Instructions are a core innovation of Makina, offering a highly flexible yet controlled execution model. They define and constrain the Operator's available actions in a given strategy, enabling seamless interaction with a wide array of external smart contracts while maintaining strict operational boundaries.

### Weiroll

MakinaVM is built on [Enso Weiroll](https://github.com/EnsoBuild/enso-weiroll), an extended implementation of the original [Weiroll](https://github.com/weiroll/weiroll) command-chaining framework developed by [Nick Johnson](https://github.com/Arachnid), [Dean Eigenmann](https://github.com/decanus), and [other](https://github.com/weiroll/weiroll/graphs/contributors) open-source contributors. Enso's version enhances Weiroll's capabilities, making it more flexible and suited for advanced execution models.

Weiroll enables stateful multicalls by allowing the output of one call to be used as input for subsequent calls. This makes it possible to chain multiple function calls together, with data passed through each execution step. Moreover, Weiroll supports the generalized execution of any set of interactions across any protocol.

MakinaVM refines this capability by incorporating a Merkle Tree of hashed commands and selected parameters, effectively restricting the scope of executable instructions.

### Merkle Tree Permissioning

Each Caliber stores the root of a publicly available Merkle Tree containing the full set of allowed instructions. The root can be updated in caliber storage by the Machine's [Risk Manager](../governance/risk-manager) through a timelock, giving users time to withdraw if they disagree with upcoming changes.

To execute an instruction, the Operator must provide the corresponding Merkle proof. The Caliber hashes data including the instruction's commands (function signatures + target contracts addresses) and its selected parameters (function arguments), and validates the resulting leaf against the stored Merkle root.

Instructions can be validated with fine-grained control, down to specific function arguments. Dynamic arguments, like token amounts, can be excluded from the hash to preserve flexibility while retaining a strong security model.

Once enabled, instructions can be executed arbitrarily by the Operator, within the bounds of the approved set.

### Instruction Types

Instructions are categorized into four types, each serving a distinct operational role:

- **Accounting**: Computes the current size of a position and updates it in the Caliber's storage.
- **Management**: Modifies the size of a position. Always paired with an Accounting instruction to reflect the changes introduced.
- **Harvesting**: Collects rewards from external protocols and transfers them to the Caliber.
- **Flashloan-Management**: Modifies the size of a position in the context of a flash loan, as part of an outer Management instruction. A Flashloan-Management instruction is always associated with a Management instruction and can only be executed in its scope.

### Integration Flow

Integrating a new protocol only requires creating the necessary deploy, close, and account instructions and submitting a single governance transaction to whitelist them.

This process enables fast, secure, and scalable integrations across a broad set of protocols without the need for custom adapters.

Instructions are reviewed by the Risk Team and approved through Governance. Over time, a growing repository of reusable Instructions will be available to operators, enabling them to interact with a wide range of external protocols.

It is also expected that protocols seeking to attract capital contribute their own Instructions, promoting a model of self-integration.

See [Root Update Lifecycle](../governance/root-update-lifecycle) for more details.
