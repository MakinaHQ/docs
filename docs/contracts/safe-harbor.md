# SEAL Safe Harbor Agreement

**Category**: Security\
**Authors**: Makina Foundation

---

## **Introduction**

This proposal outlines Makina’s adoption of the SEAL ([Security Alliance](https://www.securityalliance.org/)) Whitehat Safe Harbor Agreement (“Safe Harbor Agreement”). By adopting the Safe Harbor Agreement, Makina improves the security of its on-chain assets by allowing whitehats to intervene during active exploits to save protocol funds.

### **What is the Safe Harbor Agreement?**

The Safe Harbor Agreement addresses a critical need in crypto: enabling whitehats to intervene during active exploits when the urgency of an attack makes traditional processes too slow to save funds. 

The Safe Harbor Agreement was created by SEAL, a nonprofit founded by samczsun, to secure the future of crypto. In addition to the Safe Harbor Agreement, SEAL runs multiple initiatives including SEAL 911 (emergency response hotline for exploits), SEAL Intel (crypto-native threat intelligence sharing), SEAL Frameworks (open source security best practices and playbooks), SEAL Wargames (incident response training), and more in development.

Key aspects of the agreement include:

- **Encouraging Whitehats to Protect the Protocol:** By adopting the Safe Harbor Agreement, Makina incentivizes whitehats to step in and protect the protocol during active exploits by limiting their legal exposure. 

- **Intervention Only During Active Exploits:** Whitehats are authorized to act only when there is an immediate or ongoing exploit that threatens the protocol. This agreement is not intended for routine security testing or bug bounty reporting. It applies only to critical situations where the urgency of the exploit supersedes traditional procedures for responsible disclosure in order to save funds. 

- **Mandatory Return of Rescued Funds:** Under the terms of the Safe Harbor, whitehats are required to return all rescued assets to a pre-designated recovery address controlled by the protocol within 72 hours of recovery to ensure these funds are quickly secured, preventing delay or potential loss.

- **Clear Guidelines and Legal Protection:** The agreement establishes strict rules for how whitehats must operate during an exploit, ensuring recovery efforts are conducted professionally and safely, minimizing the risk of mistakes or further damage to the protocol. By adhering to these guidelines, whitehats can limit their potential legal exposure, allowing them to act in good faith without fear of liability.

- **Incentivized Rescue Efforts:** To motivate whitehats to act during critical situations, the agreement offers a bounty system that rewards rescuers with a percentage of the recovered assets, up to a predefined cap, for successful interventions.

Safe Harbor has already been adopted by leading protocols such as Uniswap, Zksync, Pendle, Pancakeswap, and Balancer, establishing it as a trusted industry standard for empowering whitehats during active exploits.

---

## **Rationale**

Makina is committed to enhancing its security and protecting user funds during critical moments. While security audits and other preventive measures are crucial, the unpredictable nature of active exploits requires a swift, decisive response mechanism to minimize potential damage.

Benefits of adopting the Safe Harbor Agreement include:

- **Agile Defense Against Exploits:** Whitehats are authorized to intervene as soon as an active exploit is detected, enabling them to respond faster than traditional methods. Immediate action minimizes the window for malicious actors, reduces damages, and accelerates the recovery of assets during critical moments.

- **Clarified Rescue Process:** The agreement ensures that every step, from intervention to fund recovery, is predetermined and streamlined. Whitehats know exactly where to send recovered funds, preventing chaotic negotiations or rushed decisions during an exploit. This clarity ensures efficient, decisive action when it matters most.

- **Clear Financial Boundaries:** The predefined bounty system, with a cap matching Makina’s existing bug bounty, ensures that whitehats are incentivized fairly without creating conflicting priorities between exploit intervention and standard vulnerability disclosure. By setting expectations upfront, it eliminates post-exploit negotiations, ensuring funds are returned promptly without attempts to change the reward amount, keeping the process fair and transparent.

- **Aligning with Industry Best Practices:** By adopting the Safe Harbor Agreement, Makina aligns itself with leading security practices across the industry, reinforcing its commitment to staying at the forefront of protocol security.

Adoption of the agreement complements audits by providing an additional layer of security, ensuring that the protocol is better prepared to respond to active threats.

---

## **Adoption Details**

**Protocol Details**

Protocol Name: Makina

Owner Address: 0x62244C74e1d09b3D86EF7342d354b5D7770bDE10

**Bounty Terms**

_Predetermined rewards for successful whitehats that recover protocol funds. For more information review the_ [_Safe Harbor Scope_](https://frameworks.securityalliance.org/safe-harbor/scope-terms) _document._

- Percentage: 10.0

- Cap (USD): 1000000

- Aggregate Cap (USD): 1000000

- Retainable: No
  - _When retainable is_ **_False_**_, whitehats are required to return all recovered funds to the protocol, which will then payout the bounty after verification by the protocol._

- Identity: Named
  - _When identity is_ **_Named_** _whitehats must identify themselves to the protocol with their full legal name._

- Diligence Requirements: KYC & sanctions screening only when necessary

**Contact Details**

_Designated security contacts for the protocol who whitehats will contact following a safe harbor recovery_

| Name          | Contact                  |
| ------------- | ------------------------ |
| Security Team | security\@makina.finance |

**Chains & Asset Recovery Addresses**

_Addresses controlled by the protocol which recovered protocol funds will be returned to by the whitehat_

| Chain     | Asset Recovery Address                     |
| --------- | ------------------------------------------ |
| eip155:\* | 0x62244C74e1d09b3D86EF7342d354b5D7770bDE10 |

**Accounts**

_List of all on-chain assets owned by the protocol protected under Safe Harbor_

| Chain     | Name                        | Address                                    | Child Contract Scope |
| --------- | --------------------------- | ------------------------------------------ | -------------------- |
| eip155:\* | AccessManager               | 0x0fCEfa3f1047F35521A49cD8B06faBd588665d7F | All                  |
| eip155:\* | CoreRegistry                | 0x0FAEeCEab0BCb63bE2Fe984Ea8c77778989d53eA | All                  |
| eip155:\* | OracleRegistry              | 0xC388B72AB90Be82B230D919F9C05c87F9397f485 | All                  |
| eip155:\* | TokenRegistry               | 0xd9310A41d085c0DC1E40F691e8647080862A5fd4 | All                  |
| eip155:\* | ChainRegistry               | 0x45681FCf26EF1dCa89ae2B8B97c6447ea68771Df | All                  |
| eip155:\* | CoreFactory                 | 0x8d28A69328561eF9F171c58996fEcB9F494e070c | All                  |
| eip155:\* | SwapModule                  | 0x923c98b22F9c367A109E93f7dfBaCa28b20C17C3 | All                  |
| eip155:\* | CaliberBeacon               | 0x3f5A881DB86D6f495823028A1e892E7b2CD7e162 | All                  |
| eip155:\* | MachineBeacon               | 0x5C680EC39bafE8524F3C2fa9d5F6D65F09Bd7333 | All                  |
| eip155:\* | AcrossV3BridgeAdapterBeacon | 0x511C3F33417275d060932458DD987bd47c9ca678 | All                  |

---

## **References**

- **SEAL Whitehat Safe Harbor Agreement Documentation:** [Framework](https://frameworks.securityalliance.org/safe-harbor/overview)

- **SEAL Whitehat Safe Harbor Agreement Legal Agreement:** [Link](https://github.com/security-alliance/safe-harbor/blob/main/documents/agreement.pdf)

- **Makina** **Bug Bounty**: https\://cantina.xyz/code/4e88f4df-c483-47d3-8d78-b9d7cc67be73/overview
