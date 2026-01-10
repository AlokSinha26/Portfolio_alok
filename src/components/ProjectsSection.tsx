import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Film, Bot, ShoppingCart, Cloud } from 'lucide-react';

const projects = [
  {
    icon: Film,
    title: "Movie Recommendation System",
    description: "An ML-based personalized recommendation engine that suggests movies based on user preferences and viewing history.",
    techStack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/50",
  },
  {
    icon: Bot,
    title: "AI-Based Website Generator",
    description: "A tool that leverages AI to automatically generate websites based on user requirements and preferences.",
    techStack: ["JavaScript", "AI Tools", "HTML", "CSS"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
  },
  {
    icon: ShoppingCart,
    title: "Amazon Clone",
    description: "A fully responsive e-commerce front-end project replicating Amazon's user interface and shopping experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "hover:border-orange-500/50",
  },
  {
    icon: Cloud,
    title: "Weather App",
    description: "A real-time weather application that fetches and displays weather data using REST APIs with a clean interface.",
    techStack: ["JavaScript", "REST API", "HTML", "CSS"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/50",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            Some of my recent work that showcases my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card overflow-hidden group transition-all duration-300 ${project.borderColor}`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
