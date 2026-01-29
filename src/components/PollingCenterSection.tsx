import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ChevronDown, ChevronUp, Building2, Home } from "lucide-react";

// Polling centers data based on the PDF
const pollingCenters = [
  {
    area: "দুর্গাপুর ইউনিয়ন",
    type: "union",
    centers: [
      "সরকারি প্রাথমিক বিদ্যালয়, কদিম হামজানী",
      "সরকারি প্রাথমিক বিদ্যালয়, চর হামজানী",
      "উচ্চ বিদ্যালয়, বেড়িপটল",
      "দুর্গাপুর সরকারি প্রাথমিক বিদ্যালয়",
      "উচ্চ বিদ্যালয়, চর দুর্গাপুর",
      "আলীপুর দাখিল মাদ্রাসা",
    ],
  },
  {
    area: "গোহালিয়াবাড়ি ইউনিয়ন",
    type: "union",
    centers: [
      "আফজালপুর সরকারি প্রাথমিক বিদ্যালয়",
      "বল্লভবাড়ি সরকারি প্রাথমিক বিদ্যালয়",
      "সরাইল সরকারি প্রাথমিক বিদ্যালয়",
      "গোহালিয়াবাড়ি সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "এলেঙ্গা পৌরসভা",
    type: "pourashava",
    centers: [
      "এলেঙ্গা পাইলট উচ্চ বিদ্যালয়",
      "এলেঙ্গা সরকারি প্রাথমিক বিদ্যালয়",
      "এলেঙ্গা বালিকা উচ্চ বিদ্যালয়",
      "এলেঙ্গা কলেজ",
      "পশ্চিম এলেঙ্গা প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "কালিহাতি পৌরসভা",
    type: "pourashava",
    centers: [
      "কালিহাতি পাইলট সরকারি উচ্চ বিদ্যালয়",
      "কালিহাতি সরকারি বালিকা উচ্চ বিদ্যালয়",
      "কালিহাতি সদর প্রাথমিক বিদ্যালয়",
      "কালিহাতি ডিগ্রি কলেজ",
    ],
  },
  {
    area: "বল্লা ইউনিয়ন",
    type: "union",
    centers: [
      "বল্লা উচ্চ বিদ্যালয়",
      "বল্লা সরকারি প্রাথমিক বিদ্যালয়",
      "রামপুর সরকারি প্রাথমিক বিদ্যালয়",
      "তাঁতপাড়া মাদ্রাসা",
    ],
  },
  {
    area: "নাগবাড়ি ইউনিয়ন",
    type: "union",
    centers: [
      "নাগবাড়ি সরকারি প্রাথমিক বিদ্যালয়",
      "নাগবাড়ি উচ্চ বিদ্যালয়",
      "পূর্ব নাগবাড়ি মাদ্রাসা",
    ],
  },
  {
    area: "সাহাদেবপুর ইউনিয়ন",
    type: "union",
    centers: [
      "সাহাদেবপুর উচ্চ বিদ্যালয়",
      "সাহাদেবপুর সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "নারান্দিয়া ইউনিয়ন",
    type: "union",
    centers: [
      "নারান্দিয়া উচ্চ বিদ্যালয়",
      "নারান্দিয়া সরকারি প্রাথমিক বিদ্যালয়",
      "দক্ষিণ নারান্দিয়া মাদ্রাসা",
    ],
  },
];

const PollingCenterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  return (
    <section id="polling" className="py-20 md:py-28 bg-background">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ভোট <span className="text-primary">কেন্দ্র তালিকা</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            টাঙ্গাইল-৪ (কালিহাতি) আসনের ১১৪টি ভোট কেন্দ্র
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          <div className="campaign-card p-4 text-center">
            <p className="text-3xl font-bold text-primary">১১৪</p>
            <p className="text-sm text-muted-foreground">মোট কেন্দ্র</p>
          </div>
          <div className="campaign-card p-4 text-center">
            <p className="text-3xl font-bold text-accent">১৫</p>
            <p className="text-sm text-muted-foreground">এলাকা</p>
          </div>
          <div className="campaign-card p-4 text-center">
            <p className="text-3xl font-bold text-secondary-foreground">২</p>
            <p className="text-sm text-muted-foreground">পৌরসভা</p>
          </div>
          <div className="campaign-card p-4 text-center">
            <p className="text-3xl font-bold text-secondary-foreground">১৩</p>
            <p className="text-sm text-muted-foreground">ইউনিয়ন</p>
          </div>
        </motion.div>

        {/* Polling Centers List */}
        <div className="grid md:grid-cols-2 gap-4">
          {pollingCenters.map((area, index) => (
            <motion.div
              key={area.area}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="campaign-card overflow-hidden"
            >
              <button
                onClick={() => setExpandedArea(expandedArea === area.area ? null : area.area)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    area.type === "pourashava" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    {area.type === "pourashava" ? (
                      <Building2 className="w-5 h-5" />
                    ) : (
                      <Home className="w-5 h-5" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{area.area}</p>
                    <p className="text-xs text-muted-foreground">{area.centers.length}টি কেন্দ্র</p>
                  </div>
                </div>
                {expandedArea === area.area ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {expandedArea === area.area && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-border"
                >
                  <div className="p-4 space-y-2">
                    {area.centers.map((center, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{center}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * সম্পূর্ণ তালিকা নির্বাচন কমিশন থেকে সংগ্রহ করা হয়েছে
        </motion.p>
      </div>
    </section>
  );
};

export default PollingCenterSection;
