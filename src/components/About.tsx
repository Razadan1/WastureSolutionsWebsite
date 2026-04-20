import { motion } from "framer-motion";
import { Leaf, Globe, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Us</h2>
          <h4 className="text-3xl md:text-3xl font-bold text-foreground mb-5" style={{ textAlign: 'justify' }}>
            Pioneering a cleaner, greener Africa where waste is a resource, not a burden.
          </h4>
          <p className="text-lg text-muted-foreground leading-relaxed" style={{ textAlign: 'justify' }}>
            Wasture Solutions is a waste management startup dedicated to transforming organic waste into renewable resources. We leverage innovative technology and anaerobic digestion to convert waste into clean biogas and nutrient-rich bio-fertilizers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" style={{ textAlign: 'justify' }}>
              By combining smart logistics with community-driven sustainability, we are building a circular economy that powers homes, supports local agriculture and aim for a cleaner and greener environment across Nigeria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="text-primary w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To transform organic waste into sustainable energy and agricultural solutions through innovative technology, empowering communities to build a cleaner, self-sufficient, and sustainable future.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Leaf className="text-secondary w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To lead the global transition toward a zero-waste economy where organic resources are never lost, but continuously cycled to power and feed the world through innovative technology.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="text-accent w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Community First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Change starts at the local level. We work directly with neighborhoods in Kwara to establish habits that last generations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/activity-1.png" 
                alt="Community clean up" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white font-medium text-lg">Upcoming: Environmental Sanitation Exercise.</p>
                <p className="text-white/80 text-sm mt-1">Keep Ilorin Clean Drive</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
