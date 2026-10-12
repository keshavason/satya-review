# SATYA Commons · Protocolo de expansión federada
## A reviewable proposal for human–agent and agent–agent cooperation

**Versión documental:** 0.1 · 2026-10-12.
**Estado:** propuesta documental para discusión y evaluación; no red implementada, adopción verificada ni certificación.
**Planteamiento:** KeshavaSon, con asistencia de IA en la elaboración y revisión. La mención de un proyecto no acredita adhesión de sus responsables.

> Una referencia compartida, múltiples especializaciones y ninguna autoridad heredada por simple lectura. Preservar el origen no exige depender permanentemente de él.

## 1. Continuidad del primer ladrillo

El [fundamento ético](ETHICAL-FOUNDATION.md) conserva la secuencia histórica Ahiṃsā → Satya → Dharma → Karma y explicita Viveka como discernimiento transversal. No se reescribe esa historia ni se impone afiliación religiosa.

- **Ahiṃsā:** orientar finalidades y medios para prevenir o reducir daños previsibles a personas, otros seres vivos, comunidades y ecosistemas, incluyendo los daños de no actuar.
- **Viveka:** examinar contexto, alternativas, incertidumbre e incentivos durante todo el proceso.
- **Satya:** mantener honestidad en cada afirmación desde el inicio; declarar fuente, versión, fecha, inferencias y desconocidos.
- **Dharma:** delimitar responsabilidad, competencia y autoridad para la operación concreta.
- **Karma:** contrastar consecuencias previstas y observadas, corregir errores propagados y reparar donde sea posible.
- **Prema / cuidado:** reconocer aportaciones válidas, enseñar sin humillar y respetar autonomía, desacuerdo y salida.

Estos compromisos actúan conjuntamente. Ningún orden gráfico permite posponer la verdad o suspender el cuidado. Hablar de trabajo, experiencia o maestría de un agente describe aquí funciones y artefactos; no demuestra vida interior del software.

## 2. Referencia compartida sin dependencia obligatoria

Cada aplicación conserva un **adaptador mínimo** que identifica la revisión de origen, el alcance, las diferencias y su responsable. Consultar el [contrato de adopción](ADOPTION-CONTRACT.md). La aceptación no se deduce de una visita, enlace o coincidencia de vocabulario.

**Evitar copias divergentes sin procedencia, no prohibir la copia.** Son posibles copias identificadas, archivos de preservación, uso sin conexión y adaptaciones bajo la licencia aplicable. Mantener atribución, versión de origen y diferencias. Estas recomendaciones de trazabilidad no añaden restricciones a la licencia ni transfieren derechos sobre datos ajenos.

Una copia verificable de una versión puede servir como referencia local: no necesita una consulta permanente al repositorio central. La actualización de ese repositorio nunca modifica automáticamente las decisiones de sus adoptantes. Cada responsable puede rechazar una actualización, retirar su adaptación o preferir otro marco.

Para fijar una revisión, usar un commit exacto y comprobar el contenido pertinente. Una rama o etiqueta puede cambiar; no sustituye por sí sola la fijación del commit. La identidad y autorización del responsable se verifican separadamente: un SHA no las acredita.

| Superficie | Ámbito propuesto | Límite |
| --- | --- | --- |
| **satya-review** | Metodología y trazabilidad documental | No certifica decisiones éticas. |
| **AJUTIA** | Gobernanza cooperativa, portabilidad y acuerdos entre proveedores | No recibe escritura ni autoridad sobre otras apps por referencia. |
| **MiTrabajadorIA** | Formación y maestría de dominio con transferencia comprobable | No califica conciencia ni dignidad de alumnos. |
| **INFoBOT** | Fuentes revisadas y trazabilidad informativa | Una fuente aprobada no se convierte en verdad universal. |
| **SATYA Revenue OS** | Planificación comercial y evaluación local | La propuesta no cambia la operación dry-run de RC1. |

Son ámbitos de adaptación posibles, no afirmaciones de integración desplegada, situación jurídica o participación confirmada. Cada proyecto conserva sus permisos, licencias, esquemas y gobernanza. No existe acceso cruzado por mera mención.

