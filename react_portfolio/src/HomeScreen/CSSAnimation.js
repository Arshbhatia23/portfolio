import * as React from "react";
import './CSSAnimationStyles.css';
import { motion, useViewportScroll, useTransform, useScroll } from "framer-motion";
import HomeScreen from "./HomeScreen";

export const CSSAnimation = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div>
            <div className="view">
                <div className="wrapper">
                    <motion.div
                        className="container"
                        style={{
                            scale
                        }}
                    >
                        <motion.div
                            className="item"
                            style={{
                                scaleY: scrollYProgress
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <HomeScreen/>
        </div>
    );
};

export default CSSAnimation;