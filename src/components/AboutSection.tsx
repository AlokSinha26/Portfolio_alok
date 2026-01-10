import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Brain } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading mx-auto">
            Get to know who I am and what drives me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-10 mb-10"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground font-medium">final-year Computer Engineering student</span> at{' '}
              <span className="text-primary font-medium">Thapar Institute of Engineering & Technology</span>. 
              With a strong foundation in Data Structures & Algorithms, Database Management Systems, 
              and modern web technologies, I'm passionate about creating solutions that make a difference.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My expertise spans across <span className="text-foreground font-medium">Kotlin for Android development</span>, 
              full-stack web development with JavaScript, and I'm actively exploring the fascinating world of 
              <span className="text-primary font-medium"> Artificial Intelligence and Machine Learning</span>. 
              I believe in building products that are not just functional but also intuitive and user-centric.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description: "B.E. Computer Engineering at TIET",
              },
              {
                icon: Code2,
                title: "Development",
                description: "Android & Full-Stack Web Apps",
              },
              {
                icon: Brain,
                title: "AI/ML",
                description: "Building Intelligent Systems",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
