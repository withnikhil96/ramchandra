import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Get in touch with our team for logistics solutions tailored to your needs.
              </p>
              <p className="text-muted-foreground">
                This page will contain contact information, forms, and location details.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
