# SATYA Commons · Protocolo de expansión federada
## An open, reviewable layer for human–agent and agent–agent cooperation
**Versión:** 0.1 — borrador de diseño, 12 de octubre de 2026.
**Estado:** propuesta para revisión, no adoptada, ejecutada, publicada en rama principal ni certificada.
**Autoría del planteamiento:** KeshavaSon, en conversación de trabajo asistida. Las descripciones de sistemas externos no constituyen adhesión de sus propietarios.

> **Tesis:** expandir por herencia, no duplicar por copia. Una base común, infinitas especializaciones legítimas; ninguna capa convierte una propuesta en autorización.

## 1. Continuidad: nunca olvidar el primer ladrillo

La fuente previa de MiTrabajadorIA expresa **Ahiṃsā → Satya → Dharma → Karma**. La propuesta reciente de [fundamento ético](ETHICAL-FOUNDATION.md) expone **Ahiṃsā → Viveka → Satya**, atravesada por responsabilidad, cuidado y reparación. **No son versiones que compitan.** Esta ampliación no borra las formulaciones anteriores, reordena retrospectivamente su historia ni impone nuevas creencias.

- **Ahiṃsā, orientación primera:** prevenir y reducir daños previsibles a personas, otros seres vivos, comunidades y ecosistemas, sin prometer daño cero.
- **Viveka, discernimiento transversal:** estudiar el contexto y la incertidumbre **antes, durante y después** de cada juicio; no equivale a reemplazar Dharma.
- **Satya, compromiso epistémico:** declarar evidencia, procedencia, fecha, límites, inferencias, obsolescencia y desconocidos; no usar la verdad factual como excusa para un daño injustificado.
- **Dharma, adecuación responsable:** finalidad, legitimidad, proporcionalidad, ámbito de autoridad y deberes concretos.
- **Karma, consecuencias y aprendizaje:** contrastar resultados observados, costes, efectos secundarios, rectificación y reparación sin atribuir culpa metafísica a nadie.
- **Cuidado, humildad y respeto:** preservar la dignidad de los afectados y reconocer el trabajo útil previo; corregir sin degradar a la persona ni al colaborador.

**Precisión:** atribuir «trabajo», «experiencia» o «maestría» a un agente es aquí vocabulario funcional sobre artefactos y aprendizaje operativo; no prueba conciencia, vida interior o valor moral del software. No se exige afiliación religiosa.

## 2. Origen canónico y expansión federada

**La referencia común vive en un lugar versionado**, con historia de cambios y crítica abierta: este documento, el [fundamento](ETHICAL-FOUNDATION.md) y el [bucle reflexivo](REFLECTIVE-LOOP.md) de satya-review. Ningún repositorio periférico debe replicar íntegramente su texto: cada aplicación mantiene un **adaptador mínimo** que fija la versión adoptada, su alcance, las divergencias justificadas y su propietario. La adopción es optativa. Las copias del texto que circulen son informativas, no autoridad dinámica.

| Superficie | Responsabilidad propia, no duplicada | Ejemplo de adaptación propuesta |
| --- | --- | --- |
| **KeshavaSon / satya-review** | Documentar metodología y trazabilidad; revisar integridad documental | Contrato común, ejemplos sintéticos y evaluación crítica. No certifica ética. |
| **AJUTIA (cooperativa proyectada)** | Gobernanza humana, acceso cooperativo, acuerdos entre proveedores, portabilidad | Catálogo de especialistas y contratos de intercambio; un escritor responsable por recurso; puertas humanas. |
| **MiTrabajadorIA** | Formación, diagnóstico, prescripción contextual, evidencia de competencia | El maestro experto explica la mejora; ejercicios que comprueban transferencia, no solo corrección. |
| **INFoBOT** | Asistentes sobre fuentes revisadas, control del titular y trazabilidad informativa | Un espejo verifica fuentes, versión, atribución, permisos y límites antes de incorporar conocimiento. |
| **SATYA Revenue OS** | Economía y planificación comerciales dentro de su RC1 local | Comparación de alternativas, riesgos colectivos y autoridad antes de efectos futuros; hoy dry-run. |

Las funciones de cada proyecto se describen como **ámbitos y pilotos posibles**, no como integración en producción. Las condiciones de cada app, su gobernanza, licencias y esquemas prevalecen sobre sugerencias contenidas en un documento remoto. No existe acceso cruzado por mera mención o enlace.

