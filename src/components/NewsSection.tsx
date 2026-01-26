import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Youtube, Calendar, Play } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "আবদুল লতিফ সিদ্দিকীর প্রচারণা ভিডিও",
    youtubeId: "VrK3F7iezEE",
    date: "২০২৬",
  },
  {
    id: 2,
    title: "কালিহাতীর জনগণের প্রতি বার্তা",
    youtubeId: "uxh0eD3vPSA",
    date: "২০২৬",
  },
  {
    id: 3,
    title: "নির্বাচনী সংলাপ",
    youtubeId: "jLuMUHUiVwc",
    date: "২০২৬",
  },
  {
    id: 4,
    title: "এলেঙ্গা পৌরসভায় উন্নয়ন কার্যক্রম",
    youtubeId: "WlFsTB6GA9I",
    date: "২০২৬",
  },
  {
    id: 5,
    title: "জনসভায় ভাষণ",
    youtubeId: "BOtfPR4TVZc",
    date: "২০২৬",
  },
  {
    id: 6,
    title: "প্রচারণা প্রতিবেদন",
    youtubeId: "feNftQw1MBk",
    date: "২০২৬",
  },
  {
    id: 7,
    title: "গণমাধ্যমে সাক্ষাৎকার",
    youtubeId: "kFLPY9bxdr4",
    date: "২০২৬",
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

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

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="news-card group overflow-hidden"
            >
              {/* Video Player / Thumbnail */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                {playingVideo === item.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    onClick={() => setPlayingVideo(item.youtubeId)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                      <div className="w-14 h-14 bg-destructive rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-destructive-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Youtube className="w-4 h-4 text-destructive" />
                  <span>YouTube</span>
                  <span>•</span>
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.youtube.com/@abdullatifssiddique7652"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
          >
            <Youtube className="w-5 h-5" />
            ইউটিউব চ্যানেলে সাবস্ক্রাইব করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
