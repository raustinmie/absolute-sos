import Cta1072 from "@/components/stitches/about/cta-1072/cta-1072";
import Faq1720 from "@/components/stitches/faq/faq-1720/faq-1720";

export default function FAQ() {
	return (
		<div>
			{/* <FAQSeo
				description="Learn about Absolute SOS, serving Skagit & San Juan Counties with reliable septic installation, inspections, maintenance, sewer hookups, and excavation services."
				ogDescription="Absolute SOS provides trusted septic services in Skagit & San Juan Counties. Learn about our commitment to quality installation, maintenance, and excavation solutions."
			/> */}
			<Faq1720 />
			<Cta1072
				title={
					"Keep your system running smoothly - schedule routine maintenance today!"
				}
			/>
		</div>
	);
}
