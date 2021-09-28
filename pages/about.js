import Head from "next/head";
import styles from "../styles/About.module.css";
import { Gutter } from "../components/layout/Gutter";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About :: WebGeoDa Scaffolding</title>
        <meta name="description" content="A free and open source geo data framework." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
          />
        </noscript>
      </Head>
      <MainNav />
      <main className={styles.main}>
        <h1 className={styles.title}>About Webgeoda</h1>
        <h2>More maps, wherever you want &apos;em.</h2>
        <Gutter em={5} />

        <h2 className={styles.sectionHead}>Data Sources</h2>
        <Gutter em={2} />
        <div className="row rules horizontally-centered">
          <div className="col-xs-12 col-md-4 col-lg-4">
            <h3 className={styles.subSectionHead}>American Community Survey</h3>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-8 rules-left">
            <p>
              The American Community Survey (ACS) helps local officials,
              community leaders, and businesses understand the changes taking
              place in their communities. It is the premier source for detailed
              population and housing information about our nation.
            </p>
            <a className={styles.docsLink} href="#">
              Read More 📝{" "}
            </a>
          </div>
        </div>

        <Gutter em={5} />

        <h2 className={styles.sectionHead}>Contributors</h2>
        <Gutter em={2} />
        <div className="row rules horizontally-centered">
          <div className="col-xs-12 col-md-4 col-lg-4">
            <h3 className={styles.subSectionHead}>American Community Survey</h3>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-8 rules-left">
            <p>
              The American Community Survey (ACS) helps local officials,
              community leaders, and businesses understand the changes taking
              place in their communities. It is the premier source for detailed
              population and housing information about our nation.
            </p>
            <a className={styles.docsLink} href="#">
              Read More 📝{" "}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
