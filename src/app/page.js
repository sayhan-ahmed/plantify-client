import Hero from "../components/Hero";
import NatureQuote from "../components/NatureQuote";
import ShopByCategory from "../components/ShopByCategory";
import AboutUs from "../components/AboutUs";
import SpecialDiscount from "../components/SpecialDiscount";
import Testimonial from "../components/Testimonial";
import InstagramFeed from "../components/InstagramFeed";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Hero />
        <NatureQuote />
        <ShopByCategory />
        <AboutUs />
        <SpecialDiscount />
        <Testimonial />
        <InstagramFeed />
      </main>
    </div>
  );
}
