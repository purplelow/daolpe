import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";

const Live: NextPage = () => {
  return (
    <Layout title="portfolio">
      <div className="absolute top-0 h-full w-full bg-[url('/assets/bg_pack.jpeg')] bg-cover bg-center">
        <div className="flex h-full items-center justify-center">
          <span className="h-auto text-8xl text-white">Portfolio</span>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Live;
