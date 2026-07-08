import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import TrendingCollections from "../components/TrendingCollections";
import BestSellers from "../components/BestSellers";
import WhyChooseUs from "../components/WhyChooseUs";
import RoomInspiration from "../components/RoomInspiration";
import BeforeAfterGallery from "../components/BeforeAfterGallery";
import Testimonials from "../components/Testimonials";
import PinterestSection from "../components/PinterestSection";
import BlogPreview from "../components/BlogPreview";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <TrendingCollections />
      <BestSellers />
      <WhyChooseUs />
      <RoomInspiration />
      <BeforeAfterGallery />
      <Testimonials />
      <PinterestSection />
      <BlogPreview />
      <Newsletter />
    </>
  );
}

export default HomePage;
