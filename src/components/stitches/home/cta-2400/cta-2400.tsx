import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cta2400() {
	return (
		/* ============================================ */
		/*                Call To Action                */
		/* ============================================ */

		<section id="cta-2400">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">
						Stay warm this winter! book your furnace tune-up before the cold
						hits.
					</h2>

					<Link href="/contact" className="cs-button-solid">
						Contact Me Today!
					</Link>
				</div>
				<Image
					src="/images/home-fall-trees.png"
					alt="fall trees graphic"
					width={500}
					height={500}
					className="cs-graphic"
				/>
			</div>
		</section>
	);
}
