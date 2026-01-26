import { motion } from "framer-motion";

interface DuckSymbolProps {
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  className?: string;
}

const DuckSymbol = ({ size = "md", animate = true, className = "" }: DuckSymbolProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-24 h-24",
    lg: "w-40 h-40",
    xl: "w-64 h-64",
  };

  return (
    <motion.div
      className={`duck-symbol ${sizeClasses[size]} ${className}`}
      animate={animate ? { y: [0, -8, 0] } : undefined}
      transition={animate ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle background */}
        <circle
          cx="100"
          cy="100"
          r="95"
          stroke="hsl(162 100% 22%)"
          strokeWidth="6"
          fill="none"
        />
        
        {/* Duck body - gray/silver */}
        <ellipse
          cx="105"
          cy="130"
          rx="55"
          ry="35"
          fill="hsl(210 10% 65%)"
        />
        
        {/* Duck body shadow */}
        <ellipse
          cx="105"
          cy="140"
          rx="45"
          ry="20"
          fill="hsl(210 10% 55%)"
        />
        
        {/* Duck chest - brown */}
        <path
          d="M70 110 Q60 130 75 150 Q90 155 100 145 Q95 125 85 110 Z"
          fill="hsl(25 50% 40%)"
        />
        
        {/* Duck neck - green */}
        <path
          d="M75 75 Q70 100 80 115 Q90 120 95 110 Q100 90 90 75 Z"
          fill="hsl(160 80% 25%)"
        />
        
        {/* Duck head - green */}
        <circle
          cx="70"
          cy="65"
          r="25"
          fill="hsl(160 80% 25%)"
        />
        
        {/* White neck ring */}
        <path
          d="M60 95 Q70 100 85 98"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Duck beak */}
        <path
          d="M45 60 L48 70 L55 68 L60 65 Q50 55 45 60 Z"
          fill="hsl(40 100% 50%)"
        />
        
        {/* Duck eye */}
        <circle
          cx="62"
          cy="58"
          r="4"
          fill="hsl(0 0% 10%)"
        />
        <circle
          cx="63"
          cy="57"
          r="1.5"
          fill="white"
        />
        
        {/* Duck feet */}
        <path
          d="M95 160 L90 175 L85 165 L80 175 L75 165 L70 175 L75 158"
          fill="hsl(20 90% 55%)"
        />
        <path
          d="M120 160 L115 175 L110 165 L105 175 L100 165 L95 175 L100 158"
          fill="hsl(20 90% 55%)"
        />
        
        {/* Wing detail */}
        <path
          d="M90 125 Q110 120 130 130 Q140 140 130 145 Q110 140 90 135 Z"
          fill="hsl(210 10% 58%)"
          stroke="hsl(210 10% 50%)"
          strokeWidth="1"
        />
        
        {/* Tail feathers */}
        <path
          d="M155 125 Q165 120 170 125 Q165 130 155 130 Q160 135 155 140 Q150 135 155 130 Z"
          fill="hsl(210 10% 45%)"
        />
      </svg>
    </motion.div>
  );
};

export default DuckSymbol;
