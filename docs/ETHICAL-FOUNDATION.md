# Ethical foundation / Fundamento ético

This document makes explicit the ethical foundation proposed by **satya-review** and available for voluntary downstream adaptation. It is review and design guidance, **not an executable guardrail, proof of safety, ethical certification, or substitute for affected people's judgment**. Existing `satya-review.v1` fields and exit codes remain unchanged.

## Español — el primer ladrillo atraviesa todas las capas

**Ahiṃsā orienta la finalidad y limita los medios. Viveka discierne el contexto. Satya obliga a la honestidad en cada afirmación. Dharma delimita responsabilidades y autoridad. Karma exige observar consecuencias y corregir. Prema inspira cuidado sin convertir al otro en instrumento.**

Estos compromisos actúan conjuntamente. La secuencia histórica Ahiṃsā → Satya → Dharma → Karma y la explicitación posterior de Viveka no constituyen permisos sucesivos para suspender la verdad, el cuidado o la responsabilidad.

1. **Ahiṃsā (no daño):** antes de optimizar, convencer, publicar o ejecutar, identificar a quienes podrían sufrir efectos: personas, otros seres vivos, comunidades y ecosistemas. Examinar daños de actuar y de no actuar, alternativas menos perjudiciales, gravedad, reversibilidad y riesgos residuales. No prometer daño cero ni presumir sostenibilidad sin datos.
2. **Viveka (discernimiento):** comprender condiciones actuales, fuentes, incentivos, incertidumbre y consecuencias indirectas. No convertir una etiqueta de «armonía» o «desintonía» en permiso para desproteger a alguien. La intervención protectora debe ser proporcionada.
3. **Satya (honestidad):** distinguir lo observado, probado, inferido, recomendado y desconocido desde la primera afirmación. Actualizar conclusiones ante nueva evidencia sin alterar engañosamente el historial. Ni una intención protectora ni una preferencia doctrinal justifican fabricar evidencia.
4. **Dharma (responsabilidad):** precisar finalidad, función, límites de competencia y autoridad para cada efecto. Ninguna opinión, consenso entre modelos o documento autoriza por sí mismo una acción externa.
5. **Karma (consecuencias):** contrastar lo previsto con lo observado, detectar errores propagados, detener daños y reparar donde sea posible. No atribuir culpa metafísica a personas afectadas.
6. **Prema (cuidado y desapego):** reconocer aportaciones válidas, enseñar sin humillar y corregir sin inducir dependencia. Admitir que otra propuesta o evidencia supere la propia; el desapego no elimina deberes de mantenimiento o reparación.

**Criterio práctico:** eficacia o exactitud factual no bastan para justificar una acción con daño grave e injustificado. Si faltan evidencia, salvaguardas o autoridad para un efecto material, mantener pendiente, revisar o detener esa operación. La investigación independiente puede continuar dentro de su alcance autorizado.

## English — concurrent commitments, not deferred truth

**Non-harm guides purposes and constrains means; contextual discernment examines the situation; truthfulness applies to every claim from the outset.** Responsibility defines legitimate scope, consequence review supports correction, and care preserves dignity and autonomy. These commitments operate together, not as stages that postpone honesty.

- Consider foreseeable effects of action and inaction on people, non-human life, communities and ecosystems. Prefer proportionate, lower-harm alternatives and repairable choices.
- Examine evidence, uncertainty, incentives and competing risks. No one loses dignity because a reviewer labels them out of harmony.
- Attribute sources, dates, versions and epistemic status. Do not invent certainty, conceal material contrary evidence, or distort a source to confirm the project or its founder.
- Separate advice, review, authorization and execution. Retain accountable owners, stop paths and correction mechanisms.
- Preserve historical Satya–Dharma–Karma commitments; Viveka describes cross-cutting discernment, not their replacement.

## Evidence may correct the protocol / La evidencia también corrige al protocolo

A source, affected person or reproducible test may challenge the author, client, teacher, coordinator or framework itself. Preserve material disagreement and explain changes. Do not reward agreement with authority as a substitute for accuracy. Applying the framework privately does not authorize publishing that work or the underlying conversation.

## Mapping to the existing eight review questions

| Existing field | Required ethical reading |
| --- | --- |
| `purpose` | Who is served, and is the purpose legitimate? |
| `affected_parties` | Who or what could be affected, including bystanders, other living beings and ecosystems? |
| `harm` | What foreseeable harm, severity, reversibility, mitigation and residual risk exist? |
| `uncertainty` | Which evidence or contextual judgment is missing, and what could change the conclusion? |
| `alternatives` | What safer or less extractive option exists, including no action? |
| `authority` | Who may authorize the specific consequential effect, under what limits? |
| `care` | Are autonomy, privacy, access, dignity, resources and ecological externalities considered? |
| `repair` | How can harm be stopped, detected, remedied and documented? |

## Operational boundaries / Límites operativos

- `decision.status = proceed` records a position, not a deployment permit. `stop`, `revise` and `pending` remain valid outcomes.
- The CLI validates document structure and file consistency. It does not establish whether non-harm, discernment, truth or sustainability have actually been achieved.
- Downstream systems must implement and test their own controls, approvals, monitoring and rollback. A reference to this foundation does not enforce it.
- Evidence quality, editorial status, human review, rights and publication permission are separate dimensions. Do not collapse them into a single «verified» label or silently change the v1 schema.
- This is a contemporary methodological proposal, not a claim of spiritual authority. No religious affiliation is required to use, criticize or revise it; no moral score is assigned to people.
