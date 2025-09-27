import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"

export default function RequestQuote() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Request a Quote</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Get a customized quote for your logistics requirements.
              </p>
              <p className="text-muted-foreground">
                This page will contain a quote request form and contact information.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
