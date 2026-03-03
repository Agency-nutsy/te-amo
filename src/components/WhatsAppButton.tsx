import { siteConfig as c } from "@/config/site";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href={c.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 md:bottom-8 md:right-8 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
