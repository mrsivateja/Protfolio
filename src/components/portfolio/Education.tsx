import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Artificial Intelligence",
    institution: "Pydah College of Engineering(Autonomous)",
    period: "2024 - 2028",
    description: "Currently pursuing Bachelor's degree with focus on software development, data structures, and algorithms.",
    current: true,
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Pragathi Junior College",
    period: "2022 - 2024",
    description: "Completed with Science stream (PCM) with Computer Science as additional subject.",
    current: false,
  },
  {
    degree: "Secondary (10th)",
    institution: "Luthern English Medium School",
    period: "2022",
    description: "Completed secondary education with distinction.",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-primary text-sm tracking-wider">
            &lt;education /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                  item.current 
                    ? "bg-primary border-background glow-effect" 
                    : "bg-secondary border-border"
                }`} />

                <div className="glass-card rounded-xl p-6 hover-glow">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                      <p className="text-primary flex items-center gap-2 mt-1">
                        <GraduationCap className="w-4 h-4" />
                        {item.institution}
                      </p>
                    </div>
                    <span className="code-font text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                  {item.current && (
                    <span className="inline-block mt-4 px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                      Currently Pursuing
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
