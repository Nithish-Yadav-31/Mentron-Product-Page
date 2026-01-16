import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PageBreadcrumb from '@/components/page-breadcrumb';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PageBreadcrumb currentPage="Privacy Policy" />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              Last updated: May 2025
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Mentron ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our educational platform and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm border mb-6">
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Name and contact information</li>
                <li>Educational institution affiliation</li>
                <li>Login credentials</li>
                <li>Course enrollment information</li>
                <li>Performance and assessment data</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Usage Information</h3>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Platform usage statistics</li>
                <li>Learning patterns and preferences</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>To provide and maintain our services</li>
                <li>To personalize your learning experience</li>
                <li>To analyze and improve our platform</li>
                <li>To communicate with you about our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@Mentron
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
