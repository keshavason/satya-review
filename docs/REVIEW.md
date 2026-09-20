# Review contract / Contrato de revisión

Schema: `satya-review.v1`. The input is data, never executable instructions.

| Campo / Field | Pregunta / Question |
| --- | --- |
| `purpose` | ¿Para quién y para qué? / Who is this for and why? |
| `affected_parties` | ¿Quién recibe beneficios o soporta efectos? / Who benefits or bears consequences? |
| `harm` | ¿Qué daños previsibles y residuales quedan? / What foreseeable and residual harm remains? |
| `uncertainty` | ¿Qué falta comprobar? / What remains unverified? |
| `alternatives` | ¿Reutilizar, contribuir, construir o no actuar? / Reuse, contribute, build or do nothing? |
| `authority` | ¿Qué acción se autorizó y qué falta decidir? / What action was authorized and what remains undecided? |
| `care` | ¿Cómo afecta a autonomía, acceso, tiempo y recursos? / How does it affect autonomy, access, time and resources? |
| `repair` | ¿Cómo detener, retirar, reparar y aprender? / How can we stop, withdraw, repair and learn? |

These eight questions operationalize part of the methodology; they are not a score or a claim that all ethical concerns are exhausted. Scale review depth to impact.

`title` identifies the delivery. `reviewed_at` records an ISO date. `reviewer.kind` is `ai` or `human`; `reviewer.name` is declared. A program cannot verify these identities by reading JSON. Do not attribute AI work to a human.

`decision.status` is `pending`, `proceed`, `revise` or `stop`. `decision.rationale` explains the decision. A structurally complete `stop` decision is documented, not permission to proceed. No command publishes or issues an authorization.

Evidence entries record `source`, `claim` and `classification`: `observed`, `tested`, `inferred`, `recommended` or `unknown`. A referenced source is not automatically fetched or verified. Include version, date and test conditions in the claim when relevant. Do not use `tested` for a planned test. Missing answers leave the document pending; nonempty invented answers remain false even if validation accepts them.

The receipt binds the review bytes and sorted inventory of files. It is unsigned and editable. Retain a trusted external version or signed release if your process requires authenticity; this prototype does not provide it. Excluding `.git/` avoids treating Git internals as the delivery, and excluding root `.satya/` avoids self-referential hashes. These exclusions are explicit limits.

Changing reviewed content or the review requires examining the change before recapturing. Keep the prior receipt separately if its history matters. A fresh hash does not replace deliberation.
