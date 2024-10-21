"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

const ContactFormSchema = z.object({
  fullName: z.string().min(4, "Name must be at least 4 characters long"),
  phoneNumber: z
    .string()
    .regex(/^\d{11,}$/, "Phone number must be at least 11 digits"),
  email: z.string().email("Email must be valid"),
  additionalInfo: z.string().optional(),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationResult = ContactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      validationResult.error.errors.forEach((error) =>
        toast.error(error.message)
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          additionalInfo: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact us" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
          isDarkMode ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <source src="/bg hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <ToastContainer position="bottom-right" />
      <div className="relative z-10 max-w-6xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">
              Get in touch to schedule a visit
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-8">
              Kindly fill this form with your details about your inquiries and
              we would respond shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your Phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="additionalInfo">Additional information</Label>
                <textarea
                  className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md w-full mb-4 text-gray-900 dark:text-white resize-none"
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                />
              </LabelInputContainer>
              <button
                type="submit"
                className="bg-gradient-to-br relative group/btn from-indigo-600 to-indigo-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <BottomGradient />
              </button>
            </form>
          </motion.div>
          <div className="space-y-8 text-white">
            <ContactInfoItem
              icon={<Mail className="h-5 w-5" />}
              title="SEND AN EMAIL"
            >
              <a
                href="mailto:Contact@Strada-Properties.com"
                className="hover:underline"
              >
                Contact@strada-properties.com
              </a>
            </ContactInfoItem>
            <ContactInfoItem
              icon={<Phone className="h-5 w-5" />}
              title="GIVE US CALL"
            >
              <a href="tel:+201203425566" className="hover:underline">
                +201203425566
              </a>
            </ContactInfoItem>
            <ContactInfoItem
              icon={<MapPin className="h-5 w-5" />}
              title="OFFICE ADDRESS"
            >
              <p>One Kattameya, 215, Maadi Kattameya Ringroad - Cairo, Egypt</p>
            </ContactInfoItem>
            <ContactInfoItem
              icon={<Clock className="h-5 w-5" />}
              title="WORKING HOURS"
            >
              <p>SUN - THU: 9 AM - 5 AM</p>
            </ContactInfoItem>
          </div>
        </div>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const ContactInfoItem = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="font-semibold mb-2 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      {children}
    </div>
  );
};
