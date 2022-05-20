import { motion } from "framer-motion"

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

export default function Menu () {
    return (
        <div>
            <div className="menu-heading">
                <h1>Our Food Items</h1>
            </div>
            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/baconshroom-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Bacon Mushroom</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/bakkwa-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Bak Kwa</p>
                </div>
            </motion.div>

            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/beancurdskin-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Beancurd Skin</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/bigshroom-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Oyster Mushroom</p>
                </div>
            </motion.div>

            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/broccoli-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Broccoli</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/cheeseball-nbg2.png"} alt="loklok-logo-xi"/>
                    <p>Cheeseball</p>
                </div>
            </motion.div>

            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/duckbreast-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Duck Breast</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/meatball-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Meat Ball</p>
                </div>
            </motion.div>

            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/mushroom-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Mushroom</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/nugget-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Nugget</p>
                </div>
            </motion.div>

            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/quail-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Quail</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/sausage-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Sausage</p>
                </div>
            </motion.div>

            <motion.div className="menu" initial="offscreen" whileInView="onscreen" variants={scrollvariants} viewport={{ once: true }}>
                <div className="menu-item">
                    <img className="menu-img" src={"/spam-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Lucheon Meat</p>
                </div>
                <div className="menu-item">
                    <img className="menu-img" src={"/swdchick-nbg.png"} alt="loklok-logo-xi"/>
                    <p>Seaweed Chicken</p>
                </div>
            </motion.div>

        </div>
    )
}