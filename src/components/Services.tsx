import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Cloud, Palette, Network, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Responsive, high-performance applications for web, iOS, and Android platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration & DevOps",
    description: "Seamless cloud migration, infrastructure automation, and CI/CD pipeline implementation.",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront.",
  },
  {
    icon: Network,
    title: "API Development & Integration",
    description: "Robust API solutions for seamless data exchange and third-party integrations.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your applications with our advanced optimization techniques.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] backdrop-blur-sm h-full">
        <CardContent className="p-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <service.icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your business goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
