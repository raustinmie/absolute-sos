import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sbs2375() {
	return (
		/* ============================================ */
		/*               Side By Side Pair              */
		/* ============================================ */

		<section id="sbs-2375">
			<div className="cs-container">
				<div className="cs-wrapper">
					<div className="cs-flex">
						<div className="cs-content2">
							<h3 className="cs-h3">Meet The Owner</h3>
							<p className="cs-text">
								Owner Aaron Nosbusch is a second-generation HVAC journeyman with
								more than 25 years of experience. Over the years he’s worked on
								everything from large commercial projects to residential repairs
								and installations, but today his focus is serving families right
								here in our community. With his wife working alongside him,
								Aaron brings a personal, family-first approach to every job.
							</p>
						</div>
						<div className="cs-picture">
							<Image
								src="/images/about-roof.png"
								alt="people talking"
								width={528}
								height={378}
							/>
						</div>
					</div>
					<div className="cs-flex">
						<div className="cs-content2">
							<h3 className="cs-h3">Why Choose Four Seasons?</h3>
							<div className="cs-text">
								{`We know there are a lot of HVAC companies out there but we do things differently.\n\nAt Four Seasons, we:`}
								<ul>
									<li>Treat every customer like a neighbor</li>
									<li>Stand behind our work until the job is done right</li>
									<li>Are fully licensed, bonded, and insured</li>
									<li>Offer financing and rebate options when available</li>
								</ul>
								{`Most of all, we believe in building long-term relationships with our customers, not just fixing one problem and moving on.`}
							</div>
						</div>
						<div className="cs-picture">
							<Image
								src="/images/about-truck.jpg"
								alt="people talking"
								width={528}
								height={378}
							/>
						</div>
					</div>
				</div>
				<Link href="/services" className="cs-button-solid">
					Learn About Our Services
				</Link>
			</div>
		</section>
	);
}
