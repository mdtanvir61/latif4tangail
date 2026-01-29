import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users, Heart } from "lucide-react";
import liberation1971 from "@/assets/liberation-1971.jpg";

const achievements = [
  { icon: Shield, label: "মুক্তিযুদ্ধের সংগঠক", year: "১৯৭১" },
  { icon: Award, label: "প্রাক্তন মন্ত্রী", year: "বাংলাদেশ সরকার" },
  { icon: Users, label: "এলেঙ্গা পৌরসভা প্রতিষ্ঠাতা", year: "২০১১" },
  { icon: Heart, label: "জনসেবায় নিবেদিত", year: "৭০+ বছর" },
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
                আবদুল লতিফ সিদ্দিকী বাংলাদেশের সমাজ-রাজনৈতিক পরিসরে এক অনন্য ধ্রুবতারা। টাঙ্গাইলের আপামর গণমানুষের তিন প্রজন্মের নন্দিত এবং নিন্দিত অনিবার্য অভিভাবক, ১৯৭০-এর জাতীয় মুক্তি আন্দোলনের প্রাণভ্রমরা, জাতীয় ও প্রাদেশিক পরিষদ নির্বাচনে বঙ্গবন্ধু শেখ মুজিবুর রহমানের নির্ভীক ও আস্থাবান ব্যক্তি, সংগঠক ও নির্বাচিত প্রতিনিধি; এবং জাতীয় মুক্তির লক্ষ্যে '৭১-এর স্বাধীনতা যুদ্ধে টাঙ্গাইল ও পার্শ্ববর্তী অঞ্চলের হানাদার ও দখলদার বাহিনীর বিরুদ্ধে মোকাবিলায় সশস্ত্র যুদ্ধের প্রথম সংগঠক।
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                হানাদার-দখলদার মুক্ত বাংলাদেশ পুনর্গঠনে এবং রক্তমূল্যে অর্জিত স্বাধীনতাকে অর্থবহ ও কার্যকর করতে আবদুল লতিফ সিদ্দিকী তাঁর নির্বাচনী এলাকার গণমানুষকে উদ্বুদ্ধ ও অনুপ্রাণিত করে শিক্ষা, স্বাস্থ্য, কৃষি ও সংস্কৃতিতে চৈতন্যকে গতিশীল ও প্রবাহমান করতে শহুরে আনন্দ-উচ্ছ্বাসের জীবনকে উপেক্ষা করে গ্রামীণ মেঠোপথে—নগ্নপদে, জীর্ণবস্ত্র, হাড্ডিসার বক্ষ, সন্তানহারা বেদনাতুর কৃষক-কৃষাণীকে সঙ্গে নিয়ে একীভূত হয়ে কর্মযোগে ব্যাপৃত হন। তাঁর এই মহাযজ্ঞের ব্যাঘাত ঘটে ৭৫-এর ১৫ই আগস্ট বঙ্গবন্ধুর সপরিবারে নিষ্ঠুর, নির্মম হত্যা সংঘটনে।
              </p>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                পঁচাত্তর-পরবর্তী সেই ঘোর অমানিশায় তিনি অন্যায়ের সাথে আপস করেননি, বরং কারানির্যাতন ও নির্বাসনের দহন সহ্য করে গণতন্ত্র পুনরুদ্ধারের সংগ্রামে নিজেকে উৎসর্গ করেছেন। ক্ষমতার জৌলুস বা দলীয় সংকীর্ণতা তাকে কখনোই মোহগ্রস্ত করতে পারেনি; তাইতো আজও সকল চড়াই-উতরাই পেরিয়ে তিনি টাঙ্গাইলের মাটি ও মানুষের হৃৎস্পন্দনে মিশে থাকা এক ও অদ্বিতীয় 'লতিফ ভাই'—উন্নয়ন, প্রগতি আর স্বকীয়তায় ভাস্বর এক অকুতোভয় কান্ডারি।
              </p>
            </div>
          </motion.div>
        </div>

        {/* 1971 Liberation War Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="campaign-card overflow-hidden">
            <div className="relative">
              <img
                src={liberation1971}
                alt="১৯৭১ সালে মুক্তিযুদ্ধের সময় আবদুল লতিফ সিদ্দিকী"
                className="w-full h-auto object-cover max-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-3">
                    ১৯৭১
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
                    মুক্তিযুদ্ধের দুর্জয় সংগঠক
                  </h3>
                  <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl">
                    টাঙ্গাইল অঞ্চলে মুক্তিযুদ্ধ সংগঠনে অগ্রণী ভূমিকা পালনকারী বীর মুক্তিযোদ্ধা
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
