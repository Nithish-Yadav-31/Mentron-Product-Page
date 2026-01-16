import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PageBreadcrumb from '@/components/page-breadcrumb';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageBreadcrumb currentPage="Terms of Service" />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              Last updated: January 2024
            </p>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using Mentron's platform and services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                from using or accessing this platform.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily access and use Mentron's platform for personal, educational, 
                or institutional use, subject to the following restrictions:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>You must not modify or copy the platform's materials</li>
                <li>You must not use the materials for commercial purposes</li>
                <li>You must not attempt to decompile or reverse engineer the platform</li>
                <li>You must not remove any copyright or proprietary notations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                As a user of Mentron, you are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your use complies with applicable laws</li>
                <li>Respecting intellectual property rights</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">4. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                Questions about the Terms of Service should be sent to us at:
              </p>
              <p className="text-muted-foreground">
                Email: legal@Mentron
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
