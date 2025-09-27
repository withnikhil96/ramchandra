import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OurServices() {
  const services = [
    {
      icon: "/air-freight-icon.jpg",
      title: "Air Freight",
      description: "Fast and reliable air cargo services for urgent shipments across the globe.",
    },
    {
      icon: "/ocean-freight-icon.jpg",
      title: "Ocean Freight",
      description: "Cost-effective and efficient sea cargo solutions for large volume international shipping.",
    },
    {
      icon: "/road-freight-icon.jpg",
      title: "Road Freight",
      description: "Comprehensive road transportation services for domestic and cross-border deliveries.",
    },
    {
      icon: "/warehousing-icon.jpg",
      title: "Warehousing",
      description: "Secure and modern warehousing facilities for storage, distribution, and inventory management.",
    },
    {
      icon: "/customs-brokerage-icon.jpg",
      title: "Customs Brokerage",
      description: "Expert customs clearance services to ensure smooth and compliant international trade.",
    },
    {
      icon: "/supply-chain-consulting-icon.jpg",
      title: "Supply Chain Consulting",
      description: "Strategic consulting to optimize your supply chain for maximum efficiency and cost savings.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
          We offer a comprehensive range of logistics services designed to meet your unique business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center bg-card">
              <CardHeader>
                <img src={service.icon || "/placeholder.svg"} alt={service.title} className="mb-4 h-12 w-12" />
                <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
