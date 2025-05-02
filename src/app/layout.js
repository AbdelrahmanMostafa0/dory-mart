"use client";

import "./globals.css";
import Navbar from "@/components/layout-components/navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/layout-components/Footer";
import ReduxProvider from "@/components/providers/ReduxProvider";
import Toast from "@/components/ui/Toast";
import PageTransition from "@/components/PageTransition";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [showTransition, setShowTransition] = useState(false);
  const [nextPath, setNextPath] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (
        link &&
        link.href &&
        link.href.startsWith(window.location.origin) &&
        !link.target
      ) {
        e.preventDefault();
        const url = link.getAttribute("href");
        if (url !== pathname) {
          setNextPath(url);
          setShowTransition(true);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  const handleTransitionComplete = () => {
    if (nextPath) {
      router.push(nextPath);
      setNextPath(null);
      setShowTransition(false);
    }
  };

  return (
    <html lang="en">
      <Head>
        <title>Dorymart</title>
        <meta name="description" content="Just keep shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {showTransition && (
          <PageTransition onComplete={handleTransitionComplete} />
        )}
        <ReduxProvider>
          <Navbar />
          {children}
          <Toast />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
