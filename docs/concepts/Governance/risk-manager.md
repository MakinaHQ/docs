---
id: 'risk-manager'
title: Risk Manager
sidebar_position: 5
---

# Risk Manager

Along with the Operator, each strategy has a dedicated Risk Manager, whose primary responsibilities include reviewing and submitting new instructions and risk policies, and maintaining the Machine’s risk parameters.

The Risk Manager is responsible for ensuring that the Operator can operate effectively within a secure framework. Maintaining an appropriate balance between flexibility and risk control is key to enabling the Operator to carry out the strategy’s mandate.

All Risk Manager actions must pass through a timelock, during which both the Security Council and the Machine SubDAO hold veto powers. This introduces a layer of trust minimization, ensuring that the Risk Manager cannot apply changes to the strategy atomically or unilaterally.

The Risk Manager has the following responsibilities:
- Review and verify any [Root Update](root-update-lifecycle) requested by the Operator, and then schedule it on the relevant Caliber.
- Set and adjust all risk parameters for machine and calibers, including max loss caps and cooldowns.
- Curate the set of [Base Tokens](../Caliber/base-tokens) in each Caliber.
- Set and adjust the Machine's Risk Policy to ensure compliance with the Mandate.