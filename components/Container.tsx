import React, { use } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Script from "next/script";

const Container = (props: any) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: "Landing page template",
    description:
      "A Landing page template use to make your dream project faster!",
    type: "website",
    ...customMeta,
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://localhost:3000/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Landing page template" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Container;
