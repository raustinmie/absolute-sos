import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services1977() {
	return (
		/* ============================================ */
		/*                  Services                    */
		/* ============================================ */

		<section id="services-1977">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">Year Round Services</span>
					<h2 className="cs-title">Explore Our Services</h2>
				</div>
				<div className="cs-wrapper">
					<ul className="cs-ul">
						<li className="cs-li">
							<div className="cs-flex">
								<h3 className="cs-h3">HEATING</h3>
								<p className="cs-li-text">
									Stay cozy all winter long. We repair, maintain, and install
									gas, electric, and propane furnaces with reliable,
									professional care.
								</p>
							</div>
						</li>
						<li className="cs-li">
							<div className="cs-flex">
								<h3 className="cs-h3">COOLING</h3>
								<p className="cs-li-text">
									Keep your home comfortable when the temperatures rise. We
									provide fast air conditioning repair and new system
									installations.
								</p>
							</div>
						</li>
						<li className="cs-li">
							<div className="cs-flex">
								<h3 className="cs-h3">Heat Pumps & Ductless</h3>
								<p className="cs-li-text">
									Efficient comfort for every season. We install and service
									heat pumps and ductless mini splits to heat and cool your home
									year-round.
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="cs-card-container">
					<div className="cs-card-picture">
						<Image
							src="/images/home-services-roof.png"
							alt="dentist and patient"
							width={477}
							height={478}
						/>
					</div>
					<div className="cs-card-content">
						<h2 className="cs-h2">Call Today! </h2>
						<p className="cs-card-text">
							Contact me today for a free estimate or to schedule and install or
							repair!
						</p>
						<div className="cs-button-flex">
							<Link className="cs-button-solid" href="">
								Get Started
							</Link>
							<Link className="cs-phone" href="">
								<div className="cs-card-pic">
									<Image
										src="/images/nav-call.svg"
										alt="icon"
										width={24}
										height={24}
									/>
								</div>
								<div className="cs-phone-wrapper">
									<span className="cs-link-content">Contact Me</span>
									<span className="cs-phone-number">360-631-4058</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
