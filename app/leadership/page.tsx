import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/layout";
import Footer from "@/components/Footer";

const Live: NextPage = () => {
  return (
    <Layout title="leadership">
      <div className="absolute top-0 h-full w-full bg-[url('/assets/bg_golf.jpeg')] bg-cover bg-center">
        <div className="flex h-full items-center justify-center">
          <span className="h-auto text-8xl text-white">Leadership</span>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Live;
