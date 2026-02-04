import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Local video data
const localVideos = [
  {
    id: "video1",
    title: "রতনগঞ্জ বাজারে নির্বাচনী প্রচারণা শেষ করে ফেরার পথে বল্লা বাজারে দুই ভাই একসাথে",
    src: "/videos/ratongonj-campaign.mp4",
    type: "local",
  },
  {
    id: "video2",
    title: "শহীদ জামাল উচ্চ বিদ্যালয়ে প্রিয় ছাত্র-ছাত্রীদের সাথে প্রাণবন্ত ও আনন্দঘন মুহূর্ত কাটালেন জননেতা আবদুল লতিফ সিদ্দিকী",
    src: "/videos/school-visit.mp4",
    type: "local",
  },
];

// Facebook video embeds
const facebookVideos = [
  {
    id: "fb1",
    title: "প্রচারণা ভিডিও ১",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1FqVdQMaqh%2F&show_text=false",
  },
  {
    id: "fb2",
    title: "প্রচারণা ভিডিও ২",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1CL5dXnPwi%2F&show_text=false",
  },
  {
    id: "fb3",
    title: "প্রচারণা ভিডিও ৩",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F17tGiWEGs5%2F&show_text=false",
  },
  {
    id: "fb4",
    title: "প্রচারণা ভিডিও ৪",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1EAoq4wTtm%2F&show_text=false",
  },
  {
    id: "fb5",
    title: "প্রচারণা ভিডিও ৫",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F18GMepxt91%2F&show_text=false",
  },
  {
    id: "fb6",
    title: "প্রচারণা ভিডিও ৬",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F183P5o9aQD%2F&show_text=false",
  },
  {
    id: "fb7",
    title: "প্রচারণা ভিডিও ৭",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1CSh3cnvHX%2F&show_text=false",
  },
  {
    id: "fb8",
    title: "প্রচারণা ভিডিও ৮",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F12MYgwvo4Tr%2F&show_text=false",
  },
  {
    id: "fb9",
    title: "প্রচারণা ভিডিও ৯",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1B5nkT3HF8%2F&show_text=false",
  },
  {
    id: "fb10",
    title: "প্রচারণা ভিডিও ১০",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1DnNeUDxSj%2F&show_text=false",
  },
];

const VideoGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        {/* Facebook Videos */}
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
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg bg-card"
            >
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
