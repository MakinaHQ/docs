---
searchPriority: 0
id: fees
sidebar_position: 6
---

# Fees

Fees are how a strategy compensates the people who run and secure it: the [Operator](../../governance/operator), the Makina DAO, and the [Security Module](../../security/security-module) stakers. Each Machine delegates its fee policy to a swappable **Fee Manager** contract, so different strategies can use different fee models.

## How fees are charged: share dilution

Makina does not skim the accounting token. Instead, fees are charged by **minting new shares**:

- When [AUM is updated](share-price#keeping-aum-fresh), the Machine asks its Fee Manager how many shares are owed, mints them, and distributes them to the fee recipients.
- New shares without new AUM dilute the share price slightly, so the cost is **socialized across all share holders** in proportion to their holdings.

Fees are minted **atomically with each AUM update**, and only once a minimum interval (the _fee mint cooldown_) has elapsed since the last minting. The Machine also caps how fast fees can accrue, via governance-set **maximum fixed-fee and performance-fee accrual rates**, a backstop against a misconfigured or malicious fee manager.

## Two kinds of fee

- **Fixed fee**: accrues with time and strategy size, independent of performance. It is the equivalent of a management fee.
- **Performance fee**: accrues only when the strategy creates value, measured against a high-water mark.

## Watermark Fee Manager

The standard implementation is the [`WatermarkFeeManager`](/contracts/periphery/fee-managers/WatermarkFeeManager.sol/contract.WatermarkFeeManager.md).

### Fixed fee

The fixed fee grows with the share supply and the time elapsed since the last minting:

$$
\text{FixedFee} \approx \text{ShareSupply} \times \text{rate}_{\text{per second}} \times \Delta t
$$

It is split into two purposes: a **management** portion (supporting the Operator and the DAO) and a **Security Module** portion (rewarding [stakers](../../security/security-module) who provide the insurance backstop). If the strategy has a Security Module, its portion is carved out first and sent to it directly, and the remaining management portion is then divided among its recipients.

_Example: at a 2% annualized fixed rate, a 1,000,000-share supply accrues ≈ 54.8 shares per day._

### Performance fee

The performance fee uses a **high-water mark**: it is charged only when the share price rises above the highest price previously recorded. This ensures holders are never charged twice for the same gains: if the price falls and recovers, no performance fee is taken until it exceeds the prior peak.

$$
\text{PerfFee} \approx \text{ShareSupply} \times \dfrac{\text{newPrice} - \text{watermark}}{\text{newPrice}} \times \text{rate}_{\text{perf}}
$$

After the fee is computed, the watermark is raised to the new price.

_Example: at a 10% performance rate, a 1,000,000-share supply whose price rises from 1.00 to 1.01 accrues ≈ 990 shares._

### Configurable splits

Both the management fee and the performance fee are distributed to one or more recipients according to **configurable basis-point splits** (each set summing to 100%). This is how the protocol divides revenue between the Operator and the DAO, and it can be tuned per strategy by the fee-configuration role. The Security Module's cut, when present, is taken from the fixed fee before the management split.

:::info[Implementation]
Fee manager interface: [`IFeeManager`](/contracts/core/interfaces/IFeeManager.sol/interface.IFeeManager.md). Standard implementation: [`WatermarkFeeManager`](/contracts/periphery/fee-managers/WatermarkFeeManager.sol/contract.WatermarkFeeManager.md).
:::
