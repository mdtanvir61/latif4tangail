import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import galleryYouth from "@/assets/gallery-youth.jpg";
import galleryMarket from "@/assets/gallery-market.jpg";
import galleryRiverside from "@/assets/gallery-riverside.jpg";
import gallerySchool from "@/assets/gallery-school.jpg";
import galleryEid from "@/assets/gallery-eid.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryElderly from "@/assets/gallery-elderly.jpg";

const galleryImages = [
  { src: galleryYouth, caption: "যুব সমাজের সাথে", alt: "Latif Siddiqui with youth" },
  { src: gallerySchool, caption: "শিক্ষার্থীদের সাথে", alt: "At school with students" },
  { src: galleryRiverside, caption: "জনসভায়", alt: "Public gathering by riverside" },
  { src: galleryMarket, caption: "বাজারে জনগণের সাথে", alt: "Meeting people at market" },
  { src: galleryEid, caption: "ঈদ উদযাপন", alt: "Eid celebration" },
  { src: galleryCommunity, caption: "সম্প্রদায়ের সাথে", alt: "With community members" },
  { src: galleryElderly, caption: "প্রবীণদের সাথে", alt: "Caring for elderly" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ছবি <span className="text-primary">গ্যালারি</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            জনগণের সাথে, জনগণের জন্য
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.caption}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gallery-image cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-medium text-sm md:text-base">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <p className="text-primary-foreground text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
