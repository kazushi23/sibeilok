import { motion } from "framer-motion"

export default function LandingHead() {
    return (
        <>
        
        <motion.div className="xibeile-mini" initial={{y:0, opacity:0}} animate={{ opacity:1}} transition={{ duration:1, delay:1.5 }}>
            <motion.div  className="xibeile-child" animate={{ x:[0,1,2,3,4,5,4,3,2,1,0] }} transition={{ delay:1.5, duration:1, repeat:Infinity, repeatType: "reverse"}}>
                <img src={"/bacmshrm-mini.png"} alt="loklok-logo"/>
            </motion.div>
            <motion.div  className="xibeile-child" animate={{ x:[0,1,2,3,4,5,4,3,2,1,0] }} transition={{ delay:1.5, duration:1, repeat:Infinity, repeatType: "reverse"}}>
                <img src={"/beancurdskin-mini.png"} alt="loklok-logo"/>
            </motion.div>
            <motion.div  className="xibeile-child" animate={{ x:[0,1,2,3,4,5,4,3,2,1,0] }} transition={{ delay:1.5, duration:1, repeat:Infinity, repeatType: "reverse"}}>
                <img src={"/broccoli-mini.png"} alt="loklok-logo"/>
            </motion.div>
            <motion.div  className="xibeile-child" animate={{ x:[0,1,2,3,4,5,4,3,2,1,0] }} transition={{ delay:1.5, duration:1, repeat:Infinity, repeatType: "reverse"}}>
                <img src={"/sausage-mini.png"} alt="loklok-logo"/>
            </motion.div>
            <motion.div  className="xibeile-child" animate={{ x:[0,1,2,3,4,5,4,3,2,1,0] }} transition={{ delay:1.5, duration:1, repeat:Infinity, repeatType: "reverse"}}>
                <img src={"/duckbreast-mini.png"} alt="loklok-logo"/>
            </motion.div>
        </motion.div>

        <motion.div className="xibeile-parent-logo">
            <motion.div initial={{y:0, opacity:0}} animate={{ opacity:1}} transition={{ duration:1 }}>
                <img className="shadow" src={"/logo150.png"} alt="loklok-logo"/>
            </motion.div>
        </motion.div>

        <motion.div className="xibeile-parent" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}>
            <div className="xibeile-word">
                <h1>西(si) 北(bei) Shiok</h1>
            </div>
            <br/>
            <motion.div className="xibeile-child" initial={{x:200}} animate={{x:0}} transition={{ delay:1.0, duration:1}}>
                <img className="navbar-img" src={"/xi100.png"} alt="loklok-logo-xi"/>
            </motion.div>
            <motion.div className="xibeile-child" initial={{x:100}} animate={{x:0}} transition={{ delay:1.2, duration:1}}>
                <img className="navbar-img" src={"/bei100.png"} alt="loklok-logo-bei"/>
            </motion.div>
            <motion.div className="xibeile-child" initial={{x:-200}} animate={{x:0}} transition={{ delay:1.4, duration:1}}>
                <img className="navbar-img" src={"/le100.png"} alt="loklok-logo-le"/>
            </motion.div>
        </motion.div>

        <motion.div className="xibeile-parent-main" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.4}}>
            <motion.div animate={{ y:[0,5,10,15,20,25,30,35,30,25,20,15,10,5,0] }} transition={{ delay:2.4, duration:2, repeat:Infinity, repeatType: "reverse"}}>
                <img className="navbar-main-img" src={"/bakkwa-nbg.png"} alt="loklok-bakkwa"/>
            </motion.div>
        </motion.div>

        </>
    )
}