import { BorderBeam } from "@/components/magicui/border-beam";

export function CardWithAnimatedBorder({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden hover: glow-bottom ${className}`}>
      <BorderBeam duration={2} size={300} borderWidth={2} />
      {children}
    </div>
  );
}
