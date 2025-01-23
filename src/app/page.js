import { axiosInstance } from "@/apis/axiosInstance";
import { getAllProducts } from "@/apis/productsApis";
import HeroSection from "@/components/home-page/HeroSection";
import Head from "next/head";
import Image from "next/image";

export default async function Home() {
  // const response = await getAllProducts();
  // console.log(response);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <div className="h-dvh"></div>
    </div>
  );
}
