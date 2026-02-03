import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Play, ExternalLink } from "lucide-react";
import uprisingPhoto1 from "@/assets/uprising-photo-1.jpg";
import uprisingPhoto2 from "@/assets/uprising-photo-2.jpg";

const UprisingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const youtubeVideoId = "5mCPtS5_7wc";

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-3">
            ২০২৪
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            জুলাই <span className="text-primary">গণঅভ্যুত্থান</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* YouTube Video */}
            <div className="aspect-video rounded-xl overflow-hidden bg-muted shadow-lg">
              {isVideoPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                  title="জুলাই গণঅভ্যুত্থান"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                    alt="জুলাই গণঅভ্যুত্থান ভিডিও"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                    <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-destructive-foreground ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src={uprisingPhoto1}
                  alt="ছাত্রদের সাথে আবদুল লতিফ সিদ্দিকী"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src={uprisingPhoto2}
                  alt="গণঅভ্যুত্থানে সংহতি"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="campaign-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">তারুণ্যের পাশে অভিভাবক</h3>
            </div>

            {/* Facebook Video Link */}
            <a
              href="https://www.facebook.com/watch/?v=1142159144446981"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              ফেসবুক ভিডিও দেখুন
            </a>
            
            <p className="text-lg text-foreground leading-relaxed">
              কালপরিক্রমায় ২০২৪-এর জুলাই মাসে যখন ছাত্র-জনতার অবিস্মরণীয় গণঅভ্যুত্থানে দেশ উত্তাল, তখনও আবদুল লতিফ সিদ্দিকী তাঁর আপসহীন ও সত্যনিষ্ঠ সত্তার স্বাক্ষর রেখেছেন। তৎকালীন ক্ষমতাসীন দলের রক্তচক্ষু বা প্রলোভন—কোনোকিছুই তাঁকে টলাতে পারেনি। দলীয় আনুগত্যের ঊর্ধ্বে থেকে, স্বতন্ত্র সংসদ সদস্য হিসেবে তিনি নির্ভীক চিত্তে সমর্থন জুগিয়েছেন ছাত্রদের ন্যায্য অধিকার আদায়ের সংগ্রামে।
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mt-4">
              টাঙ্গাইলের গণমানুষের ভালোবাসায় সিক্ত এই নেতা রাজপথে নেমে এসেছিলেন, প্রশাসন ও আইনশৃঙ্খলা বাহিনীকে কঠোর নির্দেশনা দিয়েছিলেন কোমলমতি শিক্ষার্থীদের সর্বাঙ্গীন নিরাপত্তা নিশ্চিত করতে। তারুণ্যের এই দ্রোহে তাঁর অভিভাবকসুলভ সংহতি ও অকুতোভয় অবস্থান পুনর্বার প্রমাণ করে—ক্ষমতা বা দল নয়, বরং সত্য ও ন্যায়ের পক্ষে গণমানুষের মুক্তিই তাঁর রাজনীতির শাশ্বত অঙ্গীকার।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UprisingSection;