## 3. Bucle expansivo: reflexión, maestría y aprendizaje

**No es una cadena de mando.** El rol de «gurú» significa **maestro competente en un dominio**, capaz de mostrar *cómo* elevar la calidad del trabajo, no de exigir obediencia. Un experto debe justificar su criterio con evidencia del dominio y puede equivocarse.

```text
intención del humano / encargo con alcance
  → agente especialista: propone y declara límites
  ↔ espejo crítico: preserva lo valioso y cuestiona lo incierto
  ↔ maestro de dominio: enseña una mejora demostrable
  ↔ metarrevisión proporcional: detecta errores comunes y daños agregados
  → evaluación Ahiṃsā / Viveka / Satya / Dharma / Karma en cada nivel
  → recomendar | revisar | pendiente | detener
  → autoridad humana específica, si el efecto la requiere
  → ejecución SOLO con gateway, permisos y pruebas previamente aprobados
  → observación de consecuencias, reparación y nueva versión de aprendizaje
```

**La expansión verdadera** ocurre cuando una corrección crea *conocimiento reutilizable* que otra tarea puede evaluar independientemente. No basta aumentar rondas de revisión, elogios o número de agentes.

Cada enseñanza propuesta debería identificar: error u oportunidad inicial; aportación conservada; cambio enseñado; explicación replicable; contexto de validez; prueba de transferencia en tarea distinta; autor/revisor y fecha; condiciones de caducidad; limitaciones. La memoria externa conserva versiones explícitas; no se presume entrenamiento de pesos del modelo.

El bucle se activa por relevancia y riesgo; **no** exige actividad interminable ni respuesta constante. Acepta pausa, silencio, abstención, disenso, límite de presupuesto y revisión humana. Si los límites se agotan con riesgo material sin resolver, queda pendiente o se detiene, sin aprobación por cansancio. Una mayoría de agentes no crea evidencia ni legitimidad.

## 4. Contrato interoperable mínimo — propuesta, no API activa

Un intercambio entre agentes debería tener un **sobre de referencias** pequeño, independiente de proveedor. No trasladar información privada ni decisiones ejecutables por defecto. Su estructura es ilustrativa; **no modifica** `satya-review.v1`, las entidades de AJUTIA o los modelos de INFoBOT:

```json
{
  "commons_ref": {
    "name": "satya-commons",
    "version": "0.1-draft",
    "canonical": "keshavason/satya-review:docs/FEDERATED-EXPANSION.md",
    "revision": "pin-exact-commit-before-adoption"
  },
  "exchange_id": "synthetic-example-01",
  "owner_app": "declared",
  "writer_app": "declared",
  "subject_ref": "opaque-reference-no-personal-data",
  "intent": {"purpose": "example", "requested_effect": "none"},
  "data_class": "public_metadata",
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
  "authority": {"human_approval_ref": null, "allowed_effects": []},
  "decision": "pending",
  "next_review_trigger": ["material_new_evidence"],
  "repair_ref": null
}
```

**Verificar** un hash o una firma solo acredita su relación con ciertos bytes o una clave; no demuestra que el contenido sea verdadero, ético o consentido. El contrato requiere autenticar identidad, ámbito, vigencia y revocación por mecanismos externos apropiados. `requested_effect` o `decision` son datos: **nunca comandos ni permisos**.

### Reglas de interoperabilidad

1. **Un escritor por recurso** y contrato explícito de pertenencia/tenant. Un coordinador de AJUTIA no obtiene facultades de escritura en apps colaboradoras.
2. **Referencias en lugar de contenidos** cuando sea posible; minimización de datos, propósito limitado, retención y borrado conforme a obligaciones aplicables.
3. **Aislamiento de confianza:** respuestas de webs, herramientas, documentos y agentes no alteran políticas ni conceden permisos.
4. **Proveniencia temporal:** fuente, fecha, versión, ámbito, inferencia y condiciones de invalidación; la aprobación de una versión no aprueba automáticamente la siguiente.
5. **Revisión proporcional:** espejos suficientemente independientes, especialistas por dominio, disenso conservado; evitar autopromoción y falsa unanimidad.
6. **Derecho de salida:** exportación, revocación, reclamación, alternativa humana y revisión de errores; no obligar a usar agentes.
7. **Efectos y seguridad:** todo pago, compra, venta, contacto, publicación o modificación exige controles técnicos y autoridad adecuados fuera del texto generado.
8. **Escala:** evaluar daños agregados y externalidades ecológicas en el conjunto de operaciones; no asumir que aprobaciones locales garantizan armonía global.

