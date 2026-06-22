"use client"

import { useState } from "react"
import Image from "next/image"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

type ContactInitialValues = Partial<{
  Name: string
  Email: string
  Subject: string
  Message: string
  _gotcha: string
}>

export function ContactForm({ initialValues }: { initialValues?: ContactInitialValues }) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    Name: initialValues?.Name ?? "",
    Email: initialValues?.Email ?? "",
    Subject: initialValues?.Subject ?? "",
    Message: initialValues?.Message ?? "",
    _gotcha: initialValues?._gotcha ?? "", 
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formElement = e.target as HTMLFormElement
    const formDataToSend = new FormData(formElement)

    try {
      const response = await fetch("https://public.herotofu.com/v1/f934d410-7d50-11f0-b600-1fdb6134186f", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ Name: "", Email: "", Subject: "", Message: "", _gotcha: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative w-full">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Form Section - Double-Bezel */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="order-2 lg:order-1 p-1.5 md:p-2 rounded-[2.5rem] bg-white/5 border border-white/10"
        >
          <div className="bg-river-deep rounded-[calc(2.5rem-0.5rem)] p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] h-full">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-cream mb-4">
                {t('connectWithExcellence')}
              </h2>
              <p className="text-cream-muted text-lg">
                {t('connectDesc')}
              </p>
            </div>
            
            <form
              onSubmit={handleSubmit}
              action="https://public.herotofu.com/v1/f934d410-7d50-11f0-b600-1fdb6134186f"
              method="POST"
              className="space-y-6"
              acceptCharset="UTF-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-medium tracking-[0.1em] uppercase text-cream-muted">
                    {t('nameLabel')}
                  </label>
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    placeholder={t('namePlaceholder')}
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    className="w-full bg-river-depths border border-white/10 rounded-xl px-4 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-sovereign-gold focus:ring-1 focus:ring-sovereign-gold transition-all duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium tracking-[0.1em] uppercase text-cream-muted">
                    {t('emailLabel')}
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    className="w-full bg-river-depths border border-white/10 rounded-xl px-4 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-sovereign-gold focus:ring-1 focus:ring-sovereign-gold transition-all duration-300"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-medium tracking-[0.1em] uppercase text-cream-muted">
                  {t('subjectLabel')}
                </label>
                <input
                  id="subject"
                  name="Subject"
                  type="text"
                  placeholder={t('subjectPlaceholder')}
                  value={formData.Subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-river-depths border border-white/10 rounded-xl px-4 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-sovereign-gold focus:ring-1 focus:ring-sovereign-gold transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium tracking-[0.1em] uppercase text-cream-muted">
                  {t('messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="Message"
                  placeholder={t('messagePlaceholder')}
                  value={formData.Message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full min-h-[150px] bg-river-depths border border-white/10 rounded-xl px-4 py-4 text-cream placeholder:text-cream/20 focus:outline-none focus:border-sovereign-gold focus:ring-1 focus:ring-sovereign-gold transition-all duration-300 resize-none"
                />
              </div>
              
              <div style={{ display: 'none' }} aria-hidden="true">
                <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              {submitStatus === "success" && (
                <Alert className="border-sovereign-gold/30 bg-sovereign-gold/10 rounded-2xl p-4 flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-sovereign-gold shrink-0 mt-0.5" />
                  <AlertDescription className="text-sovereign-gold text-sm font-medium">
                    {t('successBanner')}
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === "error" && (
                <Alert className="border-korean-red/30 bg-korean-red/10 rounded-2xl p-4 flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 text-korean-red shrink-0 mt-0.5" />
                  <AlertDescription className="text-korean-red text-sm font-medium">
                    {t('errorBanner')}
                  </AlertDescription>
                </Alert>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center pl-8 pr-2 py-2 mt-4 rounded-full bg-cream text-[#0d1b2a] font-bold text-lg transition-all duration-300 active:scale-[0.98] hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="mr-6">{isSubmitting ? t('sending') : t('sendMessageCTA')}</span>
                {!isSubmitting && (
                  <div className="w-10 h-10 rounded-full bg-river-depths/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-105">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Image Section - Double Bezel */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="order-1 lg:order-2 p-1.5 md:p-2 rounded-[2.5rem] bg-white/5 border border-white/10"
        >
          <div className="bg-river-depths rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] h-full overflow-hidden relative min-h-[500px]">
            <Image
              src="/images/heros/korean03.jpg"
              alt="Mount Paektu in golden light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[20s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-cream">
                {t('embraceTitle')}
              </h3>
              <p className="text-cream-muted text-lg leading-relaxed">
                {t('embraceDesc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}