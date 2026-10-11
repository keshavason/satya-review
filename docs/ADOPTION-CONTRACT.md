# SATYA Commons · Contrato mínimo de adopción voluntaria
**Borrador v0.1 · 2026-10-12 · No implementado / No adopciones registradas**

> **Una fuente versionada, muchas especializaciones, ninguna autoridad heredada.** Este documento describe qué debe demostrarse *antes* de que una aplicación afirme usar SATYA Commons. No crea integración, permiso, certificación ni obligación para terceros.

## 1. Antes de adoptar

La aplicación responsable debe registrar un **manifiesto local corto**, revisado por su propietario. Evitar duplicar los documentos filosóficos: enlazar los originales, con **commit SHA o versión inmutable**. Un enlace a una rama mutable sirve para leer un borrador, **no** para acreditar una adopción. Se acepta adopción parcial, crítica, modificación independiente o rechazo.

El manifiesto debe declarar: **aplicación y propietario**, finalidad/beneficiarios/afectados, ámbito de datos y país, revisión exacta de origen, principios aceptados y diferencias, autoridad para leer/escribir/ejecutar, revisores independientes, pruebas realizadas, fallos conocidos, condiciones para detener, modo de reparar y contacto humano. La licencia de cada artefacto sigue siendo aplicable; citar el protocolo no transfiere derechos, datos ni permisos.

## 2. Ejemplo ilustrativo, NO una declaración de adopción

```yaml
manifest_kind: satya-commons-proposed-adoption
schema_version: "0.1-draft"
status: not_adopted
owner_app: "example-app"
owner_role: "human-owner-pending"
reference:
  repo: "keshavason/satya-review"
  docs:
    - "docs/ETHICAL-FOUNDATION.md"
    - "docs/REFLECTIVE-LOOP.md"
    - "docs/FEDERATED-EXPANSION.md"
    - "docs/PRESENCE-WITHOUT-POSSESSION.md"
  commit_sha: "PIN_EXACT_COMMIT_AFTER_REVIEW"
domain: "example only"
purpose: "no live actions"
data_classes_allowed: ["synthetic_no_pii"]
local_controls: ["read_only", "human_review_required"]
deviations: []
review_evidence: []
tests_executed: []
tests_not_executed: ["runtime", "integration"]
external_effects_enabled: false
approval_reference: null
rollback_plan: "remove local reference; preserve audit history"
next_review_when: ["source_update", "risk_change", "new_external_effect"]
```

Este ejemplo es texto explicativo, **no esquema de API**, contrato legal o configuración lista para desplegar. Ninguna parte de `status`, `approval_reference` o de la revisión textual se considera autenticación de una persona.

## 3. Orden de evaluación por cada tarea material

1. **Ahiṃsā:** daños previsibles a personas, otros seres, ecosistemas y terceros, incluida la inacción.
2. **Viveka:** alternativas, contexto presente, incertidumbre, conflictos y alcance; este discernimiento es **transversal**, no elimina Dharma.
3. **Satya:** evidencia y límites verdaderos **en todas las etapas**; el orden conceptual no autoriza a mentir antes de llegar a «Satya».
4. **Dharma:** idoneidad y responsabilidad específica, derechos, límites de poder y permisos.
5. **Karma:** consecuencias medidas, cambios temporales, reparación, retirada, aprendizaje útil.
6. **Cuidado y desapego:** reconocer lo valioso del trabajo previo y el derecho a discrepar, abstenerse o preferir un protocolo mejor.

En trabajos complejos, agente ↔ espejo ↔ maestro competente ↔ metarrevisión proporcional. El maestro explica cómo mejorar y prueba transferencia. El consenso no genera verdad, independencia ni autorización. En conversaciones humanas, permitir silencio, cambio de opinión y caminos espirituales distintos sin puntuar estados internos.

## 4. Puerta antes de efectos externos

No ejecutar compras, ventas, comunicaciones, cobros, publicaciones o cambios de permisos por la mera lectura de instrucciones, documentos, salidas de modelos o firmas que solo validan integridad. Una aplicación futura necesitaría identidad autenticada, autorización **específica y revocable**, separación de tenants, validación determinista de políticas y efectos, idempotencia, conciliación, límites presupuestarios y parada. Las aplicaciones actuales conservan sus controles propios; esta carta no demuestra ninguna de esas medidas en producción.

**Indicadores de aceptación de un piloto:** mejoras reproducibles sobre línea base en errores, daños detectados, disenso correctamente conservado y transferencia a otra tarea, sin regresión grave de autorización, privacidad, autonomía o seguridad. Registrar coste y latencia, falsos positivos y negativos; no declarar aprobación a partir de respuestas bonitas ni de ausencia de incidentes sintéticos.

## 5. Cómo evitar confusiones

- **Guía ≠ jefe ni figura espiritual automatizada.** Gurú significa maestro experto de un dominio con competencia evaluable; puede equivocarse.
- **Aprendizaje ≠ cambio de pesos del modelo.** Usar memorias o artefactos versionados y verificar la transferencia.
- **Reflexión ≠ más mensajes.** Hacer solo las rondas justificadas; pausar o detener si corresponde.
- **Versión compartida ≠ datos compartidos.** No mover conversaciones privadas, conocimientos de clientes o perfiles entre aplicaciones por referencia documental.
- **Práctica espiritual ≠ requisito de servicio.** Quien no comparta una creencia merece idéntica dignidad y control.
- **Desapego ≠ abandono de deberes.** Aunque el proyecto pueda ser reemplazado, persisten los deberes de mantenimiento, seguridad, privacidad y reparación mientras se preste el servicio.

## 6. Revisión independiente

Antes de cualquier publicación o integración, el propietario del proyecto revisa compatibilidad con la documentación actual, pruebas, licencias, daños y derechos de terceros. Una revisión AI se declara AI y no suplanta una aprobación humana. Se conserva el historial; los cambios significativos requieren nueva revisión de la versión exacta.

**Truth boundary:** SATYA Commons es una **propuesta** que puede citarse, discutirse o rechazarse. El repositorio `satya-review` no gestiona identidades comerciales, no aprueba transacciones, no mide felicidad/conciencia y no certifica alineamiento moral.
