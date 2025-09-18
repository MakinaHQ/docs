---
id: fee-managers
sidebar_position: 5
---

# Fee Managers

The Fee Manager contract defines how fees are applied to a Machine. Each Machine is linked to a dedicated FeeManager instance. Different strategies may require different fee models, and the protocol supports multiple FeeManager implementations.

Fees can be of two types:

- Fixed fees: based on assets under management (AUM) and elapsed time.
- Performance fees: based on strategy performance.

Fees take the form of newly minted [Machine Tokens](machine-token), which are distributed to the Operator, [Security Module](security-module), and Makina DAO. Since these tokens increase the overall supply without a corresponding increase in AUM, they dilute the share price, effectively socializing fees across all Machine Token holders. Fees are minted and distributed atomically along Machine AUM updates.

## Watermark Fee Manager

See the [WatermarkFeeManager](/contracts/periphery/fee-managers/WatermarkFeeManager.sol/contract.WatermarkFeeManager.md) contract page for more details.

### Fixed Fee

The contracts divides fixed fee into **Security Module fee**, which incentivizes stakes into the Security Module, and **Management fee** which incentivizes the Operator and supports Makina DAO.

The fixed fee is calculated as follows:

$$
FixedFee = TokenSupply *feeRate_{sec} * (currentTimestamp - lastTimestamp);
$$

For example, with a feeRate of 2% annual, a token supply of 1'000'000 and 1 day elapsed:

$$
FixedFee = 1'000'000 * \dfrac{0.02}{365 * 86400} * 86400 = 54.794
$$

The Fixed fee is then split three ways between the Security Module, the Operator and the Makina DAO.

### Performance Fee

Besides fixed fee, performance fee further incentivize the Operator depending on strategy performance, and provides ongoing support to Makina DAO.

The `WatermarkFeeManager` implementation supports a high watermark mechanism ensures performance fee are charged only when the new share price exceeds the stored watermark.

When the new share price is above the watermark, the performance fee is calculated as follows:

$$
PerfFee = TokenSupply * (\dfrac{newTokenPrice - prevTokenPrice}{newTokenPrice}) * perfFeeRatio;
$$

For example, with a perfFeeRate of 10% annual, a token supply of 1'000'000 and share price increase from 1.00 to 1.01:

$$
PerfFee = 1'000'000 * \dfrac{1.01-1.00}{ 1.01} * 0.1 = 1000
$$

The performance fee is then split two ways between the Operator and the Makina DAO.
