import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 0 },
  { name: "TypeScript", level: 0 },
  { name: "Node.js", level: 0 },
  { name: "Python", level: 50 },
  { name: "MongoDB", level: 0 },
  { name: "Git", level: 70 },
  { name: "Tailwind CSS", level: 0 },
  { name: "C++", level: 50 },
];

const technologies = [
  "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Python", "C++", "Git", "Docker", "AWS", "TypeScript", "Next.js", "Tailwind CSS",
  "REST APIs", "GraphQL",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
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
            &lt;skills /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6">Proficiency</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="code-font text-sm">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="code-font text-sm px-4 py-2 glass-card rounded-lg hover-glow cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
