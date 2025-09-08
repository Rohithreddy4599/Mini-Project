import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ShopByCategory from "../components/ShopByCategory";
import TopOffers from "../components/TopOffers";
import FeaturedBrands from "../components/FeaturedBrands";
import WinterWonders from "../components/WinterWonders";
import MoreWaysToSave from "../components/MoreWaysToSave";
import NewAndNoteworthy from "../components/NewAndNoteworthy";
import Recipes from "../components/Recipes";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShopByCategory />
      <TopOffers />
      <FeaturedBrands />
      <WinterWonders />
      <MoreWaysToSave />
      <NewAndNoteworthy />
      <Recipes />
      <Reviews />
    </main>
  );
}
