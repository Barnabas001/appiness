import LandingPageBanner from "../components/home/LandingPageBanner";
import CategoryGrid from "../components/home/CategoryGrid";
import PromoCards from "../components/home/PromoCards";

export default function HomePage() {
  return (
    <main>
      <LandingPageBanner />
      <CategoryGrid />
      <PromoCards />
    </main>
  );
}
