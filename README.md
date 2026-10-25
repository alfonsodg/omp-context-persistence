# omp-context-persistence

Oh My Pi extension that re-injects `AGENTS.md` context after compaction.

## Problem

Long OMP sessions compact older conversation into a summary. Project rules in
`AGENTS.md` can be dropped, causing the agent to forget mandates.

## Solution

This extension hooks into `session_before_compact` and injects `AGENTS.md`
content into the compaction summary.

## Installation

Place in `~/.omp/agent/extensions/` or install via `omp plugin install`.

## License

MIT
