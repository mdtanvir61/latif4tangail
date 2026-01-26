import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Film, Smartphone } from "lucide-react";

// Placeholder video data - to be replaced with actual YouTube videos
const landscapeVideos = [
  {
    id: "landscape1",
    title: "কালিহাতীর উন্নয়ন গাথা",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    id: "landscape2",
    title: "জনগণের সাথে সংলাপ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    id: "landscape3",
    title: "এলেঙ্গা পৌরসভার যাত্রা",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
];

const reelVideos = [
  {
    id: "reel1",
    title: "নির্বাচনী প্রচার",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    id: "reel2",
    title: "তরুণদের উদ্দেশ্যে",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    id: "reel3",
    title: "গ্রামবাংলার পথে",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    id: "reel4",
    title: "উন্নয়নের গল্প",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
];

const VideoGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"landscape" | "reels">("landscape");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 md:py-28 bg-muted/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ভিডিও <span className="text-primary">গ্যালারি</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            আমাদের কার্যক্রম ও প্রচারণার ভিডিও সংকলন
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab("landscape")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "landscape"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            <Film className="w-5 h-5" />
            ল্যান্ডস্কেপ ভিডিও
          </button>
          <button
            onClick={() => setActiveTab("reels")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "reels"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            <Smartphone className="w-5 h-5" />
            রিলস
          </button>
        </motion.div>

        {/* Landscape Videos */}
        {activeTab === "landscape" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {landscapeVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="video-container aspect-video"
              >
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <Film className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">ভিডিও লোড হচ্ছে...</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-accent-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                      <p className="text-primary-foreground font-medium">{video.title}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Reels */}
        {activeTab === "reels" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {reelVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="video-container aspect-[9/16]"
              >
                {playingVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground text-xs">রিল</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                      <p className="text-primary-foreground font-medium text-sm">{video.title}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

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
            <Play className="w-5 h-5" />
            ইউটিউব চ্যানেলে সাবস্ক্রাইব করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