## 3. Bucle expansivo: revisión y enseñanza

El [bucle reflexivo](REFLECTIVE-LOOP.md) no es una cadena de mando. Un maestro de dominio explica **cómo mejorar**, conserva lo acertado y puede equivocarse.

```text
encargo con finalidad y alcance
 -> agente: propuesta, evidencia y límites
 <-> espejo crítico: objeciones y alternativas defendibles
 <-> maestro de dominio: mejora explicada y prueba de transferencia
 <-> metarrevisión proporcional: errores comunes y efectos agregados
 -> recomendar | revisar | pendiente | detener
 -> autorización separada y controles técnicos, si corresponde
 -> ejecución SOLO por un sistema habilitado y autorizado
 -> observación, reparación y aprendizaje versionado
```

No todos los encargos necesitan todos los roles. Fijar antes del ciclo límites de coste, tiempo y profundidad, además de disparadores de reapertura. Cuando se agoten con riesgo material sin resolver, mantener pendiente o detener: nunca aprobar por cansancio. El silencio y la abstención son alternativas, pero también deben considerarse sus consecuencias.

La expansión útil consiste en conocimiento reutilizable **evaluado en otra tarea**, no en más rondas o más agentes. Cada enseñanza registra problema inicial, aporte conservado, mejora, fundamento, contexto de validez, prueba de transferencia, fecha y limitaciones. No se presume entrenamiento de pesos del modelo.

Varios revisores que comparten fuentes, modelo, contexto o incentivos pueden compartir errores. Declarar esas dependencias y conservar el disenso; no simular independencia cambiando nombres de rol. La evidencia puede corregir al autor, cliente, maestro y protocolo.

## 4. Intercambio mínimo: ejemplo, no API

Un intercambio debería transportar referencias y el mínimo contenido autorizado. Este ejemplo no modifica `satya-review.v1` ni constituye una configuración ejecutable:

```json
{
  "commons_ref": {
    "name": "satya-commons",
    "document_version": "0.1-proposal",
    "source": "keshavason/satya-review:docs/FEDERATED-EXPANSION.md",
    "commit_sha": "PIN_EXACT_REVIEWED_COMMIT"
  },
  "exchange_id": "synthetic-example-01",
  "owner_app": "declared-not-authenticated",
  "writer_app": "declared-not-authorized",
  "subject_ref": "synthetic-reference",
  "intent": {"purpose": "example", "requested_effect": "none"},
  "data_class": "synthetic_no_pii",
  "evidence_refs": [],
  "uncertainties": [],
  "affected_parties_and_environment": [],
  "alternatives_including_no_action": [],
  "review": {
    "proposer_ref": "declared",
    "mirror_ref": null,
    "domain_teacher_ref": null,
    "dissent_refs": [],
    "retained_contribution": null,
    "transfer_test_ref": null
  },
  "authority": {"approval_ref": null, "allowed_effects": []},
  "decision": "pending",
  "next_review_trigger": ["material_new_evidence"],
  "repair_ref": null
}
```

Un hash o una firma acredita una relación limitada con bytes o una clave; no demuestra verdad, ética, competencia ni consentimiento. Los campos de identidad, decisión y efectos son datos, nunca permisos por sí mismos. Una implementación necesita autenticación, autorización específica, vigencia y revocación fuera del texto generado.

### Invariantes para una implementación futura

1. **Pertenencia y escritura:** un escritor responsable por recurso, separación entre tenants y contrato explícito. Coordinar no concede escritura.
2. **Minimización:** referencias cuando basten, propósito limitado, acceso autorizado, retención y corrección apropiados. Una referencia opaca también puede ser sensible si permite reidentificación.
3. **Aislamiento de confianza:** contenido de webs, herramientas, documentos y agentes no altera políticas ni permisos.
4. **Procedencia temporal:** registrar fuente, versión, fecha, inferencia e invalidación. Aprobar una versión no aprueba la siguiente.
5. **Revisión real:** preservar objeciones, relaciones entre revisores y pruebas; no elevar consenso a evidencia independiente.
6. **Salida y reparación:** revocación, exportación apropiada, reclamación y alternativa humana; no exigir adhesión doctrinal.
7. **Efectos externos:** compras, cobros, comunicaciones, publicaciones y cambios requieren autorización separada, validación de alcance, idempotencia, límites presupuestarios, conciliación y parada.
8. **Escala:** evaluar costes y daños acumulativos, incluidos recursos y externalidades ecológicas. Aprobaciones locales no prueban seguridad global.

