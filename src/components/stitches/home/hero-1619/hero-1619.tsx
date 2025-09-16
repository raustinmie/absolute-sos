import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero1619() {
	return (
		/* ============================================ */
		/*                    Hero                      */
		/* ============================================ */

		<section id="hero-1619">
			<div className="cs-container">
				<div className="cs-content">
					<h1 className="cs-title">
						Building relationships with honesty, integrity, and experience
					</h1>
					<Link href="/about" className="cs-button-solid">
						Learn More About Us
					</Link>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<Image src="/images/like.svg" alt="icon" width={48} height={48} />
						<h3 className="cs-h3">Family-Owned</h3>
						<p className="cs-item-text">
							Family-owned and operated, we’re committed to building trust with
							every customer through honesty and integrity.
						</p>
					</li>
					<li className="cs-item">
						<Image
							src="/images/thermometer.svg"
							alt="icon"
							width={48}
							height={48}
						/>
						<h3 className="cs-h3">Heating & Cooling</h3>
						<p className="cs-item-text">
							Furnaces, heat pumps or air conditioners, we keep your home
							comfortable year-round with expert repairs and installations.
						</p>
					</li>
					<li className="cs-item">
						<Image src="/images/clock.svg" alt="icon" width={48} height={48} />
						<h3 className="cs-h3">Fast & Reliable</h3>
						<p className="cs-item-text">
							Service calls starting at $150 and quick response times mean
							you’re never left waiting in the cold (or heat).
						</p>
					</li>
					<li className="cs-item">
						<Image
							src="/images/hammer-and-wrench.svg"
							alt="icon"
							width={48}
							height={48}
						/>
						<h3 className="cs-h3">Licensed & Insured</h3>
						<p className="cs-item-text">
							Fully licensed, bonded, and insured: giving you peace of mind that
							every job is done safely and professionally.
						</p>
					</li>
				</ul>
			</div>
			<div className="cs-background">
				<Image
					src="/images/home-hero.jpg"
					alt="meeting"
					width={2250}
					height={1500}
				/>
			</div>
		</section>
	);
}
