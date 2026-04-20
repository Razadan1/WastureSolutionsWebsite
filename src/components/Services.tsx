import { motion } from "framer-motion";
import { Truck, Recycle, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Services() {
  const services = [
    {
      title: "Smart Waste Collection",
      description: "Efficient, tech-enabled routing for urban waste collection, reducing emissions and ensuring timely pickups across Lagos neighborhoods.",
      icon: Truck,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Recycling Initiatives",
      description: "Processing plastics, glass, and paper into reusable materials. We partner with local manufacturers to close the loop on consumer waste.",
      icon: Recycle,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "Awareness Campaigns",
      description: "Educational programs in schools and communities to build long-term sustainable habits and environmental stewardship.",
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
