import { Database, Cpu, Users, BarChart, Shield, Workflow } from 'lucide-react';

const Ecosystem = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-blue-400" />,
      title: "Robust Course Management",
      description: "Syllabus, content delivery, announcements, scheduling – all the standards, but modern and intuitive."
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
      title: "AI-Powered Faculty Suite",
      description: "Quiz Gen (93% reliability), Assignment Gen, QP Gen (87% structural adherence) – built-in, not an add-on."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Student Learning Hub",
      description: "Mindmaps (98% validation), Knowledge Graphs (93% accuracy), Chatbots, Explainers – accessible within course context."
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-400" />,
      title: "Advanced Analytics",
      description: "Deep insights for faculty and administration with predictive capabilities."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      title: "Secure Infrastructure",
      description: "RSA encryption, HMAC integrity, SHA256 authentication underpinning everything."
    },
    {
      icon: <Workflow className="h-6 w-6 text-blue-400" />,
      title: "Seamless Integration",
      description: "Unified workflows for faculty, cohesive experience for students, simplified administration."
    }
  ];

  return (
    <section className="w-full py-16 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-center">The All-In-One Ecosystem: Say Goodbye to Siloed Solutions</h3>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Mentron consolidates every essential educational function into a single, intuitive platform. No need to patch together disparate systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/40 dark:bg-[#0a223a]/40 border border-blue-100 dark:border-blue-900 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#0077FF] hover:bg-[#e6f0fa]/60 dark:hover:bg-[#112a47]/60 hover:backdrop-blur-2xl hover:ring-2 hover:ring-[#0077FF]/40">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
