import Head from "next/head";
import React from "react";
import LandingHead from "../components/landing/landingHead";
import SauceCarou from "../components/menu/sauceCarou";
import MenuCarou from "../components/menu/menuCarou";
import { motion } from "framer-motion";

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
                <h3>Our Food Items</h3>
            </div>
            <motion.div initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <MenuCarou/>
            </motion.div>
            <div className="menu-heading">
                <h3>Our Sauces</h3>
            </div>
            <motion.div initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <SauceCarou/>
            </motion.div>
        </div>
        </div>
    )
}