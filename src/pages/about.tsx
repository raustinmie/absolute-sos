import Sbsr2231 from "@/components/stitches/about/sbsr-2231/sbsr-2231";
import AboutSeo from "@/components/seo/about-seo";
import Cta1072 from "@/components/stitches/about/cta-1072/cta-1072";
import Sbs2375 from "@/components/stitches/about/sbs-2375/sbs-2375";
import Gallery379 from "@/components/stitches/about/gallery-379/gallery-379";

export default function About() {
	return (
		<div>
			<AboutSeo
				description="Learn about Absolute SOS, serving Skagit & San Juan Counties with reliable septic installation, inspections, maintenance, sewer hookups, and excavation services."
				ogDescription="Absolute SOS provides trusted septic services in Skagit & San Juan Counties. Learn about our commitment to quality installation, maintenance, and excavation solutions."
			/>
			<Sbsr2231 />
			<Cta1072 title={"Let’s get you on our schedule today!"} />
			<Sbs2375 />
			<Gallery379 />
		</div>
	);
}
