import React from "react";
import Head from "next/head";

// => Componentss
import Naviagtion from "@/components/Navigation";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Voicze | Streamline Invoices And Amplify Your Brand With Voicze.
        </title>
        <meta
          name="  Voicze | Streamline Invoices And Amplify Your Brand With Voicze."
          content="Voicze | Streamline Invoices"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header component */}
      <section id="Main__Header">
        {/* Navigation component */}
        <Naviagtion />
        {/* Hero component */}
        <Hero />
      </section>
      <section>
        {/* Trusted component */}
        {/* <Trusted /> */}
        {/* Feature component */}
        <Feature />
        {/* FAQ component */}
        <FAQ />
        {/* Support components */}
        <Support />
      </section>
      <footer>
        {/* Footer component*/}
        <Footer />
      </footer>

      {/* Loading State Component */}
      {/* <Loading /> */}
    </>
  );
}
