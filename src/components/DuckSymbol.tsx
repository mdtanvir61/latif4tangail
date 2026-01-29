import { motion } from "framer-motion";
import duckLogo from "@/assets/duck-logo.svg";
interface DuckSymbolProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  className?: string;
}
const DuckSymbol = ({
  size = "md",
  animate = true,
  className = ""
}: DuckSymbolProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-24 h-24",
    lg: "w-40 h-40",
    xl: "w-64 h-64"
  };
  return <motion.div className={`duck-symbol ${sizeClasses[size]} ${className}`} animate={animate ? {
    y: [0, -8, 0]
  } : undefined} transition={animate ? {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  } : undefined}>
      <img alt="হাঁস মার্কা - Duck Symbol" className="w-full h-full object-contain" src="/lovable-uploads/f105b457-dfbb-4fc2-bb9a-dc50791387b4.svg" />
    </motion.div>;
};
export default DuckSymbol;