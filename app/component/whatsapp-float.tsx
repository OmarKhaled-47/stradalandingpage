"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
}

export default function WhatsAppFloat({
  phoneNumber,
  message = "Hello! I have a question about your properties.",
}: WhatsAppFloatProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-50 bg-green-500 dark:bg-green-900 text-green-50 dark:text-green-400 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MessageCircle size={24} />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
}
