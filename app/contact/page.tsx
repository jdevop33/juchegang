"use client"

import { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ContactForm } from "@/components/contact-form"

function ContactPageContent() {
  const params = useSearchParams()

  const initial = useMemo(() => {
    const Name = params.get("name") || undefined
    const Email = params.get("email") || undefined
    const Subject = params.get("subject") || undefined
    const Message = params.get("message") || undefined
    return { Name, Email, Subject, Message }
  }, [params])

  return <ContactForm initialValues={initial} />
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Contact</h1>
          <p className="text-white/80 mt-2">We'll reply as soon as we can.</p>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactPageContent />
        </Suspense>
      </div>
    </main>
  )
}


