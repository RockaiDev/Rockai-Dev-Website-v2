export default function Newsletter() {
  return (
    <section className="w-full  py-10 px-6 flex justify-between border-b border-t border-gray-900">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 ">
        {/* Text Content */}
        <div className="text-left ">
          <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">
            Stay Ahead of the Tech Curve
          </h2>
          <p className="text-gray-400 text-base max-w-lg">
            Get weekly insights on AI Trends, development tips and exclusive Rockai updates.
          </p>
        </div>

        {/* Input + Button Side by Side */}
        <div className="flex w-full md:w-auto items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 md:w-72 rounded-full  border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="px-6 py-3 text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#10DBDB] to-[#0047A5] shadow-lg shadow-cyan-500/30 hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
