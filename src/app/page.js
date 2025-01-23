import { axiosInstance } from "@/apis/axiosInstance";
import { getAllProducts } from "@/apis/productsApis";
import CategoriesSection from "@/components/home-page/CategoriesSection";
import HeroSection from "@/components/home-page/HeroSection";
import Head from "next/head";
import Image from "next/image";
export const metadata = {
  title: "Dorymart",
  description: "Just keep shopping",
};
export default async function Home() {
  // const response = await getAllProducts();
  // console.log(response);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <CategoriesSection />
    </div>
  );
}
