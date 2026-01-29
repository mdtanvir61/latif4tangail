import { motion } from "framer-motion";
import DuckSymbol from "./DuckSymbol";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006A4E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Green glow behind portrait */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
              
              {/* Portrait frame */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={heroPortrait}
                  alt="আবদুল লতিফ সিদ্দিকী"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Name badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg shadow-lg whitespace-nowrap"
              >
                আবদুল লতিফ সিদ্দিকী
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content with Duck Symbol */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            {/* Duck Symbol */}
            <div className="flex justify-center lg:justify-start mb-6">
              <DuckSymbol size="xl" animate />
            </div>

            {/* Headline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              কালিহাতীর জনগণের একজন পরীক্ষিত অভিভাবক, বিশ্বস্ত বন্ধু, পিতা ও নেতা।
            </p>

            {/* Election Symbol Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="bg-secondary/50 px-4 py-2 rounded-full">
                <span className="text-muted-foreground">নির্বাচনী প্রতীক:</span>
                <span className="font-bold text-primary ml-2">হাঁস</span>
              </div>
              <div className="bg-secondary/50 px-4 py-2 rounded-full">
                <span className="text-muted-foreground">আসন:</span>
                <span className="font-bold text-primary ml-2">টাঙ্গাইল-৪</span>
              </div>
              <div className="bg-secondary/50 px-4 py-2 rounded-full">
                <span className="font-bold text-primary">স্বতন্ত্র প্রার্থী</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#vote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 btn-hero text-xl"
            >
              <DuckSymbol size="sm" animate={false} className="w-8 h-8" />
              <span>হাঁস মার্কায় ভোট দিন</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
