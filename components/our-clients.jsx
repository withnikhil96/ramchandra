"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function OurClients() {
  const clientLogos = [
    { src: "/placeholder.svg?key=client1", alt: "Client Logo 1" },
    { src: "/placeholder.svg?key=client2", alt: "Client Logo 2" },
    { src: "/placeholder.svg?key=client3", alt: "Client Logo 3" },
    { src: "/placeholder.svg?key=client4", alt: "Client Logo 4" },
    { src: "/placeholder.svg?key=client5", alt: "Client Logo 5" },
    { src: "/placeholder.svg?key=client6", alt: "Client Logo 6" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Valued Clients</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
          We are proud to partner with leading companies across various industries, delivering exceptional logistics
          solutions.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="w-full h-24 object-contain grayscale opacity-75 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
