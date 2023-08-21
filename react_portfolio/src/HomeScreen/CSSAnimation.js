import * as React from "react";
import './CSSAnimationStyles.css';
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import HomeScreen from "./HomeScreen";

export const CSSAnimation = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    return (
        <div>
            <div className="view">
                <div className="wrapper">
                    <motion.div
                        className="container"
                        style={{
                            scale
                        }}
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
            </div>
            <HomeScreen />
        </div>
    );
};

export default CSSAnimation;