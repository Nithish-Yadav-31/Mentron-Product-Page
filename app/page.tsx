import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/sections/hero-section';
import LiveExamples from '@/components/sections/live-examples';
import FeatureSection from '@/components/sections/feature-section';
import ProductComparison from '@/components/sections/product-comparison';
import LmsPowerhouse from '@/components/sections/lms-powerhouse';
import Ecosystem from '@/components/sections/ecosystem';
import AiAdvantage from '@/components/sections/ai-advantage';
import TangibleImpact from '@/components/sections/tangible-impact';
import ToolsShowcase from '@/components/sections/tools-showcase';
import MentronDifference from '@/components/sections/mentron-difference';
import TrustedSection from '@/components/sections/trusted-section';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <LiveExamples />
      <FeatureSection />
      <ProductComparison />
      <LmsPowerhouse />
      <Ecosystem />
      <AiAdvantage />
      <TangibleImpact />
      <ToolsShowcase />
      <MentronDifference />
      <TrustedSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
