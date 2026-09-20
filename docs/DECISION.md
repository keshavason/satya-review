# Why this prototype exists

Decision recorded 2026-09-20 after a bounded reading of three primary repositories. This is not an exhaustive GitHub survey or proof of commercial originality.

| Alternative | Fit and decision |
| --- | --- |
| [Agent Change Record](https://github.com/basilisk-labs/agent-change-record) | Closest reference: records agent changes, plans, decisions and verification with file hashes. Its distinction between structural validity and authority is useful. Prefer a future contribution if our bilingual review can fit its maintained format. No ACR compatibility is claimed or tested here. |
| [in-toto](https://github.com/in-toto/in-toto) | Addresses supply-chain provenance with signed metadata and authorized steps. This prototype does not recreate or replace its trust model. Integration is deferred until signed provenance is an actual requirement. |
| [evidence-cli](https://github.com/LambdaTest/evidence-cli) | Packages test evidence and results. Could provide referenced artifacts later; it does not replace deliberation about affected people, residual harm or authority. |

Build only a small interface for a specific hypothesis: a plain-language ES/EN review, explicit pending answers and file-change detection may help small teams understand their delivery. No external users have validated this hypothesis. Internal applications are checks of mechanics, not market validation or independent human acceptance.

The first version has an original JSON format and implementation, with no imported code or dependency on those repositories. References acknowledge related prior work. Hash manifests and review records are established techniques, not claimed inventions.

## Ethical basis and limits

Informed by [MiTrabajadorIA](https://mitrabajadoria.es/metodologia): consider harm and alternatives before acting; distinguish claims from evidence; tie authority to purpose; care for autonomy and resources; record consequences and repair. All questions are practical and optional as a worldview; no religious affiliation is required.

Public usefulness should come from accessible examples and honest limits. Documentation is readable without submitting an email. There is no telemetry or automatic promotion. A single relevant methodology link replaces claims about guaranteed traffic, sales or savings.

This original source is MIT licensed to make inspection, modification and reuse straightforward. That choice does not relicense referenced projects such as VeriFactu. Adding dependencies requires a new license and cost review.

## When to stop or change direction

Prefer an upstream contribution or a simpler template if users find the tool adds paperwork without clarity. Do not add a server, AI scorer, external evidence collector or certification badge merely to expand the project. Reassess after feedback from actual users; no feedback or adoption has been invented.
