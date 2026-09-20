# Validation status

Checked on 2026-09-20 by AI agents. The final independent CLI test run completed 19 cases: **18 passed, 0 failed, 1 skipped**, in approximately 5.4 seconds. Windows denied creation of a file symlink (EPERM), so that case could not exercise the rejection; a separate test successfully created a directory junction and verified rejection of a redirected metadata directory. No claim of independent human review is made.

Review found that the first test fixture directory depended on the development workspace layout. It was changed to a generated directory under the operating system temporary folder, retaining bounded cleanup checks. The suite above was rerun after this change; this records a repair, not a production incident.

Packaging review also found that automatic Git line-ending conversion could invalidate byte-based example receipts after checkout. `.gitattributes` now disables text conversion. A checkout from the Git index with `core.autocrlf=true` preserved the complete example (`match`) and the intentionally modified example (`changed`). This is a tested distribution check on Windows, not a claim of cross-platform execution.

The current acceptance scope is CLI behavior on Windows with Node.js 24.18.0; Linux and macOS remain unverified. The package targets Node 22+, but older supported runtime versions require their own run before claiming tested compatibility.

The completed checks covered unchanged, added, removed and modified files; changed review; damaged receipt; path traversal and duplicate paths; pending decisions; a recorded stop decision; escaping of untrusted report content; initialization without overwrite; and a local workflow with common network and child-process APIs disabled. Static reading found only filesystem, path and crypto imports. This is bounded evidence, not a complete security audit or proof covering every operating-system primitive.

The release workflow also applies the tool to its own source delivery and a separate copy of the future fiscal-module design document. These uses record technical outcomes and elapsed processing time separately from human review effort. They do not substitute for independent human review, prove market demand, quantify savings or test a fiscal integration. Final receipts belong to their captured release; regenerate and review them after any content changes.
