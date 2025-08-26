---
id: fee-managers
sidebar_position: 5
---

# Fee Managers

The FeeManager contract defines how fees are applied to a Machine. Each Machine is linked to a dedicated FeeManager instance. Different strategies may require different fee models, and the protocol supports multiple FeeManager implementations.

Fees can be of two types:
- Fixed fees: based on assets under management (AUM) and elapsed time.
- Performance fees: based on changes in share price or performance.

All fees are realized by inflating the [Machine Token](machine-token) supply. Newly minted shares dilute the share price by increasing supply without a corresponding increase in AUM, thereby socializing fees equally across all Machine Share holders. Fees are collected whenever the Machine’s AUM is updated.

## Watermark Fee Manager

### Fixed Fee

The contracts divides fixed fee into [Staking Module](staking-module) fee, which incentivizes stakes into the Staking Module, and management fee which incentivizes the Operator and supports Makina DAO.

The fixed fees are calculated as follows:

$$
FixedFee = ShareSupply *feeRate_{sec} * (currentTimestamp - lastTimestamp);
$$

For example, with a feeRate of 2% annual, a share supply of 1'000'000 Shares and 1 day elapsed:

$$
FixedFee = 1'000'000 * \dfrac{0.02}{365 * 86400} * 86400 = 54.794
$$

The Fixed fee is then split three ways between the Security Module, the Operator and the Makina DAO.

### Performance Fee

The `WatermarkFeeManager` implementation supports a high watermark mechanism ensures performance fees are charged only when the current share price exceeds the stored watermark.

When the current is above the watermark, the performance fees are calculated as follows:

$$
PerfFee = ShareSupply * (\dfrac{currentSharePrice - prevSharePrice}{newSharePrice}) * perfFeeRatio;
$$

For example, with a perfFeeRate of 10% annual, a share supply of 1'000'000 and share price increase from 1.00 to 1.01:

$$
PerfFee = 1'000'000 * \dfrac{1.01-1.00}{ 1.01} * 0.1 = 1000
$$

The performance fee is then split two ways between the Operator and the Makina DAO.
