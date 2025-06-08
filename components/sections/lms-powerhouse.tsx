import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LmsPowerhouse = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <span className="inline-block">🚀</span> Revolutionary LMS Platform
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 max-w-4xl mx-auto">
          Why Choose Mentron Over <span className="text-blue-600 dark:text-blue-400">Traditional LMS</span>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg">
          While others offer basic course delivery, Mentron revolutionizes education with AI-powered intelligence, seamless integration, and unprecedented learning outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-blue-900 shadow-lg hover:shadow-2xl hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:backdrop-blur-2xl hover:ring-2 hover:ring-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Personalization</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Unlike static LMS platforms, Mentron adapts to each learner's pace, style, and preferences using advanced AI algorithms for 40% better retention rates.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-blue-900 shadow-lg hover:shadow-2xl hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:backdrop-blur-2xl hover:ring-2 hover:ring-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get instant insights into learning progress, engagement patterns, and performance bottlenecks with actionable recommendations for immediate improvement.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to 10x Your Educational Impact?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ institutions that have transformed their learning outcomes with Mentron's intelligent LMS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="glow" className="px-8 py-3">
              <Link href="/institutional-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LmsPowerhouse;
