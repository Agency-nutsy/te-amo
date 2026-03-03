import { MapPin } from "lucide-react";
import { siteConfig as c } from "@/config/site";

const DirectionsButton = () => {
  return (
    <a
      href={c.mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110 md:bottom-28 md:right-8 group"
      aria-label="Get Directions"
    >
      <MapPin size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 whitespace-nowrap rounded bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
        Get Directions
      </span>
    </a>
  );
};

export default DirectionsButton;
