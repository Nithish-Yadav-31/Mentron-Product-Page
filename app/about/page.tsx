import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PageBreadcrumb from '@/components/page-breadcrumb';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AuroraBackground className="min-h-screen">
        <PageBreadcrumb currentPage="About" />
        <div className="container mx-auto py-12 px-4 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Mentron</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              At Mentron, we're on a mission to revolutionize education through the power of artificial intelligence. 
              We believe that every student deserves personalized attention and every educator should have access to 
              cutting-edge tools that make teaching more effective and efficient.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Founded in January 2025, Mentron emerged from a simple observation: traditional learning management systems 
              weren't keeping pace with the rapid advancement of AI technology. Our team of educators, technologists, 
              and AI experts came together to create a solution that would bridge this gap.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  We continuously push the boundaries of what's possible in educational technology.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Accessibility</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  We believe quality education should be accessible to everyone.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Privacy</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  We prioritize the security and privacy of our users' data.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Impact</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  We measure our success by the positive change we create in education.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Technology</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Mentron leverages the latest advancements in artificial intelligence, including large language models 
              and machine learning, to provide intelligent educational tools. Our platform is built on a foundation of 
              robust security measures and scalable infrastructure to ensure reliable performance for institutions of any size.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Join Us</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              Whether you're an educational institution looking to transform your learning management system or an 
              individual seeking to enhance your learning journey, we invite you to join us in shaping the future 
              of education.
            </p>
          </section>
        </div>
        </div>
      </AuroraBackground>
      <Footer />
    </>
  );
}
