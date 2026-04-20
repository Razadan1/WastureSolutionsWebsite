import { motion } from "framer-motion";
import { Truck, Recycle, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Services() {
  const services = [
    {
      title: "Smart Waste Collection",
      description: "Streamlined, tech-enabled logistics for sourcing organic and biodegradable waste. Our optimized routing ensures consistent supply for our digestion facilities while reducing the carbon footprint of urban waste transport.",
      icon: Truck,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Recycling Initiatives",
      description: "Turning organic waste into high-grade biogas and nutrient-rich bio-fertilizers. By leveraging anaerobic digestion, we close the loop on food waste, providing clean energy solutions and supporting sustainable agriculture.",
      icon: Recycle,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "Awareness Campaigns",
      description: "Empowering communities through education on waste segregation and the benefits of renewable energy. We partner with local leaders to demonstrate how today's waste becomes tomorrow’s fuel and food security.",
      icon: Megaphone,
      color: "text-accent",
      bg: "bg-accent/10",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#DDEB9C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What We Do</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">
            End-to-end solutions for a sustainable future
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-4`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
