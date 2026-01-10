import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Rocket, CheckCircle } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: "AI Voice Agent Challenge",
    description: "Successfully completed the AI Voice Agent Challenge, demonstrating proficiency in building voice-enabled AI applications.",
  },
  {
    icon: Rocket,
    title: "Multiple Real-World Projects",
    description: "Built and deployed numerous academic and personal projects, ranging from ML systems to full-stack web applications.",
  },
  {
    icon: CheckCircle,
    title: "Continuous Learning",
    description: "Actively learning and implementing new technologies in AI/ML, Android development, and modern web frameworks.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto">
            Milestones in my journey as a developer
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex items-start gap-5 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
