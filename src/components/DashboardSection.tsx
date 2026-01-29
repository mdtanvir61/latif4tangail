import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Home, Star } from "lucide-react";

const pourashavas = [
  { name: "এলেঙ্গা পৌরসভা", isFounder: true },
  { name: "কালিহাতি পৌরসভা", isFounder: false },
];

const unions = [
  { name: "বল্লা ইউনিয়ন", special: "তাঁত শিল্প কেন্দ্র" },
  { name: "নাগবাড়ি ইউনিয়ন", special: null },
  { name: "কোকদহরা ইউনিয়ন", special: null },
  { name: "সাহাদেবপুর ইউনিয়ন", special: null },
  { name: "দুর্গাপুর ইউনিয়ন", special: null },
  { name: "গোহালিয়াবাড়ি ইউনিয়ন", special: null },
  { name: "সল্লা ইউনিয়ন", special: null },
  { name: "বীরবাসিন্দা ইউনিয়ন", special: null },
  { name: "দশকিয়া ইউনিয়ন", special: null },
  { name: "নারান্দিয়া ইউনিয়ন", special: null },
  { name: "বাংড়া ইউনিয়ন", special: null },
  { name: "পাইকড়া ইউনিয়ন", special: null },
  { name: "পারখী ইউনিয়ন", special: null },
];

const DashboardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" className="py-20 md:py-28 bg-background">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            এক নজরে <span className="text-primary">আমার কালিহাতি</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            টাঙ্গাইল-৪ আসনের ১৫টি প্রশাসনিক এলাকা — ২টি পৌরসভা ও ১৩টি ইউনিয়ন
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          <div className="campaign-card p-4 md:p-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <p className="text-2xl md:text-4xl font-bold text-primary">২</p>
            <p className="text-sm md:text-base text-muted-foreground">পৌরসভা</p>
          </div>
          <div className="campaign-card p-4 md:p-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Home className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            <p className="text-2xl md:text-4xl font-bold text-accent">১৩</p>
            <p className="text-sm md:text-base text-muted-foreground">ইউনিয়ন</p>
          </div>
          <div className="campaign-card p-4 md:p-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
            </div>
            <p className="text-2xl md:text-4xl font-bold text-foreground">১১৪</p>
            <p className="text-sm md:text-base text-muted-foreground">ভোট কেন্দ্র</p>
          </div>
        </motion.div>

        {/* Pourashavas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-primary" />
            পৌরসভা
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pourashavas.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`campaign-card p-5 ${item.isFounder ? 'border-accent border-2 bg-accent/5' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.isFounder ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-primary'}`}>
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-foreground">{item.name}</span>
                  </div>
                  {item.isFounder && (
                    <span className="founder-badge">
                      <Star className="w-3 h-3" />
                      তাঁর নেতৃত্বে সংসদে পৌরসভা হিসেবে স্বীকৃতি
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Home className="w-6 h-6 text-accent" />
            ইউনিয়ন পরিষদ
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {unions.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                className="union-badge justify-between"
              >
                <span className="font-medium">{item.name}</span>
                {item.special && (
                  <span className="text-xs text-accent">({item.special})</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
