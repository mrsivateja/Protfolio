import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex problems into simple solutions",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Always exploring new technologies",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with teams",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="code-font text-primary text-sm tracking-wider">
            &lt;about /&gt;
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 hover-glow">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hey there! I'm a passionate BTech 2nd year Computer Science student with the specialization
                in AI
                with a love for building things that live on the internet. I enjoy
                creating everything from small websites to full-stack applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey in tech started with curiosity about how websites work,
                which led me to explore web development, and now I'm diving deep into
                full-stack development and exploring the world of AI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new tech, contributing
                to open source, or participating in hackathons.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 hover-glow group"
              >
                <trait.icon className="w-10 h-10 text-primary mb-4 group-hover:text-glow transition-all" />
                <h3 className="font-semibold mb-2">{trait.title}</h3>
                <p className="text-sm text-muted-foreground">{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
