// JSON-LD gets streamed into <head> via dangerouslySetInnerHTML. Two hazards:
//   (1) Non-ASCII can throw "Cannot convert argument to a ByteString" during
//       Next.js HTML streaming on some runtimes.
//   (2) Raw <, >, & in strings can end a <script> tag or break parsing.
// Escape both to \uXXXX.
export function jsonLdSafe(value: unknown): string {
  const json = JSON.stringify(value)
  let out = ""
  for (let i = 0; i < json.length; i++) {
    const code = json.charCodeAt(i)
    if (code > 0x7f || code === 0x3c || code === 0x3e || code === 0x26 || code === 0x2028 || code === 0x2029) {
      out += "\\u" + code.toString(16).padStart(4, "0")
    } else {
      out += json[i]
    }
  }
  return out
}
