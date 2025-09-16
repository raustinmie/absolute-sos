import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Rpsbs2278() {
	return (
		/* ============================================ */
		/*                 Side By Side                 */
		/* ============================================ */
		<div>
			<section id="RPsbs-2278">
				<div className="cs-container">
					<div className="cs-picture">
						<Image
							src="/images/services-furnace-filter.jpg"
							alt="construction"
							width={500}
							height={552}
						/>
					</div>
					<div className="cs-content">
						<h3 className="cs-h3">Water Heaters</h3>
						<div className="cs-text">
							Hot water when you need it most, installed and serviced with care.
							<ul>
								<li>Hot Water Heater Repair</li>
								<li>Hot Water Heater Installation</li>
							</ul>
						</div>
						<h3 className="cs-h3">Maintenance</h3>
						<div className="cs-text">
							Prevent problems before they start with routine system check-ups.{" "}
							<ul>
								<li>
									Annual Preventative Maintenance (for furnaces, heat pumps, AC,
									and more)
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section id="RPsbsr-2278">
				<div className="cs-container">
					<div className="cs-picture">
						<Image
							src="/images/services-truck.jpg"
							alt="construction"
							width={500}
							height={552}
						/>
					</div>
					<div className="cs-content">
						<h3 className="cs-h3">Not sure what you need?</h3>
						<p className="cs-text">
							We’re happy to answer your questions and recommend the best
							solution for your home.
						</p>
						<p>Call us today for a free estimate or to schedule services.</p>
						<Link
							className="cs-button-solid"
							aria-label="learn more about our programs"
							href="/contact"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
