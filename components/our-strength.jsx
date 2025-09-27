export default function OurStrength() {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Strength</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
          At Ramchandra Transport, our strength lies in our unwavering commitment to efficiency, reliability, and
          customer satisfaction. We leverage cutting-edge technology and a dedicated team to deliver seamless logistics
          solutions worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/global-reach-icon.jpg" alt="Global Reach Icon" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Global Reach</h3>
            <p className="text-center text-muted-foreground">
              Extensive network spanning continents, ensuring your cargo reaches its destination, no matter how far.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/advanced-technology-icon.jpg" alt="Advanced Technology Icon" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Advanced Technology</h3>
            <p className="text-center text-muted-foreground">
              Utilizing the latest innovations in logistics to provide real-time tracking and optimized routes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/expert-team-icon.png" alt="Expert Team Icon" className="mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
            <p className="text-center text-muted-foreground">
              A team of seasoned professionals dedicated to handling your logistics needs with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
