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
      {/* Header component */}
      <section id="main">
        {/* Navigation component */}
        <Naviagtion />
        {/* Hero component */}
        <Hero />
      </section>
      <section>
        {/* Brands component */}
        <Brands />
        {/* Feature component */}
        <Feature />
        {/* FAQ component */}
        <FAQ />
        {/* Footer component*/}
        <Footer />
      </section>
    </>
  );
}
