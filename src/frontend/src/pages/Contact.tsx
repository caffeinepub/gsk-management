import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useBackend";
import type { ServiceType } from "@/types";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@gskmanagement.in" },
  {
    icon: MapPin,
    label: "Address",
    value: "Connaught Place, New Delhi — 110001",
  },
];

export default function Contact() {
  const {
    mutate: submitInquiry,
    isPending,
    isSuccess,
    isError,
  } = useSubmitInquiry();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "events" as ServiceType,
    message: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry(form);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, oklch(0.65 0.18 40) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Reach Out
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Let's <span className="text-accent">Connect</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
              Whether you're planning an event, seeking entertainment, or
              dreaming of a journey — we're here to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionHeader
                eyebrow="Contact Details"
                title="Reach Us"
                className="mb-8"
              />
              <div className="space-y-6 mb-10">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        {label}
                      </p>
                      <p className="text-foreground text-sm font-medium">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-accent/10 p-6">
                <p className="font-display font-bold text-foreground text-base mb-2">
                  Office Hours
                </p>
                <p className="text-sm text-muted-foreground">
                  Monday – Saturday
                </p>
                <p className="text-sm text-accent font-medium mt-0.5">
                  10:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Inquiry Form"
                title="Send Us a Message"
                className="mb-8"
              />

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/5 border border-accent/30 p-10 text-center"
                  data-ocid="inquiry-success"
                >
                  <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. Our team will respond within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-ocid="inquiry-form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="rounded-none border-input bg-card"
                        data-ocid="form-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="rounded-none border-input bg-card"
                        data-ocid="form-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 9XXXXXXXXX"
                        className="rounded-none border-input bg-card"
                        data-ocid="form-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Service Type *
                      </Label>
                      <Select
                        value={form.serviceType}
                        onValueChange={(val) =>
                          handleChange("serviceType", val)
                        }
                      >
                        <SelectTrigger
                          className="rounded-none border-input bg-card"
                          data-ocid="form-service-type"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                          <SelectItem value="entertainment">
                            Entertainment
                          </SelectItem>
                          <SelectItem value="travel">Luxury Travel</SelectItem>
                          <SelectItem value="events">
                            Event Management
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your requirements, event date, scale, preferences…"
                      required
                      rows={5}
                      className="rounded-none border-input bg-card resize-none"
                      data-ocid="form-message"
                    />
                  </div>

                  {isError && (
                    <p className="text-destructive text-sm">
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-semibold uppercase text-xs tracking-widest px-10 py-3 h-auto w-full md:w-auto"
                    data-ocid="form-submit"
                  >
                    {isPending ? "Sending…" : "Send Inquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
