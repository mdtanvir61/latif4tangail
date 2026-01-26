import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import DuckSymbol from "./DuckSymbol";

const navItems = [
  { label: "পরিচিতি", href: "#bio" },
  { label: "আমার কালিহাতী", href: "#dashboard" },
  { label: "অঙ্গীকার", href: "#pledges" },
  { label: "গ্যালারি", href: "#gallery" },
  { label: "ভোট কেন্দ্র", href: "#polling" },
  { label: "সংবাদ", href: "#news" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Name */}
          <a href="#" className="flex items-center gap-3">
            <DuckSymbol size="sm" animate={false} />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                আবদুল লতিফ সিদ্দিকী
              </h1>
              <p className="text-xs text-muted-foreground">টাঙ্গাইল-৪ (কালিহাতী)</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Vote CTA */}
          <a
            href="#vote"
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            <DuckSymbol size="sm" animate={false} className="w-6 h-6" />
            <span>হাঁস মার্কা</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border"
        >
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#vote"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-4 mt-4 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-4 py-3 rounded-full"
            >
              <DuckSymbol size="sm" animate={false} className="w-6 h-6" />
              <span>হাঁস মার্কায় ভোট দিন</span>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
