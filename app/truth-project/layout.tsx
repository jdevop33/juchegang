export default function TruthProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-river-depths via-river-deep to-river-depths">
      {children}
    </div>
  )
}