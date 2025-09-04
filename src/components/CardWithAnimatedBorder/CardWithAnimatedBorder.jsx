import { BorderBeam } from "@/components/magicui/border-beam";

export function CardWithAnimatedBorder({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <BorderBeam duration={4} size={200} borderWidth={2} />
      {children}
    </div>
  );
}
