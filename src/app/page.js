import Hero from "../components/Hero";
import NatureQuote from "../components/NatureQuote";
import ShopByCategory from "../components/ShopByCategory";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <div className="home">
      <main>
        <Hero />
        <NatureQuote />
        <ShopByCategory />
        <AboutUs />
      </main>
    </div>
  );
}
