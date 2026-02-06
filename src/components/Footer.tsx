import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import DuckSymbol from "./DuckSymbol";
import bottomCta from "@/assets/bottom-cta.png";
import { toast } from "sonner";

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().trim().min(2, "নাম কমপক্ষে ২ অক্ষর হতে হবে").max(100, "নাম ১০০ অক্ষরের বেশি হতে পারবে না"),
  mobile: z.string().trim().regex(/^[0-9]{10,15}$/, "সঠিক মোবাইল নম্বর দিন (১০-১৫ সংখ্যা)").or(z.literal("")),
  message: z.string().trim().min(1, "বার্তা লিখুন").max(500, "বার্তা ৫০০ অক্ষরের বেশি হতে পারবে না"),
});

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  const [formData, setFormData] = useState({ name: "", mobile: "", message: "" });

  const handleSubmit = () => {
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      // Show first validation error in Bengali
      const firstError = result.error.errors[0]?.message || "ফর্মে ত্রুটি রয়েছে";
      toast.error(firstError);
      return;
    }
    
    // Show success toast with floating duck animation
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ type: "spring", damping: 15, stiffness: 300 }}
        className="flex items-center gap-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl"
      >
        <motion.img
          src="/lovable-uploads/8c1a051c-006e-4a69-b5d2-81da3c9fdf52.png"
          alt="হাঁস মার্কা"
          className="w-16 h-16 object-contain"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <div>
          <p className="font-bold text-lg">ধন্যবাদ!</p>
          <p className="text-sm opacity-90">আপনার মতামত গ্রহণ করা হয়েছে</p>
        </div>
      </motion.div>
    ), { duration: 4000 });
    
    setFormData({ name: "", mobile: "", message: "" });
  };
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
                  <p className="text-sm opacity-70">টাঙ্গাইল-৪ (কালিহাতি)</p>
                </div>
              </div>
              <p className="opacity-70 text-sm leading-relaxed">
                মুক্তিযুদ্ধের সংগঠক, প্রাক্তন মন্ত্রী, কালিহাতির উন্নয়নের রূপকার।
              </p>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5" />
                আপনার মতামত জানান
              </h4>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="আপনার নাম" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value.slice(0, 100) }))}
                  maxLength={100}
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:opacity-50 focus:outline-none focus:border-accent" 
                />
                <input 
                  type="tel" 
                  placeholder="মোবাইল নম্বর" 
                  value={formData.mobile}
                  onChange={(e) => {
                    // Only allow numeric input
                    const numericValue = e.target.value.replace(/[^0-9]/g, '').slice(0, 15);
                    setFormData(prev => ({ ...prev, mobile: numericValue }));
                  }}
                  maxLength={15}
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:opacity-50 focus:outline-none focus:border-accent" 
                />
                <textarea 
                  placeholder="আপনার বার্তা..." 
                  rows={3} 
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value.slice(0, 500) }))}
                  maxLength={500}
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:opacity-50 focus:outline-none focus:border-accent resize-none" 
                />
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-2 rounded-lg transition-colors"
                >
                  পাঠান
                </button>
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