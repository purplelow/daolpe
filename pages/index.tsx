import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>DAOL Private Equity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-full w-full">
        <main className="mx-auto max-w-7xl px-8 sm:px-16">
          <section className="pt-6"></section>

          <section></section>
        </main>

        <Footer />
      </div>
    </>
  );
}
