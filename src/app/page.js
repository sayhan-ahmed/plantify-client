import Hero from "../components/Hero";
import NatureQuote from "../components/NatureQuote";
import ShopByCategory from "../components/ShopByCategory";
import AboutUs from "../components/AboutUs";
import SpecialDiscount from "../components/SpecialDiscount";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import InstagramFeed from "../components/InstagramFeed";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Hero />
        <NatureQuote />
        <ShopByCategory />
        <AboutUs />
        <SpecialDiscount />
        <FAQ />
        <Testimonial />
        <InstagramFeed />
        <Newsletter />
      </main>
    </div>
  );
}
