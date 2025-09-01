import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


export default function Test1(){

    const [isVisible, setIsVisible] = useState(true);
    
      function handleClick(){
        setIsVisible(!isVisible)
        
      }

    return(
        <>
        
        
        <button onClick={handleClick} className="example-btn">Example</button>


      <AnimatePresence>
      {isVisible && (
          <motion.div 
          initial={{
            rotate: "0deg",
            scale: 0
          }}
          animate={{
            rotate: "180deg",
            scale: 1
          }}
          transition={{
           duration: 1,
           ease: "backInOut"
          }}
          exit={{
            rotate: 0,
            backgroundColor: "red",
            scale: 0
          }}
          className="square"
          ></motion.div>
        )}
        </AnimatePresence>
        </>
    )
}