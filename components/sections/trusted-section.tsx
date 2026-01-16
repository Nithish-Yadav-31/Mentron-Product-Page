const TrustedSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Quizzes Generated"
    },
    {
      number: "5,000+",
      label: "Concepts Explained"
    },
    {
      number: "500+",
      label: "Institutions Served"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Trusted by Educators Worldwide</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Join thousands of educators and institutions already transforming education with Mentron
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary mb-2">{stat.number}</span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
