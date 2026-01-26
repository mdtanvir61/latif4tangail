import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Building, 
  Shirt, 
  GraduationCap, 
  Waves, 
  Car, 
  Ambulance, 
  Users, 
  Dumbbell, 
  Shield, 
  Droplets 
} from "lucide-react";

const pledges = [
  {
    icon: Building,
    title: "প্রশাসনিক উন্নয়ন",
    description: "কালিহাতীর প্রশাসনিক মান আরও বৃদ্ধি করা",
  },
  {
    icon: Shirt,
    title: "তাঁত শিল্প",
    description: "বল্লা ও রামপুরের তাঁতিদের জন্য সুতার ন্যায্যমূল্য ও ঋণ",
  },
  {
    icon: GraduationCap,
    title: "শিক্ষা",
    description: "আলাউদ্দিন সিদ্দিকী কলেজের আধুনিকায়ন",
  },
  {
    icon: Waves,
    title: "নদী ভাঙন",
    description: "গোহালিয়াবাড়ি ও দুর্গাপুরে স্থায়ী বাঁধ",
  },
  {
    icon: Car,
    title: "যোগাযোগ",
    description: "এলেঙ্গা যানজট নিরসন",
  },
  {
    icon: Ambulance,
    title: "স্বাস্থ্য",
    description: "প্রতিটি ইউনিয়নে ২৪ ঘণ্টা অ্যাম্বুলেন্স",
  },
  {
    icon: Users,
    title: "নারী শক্তি",
    description: "ঘরে বসে আয়ের সুযোগ সৃষ্টি",
  },
  {
    icon: Dumbbell,
    title: "মাদকমুক্ত সমাজ",
    description: "যুব সমাজের জন্য ক্রীড়া কমপ্লেক্স",
  },
  {
    icon: Shield,
    title: "নিরাপত্তা",
    description: "গ্রাম পুলিশ আধুনিকায়ন",
  },
  {
    icon: Droplets,
    title: "বিশুদ্ধ পানি",
    description: "আর্সেনিকমুক্ত পানির ব্যবস্থা",
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
            আগামীর <span className="text-primary">১০ অঙ্গীকার</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            কালিহাতীর উন্নয়নে আমার প্রতিশ্রুতি
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
