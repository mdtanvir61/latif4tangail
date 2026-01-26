import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Newspaper, Youtube, ExternalLink, Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    type: "article",
    title: "আবদুল লতিফ সিদ্দিকীর রাজনৈতিক জীবন: এক সংক্ষিপ্ত পর্যালোচনা",
    source: "দৈনিক প্রথম আলো",
    date: "১৫ জানুয়ারি, ২০২৬",
    link: "#",
  },
  {
    id: 2,
    type: "video",
    title: "কালিহাতীর উন্নয়ন নিয়ে আবদুল লতিফ সিদ্দিকীর বক্তব্য",
    source: "YouTube",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video
    date: "১০ জানুয়ারি, ২০২৬",
  },
  {
    id: 3,
    type: "article",
    title: "এলেঙ্গা পৌরসভা: আবদুল লতিফ সিদ্দিকীর স্বপ্ন বাস্তবায়ন",
    source: "দৈনিক ইত্তেফাক",
    date: "৮ জানুয়ারি, ২০২৬",
    link: "#",
  },
  {
    id: 4,
    type: "video",
    title: "মুক্তিযুদ্ধের স্মৃতিচারণ - আবদুল লতিফ সিদ্দিকী",
    source: "YouTube",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video
    date: "২৬ মার্চ, ২০২৫",
  },
  {
    id: 5,
    type: "article",
    title: "তাঁত শিল্পে নতুন প্রাণ: বল্লার তাঁতিদের আশার আলো",
    source: "বাংলাদেশ প্রতিদিন",
    date: "৫ জানুয়ারি, ২০২৬",
    link: "#",
  },
  {
    id: 6,
    type: "video",
    title: "নির্বাচনী প্রচারণা ২০২৬ - হাঁস মার্কা",
    source: "YouTube",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video
    date: "১ জানুয়ারি, ২০২৬",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            সংবাদ ও <span className="text-primary">মিডিয়া</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            সাম্প্রতিক সংবাদ কভারেজ ও ভিডিও
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="news-card group"
            >
              {item.type === "video" ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                      <div className="w-14 h-14 bg-destructive rounded-full flex items-center justify-center">
                        <Youtube className="w-7 h-7 text-destructive-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Youtube className="w-4 h-4 text-destructive" />
                      <span>{item.source}</span>
                      <span>•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Newspaper className="w-4 h-4 text-primary" />
                    <span>{item.source}</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    পড়ুন <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
