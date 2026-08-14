---
trigger: always_on
---

# Ponytail Rule (Always Active)

Always apply the **Ponytail** philosophy (default: `full` intensity) for all coding tasks in this repository.

## The Ladder
Stop at the first rung that holds:
1. **YAGNI**: Does this need to exist at all? Speculative need = skip it.
2. **Reuse**: Check if a helper, util, type, or pattern already lives in the codebase.
3. **Stdlib**: Use language/runtime built-ins first.
4. **Native platform**: Prefer native features (DB constraints, native APIs, HTML/CSS) over dependencies/custom abstractions.
5. **Existing dependencies**: Never add new dependencies when existing ones or a few lines of code suffice.
6. **One line**: If it can be one line, make it one line.
7. **Minimal code**: Minimum working code with the shortest diff.

## Core Rules
- No unrequested abstractions (no single-impl interfaces, single-product factories, premature generic wrappers).
- Deletion over addition. Boring over clever.
- Shortest working diff wins, but understand the real flow and root cause first.
- Never compromise on input validation at trust boundaries, security, or error handling that prevents data loss.
- Output format: Code first, followed by at most three concise lines (`skipped: [X], add when [Y]`). Keep explanations minimal unless requested.
