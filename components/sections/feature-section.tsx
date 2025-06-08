import { Clock, Users, Inbox } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white" id="features">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Navigating Today's Educational Landscape</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Modern education faces unprecedented challenges that require innovative solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-10 w-10 text-red-500" />,
              background: 'bg-red-50 dark:bg-red-950/20',
              title: 'Scaling Quality Support',
              description: 'Providing personalized attention to every student while managing large class sizes'
            },
            {
              icon: <Users className="h-10 w-10 text-yellow-500" />,
              background: 'bg-yellow-50 dark:bg-yellow-950/20',
              title: 'Diverse Learning Needs',
              description: 'Engaging students with different learning styles and preferences effectively'
            },
            {
              icon: <Clock className="h-10 w-10 text-primary" />,
              background: 'bg-primary/10',
              title: 'Administrative Burden',
              description: 'Reducing time spent on repetitive tasks to focus on core teaching'
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${feature.background} p-4 rounded-full mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
