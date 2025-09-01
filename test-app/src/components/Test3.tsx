
import { motion, useAnimationControls } from "motion/react"

export default function Test3(){

    const controls = useAnimationControls();

    function handleClick(){
        controls.start("flip")
    }


    return (
        <>

        <button onClick={handleClick} className="example-btn">Example</button>

        <motion.div 

        variants={{
            initial: {
                rotate: "0deg"
            },
            flip: {
                rotate: "180deg"
            }
        }}
        initial="initial"
        animate={controls}
        className="square"
        ></motion.div>
        
        </>
    )
}