import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services1626() {
	return (
		/* ============================================ */
		/*                  Services                    */
		/* ============================================ */

		<section id="services-1626">
			<div className="cs-container">
				<div className="cs-content">
					<div className="cs-flex">
						<span className="cs-topper">Our services</span>
						<h2 className="cs-title">
							Heating, Cooling, and More: Complete Home Comfort Solutions{" "}
						</h2>
					</div>
					<p className="cs-text">
						At Four Seasons Heating & Cooling, we provide reliable service,
						repair, and installation for all your home comfort needs. Whether
						it’s keeping your furnace running in the winter, installing a new
						air conditioner in the summer, or maintaining your system
						year-round, we’re here to help.
					</p>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<div className="cs-picture">
							<Image
								src="/images/services-furnace.jpg"
								alt="room"
								width={413}
								height={420}
							/>
						</div>
						<h3 className="cs-h3">Heating</h3>
						<p className="cs-item-text">
							Stay cozy during the cold months with professional furnace and
							heat pump services.
						</p>
						<ul>
							<li>
								Gas, Electric, and Propane Furnace Repair and Installation
							</li>
							<li>Heat Pump Repair & Installation</li>
							<li>Ductless Mini Split Heat Pump Repair & Installation</li>
						</ul>
					</li>
					<li className="cs-item">
						<div className="cs-picture">
							<Image
								src="/images/services-condenser.jpg"
								alt="room"
								width={413}
								height={420}
							/>
						</div>
						<h3 className="cs-h3">Cooling</h3>
						<p className="cs-item-text">
							Beat the heat with expert air conditioning solutions.{" "}
						</p>
						<ul>
							<li>Air Conditioning Repair</li>
							<li>Air Conditioning Installation</li>
							<li>Ductless Mini Split Heat Pump Repair & Installation</li>
						</ul>
					</li>
					<li className="cs-item">
						<Link href="" className="cs-link">
							<div className="cs-picture">
								<Image
									src="/images/services-head.jpg"
									alt="room"
									width={413}
									height={420}
								/>
							</div>
							<h3 className="cs-h3">Air Quality and Comfort</h3>
							<div className="cs-item-text">
								Breathe easier and keep your home systems running smoothly.
								<ul>
									<li>Thermostat Installation & Repair</li>
									<li>Air Scrubber Installation </li>
									<li>
										(Ask us how an air scrubber can improve the air throughout
										your home!)
									</li>
								</ul>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}
