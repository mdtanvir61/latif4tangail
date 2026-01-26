import DuckSymbol from "./DuckSymbol";

const FloatingVoteButton = () => {
  return (
    <a href="#vote" className="floating-vote-btn group">
      <DuckSymbol size="sm" animate={false} className="w-10 h-10 group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline">হাঁস মার্কা</span>
    </a>
  );
};

export default FloatingVoteButton;
