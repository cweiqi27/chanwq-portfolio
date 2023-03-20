import type { NextPage } from "next";
import Head from "next/head";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Watermark from "../components/watermark/Watermark";
import ScrollButton from "../components/scrollButton/ScrollButton";
import { useRef } from "react";
import Wave from "../components/wave/Wave";
import Circle from "../components/circle/Circle";
import Keys from "../components/keys/keys";
import HeroBackground from "../components/hero/heroBackground/HeroBackground";
import SkillsBackground from "../components/skills/SkillsBackground";
import SkillList from "../components/skills/SkillList";
import SkillDescription from "../components/skills/SkillDescription";
import Square from "../components/square/Square";

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <>
      <Head>
        <title>Chan Wei Qi</title>
        <meta name="description" content="cwq, React Developer" />
        <meta name="author" content="Chan Wei Qi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Parallax pages={2} ref={parallax}>
        {/* Hero Section */}
        <HeroBackground>
          <Header />
          <Square />
          <Circle />
          <Keys />
          <Hero />
          <Watermark
            name="REACT"
            offset={0}
            speed={0}
            factor={0.1}
            position="right"
            size="lg"
          />
          <ScrollButton
            offset={0.8}
            speed={-0.25}
            factor={0.1}
            position="right"
            onClick={() => scroll(1)}
          />
        </HeroBackground>

        {/* Skills Section */}
        <SkillsBackground>
          <SkillDescription />
          <SkillList />
          <Wave />
        </SkillsBackground>
      </Parallax>
    </>
  );
};

export default Home;
