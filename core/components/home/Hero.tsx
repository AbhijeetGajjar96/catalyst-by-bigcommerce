export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          Welcome to <span className="text-yellow-400">Jay Bharat</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Authentic Indian Sweets & Snacks • Fresh Daily • Nationwide Shipping
        </p>
        <div className="mt-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}