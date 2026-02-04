import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const WHATSAPP_NUMBER = "27676577059" // 27 + number (no leading 0)

const businessHours = [
  { day: "Monday", hours: "8:00 AM - 4:30 PM" },
  { day: "Tuesday", hours: "8:00 AM - 4:30 PM" },
  { day: "Wednesday", hours: "8:00 AM - 4:30 PM" },
  { day: "Thursday", hours: "8:00 AM - 4:30 PM" },
  { day: "Friday", hours: "8:00 AM - 4:30 PM" },
  { day: "Saturday", hours: "8:00 AM - 12:30 PM" },
  { day: "Sunday", hours: "8:00 AM - 12:30 PM" },
]

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (loading) return

  const formData = new FormData(e.currentTarget)

  const name = formData.get("name") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // SA phone validation
  const saPhoneRegex = /^0[6-8][0-9]{8}$/
  if (!saPhoneRegex.test(phone)) {
    alert("Please enter a valid South African phone number (e.g. 0821234567)")
    return
  }

  setLoading(true)

  const whatsappMessage = `
New Quote Request 🚧

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Project Details:
${message || "No additional details provided"}
  `.trim()

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  setTimeout(() => {
    setLoading(false)
    setSuccess(true)
    window.open(whatsappURL, "_blank")
    e.currentTarget.reset()
  }, 700)
}


  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Contact Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  H2, 974 Intengu Street<br />
                  Esikhawini H, Richards Bay, 3887
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Phone</h3>
                <a href="tel:0676577059" className="text-primary hover:underline text-lg">
                  067 657 7059
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl text-foreground mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Request a Quote
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Kwanele Ntshangase"
                    className="w-full px-4 py-3 bg-secondary border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    required
                    placeholder="0821234567"
                    className="w-full px-4 py-3 bg-secondary border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="client@example.com"
                  className="w-full px-4 py-3 bg-secondary border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-secondary border rounded-lg"
                >
                  <option value="">Select a service</option>
                  <option value="Building Construction">Building Construction</option>
                  <option value="Home Renovations">Home Renovations</option>
                  <option value="Exterior Painting">Exterior Painting</option>
                  <option value="Structural Repairs">Structural Repairs</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 bg-secondary border rounded-lg resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send via WhatsApp"}
              </Button>

              {success && (
                <p className="text-green-500 text-sm text-center mt-4">
                  ✅ Thank you! We’ll contact you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
