---
id: fee-managers
sidebar_position: 5
---

# Fee Managers

Each Machine can set a FeeManager contracts. Depending on the type of strategy different fee models may be appropriate. Machines can take fixed fees which is are a function of AUM and elapsed time and variable fees which is are function of change in share-price, or performance.

All fees are realised by inflating the [Machine Token](machine-share) supply. The newly minted shares will lower the share price by increasing it's supply without corresponding increase in AUM. Thus all fees are equally socialised across all holders of Machine Tokens. Fees are taken every time the Machine AUM is updated.

The default fee manager takes has three types of fees:

- Fixed Security Module Fee: used to incentivised deposits to the Security Module
- Fixed Management Fee: used to incentivise the Operator and support Makina DAO
- Variable Performance Fee: used to incentivise the Operator and support Makina DAO

### Default Fixed Fee Calculation

The fixed fees are calculated as follows:

$$
FixedFee = ShareSupply *feeRate_{sec} * (currentTimestamp - lastTimestamp);
$$

For example, with a feeRate of 2% annual, a share supply of 1'000'000 Shares and 1 day elapsed:

$$
FixedFee = 1'000'000 * \dfrac{0.02}{365 * 86400} * 86400 = 54.794
$$

The Fixed fee is then split three ways between the Security Module, the Operator and the Makina DAO.

### Default Variable Fee Calculation

The variable fees are calculated as follows:

$$
VariableFee = ShareSupply * (\dfrac{currentSharePrice - prevSharePrice}{prevSharePrice }) * perfFeeRatio;
$$

For example, with a perfFeeRate of 10% annual, a share supply of 1'000'000 and share price increase from 1.00 to 1.01:

$$
VariableFee = 1'000'000 * \dfrac{1.01-1.00}{ 1.00} * 0.1 = 1000
$$

A catch-up is implemented to compensate for negative performance. If a share price decreases the negative VariableFee is accrued as performance debt. No variable fees are minted as long as there is debt to be repaid. Once enough positive performance was accrued to earn enough variable fees to repay the debt fully, variable fees are minted and distributed again.

The Variable Fee is then split two ways between the Operator and the Makina DAO.
