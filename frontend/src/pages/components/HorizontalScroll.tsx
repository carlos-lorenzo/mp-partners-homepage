import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import "../../style/horizontal_scroll.css";

export default function HorizontalScroll({ word }: { word: string }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [textWidth, setTextWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useLayoutEffect(() => {
        if (textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }
        if (targetRef.current) {
            setContainerWidth(targetRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (textRef.current) {
                setTextWidth(textRef.current.offsetWidth);
            }
            if (targetRef.current) {
                setContainerWidth(targetRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(
        scrollYProgress,
        [0.6, 0.9],
        [containerWidth, -textWidth]
    );

    return (
        <motion.div ref={targetRef} className='horizontal-scroll'>
            <motion.h1 ref={textRef} style={{ x }}>{word}</motion.h1>
        </motion.div>
    );
}

