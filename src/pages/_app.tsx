import "../components/stitches/contact/contact-2404/contact-2404.css";
import "../components/stitches/faq/faq-1720/faq-1720.css";
import "../components/stitches/services/rpsbs-2278/rpsbs-2278.css";
import "../components/stitches/services/services-1626/services-1626.css";
import "../components/stitches/about/gallery-379/gallery-379.css";
import "../components/stitches/about/sbs-2375/sbs-2375.css";
import "../components/stitches/about/cta-1072/cta-1072.css";
import "../components/stitches/about/sbsr-2231/sbsr-2231.css";
import "../components/stitches/home/review-2244/review-2244.css";
import "../components/stitches/home/services-1977/services-1977.css";
import "../components/stitches/home/cta-2400/cta-2400.css";
import "../components/stitches/nav/header/nav/nav.css";
import "../components/stitches/home/hero-1619/hero-1619.css";
import "../components/stitches/nav/footer-1391/footer-1391.css";
import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer1391 from "@/components/stitches/nav/footer-1391/footer-1391";
import { Roboto } from "next/font/google";
import Nav from "@/components/stitches/nav/header/nav/nav";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["200", "300", "400", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${roboto.className}`}>
			<div className="app-container">
				<Nav />
				<Component {...pageProps} />
				<Footer1391 />
			</div>
		</div>
	);
}
export default MyApp;
