"use client";
import { Clock, TrendingUp, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const TangibleImpact = () => {
  const { resolvedTheme } = useTheme();

  const impacts = [
    {
      icon: <Clock className="h-8 w-8 text-blue-400" />,
      title: "Reduced Faculty Workload",
      description: "Focus on teaching, not administrative tasks"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
      title: "Improved Student Outcomes",
      description: "Personalized feedback and early intervention"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Increased Efficiency",
      description: "Streamlined processes and better resource allocation"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: "Enhanced Reputation",
      description: "Position as an educational innovator"
    }
  ];

  return (
    <section className="w-full py-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">
          The Tangible Impact: What This Power Means for Your Institution
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {impacts.map((impact, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {impact.icon}
              </div>
              <h4 className="text-lg font-semibold mb-1">{impact.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-black/5 dark:bg-white/10 p-6 rounded-lg border border-black/10 dark:border-white/30 text-center max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-black dark:text-white">
            Don't settle for an LMS that just 'manages.' Invest in an LMS that actively enhances and transforms education.
          </p>
          <Button className={`bg-blue-600 hover:bg-blue-700 ${resolvedTheme === 'dark' ? 'text-white' : ''} transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(0,215,255,0.6)]`}>
            See How Mentron Can Revolutionize Your Institution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TangibleImpact;
