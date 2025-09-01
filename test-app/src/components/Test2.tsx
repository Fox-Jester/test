

import { motion, MotionConfig } from "motion/react"

export default function Test2(){



    return(
        <>

        <MotionConfig
        transition={{
            duration: 0.5,
            ease: "easeInOut"
        }}
        >

        <motion.button

        whileHover={{
            scale: 1.05
        }}

        whileTap={{
            scale: 0.95,
            backgroundColor: "crimson"
        }}

        
         className="example-btn"
         >Example</motion.button>

        <motion.button

        style={{backgroundColor: "orange"}}

        whileHover={{
            scale: 1.05
        }}

        whileTap={{
            scale: 0.95,
            backgroundColor: "lime"
        }}
         className="example-btn"
         >Example</motion.button>

        </MotionConfig>
        </>
    )
}