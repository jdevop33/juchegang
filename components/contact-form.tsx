"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
    _gotcha: "", // Honeypot field for spam protection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Create FormData object for HeroTofu
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
    <section className="relative w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <Card className="border-friendship-blue/20 shadow-2xl bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-friendship-blue to-friendship-red bg-clip-text text-transparent">
                  Connect With Excellence
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Join the journey towards personal excellence. Reach out to share your thoughts or inquire about the laws.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  action="https://public.herotofu.com/v1/f934d410-7d50-11f0-b600-1fdb6134186f"
                  method="POST"
                  className="space-y-4 md:space-y-6"
                  acceptCharset="UTF-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="Name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.Name}
                        onChange={handleChange}
                        required
                        className="w-full border-muted-foreground/20 focus:border-friendship-blue transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                        className="w-full border-muted-foreground/20 focus:border-friendship-blue transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="Subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.Subject}
                      onChange={handleChange}
                      required
                      className="w-full border-muted-foreground/20 focus:border-friendship-blue transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="Message"
                      placeholder="Share your thoughts on excellence..."
                      value={formData.Message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full min-h-[120px] md:min-h-[150px] border-muted-foreground/20 focus:border-friendship-blue transition-colors resize-none"
                    />
                  </div>
                  
                  {/* Honeypot field for spam protection - hidden from users */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="_gotcha"
                      value={formData._gotcha}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <Alert className="border-green-500/50 bg-green-500/10">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <AlertDescription className="text-green-500">
                        Message sent successfully! We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-500/50 bg-red-500/10">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <AlertDescription className="text-red-500">
                        Something went wrong. Please try again later.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-friendship-blue to-friendship-red hover:from-friendship-blue/90 hover:to-friendship-red/90 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/mountain-bear-sunset.png"
                alt="Excellence in Nature"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
            </AspectRatio>
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Embrace Your Journey</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Every message is a step towards understanding the principles of excellence. 
                Join our community of individuals committed to personal growth and unwavering discipline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}