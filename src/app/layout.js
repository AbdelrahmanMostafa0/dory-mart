"use client";
import { fetchCategories } from "@/store/features/categoriesListSlice";
import "./globals.css";
import Navbar from "@/components/layout-components/Navbar";
import { store } from "@/store/store";
import Head from "next/head";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Footer from "@/components/layout-components/Footer";
// export const metadata = {
//   title: "Dorymart",
//   description: "Just keep shopping",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Dorymart</title>
        <meta name="description" content="Just keep shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
