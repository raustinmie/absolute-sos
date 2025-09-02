import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Next.js 13+
import { useWindowScroll } from "react-use";

export function Nav1() {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname(); // current path
	const { y } = useWindowScroll();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		setIsScrolled(y > 32);
	}, [y]);
	// Toggle the main menu
	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	// Handle Escape key
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Add/remove body class
	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("cs-open");
		} else {
			document.body.classList.remove("cs-open");
		}
	}, [menuOpen]);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header
			id="cs-navigation"
			className={`${menuOpen ? "cs-active" : ""} ${isScrolled ? "scroll" : ""}`}
		>
			<div className="cs-container">
				<a href="/" className="cs-logo" aria-label="back to home">
					Absolute SOS
				</a>

				<nav className="cs-nav" role="navigation">
					{/* Mobile Nav Toggle */}
					<button
						className={`cs-toggle ${menuOpen ? "cs-active" : ""}`}
						aria-label="mobile menu toggle"
						aria-expanded={menuOpen}
						onClick={toggleMenu}
					>
						<div className="cs-box" aria-hidden="true">
							<span className="cs-line cs-line1" aria-hidden="true"></span>
							<span className="cs-line cs-line2" aria-hidden="true"></span>
							<span className="cs-line cs-line3" aria-hidden="true"></span>
						</div>
					</button>

					<div className="cs-ul-wrapper">
						<ul
							id="cs-expanded"
							className={`cs-ul ${menuOpen ? "cs-active" : ""}`}
							aria-expanded={menuOpen}
						>
							{navLinks.map((link) => (
								<li key={link.href} className="cs-li">
									<a
										href={link.href}
										className={`cs-li-link ${
											pathname === link.href ? "cs-active" : ""
										}`}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>

				<a href="/contact" className="cs-button-outline">
					Get Started
				</a>
			</div>
		</header>
	);
}
