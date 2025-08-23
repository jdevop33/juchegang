export async function translateText(text: string | string[], target: 'EN' | 'KR', source?: 'EN' | 'KR'): Promise<string | string[]> {
  const body = JSON.stringify({ text, target, source })
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    cache: 'no-store',
  })
  if (!res.ok) {
    return Array.isArray(text) ? text : text
  }
  const json = await res.json()
  const out = (json?.translations ?? []) as string[]
  return Array.isArray(text) ? out : out[0]
}
