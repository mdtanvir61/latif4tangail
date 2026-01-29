import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Shield, Heart } from "lucide-react";

const UprisingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photos Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Placeholder for student protest photos */}
            <div className="aspect-[4/3] rounded-xl bg-muted/50 border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center p-4">
                <Users className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">ছাত্রদের সাথে ছবি #১</p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-muted/50 border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center p-4">
                <Shield className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">ছাত্রদের সাথে ছবি #২</p>
              </div>
            </div>
          </motion.div>

          {/* Description */}
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
