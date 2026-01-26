import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users, Heart } from "lucide-react";

const achievements = [
  { icon: Shield, label: "মুক্তিযুদ্ধের সংগঠক", year: "১৯৭১" },
  { icon: Award, label: "প্রাক্তন মন্ত্রী", year: "বাংলাদেশ সরকার" },
  { icon: Users, label: "এলেঙ্গা পৌরসভা প্রতিষ্ঠাতা", year: "২০১১" },
  { icon: Heart, label: "জনসেবায় নিবেদিত", year: "৫০+ বছর" },
];

const BioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bio" className="bg-muted/30 py-20 md:py-28">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ইতিহাসের <span className="text-primary">মহানায়ক</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Achievement badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="campaign-card p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="campaign-card p-6 md:p-8 lg:p-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                আবদুল লতিফ সিদ্দিকী বাংলাদেশের সমাজ-রাজনৈতিক পরিসরে এক অনন্য ধ্রুবতারা। 
                ১৯৭০-এর জাতীয় মুক্তি আন্দোলনের প্রাণভ্রমর, একাত্তরের মহান স্বাধীনতা যুদ্ধের অন্যতম সংগঠক।
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                টাঙ্গাইল ও পার্শ্ববর্তী অঞ্চলে হানাদার বাহিনীর বিরুদ্ধে তিনি ছিলেন এক দুর্ভেদ্য প্রাচীর। 
                ৭৫-এর ট্রাজেডির পরও তিনি দমে যাননি; শহুরে আরাম-আয়েশ তুচ্ছ করে তিনি মিশে গেছেন গ্রামবাংলার মেঠোপথে।
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                জীর্ণবস্ত্র পরিহিত কৃষক আর সন্তানহারা জননীর চোখের জল মুছিয়ে তিনি কাজ করেছেন দেশ পুনর্গঠনে।
              </p>

              {/* Highlight: 12 to 15 Achievement */}
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-2">
                  ঐতিহাসিক অর্জন: ১২ থেকে ১৫
                </h3>
                <p className="text-muted-foreground">
                  তাঁর নেতৃত্বে কালিহাতী উপজেলা ১২টি প্রশাসনিক ইউনিট থেকে ১৫টিতে উন্নীত হয়েছে — 
                  ১৩টি ইউনিয়ন ও ২টি পৌরসভা। এলেঙ্গা পৌরসভা (২০১১) তাঁরই প্রচেষ্টার ফসল।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
