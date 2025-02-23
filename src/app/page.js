import CategoriesSection from "@/components/home-page/CategoriesSection";
import ExploreMore from "@/components/home-page/ExploreMore";
import HeroSection from "@/components/home-page/HeroSection";
import NewstProducts from "@/components/home-page/NewstProducts";
import Head from "next/head";
export const metadata = {
  title: "Dorymart",
  description: "Just keep shopping",
};
export default async function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <CategoriesSection />
      <NewstProducts />
      <ExploreMore />
    </div>
  );
}
