import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Floating particles (pseudo-elements) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3,
              scale: Math.random() * 2 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              x: [null, Math.random() * 100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Transforming Waste into <br className="hidden md:block" />
          <span className="text-accent">Sustainable Value</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We are pioneering efficient waste management, recycling initiatives, and community engagement in Kwara, Nigeria, building a cleaner and greener Africa.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground border-none"
            onClick={() => scrollTo("#about")}
            data-testid="btn-learn-more"
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            className="text-lg h-14 px-8 text-white border-none"
            style={{ backgroundColor: "#EB5C00" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#c94e00")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#EB5C00")}
            onClick={() => scrollTo("#activities")}
            data-testid="btn-view-activities"
          >
            View Activities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
