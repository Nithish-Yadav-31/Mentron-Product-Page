import { 
  HelpCircle, 
  Network, 
  Map, 
  MessageSquare, 
  BarChart2, 
  ShieldCheck 
} from 'lucide-react';

const ToolsShowcase = () => {
  const tools = [
    {
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
      title: "AI Quiz Generator",
      description: "Create engaging quizzes automatically from your course materials",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: "Knowledge Graphs",
      description: "Visualize complex relationships between concepts and topics",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Map className="h-8 w-8 text-green-500" />,
      title: "Mind Maps",
      description: "Generate interactive mind maps to enhance understanding",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Document Chat",
      description: "Chat with your documents using advanced RAG technology",
      bgColor: "bg-primary/10"
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-yellow-500" />,
      title: "Analytics Dashboard",
      description: "Track progress and performance with detailed insights",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
      title: "Secure Assessments",
      description: "Conduct secure online assessments with anti-cheating measures",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Powerful AI Tools for Modern Education</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Discover the comprehensive suite of AI-powered tools designed to transform how you teach, learn, and manage educational content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="backdrop-blur-lg bg-white/40 dark:bg-[#0a223a]/40 border border-blue-100 dark:border-blue-900 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:border-[#0077FF] hover:bg-[#e6f0fa]/60 dark:hover:bg-[#112a47]/60 hover:backdrop-blur-2xl hover:ring-2 hover:ring-[#0077FF]/40"
            >
              <div className={`${tool.bgColor} p-3 rounded-lg inline-block mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{tool.title}</h3>
              <p className="text-muted-foreground text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;
