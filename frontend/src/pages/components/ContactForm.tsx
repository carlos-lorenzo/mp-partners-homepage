import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xzzkbdgr");

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
            >
                <h2>Thank you for reaching out!</h2>
                <p>We'll get back to you soon.</p>
            </motion.div>
        );
    }

    return (
        <motion.form 
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="contact-form"
        >
            <motion.div className="form-group" variants={inputVariants}>
                <label htmlFor="name">Your Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                />
            </motion.div>

            <motion.div className="form-group" variants={inputVariants}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>

            <motion.div className="form-group" variants={inputVariants}>
                <label htmlFor="message">Your Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>

            <motion.button
                type="submit"
                disabled={state.submitting}
                className="call-to-action"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {state.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
        </motion.form>
    );
}