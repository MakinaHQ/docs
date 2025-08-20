---
id: "root-update-lifecycle"
sidebar_position: 3
---

# Root Update Lifecycle

The process for updating the allowed instructions Merkle Root in a specific Caliber will follow a multi-stage approach, consisting of the following steps:

1. In the public `makina-merkletree` repository, the Operator will submit a PR with the updated root and corresponding instructions. This update will be reviewed by at least two entities: the Security Council and Makina developers.
2. Pull Request gets merged into main.
3. After the root is merged into the repository, the Risk Manager retrieves it and submits the transaction to the Caliber, initiating a timelock period.
4. This action will notify the Security Council and other communication channels like Discord and/or Telegram for further user awareness.
   Unless vetoed, the new Merkle Root comes into effect at the end of the timelock, and Instructions must then present proofs matching this updated root to be valid for execution.
