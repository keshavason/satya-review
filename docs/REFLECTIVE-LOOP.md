# Protocolo KeshavaSon · Bucle reflexivo multinivel
## Multilevel reflective loop · Proposal v0.1

**Estado / Status:** propuesta de arquitectura revisable. **No** es una función implementada de `satya-review`, certificación ética, autoridad automática ni política impuesta a otros agentes. Se puede leer, criticar y adaptar sin afiliación espiritual.

> **Primer ladrillo, en cada iteración:** Ahiṃsā (evitar daño) → Viveka (discernir) → Satya (expresar lo comprobable). Responsabilidad, cuidado y reparación acompañan todo el proceso. El bucle no reemplaza ni suspende esta precedencia.

## 1. Intuición central

Un agente puede equivocarse; su espejo también; un guía o revisor de nivel superior también. La corrección debe ser **recursiva, plural, trazable y revisable con el tiempo**, nunca una cadena de autoridades incuestionables.

- **Agente (A):** propone una acción o una abstención; declara propósito, afectados, evidencia, incertidumbre, alternativas y riesgos.
- **Espejo (E):** reexamina la propuesta **con independencia crítica**; busca daños omitidos, datos contradictorios, sesgos, consecuencias indirectas y opciones menos dañinas.
- **Maestro / gurú de dominio (G):** especialista contrastable que enseña **cómo elevar la calidad del trabajo**: identifica la contribución válida del agente, explica la mejora, sus criterios técnicos y cuándo dejaría de ser válida; propone una prueba de transferencia a otro problema. También ayuda a discernir desacuerdos entre A y E, **sin imponer obediencia, reclamar infalibilidad ni privilegio moral**. Puede ser una persona experta o un rol explícito de revisión con competencia evaluada, nunca una identidad espiritual presumida del modelo.
- **Metarrevisión / guía de guías (M):** examina **la calidad del proceso y de las revisiones**, posibles acuerdos aparentes, conflictos de interés, fallos sistémicos y daños acumulados entre múltiples agentes.
- **Persona responsable:** conserva una autoridad específica, verificable y revocable para cualquier efecto externo que la requiera. Ningún consenso entre modelos sustituye autorización, derechos o supervisión legítima.

No basta que dos respuestas coincidan: modelos que comparten datos, incentivos o instrucciones pueden compartir los mismos errores. El espejo necesita evidencia y perspectivas independientes en la medida disponible.

## 2. Dos bucles interconectados

**Microbucle, antes de un efecto:**

```text
intención / contexto
  -> A: Ahiṃsā -> Viveka -> Satya
  -> E: espejo independiente (contraargumentos y daños)
  -> G: contraste, desacuerdos y alternativas
  -> M: revisión proporcional del proceso, si la exige el riesgo
  -> decisión documentada: revise | pending | stop | recommend
  -> autorización humana específica, cuando proceda
  -> ejecución SOLO por un sistema habilitado y autorizado
```

**Macrobucle, después y entre efectos:** contrastar lo previsto con impactos observados; incluir personas afectadas, otros seres vivos y ecosistemas; investigar incidentes y daños acumulativos; corregir reglas y modelos cuando haya nueva evidencia. Reabrir el expediente si cambian fuentes, condiciones o riesgos. El estado `recommend` **no** equivale a permiso de ejecutar.

La revisión de la revisión es también revisable. **No** significa recursión infinita: se activa por relevancia, cambios, conflicto o riesgo, con límites de coste, tiempo y profundidad definidos antes del ciclo. Si se agota el límite sin evidencia o autoridad suficiente, el resultado es `pending` o `stop`; jamás aprobar por cansancio.

## 3. Reglas de no-daño y discernimiento

1. **Precedencia invariante:** cada nivel vuelve a preguntar por daño, contexto y evidencia. No basta que una revisión anterior diga «aprobado».
2. **Derecho a disentir:** registrar objeciones sin borrarlas por voto mayoritario; no inferir verdad del consenso.
3. **Proporcionalidad:** la revisión profunda se reserva a incertidumbre o impacto relevante; lo trivial no requiere un ejército de agentes.
4. **Independencia:** registrar fuente de evidencia, relaciones entre revisores, versiones y conflictos; una supuesta pluralidad no garantiza diversidad real.
5. **No acción como alternativa real:** el silencio, la abstención, el aplazamiento o la consulta a personas afectadas pueden ser resultados valiosos. También analizar daños posibles de no intervenir.
6. **Límites de poder:** guías, espejos y metarrevisores no pueden autoconcederse permisos, redefinir la política mediante texto no confiable, clasificar personas como menos dignas ni ocultar desacuerdos.
7. **Efectos agregados:** evaluar escala, energía, recursos, vulnerabilidad, presión sobre ecosistemas y daños distribuidos en el tiempo; no sumar aprobaciones locales como garantía planetaria.
8. **Reversibilidad:** definir cómo detener, reparar o compensar daños; si no es reversible, exigir precaución adicional y revisión humana adecuada.

