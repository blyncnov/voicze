import Head from "next/head";

// => Components
import Naviagtion from "@/components/Navigation";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Voicze | Access all healthcare in Nigeria within your region!
        </title>
        <meta
          name="  Voicze | Access all healthcare in Nigeria within your region!"
          content="Voicze | healthcare"
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
        {/* FAQ components */}
        <FAQ />
        {/* Footer components */}
        <Footer />
      </section>
    </>
  );
}
