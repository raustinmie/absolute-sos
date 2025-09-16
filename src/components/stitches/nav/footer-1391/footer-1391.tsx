import React from "react";
import Image from "next/image";
import PrivacyPolicy from "@/components/legalese/privacy-policy";
import TermsOfService from "@/components/legalese/terms-of-service";
import Link from "next/link";

export default function Footer1391() {
	return (
		/* ============================================ */
		/*                  Footer                      */
		/* ============================================ */

		<footer id="footer-1391">
			<div className="cs-container">
				<div className="cs-top">
					<div className="cs-picture-section">
						<Link aria-label="go back to home" className="cs-logo" href="/">
							<Image
								src="/images/footers-logo.png"
								alt="logo"
								width={118}
								height={118}
							/>
						</Link>
						<div className="cs-google-verified">
							<Image
								src="/images/footer-google-verified.png"
								alt="google verified business"
								width={236}
								height={118}
							/>
						</div>
					</div>
					<ul className="cs-ul">
						<li className="cs-li">
							<Link href="/" className="cs-link">
								Home
							</Link>
						</li>
						<li className="cs-li">
							<Link href="/about" className="cs-link">
								Who We Are
							</Link>
						</li>
						<li className="cs-li">
							<Link href="/services" className="cs-link">
								Services
							</Link>
						</li>
						<li className="cs-li">
							<Link href="/faq" className="cs-link">
								FAQ
							</Link>
						</li>
						<li className="cs-li">
							<Link href="/contact" className="cs-link">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="cs-bottom">
					<span className="cs-copyright">
						© Copyright 2025 -
						<Link
							href="https://www.harborviewwebdesign.com/"
							className="cs-copyright-link"
						>
							{" "}
							Harborview Web Design
						</Link>
					</span>
					<div className="cs-flex">
						<PrivacyPolicy />
						<span className="cs-separater">|</span>
						<TermsOfService />
					</div>
				</div>
			</div>
		</footer>
	);
}
