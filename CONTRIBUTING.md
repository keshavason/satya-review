# Contribuir / Contributing

Gracias por ayudar a que `satya-review` sea más claro, comprobable y útil. El proyecto es pequeño a propósito: prioriza correcciones, accesibilidad, portabilidad y ejemplos reproducibles sobre añadir funciones por volumen.

Thank you for helping make `satya-review` clearer, verifiable and useful. The project is intentionally small: fixes, accessibility, portability and reproducible examples take priority over feature volume.

## Antes de proponer un cambio / Before proposing a change

- Busca primero incidencias y pull requests abiertos para evitar duplicados.
- Explica el problema concreto, quién se beneficia y la alternativa de no cambiar el código.
- Usa datos sintéticos. No publiques datos de clientes, credenciales, historiales privados ni material de terceros sin permiso y atribución.
- Indica las plataformas y versiones que probaste. No conviertas una lectura de código en una prueba ejecutada.
- Declara la asistencia de IA cuando haya influido materialmente en el código, las pruebas o la documentación. No atribuyas revisión humana si no ocurrió.

- Search existing issues and pull requests first to avoid duplicates.
- Describe the concrete problem, who benefits, and the option of leaving the code unchanged.
- Use synthetic data. Do not publish client data, credentials, private histories or third-party material without permission and attribution.
- State the platforms and versions you actually tested. Do not present code inspection as an executed test.
- Disclose material AI assistance in code, tests or documentation. Do not claim human review when none occurred.

## Flujo local / Local workflow

Requiere Node.js 22 o superior y no instala dependencias de ejecución.

Requires Node.js 22 or newer and installs no runtime dependencies.

```text
npm test
node bin/satya.mjs verify examples/complete
node bin/satya.mjs verify examples/changed
```

Una contribución debe conservar los ejemplos sintéticos, actualizar la documentación afectada y añadir una prueba negativa cuando corrija un fallo o introduzca una validación. Si cambia el formato de revisión o recibo, explica compatibilidad, migración y recuperación.

A contribution should preserve the synthetic examples, update affected documentation and add a negative test when it fixes a defect or adds validation. If it changes the review or receipt format, explain compatibility, migration and recovery.

## Criterio de revisión / Review standard

Describe en el pull request:

1. finalidad y alcance;
2. archivos y comportamiento cambiados;
3. pruebas ejecutadas y resultados;
4. privacidad, permisos y efectos externos;
5. límites conocidos, riesgo residual y forma de revertir;
6. asistencia IA y revisión humana reales.

El mantenimiento puede pedir un cambio, reducir el alcance o rechazar una propuesta sin juzgar a la persona. Un hash coincidente, un formulario completo o una revisión IA no certifican ética, seguridad, legalidad ni aprobación humana.

In the pull request, describe purpose and scope, changed behavior, executed tests, privacy and external effects, known limits, rollback, and the real AI/human review performed. Maintenance decisions concern the contribution, never a person's dignity. A matching hash, completed form or AI review does not certify ethics, security, legality or human approval.
