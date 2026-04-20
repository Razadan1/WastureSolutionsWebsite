import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      
      let totalMilSecDur = duration * 1000;
      let incrementTime = (totalMilSecDur / end) * 2;
      
      // Cap speed to avoid performance issues on high numbers
      if (incrementTime < 10) {
        incrementTime = 10;
      }
      
      const step = Math.ceil(end / (totalMilSecDur / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Impact() {
  const stats = [
    { label: "Tons of Waste Collected", value: 500, suffix: "+" },
    { label: "Communities Reached", value: 120, suffix: "" },
    { label: "Volunteers Engaged", value: 2000, suffix: "+" },
  ];

  return (
    <section id="impact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="pt-12 md:pt-0 first:pt-0 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-black mb-4 flex items-center justify-center font-mono">
                <AnimatedCounter value={stat.value} />
                <span className="text-accent ml-1">{stat.suffix}</span>
              </div>
              <p className="text-lg md:text-xl font-medium text-primary-foreground/90 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
