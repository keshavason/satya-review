# Future fiscal module / Módulo fiscal futuro

This is a product-review example, not a tax engine or activated service. No invoices, certificates, AEAT submissions or customer data are included. The VeriFactu library is not bundled.

El módulo futuro permitirá automatizar operaciones definidas de facturación y remisión para clientes cuyo régimen y configuración estén cubiertos. No se mostrará «cumples todas tus obligaciones fiscales» por instalarlo o encender una opción.

| Estado por emisor | Qué significa para el cliente |
| --- | --- |
| No configurado | Faltan datos, alcance o autorizaciones. |
| Pruebas | Simulaciones y pruebas identificadas como tales; no emisión real. |
| Listo para activar | Condiciones verificadas; pendiente de habilitación autorizada. |
| Activo | Emisión habilitada para ese emisor y alcance comprobado. Mostrar qué cubre y última comprobación. |
| Incidencia | Operación afectada pausada o pendiente de conciliación; no ocultar rechazos o respuestas inciertas. |

An individual invoice needs separate status: draft, queued, sent with response unknown, accepted, rejected or correction required. An active module does not mean every invoice was accepted. A timeout is not success and does not justify blindly issuing another invoice.

Client activation needs verified issuer identity and regime, appropriate certificate or representation, authenticated tenant isolation, durable records, tested numbering and duplicate handling, recovery after failure, and the required system documentation. Preserve the responsible human or organization and a repair route. Keep certificates off the browser and out of repositories. Testing and production require separate controls.

**Candidate dependency:** [mdiago/VeriFactu](https://github.com/mdiago/VeriFactu), reviewed as a C#/.NET option. Its AGPL terms and offered commercial licensing need assessment for the chosen integration. A hosted provider is another option; operating costs, terms, privacy and export need verification. No option has been purchased or selected as a production supplier.

The [provider's REST documentation](https://facturae.irenesolutions.com/verifactu/go), consulted 2026-09-20, states that `Invoice.Status` must be `DRAFT` to avoid definitive submission through `Create`. A future adapter must deny submission by default and require an explicit, authorized operation; omitted status must never be treated as a safe draft.

English scope: future automation for verified invoicing operations, not automatic discharge of all tax obligations. This file is a design requirement, not evidence of a deployed or legally validated integration. Recheck current official requirements before implementation and activation.