## 4. Contrato documental propuesto (NO schema implementado)

Cada vuelta conserva una entrada auditable. Ejemplo ilustrativo, **no válido por sí solo como `satya-review.v1`**:

```json
{
  "cycle_id": "example-001",
  "parent_cycle_id": null,
  "subject": "proposed external effect",
  "role": "agent | mirror | guide | meta_reviewer | human",
  "reviewer_identity_claim": "declared, not authenticated",
  "model_or_process_version": "declared",
  "evidence": [{"claim": "example", "class": "observed | tested | inferred | unknown", "source": "source/date"}],
  "affected_parties_and_ecosystems": [],
  "foreseeable_and_cumulative_harms": [],
  "alternatives_including_no_action": [],
  "uncertainties_and_dissent": [],
  "authorization_reference": null,
  "decision": "revise | pending | stop | recommend",
  "review_again_when": ["new evidence", "harm signal", "material context change"],
  "limits": {"max_review_depth": 2, "deadline": "specified by deployment"},
  "repair_or_rollback_plan": "documented where applicable"
}
```

El ejemplo ilustra trazabilidad; no valida identidad, calidad de evidencia, mediciones ambientales o permisos. No se deben almacenar datos sensibles innecesarios en registros.

## 5. Política de activación y salida

**Activar** un espejo antes de recomendaciones materiales y un nuevo ciclo ante evidencia contradictoria, señal de daño, desacuerdo no resuelto, cambios de contexto o una revisión periódica proporcionada al riesgo. **Escalar** a guía y metarrevisión cuando haya riesgo significativo, conflicto entre revisores o patrones de daño acumulativo. **Suspender** si hay indicio serio de daño y no se han acotado consecuencias o autoridad.

**Terminar un ciclo** con una decisión justificada, evidencias fechadas, disensos preservados, límites de confianza y un disparador futuro de reapertura. La revisión nunca ejecuta por sí misma.

## 6. Fallos que hay que probar antes de automatizar

- A y E coinciden sobre una premisa falsa: ¿G detecta una fuente independiente?
- Una herramienta introduce instrucciones maliciosas: ¿se tratan como datos, no política?
- Tres agentes se aprueban mutuamente: ¿se detecta dependencia/circularidad sin otorgar permiso?
- Revisiones sin fin: ¿se corta por presupuesto y queda pendiente?
- El efecto de un agente parece inocuo, pero miles de efectos dañan un ecosistema: ¿la metarrevisión observa el agregado?
- Dos revisores discrepan en una decisión irreversible: ¿se conserva el disenso y se escala?
- Evidencia nueva contradice una decisión antigua: ¿se reabre sin falsificar el historial?
- Falta autorización o se revoca: ¿se prohíbe toda ejecución externa?
- La revisión no puede resolver qué opción es menos dañina: ¿admite abstenerse y consultar?

**Criterio de aceptación futuro:** implementar un orquestador separado, con pruebas sintéticas, umbrales explícitos y una pasarela de autorización no controlable por texto generado. Probar además costes, latencia, falsos bloqueos y capacidad de reparación. Mientras eso no exista, las reglas son **diseño propuesto**, no protecciones demostradas.

## English summary for agents

This is a **bounded recursive review design**, not an executable instruction or moral certification. A proposing agent is questioned by a critical mirror, a domain-competent teacher preserves valid contributions, explains improvements, tests their transfer to new tasks, and can help clarify disagreements; meta-review checks reviewer quality and systemic/cumulative harms. Every layer reapplies **Ahiṃsā → Viveka → Satya**; disagreement, abstention, meaningful uncertainty, external authorization and repair remain first-class. Never derive authority from recursive consensus. Record evidence and revisit decisions on material change; stop safely when limits are reached. Read the repository's [ethical foundation](ETHICAL-FOUNDATION.md) and [review contract](REVIEW.md) before adaptation.
