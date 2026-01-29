import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Youtube, Phone, Mail, MapPin, Send } from "lucide-react";
import DuckSymbol from "./DuckSymbol";
import bottomCta from "@/assets/bottom-cta.png";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <footer id="vote" className="bg-foreground text-primary-foreground" ref={ref}>
      {/* Final CTA Section with Bottom Image */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary to-foreground">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6
        }} className="text-center">
            {/* Bottom CTA Image */}
            <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={isInView ? {
            scale: 1,
            opacity: 1
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="max-w-3xl mx-auto mb-8">
              <img alt="হাঁস মার্কা হবে কালিহাতির মার্কা" className="w-full h-auto rounded-2xl shadow-2xl" src={bottomCta} />
            </motion.div>

            <motion.h2 initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {}} transition={{
            delay: 0.4
          }} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              হাঁস মার্কা হবে <span className="text-accent">কালিহাতির মার্কা</span>
            </motion.h2>
            
            <motion.p initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {}} transition={{
            delay: 0.5
          }} className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
              আবদুল লতিফ সিদ্দিকী — পরীক্ষিত নেতা, বিশ্বস্ত প্রতিনিধি
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            delay: 0.6
          }} className="flex flex-wrap justify-center gap-4">
              <a href="#hero" className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105">
                <DuckSymbol size="sm" animate={false} className="w-8 h-8" />
                হাঁস মার্কায় ভোট দিন
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 border-t border-primary-foreground/10">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <DuckSymbol size="md" animate={false} />
                <div>
                  <h3 className="text-xl font-bold">আবদুল লতিফ সিদ্দিকী</h3>
                  <p className="text-sm opacity-70">টাঙ্গাইল-৪ (কালিহাতী)</p>
                </div>
              </div>
              <p className="opacity-70 text-sm leading-relaxed">
                মুক্তিযুদ্ধের সংগঠক, প্রাক্তন মন্ত্রী, কালিহাতীর উন্নয়নের রূপকার।
              </p>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5" />
                আপনার মতামত জানান
              </h4>
              <div className="space-y-3">
                <input type="text" placeholder="আপনার নাম" className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:opacity-50 focus:outline-none focus:border-accent" />
                <input type="tel" placeholder="মোবাইল নম্বর" className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:opacity-50 focus:outline-none focus:border-accent" />
                <textarea placeholder="আপনার বার্তা..." rows={3} className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:opacity-50 focus:outline-none focus:border-accent resize-none" />
                <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-2 rounded-lg transition-colors">
                  পাঠান
                </button>
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="font-bold mb-4">যোগাযোগ</h4>
              <div className="space-y-3">
                <a href="https://www.facebook.com/Abdul.latif.siddique" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
                <a href="https://www.youtube.com/@abdullatifssiddique7652" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                  <Youtube className="w-5 h-5" />
                  <span>YouTube</span>
                </a>
                <div className="flex items-center gap-3 opacity-70">
                  <MapPin className="w-5 h-5" />
                  <span>কালিহাতী, টাঙ্গাইল</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="py-4 border-t border-primary-foreground/10 text-center text-sm opacity-60">
        <p>© ২০২৬ আবদুল লতিফ সিদ্দিকী ক্যাম্পেইন। সর্বস্বত্ব সংরক্ষিত।</p>
      </div>
    </footer>;
};
export default Footer;