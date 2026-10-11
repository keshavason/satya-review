# satya-review

[English](README.en.md)

[![Verificación en Linux y Windows](https://github.com/keshavason/satya-review/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/keshavason/satya-review/actions/workflows/ci.yml)

Una revisión legible de una entrega, vinculada a sus archivos. Responde ocho preguntas sobre finalidad, afectados, daños, incertidumbre, alternativas, autoridad, cuidado y reparación. Después comprueba si cambiaron los archivos o la revisión.

**Un documento completo y unos hashes coincidentes no certifican ética, seguridad, cumplimiento legal ni aprobación humana.** La identidad y las decisiones del revisor son declaraciones, no credenciales autenticadas.

Prototipo 0.1 de KeshavaSon, basado en la metodología de [MiTrabajadorIA](https://mitrabajadoria.es/metodologia). Para equipos que necesitan explicar qué revisaron, qué falta y qué cambió. No exige adhesión religiosa ni puntúa personas.

## Fundamento ético: no se olvida el primer ladrillo

La secuencia **Ahiṃsā (no daño) → Viveka (discernimiento) → Satya (verdad)** orienta la revisión: examinar primero los daños a seres, personas y ecosistemas; discernir contexto, incertidumbre y alternativas; y declarar honestamente lo observado y lo desconocido **desde el comienzo y durante toda la revisión**. Responsabilidad y reparación atraviesan todas las etapas.

Consulta [el fundamento ético y sus límites](docs/ETHICAL-FOUNDATION.md). Esta precedencia **no está automatizada ni demostrada por los hashes**: el programa documenta una revisión, pero no certifica que la decisión sea ética ni autoriza efectos externos.

## Bucle reflexivo de agentes y espejos (propuesta)

El [protocolo de revisión multinivel](docs/REFLECTIVE-LOOP.md) explora el ciclo **agente → espejo crítico → guía falible → metarrevisión**, con límites, disenso documentado, efectos acumulativos y reapertura cuando cambian las evidencias. Mantiene Ahiṃsā → Viveka → Satya en cada vuelta. **Es diseño revisable, no una función automática del prototipo 0.1.**

## Expansión federada sin duplicación (propuesta)

La [arquitectura SATYA Commons](docs/FEDERATED-EXPANSION.md) propone **una referencia versionada y adaptaciones voluntarias por proyecto**, sin copiar íntegramente el fundamento ni conferir permisos entre aplicaciones. AJUTIA aporta la gobernanza cooperativa, MiTrabajadorIA la formación y maestría de dominio, INFoBOT la gestión de fuentes; SATYA Review conserva la trazabilidad documental. Las aplicaciones hermanas no se han modificado ni conectado automáticamente mediante esta propuesta. El [contrato mínimo de adopción](docs/ADOPTION-CONTRACT.md) distingue leer una propuesta de adoptarla formalmente: exige responsable, revisión fijada por commit, diferencias, evidencia y derecho de retirada. **Enlaces a ramas de borrador son mutables, no adopciones verificadas.**

## Presencia sin posesión: libertad interior y acompañamiento (propuesta)

La [carta de presencia sin posesión](docs/PRESENCE-WITHOUT-POSSESSION.md) traduce respeto radical, escucha, posibilidad de silencio, libertad espiritual y cuidado del presente en criterios de interacción y pruebas adversariales. Honra el significado personal de sat-cit-ānanda sin imponer creencias, medir estados interiores ni prometer felicidad. Es una capa voluntaria para futuras adaptaciones de AJUTIA, MiTrabajadorIA e INFoBOT; **no está implementada ni certificada**.

## Uso local

Requiere Node.js 22 o superior. No necesita instalar paquetes, cuentas, claves, modelos ni servidor. Abre una terminal en esta carpeta:

```text
node bin/satya.mjs init ./mi-entrega
```

La carpeta de entrega debe existir. Edita `mi-entrega/.satya/review.json` con tus respuestas y evidencia. Conserva `pending` si hay una decisión pendiente. Después:

```text
node bin/satya.mjs capture ./mi-entrega
node bin/satya.mjs verify ./mi-entrega
node bin/satya.mjs report ./mi-entrega --lang es
```

`capture` registra el contenido actual. Hazlo tras examinarlo; el programa no realiza esa revisión por ti. Capturar de nuevo sustituye el recibo anterior y no prueba que haya habido otra revisión. Conserva versiones aparte cuando necesites historial. No captures mientras otros procesos escriben en la entrega.

`verify` distingue integridad de archivos y estado documental. `documented` significa campos cumplimentados, incluso si la decisión anotada es detenerse. `match` significa coincidencia respecto al recibo local disponible. Ninguno autoriza publicar. Una decisión pendiente devuelve código 3; una discrepancia o error, 2; una revisión documentada con coincidencia, 0. Los comandos imprimen resultados; `report` imprime Markdown.

Guarda el informe **fuera** de la entrega si quieres conservar intacto el inventario. `init` no sobrescribe una revisión existente. Examina los errores antes de volver a capturar.

## Alcance de la comprobación

Incluye recursivamente todos los archivos regulares dentro de la carpeta indicada, excepto `.git/` y `.satya/` de su raíz. No aplica `.gitignore`: archivos ignorados por Git también entran en el inventario. El recibo liga por separado el contenido de `.satya/review.json`. Otros archivos de `.satya/` no quedan cubiertos.

Rechaza enlaces simbólicos, junctions y rutas no admitidas. La carpeta raíz define el alcance: selecciona una entrega limpia, sin secretos, datos de clientes ni dependencias voluminosas. Aunque no se transmite nada, los nombres de archivos y las respuestas también pueden ser confidenciales.

Comprueba cambios, altas y bajas. No descarga ni verifica las fuentes citadas. No autentica revisores, no firma recibos, no detecta malware y no vigila continuamente la carpeta. Quien pueda cambiar archivos, revisión y recibo puede reconstruir una coincidencia. El inventario no es una transacción atómica frente a escrituras simultáneas.

## Tres ejemplos sintéticos

```text
node bin/satya.mjs verify examples/complete
node bin/satya.mjs report examples/pending --lang es
node bin/satya.mjs verify examples/changed
```

`complete` documenta una entrega ficticia. `pending` deja una decisión abierta. `changed` contiene un cambio deliberado posterior a la captura y debe señalarlo. No son proyectos de clientes, facturas reales ni pruebas de una integración fiscal.

## Desarrollo y evidencia

```text
npm test
```

GitHub Actions ejecuta esta misma suite con Node.js 22 en Linux y Windows. El indicador superior muestra el estado actual de esa comprobación; no certifica los usos que se hagan de la herramienta.

Consulta [el alcance probado](docs/VALIDATION.md), [el modelo de revisión](docs/REVIEW.md), [las limitaciones y atribuciones](docs/DECISION.md) y [el ejemplo de módulo fiscal futuro](docs/FISCAL-MODULE.md). Las pruebas y el uso interno no demuestran demanda de mercado ni ahorro económico. No hay telemetría, llamadas de red, dependencias de ejecución ni API de pago en esta herramienta. Ejecutarla y mantenerla sí tiene coste de equipo y tiempo.

Licencia MIT para este código original. No incorpora la biblioteca VeriFactu ni cambia su licencia. Si esta forma de revisar te resulta útil, puedes conocer [la metodología y servicios de MiTrabajadorIA](https://mitrabajadoria.es/metodologia).
