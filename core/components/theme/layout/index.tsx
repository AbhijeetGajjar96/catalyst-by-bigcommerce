import React from 'react';

export default function HomePage() {
  return (
    <div className="homepage-container">
      {/* Hero Banner */}
      <section className="hero-section">
        <h1 className="text-4xl font-bold">Welcome to JB</h1>
        <p className="text-lg mt-2">Restaurant & Catering</p>
      </section>

      {/* Featured Collections */}
      <section className="featured-collections mt-10">
        <h2 className="text-2xl font-semibold">Our Specialties</h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {/* Cards will come here */}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta-section mt-16 text-center">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Explore Menu
        </button>
      </section>
    </div>
  )
}