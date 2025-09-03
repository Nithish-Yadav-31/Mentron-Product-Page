import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/sections/hero-section';
import FeatureSection from '@/components/sections/teaching-learning-needs-secion';
import LearningJourneySection from '@/components/sections/learning-journey-section';
import ProductComparison from '@/components/sections/product-comparison';
import LmsPowerhouse from '@/components/sections/lms-powerhouse';
import Ecosystem from '@/components/sections/ecosystem';
import StudentLearningTools from '@/components/sections/student-learning-tools';
// import PricingSection from '@/components/sections/pricing-section';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <LearningJourneySection />
      <ProductComparison />
      <LmsPowerhouse />
      <Ecosystem />
      <StudentLearningTools />
      {/* <PricingSection /> */}
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
