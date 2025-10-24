import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import "../../style/scroll_text_swap.css";

export default function ScrollTextSwap({ title, description }: { title: string; description: string }) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const rotateY = useTransform(scrollYProgress, [0.45, 0.55], [0, 180]);

    return (
        <div ref={targetRef} className="scroll-container">
            <div className="sticky-container">
                <motion.div className="card" style={{ rotateY }}>
                    <div className="card-front">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-back">
                        <p>{description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
