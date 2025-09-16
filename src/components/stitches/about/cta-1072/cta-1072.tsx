import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Cta1072Props {
	title: string;
}

export default function Cta1072({ title }: Cta1072Props) {
	return (
		/* ============================================ */
		/*                     CTA                      */
		/* ============================================ */

		<section id="cta-1072">
			<div className="cs-container">
				<div className="cs-content">
					<div className="cs-flex">
						<span className="cs-topper">Contact Us Today</span>
						<h2 className="cs-title">{title}</h2>
					</div>
					<div className="cs-button-box">
						<Link href="/contact" className="cs-button-solid">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
			<div className="cs-background">
				<Image
					src="/images/about-cta-background.jpg"
					alt="mechanic"
					width={1280}
					height={568}
				/>
			</div>
		</section>
	);
}