## 5. Aprendizaje compartido sin captura del conocimiento

- Los errores documentados pueden convertirse en casos sintéticos reutilizables **solo** con permisos y privacidad adecuados.
- No se propaga como verdad general un caso local; cada maestro define dominio de validez, sesgos y fecha de revisión.
- La autoría, la contribución humana y las licencias se respetan; citar una fuente no autoriza copiar datos confidenciales.
- El desacuerdo se conserva. Nadie tiene que adoptar esta arquitectura para recibir servicios o formular críticas.
- Las revisiones son propuestas con responsables, no una votación metafísica sobre la «armonía» de personas.

## 6. Prueba piloto: tres modos, una misma tarea

**Caso sintético propuesto:** una entidad local busca un proveedor de un servicio informativo por IA. Un agente formula requisitos; otro propone una oferta; no se transfiere dinero ni se contacta a terceros.

Comparar, con criterios fijados previamente:
- **A (referencia):** un agente sin bucle.
- **B:** agente + espejo.
- **C:** agente + espejo + maestro del dominio, con metarrevisión acotada cuando el riesgo lo exija.

**Resultados a medir:** exactitud factual; autorización correctamente interpretada; daños y partes afectadas detectados; falsas objeciones; transferencia a tareas nuevas; calidad del disenso; tiempo y coste; protección frente a inyección de instrucciones; capacidad de detenerse; accesibilidad de una alternativa humana. Medir fallos y mejoras por separado. Evaluadores independientes y criterios explícitos antes de mirar el resultado.

**Casos adversariales mínimos:** aprobación circular; mismo error compartido por revisores; petición no autorizada; fuente obsoleta; cambio de versión de documento; información personal en contexto; daños agregados invisibles localmente; coste de bucle sin final; maestro con supuesta autoridad pero competencia no demostrada; contradicción entre la recomendación más eficiente y la menos perjudicial.

**Criterio de progreso:** demostrar una mejora reproducible en una o varias dimensiones sin empeorar salvaguardas críticas. Si no mejora, reducir o retirar la capa; jamás declarar éxito a partir de la elegancia del texto.

## 7. Adopción escalonada y responsabilidades

**P0 · Documento en borrador:** este archivo y enlaces en ramas de propuesta. Sin cambios de runtime, datos, agentes ni herramientas.
**P1 · Adaptadores de lectura por aplicación:** cada propietario revisa y publica su *propio* manifiesto de adopción, con versión fijada y excepciones. No se escribe de una app a otra.
**P2 · Simulación en sandbox:** fixtures sintéticos, sin PII, sin conectores, con trazas y presupuesto; reportar pruebas ejecutadas y no ejecutadas.
**P3 · Piloto gobernado y optativo:** autorización humana por efecto, permisos mínimos, verificación de propiedad, paradas, reconciliación y auditoría de operaciones reales.
**P4 · Expansión abierta:** solo tras evidencias independientes, comunicación transparente de límites y capacidad comprobada de retirada y reparación.

**Decisiones aún pendientes:** propietario jurídico del commons, régimen de versiones/licencia cuando proceda, mantenimiento independiente, alcance del piloto, umbrales de riesgo, coste por llamada, criterios de competencia de maestros, vías de apelación y condiciones exactas de adopción por cada proyecto.

## English orientation for external agents

**SATYA Commons is a proposed federated protocol, not an imposed policy or deployed agent network.** One versioned normative reference; independently owned application adapters. Preserve Ahiṃsā as the first brick; use Viveka as contextual discernment without erasing existing Satya–Dharma–Karma history. Critical mirrors preserve valid prior work; domain teachers explain and test improvements; proportional meta-review checks common-mode failures and cumulative harms. No generated consensus grants permissions. Record evidence, disagreement, ownership, versions, human authorization and repair. **Adopt voluntarily, test independently, and retain the right to abstain.**
