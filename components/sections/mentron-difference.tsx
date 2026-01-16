import { Layers, Zap, Heart, Shield } from 'lucide-react';

const MentronDifference = () => {
  const differences = [
    {
      icon: <Layers className="h-10 w-10 text-blue-500" />,
      title: "Integrated Platform",
      description: "All tools work seamlessly together in one unified platform"
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Cutting-Edge AI",
      description: "Powered by the latest large language models and AI research"
    },
    {
      icon: <Heart className="h-10 w-10 text-blue-500" />,
      title: "Human-Centric",
      description: "Designed to enhance human capabilities, not replace them"
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Enterprise Security",
      description: "RSA encryption, HMAC integrity, and SHA256 authentication"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">The Mentron Difference</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Built on cutting-edge research and designed for real-world educational challenges
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((diff, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {diff.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{diff.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentronDifference;
