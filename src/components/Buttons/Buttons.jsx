export  function AnimatedButton() {
  return (
    <button className="relative px-6 py-3 text-white font-semibold rounded-xl bg-blue-600 overflow-hidden">
      <span className="relative z-10">Click Me</span>

      {/* الـ Border اللي بيلف */}
      <span className="absolute inset-0 rounded-xl border-2 border-transparent">
        <span className="absolute inset-0 rounded-xl border-2 border-blue-400 border-t-transparent animate-spin-slow"></span>
      </span>
    </button>
  );
}