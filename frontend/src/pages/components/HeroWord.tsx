import React from 'react'
import { motion } from 'framer-motion';

import "../../style/HeroWord.css"

export default function HeroWord({ text }: { text: string }) {
    return (
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="word"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" }
            }}
          >
            {text}
          </motion.div>
          <motion.div
            className="hidden-word"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 }
            }}
          >
            {text}
          </motion.div>
        </motion.div>
      );
}
