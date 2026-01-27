'use client'

export default function TrustBar() {
  const logos = [
    { name: 'Startup India', src: 'https://via.placeholder.com/120x60?text=Startup+India' },
    { name: 'NASSCOM', src: 'https://via.placeholder.com/120x60?text=NASSCOM' },
    { name: 'TiE Delhi', src: 'https://via.placeholder.com/120x60?text=TiE+Delhi' },
    { name: 'YourStory', src: 'https://via.placeholder.com/120x60?text=YourStory' },
    { name: 'Inc42', src: 'https://via.placeholder.com/120x60?text=Inc42' },
    { name: 'ETtech', src: 'https://via.placeholder.com/120x60?text=ETtech' },
    { name: 'Brand 1', src: 'https://via.placeholder.com/120x60?text=Brand+1' },
    { name: 'Brand 2', src: 'https://via.placeholder.com/120x60?text=Brand+2' },
    { name: 'Brand 3', src: 'https://via.placeholder.com/120x60?text=Brand+3' },
    { name: 'Brand 4', src: 'https://via.placeholder.com/120x60?text=Brand+4' },
    { name: 'Brand 5', src: 'https://via.placeholder.com/120x60?text=Brand+5' },
    { name: 'Brand 6', src: 'https://via.placeholder.com/120x60?text=Brand+6' },
  ]

  return (
    <section className="bg-neutral-50 py-10 border-y border-neutral-200">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-neutral-500 mb-6 font-semibold">
          Trusted by Leading Brands and Featured In
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-16">
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
