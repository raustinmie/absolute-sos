import ContactSeo from "@/components/seo/contact-seo";
import Contact2404 from "@/components/stitches/contact/contact-2404/contact-2404";
export default function Contact() {
	return (
		<div style={{ width: "100%" }}>
			<ContactSeo
				description="Contact Absolute SOS for expert septic services in Skagit & San Juan Counties. Call us or use our contact form to schedule installation, maintenance, or inspection."
				ogDescription="Have questions or need service? Contact Absolute SOS today for septic installation, maintenance, inspections, sewer hookups, and excavation in Skagit & San Juan Counties."
			/>
			<Contact2404 />
		</div>
	);
}
