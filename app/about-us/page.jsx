import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"

export default function AboutUs() {
  return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <section className="py-20 md:py-32 bg-background text-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <div className="lg:order-2">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?key=21234"
                        alt="About Us Image"
                        className="rounded-xl object-cover w-full h-[450px] lg:h-[500px] shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="lg:order-1 text-center lg:text-left space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                        About Us
                      </h2>
                      <div className="w-20 h-1 bg-primary mx-auto lg:mx-0"></div>
                    </div>
                    <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                      <p className="text-pretty">
                        Ramchandra Transport is a leading provider of integrated logistics solutions, committed to delivering
                        excellence and innovation. With years of experience, we have built a reputation for reliability, efficiency,
                        and customer-centric services. Our global network and advanced technology ensure that your cargo is handled
                        with the utmost care and precision, from origin to destination.
                      </p>
                      <p className="text-muted-foreground text-pretty">
                        We believe in fostering strong partnerships and continuously adapting to the evolving demands of the global
                        supply chain. Our dedicated team works tirelessly to provide tailored solutions that drive success for our
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
  )
}
