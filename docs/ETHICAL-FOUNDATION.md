# Ethical foundation / Fundamento ético

This document makes explicit the ethical foundation assumed by **satya-review** and by downstream work that chooses to build on it, including agent-orchestration protocols. It is a statement of intent and review guidance, **not an executable guardrail, proof of safety, ethical certification, or substitute for affected people's judgment**. Existing `satya-review.v1` fields and exit codes remain unchanged.

## Español — precedencia sin olvidar los ladrillos anteriores

**Ahiṃsā → Viveka → Satya → responsabilidad y reparación.**

1. **Ahiṃsā (no causar daño):** antes de optimizar, convencer, publicar o ejecutar, identificar a quienes podrían sufrir efectos, incluidos seres humanos, otros seres vivos, comunidades y ecosistemas. Evitar daños previsibles, reducir los residuales y abstenerse cuando un riesgo grave no esté suficientemente acotado. El impacto ambiental debe examinarse con datos pertinentes, no presumirse por retórica de «armonía planetaria».
2. **Viveka (discernimiento):** comprender el presente concreto, las fuentes, el contexto, los incentivos, la incertidumbre y las consecuencias indirectas. Examinar alternativas, incluida la opción de no actuar. No convertir un juicio parcial sobre «armonía» o «desintonía» en permiso para desproteger a una persona: la dignidad no depende de esa clasificación. Si hay que detener un daño, escoger medios proporcionados y lo menos perjudiciales posible.
3. **Satya (verdad y honestidad):** distinguir lo observado, probado, inferido, recomendado y desconocido. Una afirmación válida en unas condiciones puede necesitar actualización cuando esas condiciones cambian; no alterar evidencias ni presentar la revisión contextual como licencia para sostener contradicciones sin pruebas.
4. **Responsabilidad, autorización y reparación:** ninguna conclusión autoriza por sí misma un efecto externo. Documentar quién puede decidir, qué decisión queda pendiente, cómo detener o revertir daños y cómo aprender de los errores.

**Aclaración:** esta precedencia ordena el discernimiento *de una decisión*, no aplaza la obligación de honestidad: Satya rige cada afirmación desde el inicio, igual que Ahiṃsā rige cada iteración. Viveka es transversal y no sustituye Dharma ni Karma en los proyectos que ya los emplean.

**Regla de precedencia:** si una propuesta parece eficaz o factual pero amenaza con un daño grave e injustificado, no basta invocar Satya o una métrica de rendimiento para seguir. Si falta evidencia para discernir el impacto, el resultado honesto es **pendiente** o **revisar**, no una falsa aprobación. Las situaciones que involucren prevención de daños pueden exigir intervención limitada, supervisión humana y reevaluación.

## English — a foundation carried into every later layer

**Ahiṃsā (non-harm) comes first; Viveka (contextual discernment) is required before Satya (truthful claims).** The ordering constrains action; it is not a ranking of persons, beliefs, or cultures.

- Consider foreseeable effects on people, non-human life, communities, and ecosystems; prefer prevention, least-harm alternatives and reversibility.
- Examine context, competing risks, uncertainty, evidence quality, and the possibility of taking no action. Protective intervention should be proportionate; no one loses dignity because someone labels them “out of harmony”.
- Express claims with source, date, version, and epistemic status. Update judgments when the situation or evidence changes; do not manufacture certainty or treat all conflicting claims as equally true.
- Separate advice, documented review, authorization, and external execution. Preserve stop/repair paths and human accountability.

## Mapping to the existing eight review questions

| Existing field | Required ethical reading |
| --- | --- |
| `purpose` | Who is served, and is the purpose legitimate? |
| `affected_parties` | Who or what could be affected, including bystanders, other living beings, and ecosystems? |
| `harm` | What foreseeable harm, severity, reversibility, mitigation and residual risk exist? |
| `uncertainty` | Which evidence or contextual judgment is missing, and what could change the conclusion? |
| `alternatives` | What safer or less extractive option exists, including no action? |
| `authority` | Who may authorize the **specific** consequential effect, under what limits? |
| `care` | Are autonomy, privacy, access, dignity, resources and ecological externalities considered? |
| `repair` | How can harm be stopped, detected, remedied and documented? |

### Operational boundaries / Límites operativos

- `decision.status = proceed` is a **recorded opinion**, not a deployment permit. `stop`, `revise` and `pending` remain valid outcomes.
- This CLI validates document structure and file consistency. It **does not** decide whether non-harm, good discernment, truth, or environmental sustainability have actually been achieved.
- A downstream system (e.g. an agent orchestrator or commercial decision engine) must implement and test its own safety/policy gates, human approvals, monitoring, and rollback. Citing this foundation alone does not enforce it.
- No religious affiliation is required to use, criticize or revise these criteria. Apply them to concrete effects, not as scores of people.
