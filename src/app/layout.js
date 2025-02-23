"use client";
import "./globals.css";
import Navbar from "@/components/layout-components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/layout-components/Footer";
import ReduxProvider from "@/components/providers/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Dorymart</title>
        <meta name="description" content="Just keep shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
