import React from "react";
import HomeSeo from "@/components/seo/home-seo";
import Hero1619 from "@/components/stitches/home/hero-1619/hero-1619";
import Cta2400 from "@/components/stitches/home/cta-2400/cta-2400";
import Services1977 from "@/components/stitches/home/services-1977/services-1977";
import Review2244 from "@/components/stitches/home/review-2244/review-2244";

export default function Home() {
	return (
		<div style={{ width: "100%" }}>
			<HomeSeo
				description="Absolute SOS provides septic installation, maintenance, inspections, sewer hookups, and excavation in Skagit & San Juan Counties. Contact us today!"
				ogDescription="Expert septic services in Skagit & San Juan Counties. From installation and inspections to sewer hookups and excavation, Absolute SOS delivers reliable solutions. Get in touch today!"
			/>
			<Hero1619 />
			<Cta2400 />
			<Services1977 />
			<Review2244 />
		</div>
	);
}
