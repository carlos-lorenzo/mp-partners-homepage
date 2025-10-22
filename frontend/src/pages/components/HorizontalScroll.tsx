import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

interface HorizontalScrollProps {
    targetRef: React.RefObject<HTMLElement | null>;
}

export default function HorizontalScroll({ targetRef }: HorizontalScrollProps) {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    
    return (
        <motion.div className='horizontal-scroll'
            style={{ x }}>
            <h1>INNOVATION</h1>
        </motion.div>
    )
}

// Note: ensure .horizontal-scroll has position: absolute (or relative inside a positioned container)
// so the `left` property takes effect.
