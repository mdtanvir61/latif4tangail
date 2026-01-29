import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  GraduationCap, 
  Heart, 
  Smile, 
  Home, 
  Shield 
} from "lucide-react";

const pledges = [
  {
    icon: GraduationCap,
    title: "শিক্ষা",
    description: "সকলের জন্য মানসম্মত শিক্ষা নিশ্চিতকরণ—জ্ঞান ও দক্ষতায় সমৃদ্ধ প্রজন্ম গড়ে তোলা",
  },
  {
    icon: Heart,
    title: "স্বাস্থ্য",
    description: "প্রতিটি মানুষের জন্য সুলভ ও মানসম্পন্ন স্বাস্থ্যসেবা নিশ্চিতকরণ",
  },
  {
    icon: Smile,
    title: "শান্তি",
    description: "সামাজিক সম্প্রীতি ও সৌহার্দ্যপূর্ণ পরিবেশ বজায় রাখা",
  },
  {
    icon: Home,
    title: "স্বস্তি",
    description: "প্রতিটি পরিবারের জন্য অর্থনৈতিক স্থিতিশীলতা ও মানসিক প্রশান্তি",
  },
  {
    icon: Shield,
    title: "নিরাপত্তা",
    description: "সকল নাগরিকের জীবন ও সম্পদের সার্বিক নিরাপত্তা নিশ্চিতকরণ",
  },
];

const PledgesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pledges" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            আগামীর <span className="text-primary">৫ অঙ্গীকার</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            কালিহাতির উন্নয়নে আমার প্রতিশ্রুতি
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Pledges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {pledges.map((pledge, index) => (
            <motion.div
              key={pledge.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pledge-card group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <pledge.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">{pledge.title}</h3>
                <p className="text-muted-foreground text-sm">{pledge.description}</p>
              </div>
              <div className="mt-auto pt-2">
                <span className="text-xs text-accent font-semibold">অঙ্গীকার #{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PledgesSection;
