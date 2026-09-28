import About from "@/components/About";
import Categories from "@/components/Categories";
import FeaturedVideos from "@/components/FeaturedVideos";
import Hero from "@/components/Hero";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedVideos />
      <Categories />
      <About />
      <SocialSection />
    </>
  );
}
