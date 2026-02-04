import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ChevronDown, ChevronUp, Building2, Home } from "lucide-react";

// Polling centers data
const pollingCenters = [
  {
    area: "দূর্গাপুর ইউনিয়ন",
    type: "union",
    centers: [
      "কদিম হামজানী সরকারি প্রাথমিক বিদ্যালয়",
      "চর হামজানী সরকারি প্রাথমিক বিদ্যালয়",
      "বেড়ীপটল আদর্শ উচ্চ বিদ্যালয়",
      "দূর্গাপুর সরকারী প্রাথমিক বিদ্যালয়",
      "চরসিংগুলী মুসলিম উচ্চ বিদ্যালয়",
      "বেলটিয়া সরকারী প্রাথমিক বিদ্যালয় এবং সংলগ্ন আলীপুর দাখিল মাদ্রাসা",
    ],
  },
  {
    area: "গোহালিয়াবাড়ী ইউনিয়ন",
    type: "union",
    centers: [
      "আফজালপুর সরকারি প্রাথমিক বিদ্যালয়",
      "বল্লভবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
      "সরাতৈল সরকারী প্রাথমিক বিদ্যালয়",
      "বিয়ারা মারুয়া সরকারী প্রাথমিক বিদ্যালয়",
      "গোহালিয়া বাড়ী সরকারী প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "সল্লা ইউনিয়ন",
    type: "union",
    centers: [
      "সল্লা সমবায় উচ্চ বিদ্যালয়",
      "জাবরাজান বি.এইচ দাখিল মাদ্রাসা",
      "দেউপুর উচ্চ বিদ্যালয়",
      "দেউপুর সরকারী প্রাথমিক বিদ্যালয়",
      "নরদহি উচ্চ বিদ্যালয়",
      "আনালিয়াবাড়ী সরকারী প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "দশকিয়া ইউনিয়ন",
    type: "union",
    centers: [
      "মগড়া সরকারি প্রাথমিক বিদ্যালয়",
      "ধলাটেংগর সরকারি প্রাথমিক বিদ্যালয়",
      "যোগীপাল সরকারি প্রাথমিক বিদ্যালয়",
      "দশকিয়া উচ্চ বিদ্যালয়",
      "হাতিয়া সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "এলেঙ্গা পৌরসভা",
    type: "pourashava",
    centers: [
      "ফুলতলা উচ্চ বিদ্যালয়",
      "ভাবলা সরকারি প্রাথমিক বিদ্যালয়",
      "এলেঙ্গা উচ্চ বিদ্যালয়",
      "সরকারি শামসুল হক কলেজ, (দক্ষিণ পার্শ্বের চার তলা ভবন)",
      "সরকারি শামসুল হক কলেজ, (পশ্চিম পার্শ্বের দ্বিতল ভবন যমুনা)",
      "কুড়িঘড়িয়া সরকারি প্রাথমিক বিদ্যালয়",
      "চিনামুড়া সরকারি প্রাথমিক বিদ্যালয়",
      "ফটিকজানী সরকারি প্রাথমিক বিদ্যালয়",
      "মহেলা রাবেয়া সিরাজ উচ্চ বিদ্যালয়",
    ],
  },
  {
    area: "নারান্দিয়া ইউনিয়ন",
    type: "union",
    centers: [
      "সোনাকান্দর সরকারি প্রাথমিক বিদ্যালয়",
      "নারান্দিয়া টি আর কে এন উচ্চ মাধ্যমিক বিদ্যালয় (স্কুল এন্ড কলেজ)",
      "মালতী সরকারি প্রাথমিক বিদ্যালয়",
      "তাতীহারা সরকারি প্রাথমিক বিদ্যালয়",
      "সয়া ইসলামিয়া আলিম মাদ্রাসা",
      "মাইস্তা সরকারি প্রাথমিক বিদ্যালয়",
      "পোষণা সরকারি প্রাথমিক বিদ্যালয়",
      "কুরুয়া সরকারি প্রাথমিক বিদ্যালয়",
      "লুহুরিয়া বানাত হাসেন রহমান উচ্চ বিদ্যালয়",
    ],
  },
  {
    area: "বাংড়া ইউনিয়ন",
    type: "union",
    centers: [
      "পাথালিয়া কলিম উদ্দিন আববাছ আলী উচ্চ বিদ্যালয়",
      "বর্তা সরকারি প্রাথমিক বিদ্যালয়",
      "সাকরাইল সরকারি প্রাথমিক বিদ্যালয়",
      "খিলদা উচ্চ বিদ্যালয়",
      "দয়থা সরকারি প্রাথমিক বিদ্যালয়",
      "ইছাপুর শেরে বাংলা উচ্চ বিদ্যালয়",
      "রাজাবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "কালিহাতি পৌরসভা",
    type: "pourashava",
    centers: [
      "কালিহাতী পাইলট বালিকা উচ্চ বিদ্যালয়",
      "ঘুনী সরকারি প্রাথমিক বিদ্যালয়",
      "চাটিপাড়া সরকারি প্রাথমিক বিদ্যালয়",
      "কালিহাতী আর. এস সরকারি পাইলট উচ্চ বিদ্যালয়",
      "কালিহাতী শাজাহান সিরাজ কলেজ",
      "নিশ্চিন্তপুর সরকারি প্রাথমিক বিদ্যালয়",
      "সাতুটিয়া সরকারি প্রাথমিক বিদ্যালয়",
      "হরিপুর সরকারি প্রাথমিক বিদ্যালয়",
      "কামার্থী সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "সহদেবপুর ইউনিয়ন",
    type: "union",
    centers: [
      "হাজী আরফান আলী সরকারি প্রাথমিক বিদ্যালয়",
      "টেরকী পোষ্ট অফিস",
      "সহদেবপুর সরকারি প্রাথমিক বিদ্যালয়",
      "পৌজান সরকারি প্রাথমিক বিদ্যালয়",
      "বানিয়াফৈর সরকারি প্রাথমিক বিদ্যালয়",
      "ভবানীপুর সরকারি প্রাথমিক বিদ্যালয়",
      "দক্ষিণ চামুরিয়া সরকারি প্রাথমিক বিদ্যালয়",
      "আকুয়া চামুরিয়া দাখিল মাদ্রাসা",
      "ভুক্তা সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "পাইকড়া ইউনিয়ন",
    type: "union",
    centers: [
      "পাইকড়া সরকারি প্রাথমিক বিদ্যালয়",
      "গোলড়া সরকারি প্রাথমিক বিদ্যালয়",
      "হাসড়া সরকারি প্রাথমিক বিদ্যালয়",
      "গোপালদিঘী সরকারি প্রাথমিক বিদ্যালয়",
      "বলিখণ্ড সরকারি প্রাথমিক বিদ্যালয়",
      "বানকিনা সরকারি প্রাথমিক বিদ্যালয়",
      "কালোহা সরকারি প্রাথমিক বিদ্যালয়",
      "ছাতিহাটি সরকারি প্রাথমিক বিদ্যালয়",
      "সিংহটিয়া সরকারি প্রাথমিক বিদ্যালয়",
      "খরশিলা সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "বল্লা ইউনিয়ন",
    type: "union",
    centers: [
      "বল্লা করোনেশন হাই স্কুল এন্ড কলেজ",
      "মাদ্রাসা দারুল ইসলাম মুহাম্মদীয়া বল্লা, ফাজিল (ডিগ্রি) মাদরাসা",
      "বেহেলাবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
      "দাড়িখশিলা সরকারি প্রাথমিক বিদ্যালয়",
      "রামপুর সরকারি প্রাথমিক বিদ্যালয়",
      "রামপুর উচ্চ বিদ্যালয়",
      "সিংগাইর সরকারি প্রাথমিক বিদ্যালয়",
      "কামন্না সরকারি প্রাথমিক বিদ্যালয়",
      "কাজীবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "কোকডহরা ইউনিয়ন",
    type: "union",
    centers: [
      "লাঙ্গলজোড়া উচ্চ বিদ্যালয়",
      "বলধী সরকারি প্রাথমিক বিদ্যালয়",
      "পোষণা সরকারি প্রাথমিক বিদ্যালয়",
      "ফুলবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
      "আগচারান সরকারি প্রাথমিক বিদ্যালয়",
      "চারান সরকারি প্রাথমিক বিদ্যালয়",
      "কোকডহরা উচ্চ বিদ্যালয়",
      "বাড্ডা সরকারি প্রাথমিক বিদ্যালয়",
      "বানিয়ারা সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "বীরবাসিন্দা ইউনিয়ন",
    type: "union",
    centers: [
      "রাজাফৈর উচ্চ বিদ্যালয়",
      "জোয়াইর সরকারি প্রাথমিক বিদ্যালয়",
      "আটাবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
      "নোয়াবাড়ী মুক্তিযোদ্ধা সরকারি প্রাথমিক বিদ্যালয়",
      "কস্তুরীপাড়া সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "পারখী ইউনিয়ন",
    type: "union",
    centers: [
      "আলাউদ্দিন সিদ্দিকী কলেজ",
      "পারখী সরকারি প্রাথমিক বিদ্যালয়",
      "আমজানী সরকারি প্রাথমিক বিদ্যালয়",
      "ভিয়াইল সরকারি প্রাথমিক বিদ্যালয়",
      "পূর্বাশুন্ডা সরকারি প্রাথমিক বিদ্যালয়",
      "বর্গা সরকারি প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    area: "নাগবাড়ী ইউনিয়ন",
    type: "union",
    centers: [
      "নাগবাড়ী হাসিনা চৌধুরী উচ্চ বিদ্যালয়",
      "বীরপাকুটিয়া সরকারি প্রাথমিক বিদ্যালয়",
      "ছাতিহাটি সরকারি প্রাথমিক বিদ্যালয়",
      "আওলাতৈল সরকারি প্রাথমিক বিদ্যালয়",
      "ধানগড়া সরকারি প্রাথমিক বিদ্যালয়",
      "ভরসরাই সরকারি প্রাথমিক বিদ্যালয়",
      "রতনগঞ্জ সরকারি প্রাথমিক বিদ্যালয়",
      "সোমজানী সরকারি প্রাথমিক বিদ্যালয়",
      "তেজপুর সরকারি প্রাথমিক বিদ্যালয়",
      "গান্ধিনা সরকারি প্রাথমিক বিদ্যালয়",
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

      </div>
    </section>
  );
};

export default PollingCenterSection;
