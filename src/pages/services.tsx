import ServicesSeo, { Service } from "@/components/seo/services-seo";
import Review2244B from "@/components/stitches/services/review-2244/review-2244";
import Rpsbs2278 from "@/components/stitches/services/rpsbs-2278/rpsbs-2278";
import Services1626 from "@/components/stitches/services/services-1626/services-1626";
export default function Services() {
	const services: Service[] = [
		{
			serviceName: "Septic System Installation",
			serviceType: "Septic System Installation",
			serviceDescription:
				"Professional septic system installation for residential and commercial properties in Skagit and San Juan Counties.",
			providerType: "LocalBusiness",
			areasServed: [
				{
					areaServedType: "Place",
					areaServed: "Skagit County, WA",
				},
				{
					areaServedType: "Place",
					areaServed: "San Juan County, WA",
				},
			],
		},
		{
			serviceName: "Septic System Maintenance",
			serviceType: "Septic System Maintenance",
			serviceDescription:
				"Routine septic system maintenance to ensure efficiency and prevent costly issues in Skagit and San Juan Counties.",
			providerType: "LocalBusiness",
			areasServed: [
				{
					areaServedType: "Place",
					areaServed: "Skagit County, WA",
				},
				{
					areaServedType: "Place",
					areaServed: "San Juan County, WA",
				},
			],
		},
		{
			serviceName: "Septic System Inspection",
			serviceType: "Septic System Inspection",
			serviceDescription:
				"Thorough septic inspections for home sales, maintenance planning, and compliance in Skagit and San Juan Counties.",
			providerType: "LocalBusiness",
			areasServed: [
				{
					areaServedType: "Place",
					areaServed: "Skagit County, WA",
				},
				{
					areaServedType: "Place",
					areaServed: "San Juan County, WA",
				},
			],
		},
		{
			serviceName: "Excavator Services",
			serviceType: "Excavator Services",
			serviceDescription:
				"Professional excavator services for foundations, driveways, and site preparation in Skagit and San Juan Counties.",
			providerType: "LocalBusiness",
			areasServed: [
				{
					areaServedType: "Place",
					areaServed: "Skagit County, WA",
				},
				{
					areaServedType: "Place",
					areaServed: "San Juan County, WA",
				},
			],
		},
	];

	return (
		<div>
			<ServicesSeo
				description="Explore septic services from Absolute SOS: installation, inspections, maintenance, sewer hookups, and excavation in Skagit & San Juan Counties."
				ogDescription="From septic installation to sewer hookups and excavation, Absolute SOS provides reliable services in Skagit & San Juan Counties. See our full list of services."
				services={services}
			/>
			<Services1626 />
			<Rpsbs2278 />
			<Review2244B />
		</div>
	);
}
