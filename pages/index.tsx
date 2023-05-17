import Head from "next/head";

// => Components
import Naviagtion from "@/components/Navigation";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Feature";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
      {/* Header components */}
      <section id="main">
        {/* Navigation components */}
        <Naviagtion />
        {/* Hero components */}
        <Hero />
      </section>
      <section>
        {/* Brands components */}
        <Brands />
        {/* Feature components */}
        <Feature />
        {/* FAQ components */}
        <FAQ />
        {/* Footer components */}
        <Footer />
      </section>
    </>
  );
}
