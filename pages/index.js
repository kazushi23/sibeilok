import Head from "next/head";
import React from "react";
import LandingHead from "../components/landing/landingHead";
import SauceCarou from "../components/menu/sauceCarou";
import MenuCarou from "../components/menu/menuCarou";
import { motion } from "framer-motion";
import Footer from "../components/footer/footer";

const scrollvariants = {
    offscreen: {
      y: 150
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

export default function Home() {
    return (
        <>
        <Head>
        <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon"/>
            <link rel="canonical" href="https://sibeilok.netlify.app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#9ec2a0" />
            <meta name="author" content="Kazushi Fujiwara"></meta>
            <meta
            name="description"
            content="Welcome to SibeiLok. The Lok Lok you wished you had sooner"
            data-rh="true"
            />
            {/* <meta name="google-site-verification" content="Ko_rEFT7vNWtvG4kCq7iu4DvPJ-sEAu5HCvU_bgu3Pw" /> */}

            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo100.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

            <title>SibeiLok - Best Lok Lok you had</title>
        </Head>

        <div className="home-wrapper">
        <div className="home">
            <LandingHead/>
        </div>
        <div className="food-items" style={{backgroundColor:"white"}}>
            <div className="menu-heading">
                <h3>Gastrobeats @ iLight festival</h3>
                <h1>Stall T7</h1>
                <p className="xibeile-word">Mon-Sun | 11am - 1030pm</p>
                <p className="xibeile-word">3rd - 26th June &#128293;</p>
            </div>
            <div className="menu-heading">
                <h3>Our Food Items</h3>
                <p className="xibeile-word">Minimum order 5 sticks</p>
                <p className="xibeile-word">You will wish you had more</p>
            </div>
            <motion.div initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <MenuCarou/>
            </motion.div>
            <div className="menu-heading">
                <h3>Our Sauces</h3>
                <p className="xibeile-word">You will never have enough</p>
            </div>
            <motion.div initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <SauceCarou/>
            </motion.div>
            <Footer/>
        </div>
        </div>
        </>
    )
}