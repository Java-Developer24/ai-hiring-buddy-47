import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "dark" | "light";
  showWordmark?: boolean;
}

export const HireIqLogo = ({ className, variant = "dark", showWordmark = true }: Props) => {
  const text = variant === "dark" ? "text-charcoal" : "text-cream";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-8 w-8 rounded-lg bg-coral flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber/30 rounded-full blur-md" />
        <span className="relative font-display font-bold text-amber text-lg leading-none">H</span>
      </div>
      {showWordmark && (
        <span className={cn("font-display font-bold text-[18px] tracking-tight", text)}>
          HireIQ
        </span>
      )}
    </div>
  );
};