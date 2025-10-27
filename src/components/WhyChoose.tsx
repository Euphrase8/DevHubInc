import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Target, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reliability",
    description: "99.9% uptime guarantee with enterprise-grade infrastructure and security.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast applications optimized for speed and scalability.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Cutting-edge technologies and forward-thinking solutions.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned developers with decades of combined experience.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,217,255,0.4)]">
        <feature.icon className="w-10 h-10 text-primary-foreground" />
      </div>
      <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground max-w-xs">{feature.description}</p>
    </motion.div>
  );
};

const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" id="why-choose">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Why Choose DevHub
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
