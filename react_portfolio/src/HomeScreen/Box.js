import React, { useEffect } from "react";
import "./styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.1 }
};

const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 }
}


export const Box = ({
  color,
  full = false,
  half = false,
  transLeft = false,
  transScale = false,
  triggerOnce = false,
  id = id,
  dataAnchor,
  children
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: triggerOnce,
    trackVisibilty:true
  });

  useEffect(()=>{
    {console.log(`Id viewport ${id}`)}
    {console.log(`Header inside viewport ${inView}`)}
  },[id,inView]);

 
  return (
    <div
      className="snap-child-center"
      ref={ref}
      id={id}
      data-anchor={dataAnchor}
      style={{
        marginTop: 2,
        marginBottom: 2,
        height: full ? "100vh" : half ? "50vh" : 120,
        width: "100%",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          zIndex: 40
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={
          transLeft
            ? CHILD_VARIANTS_LEFT
            : transScale
              ? CHILD_VARIANTS_SCALE
              : CHILD_VARIANTS_SCALE
        }
      >
        {children}
      </motion.div>
         {/* <div className="view">
                <div className="wrapper">
                    <motion.div
                        className="container"
                        // style={{
                        //     scale,
                        //     // translateX: '-50%',
                        // }}
                    />
                </div>
                <div className="wrapper2">
                    <motion.div
                        className="container2"
                        style={{
                            scale
                        }}
                    />
                </div>
            </div> */}
    </div>
  );
};
