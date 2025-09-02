import { ShimmerButton } from "@/components/magicui/shimmer-button";
 
export function ShimmerButtonDemo({children ,color} ) {
  return (
    <ShimmerButton className="shadow-2xl">
      <span className="">
        {children}
      </span>
    </ShimmerButton>
  );
}




export const ShimmerButton = () => {
  return (
    <button className="relative px-6 py-3 rounded-full overflow-hidden bg-black text-white text-lg font-semibold shadow-lg">
      <span className="relative z-10">Shimmer Button</span>
      <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 shimmer-animation"></span>
    </button>
  );
};