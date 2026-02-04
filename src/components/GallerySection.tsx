import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import galleryYouth from "@/assets/gallery-youth.jpg";
import galleryMarket from "@/assets/gallery-market.jpg";
import galleryRiverside from "@/assets/gallery-riverside.jpg";
import gallerySchool from "@/assets/gallery-school.jpg";
import galleryEid from "@/assets/gallery-eid.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryElderly from "@/assets/gallery-elderly.jpg";
import campaign1 from "@/assets/campaign-1.jpg";
import campaign2 from "@/assets/campaign-2.jpg";
import campaign3 from "@/assets/campaign-3.jpg";
import campaign4 from "@/assets/campaign-4.jpg";
import campaign5 from "@/assets/campaign-5.jpg";
import campaign6 from "@/assets/campaign-6.jpg";
import campaign7 from "@/assets/campaign-7.jpg";
import campaign8 from "@/assets/campaign-8.jpg";
import campaign9 from "@/assets/campaign-9.jpg";

const galleryImages = [
  { src: campaign1, caption: "জনসভায় ভাষণ", alt: "Public gathering speech" },
  { src: campaign2, caption: "বাজারে জনগণের সাথে", alt: "Meeting people at market" },
  { src: campaign3, caption: "সেবামূলক কার্যক্রম", alt: "Service activities" },
  { src: campaign4, caption: "জনগণের কাছে", alt: "Close to people" },
  { src: campaign5, caption: "শুভেচ্ছা বিনিময়", alt: "Exchanging greetings" },
  { src: campaign6, caption: "রাতের সভায়", alt: "Evening gathering" },
  { src: campaign7, caption: "স্কুলে ছাত্রদের সাথে", alt: "With students at school" },
  { src: campaign8, caption: "জনসভা", alt: "Public meeting" },
  { src: campaign9, caption: "গ্রামীণ জনগণের সাথে", alt: "With rural community" },
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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

        {/* Carousel Navigation */}
        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-2 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-2 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.caption}-${index}`}
                className="flex-[0_0_45%] sm:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                  className="gallery-image cursor-pointer aspect-square rounded-xl overflow-hidden shadow-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-primary-foreground font-medium text-sm">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(galleryImages.length / 4) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx * 4)}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary/50 transition-colors"
              aria-label={`Go to slide group ${idx + 1}`}
            />
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
