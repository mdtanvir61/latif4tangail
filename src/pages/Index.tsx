import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import UprisingSection from "@/components/UprisingSection";
import DashboardSection from "@/components/DashboardSection";
import PledgesSection from "@/components/PledgesSection";
import GallerySection from "@/components/GallerySection";
import VideoGallerySection from "@/components/VideoGallerySection";
import PollingCenterSection from "@/components/PollingCenterSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import FloatingVoteButton from "@/components/FloatingVoteButton";
import BackgroundAudio from "@/components/BackgroundAudio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Header />
      <main>
        <HeroSection />
        <BioSection />
        <UprisingSection />
        <DashboardSection />
        <PledgesSection />
        <GallerySection />
        <VideoGallerySection />
        <PollingCenterSection />
        <NewsSection />
      </main>
      <Footer />
      <FloatingVoteButton />
      <BackgroundAudio />
    </div>
  );
};

export default Index;
