import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./hamburger.module.css";

type Props = {
	isOpen: boolean;
	toggle?: () => void;
};

export default function HamburgerMenuIcon({ isOpen, toggle }: Props) {
	return (
		<div className={styles.hamburgerContainer} onClick={toggle}>
			<motion.span
				className={`${styles.bar} ${isOpen ? styles.isOpen : ""}`}
				animate={isOpen ? { rotate: 405, y: 8 } : { rotate: 0, y: 0 }}
				transition={{ type: "spring", stiffness: 260, damping: 20 }}
			/>
			<motion.span
				className={`${styles.bar} ${isOpen ? styles.isOpen : ""}`}
				animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
				transition={{ duration: 0.2 }}
			/>
			<motion.span
				className={`${styles.bar} ${isOpen ? styles.isOpen : ""}`}
				animate={isOpen ? { rotate: -405, y: -8 } : { rotate: 0, y: 0 }}
				transition={{ type: "spring", stiffness: 260, damping: 20 }}
			/>
		</div>
	);
}
