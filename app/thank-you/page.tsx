import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Your submission has been received successfully. We'll get back to you within 24-48 hours.
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/">
                  Return to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/about">
                  Learn More About Mentron
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
