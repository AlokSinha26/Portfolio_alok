import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Globe, Wrench, Cpu, ExternalLink } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const skillLinks: Record<string, string> = {
  "C++": "https://www.geeksforgeeks.org/c-plus-plus/",
  "C": "https://www.geeksforgeeks.org/c-programming-language/",
  "Kotlin": "https://www.geeksforgeeks.org/kotlin-programming-language/",
  "JavaScript": "https://www.geeksforgeeks.org/javascript/",
  "HTML": "https://www.geeksforgeeks.org/html/",
  "CSS": "https://www.geeksforgeeks.org/css/",
  "React": "https://www.geeksforgeeks.org/reactjs/",
  "DSA": "https://www.geeksforgeeks.org/data-structures/",
  "DBMS": "https://www.geeksforgeeks.org/dbms/",
  "Git": "https://www.geeksforgeeks.org/git/",
  "REST APIs": "https://www.geeksforgeeks.org/rest-api-introduction/",
  "Machine Learning": "https://www.geeksforgeeks.org/machine-learning/",
  "Recommendation Systems": "https://www.geeksforgeeks.org/recommendation-system/",
  "Data Analysis": "https://www.geeksforgeeks.org/data-analysis/",
};

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["C++", "C", "Kotlin", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Wrench,
    title: "Tools & Concepts",
    skills: ["DSA", "DBMS", "Git", "REST APIs"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Cpu,
    title: "AI/ML",
    skills: ["Machine Learning", "Recommendation Systems", "Data Analysis"],
    color: "from-purple-500 to-pink-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSkillClick = (skill: string) => {
    console.log(`[Analytics] Skill clicked: ${skill}`, {
      timestamp: new Date().toISOString(),
      skill,
      url: skillLinks[skill],
    });
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 mb-5 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                <TooltipProvider delayDuration={200}>
                  {category.skills.map((skill) => (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <a
                          href={skillLinks[skill]}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleSkillClick(skill)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-secondary/50 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/80 hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)] hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                          {skill}
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-background border border-border">
                        <p>Learn on GeeksforGeeks</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
