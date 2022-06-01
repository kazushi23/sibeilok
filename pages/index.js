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
        // home is for the top 100vh ONLY
        <div className="home-wrapper">
        <div className="home">
            <LandingHead/>
        </div>
        <div className="food-items" style={{backgroundColor:"white"}}>
            <div className="menu-heading">
                <h3>Gastrobeats @ iLight festival</h3>
                <h1>Stall T7</h1>
                <p className="xibeile-word">Mon-Sun | 11am - 1030pm</p>
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
    )
}