import fs from "node:fs/promises"
import path from "node:path"

export const dynamic = "force-static"

async function getOpEd(): Promise<string> {
  const filePath = path.join(process.cwd(), "juchegang", "content", "truth-project", "op-ed-core.md")
  try {
    const data = await fs.readFile(filePath, "utf8")
    return data
  } catch (err) {
    return "Error: Op-ed content not found."
  }
}

export default async function OpEdPage() {
  const content = await getOpEd()

  const lines = content.split("\n").filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-10">
      <article className="prose prose-invert max-w-3xl">
        {lines.map((line, idx) => {
          if (idx === 0) {
            return <h1 key={idx}>{line}</h1>
          }
          if (line.startsWith("— ") || line.startsWith("- ") || line.startsWith("—")) {
            return <p key={idx}>{line}</p>
          }
          if (/^[A-Z].+\b$/.test(line) && line.length < 80) {
            return <h2 key={idx}>{line}</h2>
          }
          return <p key={idx}>{line}</p>
        })}
      </article>
    </div>
  )
}


