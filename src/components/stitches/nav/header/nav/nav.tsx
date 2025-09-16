"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { facebookUrl, primaryPhone } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
	const headerRef = useRef(null);
	const toggleRef = useRef(null);
	const ulRef = useRef(null);
	const [navActive, setNavActive] = useState(false);
	const [ariaExpanded, setAriaExpanded] = useState(false);
	const pathname = usePathname();

	// toggle mobile menu
	const handleToggle = () => {
		setNavActive((prev) => !prev);
		setAriaExpanded((prev) => !prev);
		document.body.classList.toggle("cs-open");
	};

	useEffect(() => {
		const body = document.body;
		const handleScroll = () => {
			if (document.documentElement.scrollTop >= 100) {
				body.classList.add("scroll");
			} else {
				body.classList.remove("scroll");
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "Who We Are" },
		{ href: "/services", label: "Services" },
		{ href: "/faq", label: "FAQ" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header
			id="cs-navigation"
			ref={headerRef}
			className={navActive ? "cs-active" : ""}
		>
			<div className="cs-top-bar">
				<div className="cs-top-container">
					<div className="cs-top-contact">
						<Link href={`tel:${primaryPhone}`} className="cs-top-link">
							<Image
								src="/images/nav-call.svg"
								alt="logo"
								width={16}
								height={16}
							/>
							Call us: {primaryPhone}
						</Link>
						<div className="cs-top-link">
							<Image
								src="/images/nav-clock.svg"
								alt="logo"
								width={20}
								height={20}
							/>
							Opening hours: Mon - Sat: 8:00am To 5:00pm
						</div>
					</div>
					<div className="cs-top-social">
						<Link href={facebookUrl} className="cs-social-link">
							<Image
								src="/images/nav-facebook.svg"
								alt="logo"
								width={18}
								height={18}
							/>
						</Link>
					</div>
				</div>
			</div>

			<div className="cs-container">
				<Link href="#" className="cs-logo" aria-label="back to home">
					<Image
						src="/images/nav-logo.png"
						alt="logo"
						width={150}
						height={116}
					/>
				</Link>

				<nav className="cs-nav" role="navigation">
					<button
						className={`cs-toggle ${navActive ? "cs-active" : ""}`}
						aria-label="mobile menu toggle"
						onClick={handleToggle}
						ref={toggleRef}
					>
						<div className="cs-box" aria-hidden="true">
							<span className="cs-line cs-line1" aria-hidden="true" />
							<span className="cs-line cs-line2" aria-hidden="true" />
							<span className="cs-line cs-line3" aria-hidden="true" />
						</div>
					</button>

					<div className="cs-ul-wrapper">
						<ul id="cs-expanded" className="cs-ul" ref={ulRef}>
							{links.map((link) => {
								const isActive =
									pathname === link.href ||
									(link.href !== "/" && pathname.startsWith(link.href));
								return (
									<li key={link.href} className="cs-li">
										<Link
											href={link.href}
											className={`cs-li-link ${isActive ? "cs-active" : ""}`}
										>
											{link.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>

				<Link
					href="tel:{primaryPhone"
					className="cs-button-solid cs-nav-button"
				>
					Call Now
				</Link>
			</div>
		</header>
	);
}
