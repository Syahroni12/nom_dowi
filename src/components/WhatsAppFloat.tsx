import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6282142638111?text=Halo%20Pak%20Ahmad%20Baidowi",
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        onClick={handleWhatsApp}
        className="rounded-full w-14 h-14 shadow-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground group animate-float"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <span className="sr-only">Chat via WhatsApp</span>
      </Button>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
    </motion.div>
  );
};
