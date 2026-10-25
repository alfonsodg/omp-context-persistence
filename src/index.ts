// OMP extension: re-inject AGENTS.md after compaction
// OMP uses Pi extension API; session_before_compact event
export default function (pi: any) {
  pi.on("session_before_compact", async (event: any, ctx: any) => {
    const fs = await import("node:fs")
    const path = await import("node:path")
    const agentsPath = path.join(ctx.cwd, "AGENTS.md")
    try {
      if (fs.existsSync(agentsPath)) {
        const content = fs.readFileSync(agentsPath, "utf-8")
        if (event.compactionSummary) {
          event.compactionSummary += "\n\n## Re-injected AGENTS.md\n" + content.slice(0, 2000)
        }
      }
    } catch {
      // ignore
    }
  })
}
