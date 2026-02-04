import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Play, ExternalLink } from "lucide-react";

// Local video data
const localVideos = [
  {
    id: "video1",
    title: "রতনগঞ্জ বাজারে নির্বাচনী প্রচারণা শেষ করে ফেরার পথে বল্লা বাজারে দুই ভাই একসাথে",
    src: "/videos/ratongonj-campaign.mp4",
  },
  {
    id: "video2",
    title: "শহীদ জামাল উচ্চ বিদ্যালয়ে প্রিয় ছাত্র-ছাত্রীদের সাথে প্রাণবন্ত ও আনন্দঘন মুহূর্ত কাটালেন জননেতা আবদুল লতিফ সিদ্দিকী",
    src: "/videos/school-visit.mp4",
  },
];

// Facebook video data
const facebookVideos = [
  {
    id: "fb1",
    title: "প্রচারণার মুহূর্ত ১",
    url: "https://www.facebook.com/share/v/1FqVdQMaqh/",
  },
  {
    id: "fb2",
    title: "প্রচারণার মুহূর্ত ২",
    url: "https://www.facebook.com/share/v/1CL5dXnPwi/",
  },
  {
    id: "fb3",
    title: "প্রচারণার মুহূর্ত ৩",
    url: "https://www.facebook.com/share/v/17tGiWEGs5/",
  },
  {
    id: "fb4",
    title: "প্রচারণার মুহূর্ত ৪",
    url: "https://www.facebook.com/share/v/1EAoq4wTtm/",
  },
  {
    id: "fb5",
    title: "প্রচারণার মুহূর্ত ৫",
    url: "https://www.facebook.com/share/v/18GMepxt91/",
  },
  {
    id: "fb6",
    title: "প্রচারণার মুহূর্ত ৬",
    url: "https://www.facebook.com/share/v/183P5o9aQD/",
  },
  {
    id: "fb7",
    title: "প্রচারণার মুহূর্ত ৭",
    url: "https://www.facebook.com/share/v/1CSh3cnvHX/",
  },
  {
    id: "fb8",
    title: "প্রচারণার মুহূর্ত ৮",
    url: "https://www.facebook.com/share/v/12MYgwvo4Tr/",
  },
  {
    id: "fb9",
    title: "প্রচারণার মুহূর্ত ৯",
    url: "https://www.facebook.com/share/v/1B5nkT3HF8/",
  },
  {
    id: "fb10",
    title: "প্রচারণার মুহূর্ত ১০",
    url: "https://www.facebook.com/share/v/1DnNeUDxSj/",
  },
];

const FacebookVideoEmbed = ({ url, title }: { url: string; title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Facebook SDK
    if (!(window as any).FB) {
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else {
      (window as any).FB.XFBML.parse(containerRef.current);
    }
  }, []);

  useEffect(() => {
    // Parse when FB SDK is loaded
    const checkFB = setInterval(() => {
      if ((window as any).FB && containerRef.current) {
        (window as any).FB.XFBML.parse(containerRef.current);
        clearInterval(checkFB);
      }
    }, 100);

    return () => clearInterval(checkFB);
  }, [url]);

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="fb-video"
        data-href={url}
        data-width="auto"
        data-show-text="false"
        data-allowfullscreen="true"
      />
    </div>
  );
};

const VideoGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="videos" className="py-20 md:py-28 bg-muted/30">
      <div id="fb-root" />
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

        {/* Local Videos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {localVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg bg-card"
            >
              <div className="aspect-video">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                </video>
              </div>
              <div className="p-4">
                <p className="text-foreground font-medium text-sm line-clamp-2">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facebook Videos - Embedded Posts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facebookVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 2) * 0.05 }}
              className="rounded-xl overflow-hidden shadow-lg bg-card"
            >
              <div className="aspect-video relative bg-muted">
                <FacebookVideoEmbed url={video.url} title={video.title} />
                {/* Fallback overlay for loading state */}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-foreground/20 transition-opacity"
                >
                  <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium">
                    <ExternalLink className="w-4 h-4" />
                    ফেসবুকে দেখুন
                  </div>
                </a>
              </div>
              <div className="p-4">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <p className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{video.title}</p>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
