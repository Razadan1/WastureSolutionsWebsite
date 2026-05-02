import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const images = [
  { id: 1, src: "/images/meet.jpg", alt: "Meeting of Wasture CEO and operation officer" },
  { id: 2, src: "/images/clean1.jpg", alt: "Waste collection truck in the city" },
  { id: 3, src: "/images/clean3.jpg", alt: "Volunteers at a community cleanup" },
  
  { id: 4, src: "/images/meet1.jpg", alt: "KWEPA Truck" },
  { id: 5, src: "/images/clean2.jpg", alt: "Cleaning Exercise" },
  { id: 6, src: "/images/clean4.jpg", alt: "Cleaning Exercise" },
  { id: 7, src: "/images/giogasfloor.jpeg", alt: "Buried Digester" },
  { id: 8, src: "/images/biogas1.jpeg", alt: "Biogas Plant" },
  { id: 9, src: "/images/biogas2.jpeg", alt: "Biogas Plant" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24" style={{ backgroundColor: "#DDEB9C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our World</h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground">
            Moments of Change
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-zoom-in"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">View</span>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] md:max-w-5xl bg-transparent border-none shadow-none p-0">
            <DialogTitle className="sr-only">Image preview</DialogTitle>
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedImage && (
                <img 
                  src={selectedImage} 
                  alt="Gallery preview" 
                  className="max-w-full max-h-[85vh] object-contain rounded-md"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
