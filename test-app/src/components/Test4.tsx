
import { motion, useInView } from "motion/react"
import { useRef } from "react"

export default function Test4(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <>
        <div style={{ height: "150vh" }}/>

        <motion.div
            style={{height: "100vh", background: "black"}}
            initial={{opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1}}
        />
        <div
        ref={ref}
        style={{
            height: "100vh",
            background: isInView ? "blue" : "red",
            transition: "1s background"
        }}
        />
        </>
    )
}