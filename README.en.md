# satya-review

[Español](README.md)

[![Verification on Linux and Windows](https://github.com/keshavason/satya-review/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/keshavason/satya-review/actions/workflows/ci.yml)

A readable delivery review tied to its files. Answer eight questions about purpose, affected parties, harm, uncertainty, alternatives, authority, care and repair. Then check whether the files or review have changed.

**Completed fields and matching hashes do not certify ethics, security, legal compliance or human approval.** Reviewer identities and decisions are unverified declarations.

An early 0.1 prototype by KeshavaSon, informed by the [MiTrabajadorIA methodology](https://mitrabajadoria.es/metodologia). It does not require religious affiliation or score people.

## Ethical foundation and present-tense care (draft only)

The [ethical foundation](docs/ETHICAL-FOUNDATION.md) begins with **Ahiṃsā** (non-harm), calls for **Viveka** (contextual discernment), and requires **Satya** (truthful claims) *at every stage*. Human accountability, repair and historical Satya–Dharma–Karma commitments are not replaced. These are human review criteria, **not runtime guarantees of safety or ethical certification**.

The [bounded reflective loop](docs/REFLECTIVE-LOOP.md) proposes a critical mirror, a domain teacher who demonstrates transferable improvements, and proportional meta-review; it is not implemented. [SATYA Commons](docs/FEDERATED-EXPANSION.md) proposes voluntary, federated adaptation between independently owned projects. The [minimum adoption contract](docs/ADOPTION-CONTRACT.md) requires a human owner, immutable pinned commit, local limitations and explicit acceptance; a link to a mutable draft branch is **not adoption**. [Presence without possession](docs/PRESENCE-WITHOUT-POSSESSION.md) proposes respectful, non-manipulative human-facing design, without ranking spirituality or claiming AI inner experience.

Nothing here connects AJUTIA, MiTrabajadorIA, INFoBOT or third-party agents, grants permission, changes the `satya-review.v1` schema, or deploys automated reviewers. The linked proposals remain in an open draft pull request.

The [12 October cross-repository audit](docs/CROSS-REPOSITORY-AUDIT-2026-10-12.md) records corrections, CI evidence and remaining risks. It is **not** independent human review or proof of a working federated system.

## Run locally

Requires Node.js 22+. No package installation, account, key, model or server is needed. From this folder, point the commands at an existing delivery directory:

```text
node bin/satya.mjs init ./my-delivery
```

Edit `my-delivery/.satya/review.json` with your findings and evidence. Keep the decision `pending` if unresolved. Then:

```text
node bin/satya.mjs capture ./my-delivery
node bin/satya.mjs verify ./my-delivery
node bin/satya.mjs report ./my-delivery --lang en
```

Capture after actually reviewing the content. Capturing again replaces the receipt; it does not prove a new review happened. Retain history separately when needed, and stop concurrent writers before capturing. Save reports outside the delivery to avoid changing its inventory. Initialization never overwrites an existing review.

`verify` separates file integrity from document completeness. `documented` means required fields are filled, even when the recorded decision says stop. `match` means files match the available local receipt. Neither authorizes publication. Exit 0 means matching files and a documented review; 3 indicates a pending review; 2 means differences or an error. Commands print JSON, except `report`, which prints Markdown.

## Scope and limits

All regular files inside the selected root are inventoried recursively, except root `.git/` and `.satya/`. Git ignore rules are not applied. The review file is bound separately by its hash; other metadata in `.satya/` is excluded. Symlinks, junctions and unsupported paths are rejected. Choose a clean delivery directory without private customer data, secrets or large dependencies.

The tool checks additions, removals and modifications. It does not fetch evidence sources, authenticate reviewers, sign receipts, inspect for malware or continuously monitor files. Anyone able to rewrite both content and receipt can create a new matching snapshot. Snapshots are not atomic under concurrent writes. File names and review answers may themselves be sensitive, even though nothing is transmitted.

## Synthetic examples and checks

```text
node bin/satya.mjs verify examples/complete
node bin/satya.mjs report examples/pending --lang en
node bin/satya.mjs verify examples/changed
npm test
```

GitHub Actions runs the same suite with Node.js 22 on Linux and Windows. The badge above shows the current status of that check; it does not certify how the tool is used.

The changed example must report an intentional modification after capture. Examples are fictional, with no real clients or fiscal transactions. See [validation](docs/VALIDATION.md), [review fields](docs/REVIEW.md), [design rationale and attribution](docs/DECISION.md), and [future fiscal product scope](docs/FISCAL-MODULE.md).

No runtime dependencies, telemetry, network calls or paid APIs. Hardware, review and maintenance still have costs. Internal testing does not demonstrate market demand, compliance or financial savings. MIT-licensed original code; VeriFactu is not bundled and keeps its own license.
