import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import HamburgerMenuIcon from "../hamburger/hamburger";
import NextImage from "../next-image/next-image";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	useEffect(() => {
		const updateSize = () => {
			setIsMobile(window.innerWidth < 769);
		};
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const y = window.scrollY;
			const shouldScroll = isMobile || y > 100;
			setIsScrolled(shouldScroll);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [, isMobile]);

	return (
		<header className={`${styles.header}`}>
			<h1 className={`${styles.name} ${isScrolled ? styles.nameScrolled : ""}`}>
				Absolute Septic Onsite Services
			</h1>
			<div
				className={`${styles.logoSection} ${
					isScrolled ? styles.logoSectionScrolled : ""
				}`}
			>
				<NextImage
					src="/images/logo.png"
					alt="Absolute SOS Logo"
					contain={true}
				/>
			</div>
			<h1
				className={`${styles.titleSection} ${
					isScrolled ? styles.titleSectionScrolled : ""
				}`}
			>
				{`Absolute SOS`}
			</h1>
			<div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}>
				<HamburgerMenuIcon isOpen={menuOpen} toggle={toggleMenu} />
			</div>
			<nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
				<ul className={`${styles.navList}`}>
					<li onClick={() => setMenuOpen(false)} className={styles.listItem}>
						<Link href="/">Home</Link>
					</li>
					<li onClick={() => setMenuOpen(false)} className={styles.listItem}>
						<Link href="/services">Services</Link>
					</li>
					<li onClick={() => setMenuOpen(false)} className={styles.listItem}>
						<Link href="/about">About Us</Link>
					</li>
					<li onClick={() => setMenuOpen(false)} className={styles.listItem}>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
