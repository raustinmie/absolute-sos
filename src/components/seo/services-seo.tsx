import GenericSeo from "./generic-seo";
import {
	companyName,
	canonicalUrl,
	ogImagePath,
	primaryPhone,
	primaryEmail,
} from "@/constants";

export interface AreaServed {
	areaServedType: "Place" | "AdministrativeArea" | "GeoShape" | "Country";
	areaServed: string;
}
export interface Service {
	serviceName: string;
	serviceType?: string;
	serviceDescription: string;
	providerType:
		| "Organization"
		| "Person"
		| "LocalBusiness"
		| "Person"
		| "ProfessionalService"
		| "HomeAndConstructionBusiness";
	providerName?: string;
	areasServed: AreaServed[];
}

interface ServicesSeoProps {
	description: string;
	ogDescription?: string;
	services: Service[];
}
export default function ServicesSeo({
	description,
	ogDescription,
	services,
}: ServicesSeoProps) {
	const mainEntity: {
		"@type": "Service";
		name: string;
		serviceType: string;
		description: string;
		provider: {
			"@type":
				| "Organization"
				| "Person"
				| "LocalBusiness"
				| "ProfessionalService"
				| "HomeAndConstructionBusiness";
			name: string;
		};
		areaServed: {
			"@type": "Place" | "AdministrativeArea" | "GeoShape" | "Country";
			name: string;
		};
	}[] = services.map((service) => ({
		"@type": "Service",
		name: service.serviceName,
		serviceType: service.serviceType || service.serviceName,
		description: service.serviceDescription,
		provider: {
			"@type": service.providerType,
			name: service.providerName || companyName,
			url: canonicalUrl,
			image: ogImagePath,
			telephone: primaryPhone,
			email: primaryEmail,
		},
		areaServed: [
			{
				"@type": service.areaServedType || "Place",
				name: service.areaServed,
			},
		],
	}));
	return (
		<GenericSeo
			title={`Services | ${companyName}`}
			description={description}
			ogDescription={ogDescription}
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: `Services ${companyName}`,
				url: `${canonicalUrl}`,
				description: `${description}`,
				mainEntity: mainEntity,
			}}
		/>
	);
}

// "provider": {
//   "@type": "LocalBusiness",
//   "name": "Spruce It Up Landscaping",
//   "url": "https://spruceituplandscaping.com",
//   "image": "https://spruceituplandscaping.com/images/logo.png",
//   "telephone": "+1-360-555-1234",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": "123 Main St",
//     "addressLocality": "Bellingham",
//     "addressRegion": "WA",
//     "postalCode": "98225",
//     "addressCountry": "US"
//   }
// }
//   {
//     "@type": "Service",
//     "name": "Hardscaping",
//     "serviceType": "Hardscaping",
//     "description": "Design and installation of patios, walkways, and other hardscape features to enhance outdoor living spaces in Whatcom County, WA.",
//     "provider": {
//       "@type": "Organization",
//       "name": "Spruce It Up Landscaping"
//     },
//     "areaServed": {
//       "@type": "Place",
//       "name": "Whatcom County, WA"
//     }
//   },