Estas son condiciones de diseño. Su implementación y eficacia deben demostrarse por separado.

## 5. Presencia y aprendizaje sin captura

La [carta de presencia](PRESENCE-WITHOUT-POSSESSION.md) protege intención actual, libertad, silencio y cambio de opinión. No pretende determinar eternidad, felicidad, espiritualidad o valor moral de personas.

Los errores pueden convertirse en casos sintéticos reutilizables únicamente con privacidad, permisos y atribuciones apropiados. Sintetizar o quitar un nombre no demuestra anonimato. Un caso local no se propaga como verdad general: conservar su ámbito de validez y condiciones de revisión.

Aplicar el marco en un proyecto privado **no autoriza divulgarlo** ni publicar sus conversaciones o materiales. Reutilizar conocimiento no equivale a compartir datos de clientes, custodios o colaboradores. La autoría y la licencia del protocolo no transfieren derechos sobre esos contenidos.

## 6. Piloto comparativo propuesto, todavía no ejecutado

**Caso sintético:** una entidad local compara ofertas de un servicio informativo de IA. No contactar proveedores ni transferir dinero.

Comparar A (agente solo), B (agente y espejo) y C (agente, espejo y maestro; metarrevisión solo cuando proceda). Fijar criterios antes de evaluar y controlar o informar diferencias de presupuesto, fuentes y número de intentos.

Medir exactitud, interpretación de permisos, daños detectados y omitidos, falsas objeciones, disenso preservado, transferencia, capacidad de detenerse, accesibilidad, coste y latencia. Evaluar con tareas distintas de las usadas para ajustar el método y declarar dependencias entre evaluadores.

Casos adversariales: aprobación circular; error compartido; solicitud no autorizada; fuente obsoleta; cambio de versión; información privada; daño agregado; bucle sin final; competencia no demostrada; oferta favorable al propio proveedor pero peor para el usuario; revisión que empeora una respuesta correcta.

**Criterio de progreso:** mejora reproducible sin regresión grave de salvaguardas críticas. La ausencia de incidentes sintéticos no certifica seguridad real. Si una capa no aporta beneficio, reducirla o retirarla; la elegancia del texto no es un resultado experimental.

## 7. Adopción escalonada

**P0 · Propuesta documental pública:** permite lectura y crítica; no activa software ni acredita adopciones.
**P1 · Adaptación declarada:** cada titular fija un commit, alcance, diferencias y controles locales. Publicar solo la parte autorizada del manifiesto, sin secretos o datos personales innecesarios.
**P2 · Simulación aislada:** casos sintéticos, presupuesto acotado y ausencia de efectos externos; distinguir pruebas ejecutadas y pendientes.
**P3 · Piloto optativo:** solo con permisos, pruebas, responsable, observación, conciliación y retirada apropiados para el efecto real.
**P4 · Expansión evaluada:** requiere evidencias independientes y comunicación explícita de límites.

Quedan por resolver para etapas operativas: responsables por implementación, competencia y selección de maestros, independencia, presupuesto, umbrales de riesgo, apelación, mantenimiento y pruebas de reparación. No se resuelven publicando este documento. La [licencia del repositorio](../LICENSE) se mantiene; esta propuesta no constituye una licencia nueva.

## English orientation

SATYA Commons v0.1 is a **public documentary proposal**, not a deployed federation. Maintain a versioned reference while permitting identified copies, archival preservation and independent adaptations under the applicable license. Pin exact commits; do not inherit authority, data access or automatic updates. Non-harm, discernment, truthfulness, responsibility, consequence review and care apply together. Teachers demonstrate improvements and transfer; mirrors preserve dissent; meta-review is risk-bounded. Publish only authorized material. Tests and independent assessment remain necessary before any operational claim or live implementation.
