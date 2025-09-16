import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sbsr2231() {
	return (
		/* ============================================ */
		/*             Side By Side Reverse             */
		/* ============================================ */

		<section id="sbsr-2231">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">About us</span>
					<h2 className="cs-title">Family-Owned & Operated Since 2013 </h2>
					<p className="cs-text">
						Four Seasons Heating & Cooling, LLC is a family business based in
						Lynden, WA. Since 2013, we’ve been helping homeowners across
						Whatcom, Skagit, and Snohomish Counties keep their homes comfortable
						through every season. From furnace repairs in the winter to AC
						tune-ups in the summer, our goal is simple: honest, dependable
						service you can trust.
					</p>
					<Link href="/faq" className="cs-button-solid">
						Have Questions?
					</Link>
				</div>
				<div className="cs-image-group">
					<div className="cs-picture cs-picture1">
						<Image
							src="/images/about-child.png"
							alt="Aaron's son holding a drill"
							width={272}
							height={337}
						/>
					</div>
					<div className="cs-picture cs-picture2">
						<Image
							src="/images/about-man.png"
							alt="Aaron wiht a furnace filter"
							width={243}
							height={367}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
