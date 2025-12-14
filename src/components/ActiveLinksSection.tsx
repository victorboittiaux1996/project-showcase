import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Chatbot V1", testers: 12, isVerified: true, isLive: true },
  { title: "Image Classifier", testers: 8, isVerified: true, isLive: true },
  { title: "Sentiment Analyzer", testers: 5, isVerified: false, isLive: true },
  { title: "Code Assistant", testers: 23, isVerified: true, isLive: false },
];

const ActiveLinksSection = () => {
  return (
    <section className="px-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Active Shared Links
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={1.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveLinksSection;
