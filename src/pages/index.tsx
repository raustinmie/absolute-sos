import React from "react";
import styles from "@/styles/home.module.css";
import NextImage from "@/components/next-image/next-image";
import Link from "next/link";
import Testimonial from "@/components/testimonials/testimonial";
import HomeSeo from "@/components/seo/home-seo";

export default function Home() {
	return (
		<div className={styles.homeContainer}>
			<HomeSeo
				description="Absolute SOS provides septic installation, maintenance, inspections, sewer hookups, and excavation in Skagit & San Juan Counties. Contact us today!"
				ogDescription="Expert septic services in Skagit & San Juan Counties. From installation and inspections to sewer hookups and excavation, Absolute SOS delivers reliable solutions. Get in touch today!"
			/>
			<div className={styles.heroSection}>
				<h2
					className={styles.heroHeader}
				>{`Reliable Septic & Excavation Services in Skagit & San Juan Counties`}</h2>
				<div className={`${styles.heroTextContainer}`}>
					<div className={`${styles.imageContainer} ${styles.heroImage}`}>
						<NextImage
							src={"/images/home-hero.png"}
							alt="An excavator at work"
							contain={false}
						/>
					</div>
					<div className={styles.heroRight}>
						<p className={styles.heroText}>
							{`Absolute SOS is a family-operated business proudly serving our local communities since 2009. From minor septic repairs to full system installations, we deliver dependable, professional service backed by years of hands-on experience. Fully licensed, bonded, and insured, we’re here to help you get the job done right.`}
						</p>
						<Link href="/contact" className={styles.heroCtaButtonLink}>
							<button
								aria-label="Contact Us"
								className={`${styles.heroCtaButton} cta-button`}
							>
								{`Contact Us`}
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.whatWeDoSection}>
				<div className={styles.whatWeDoBackground} />
				<div className={styles.whatWeDoContent}>
					<div className={styles.whatWeDoTextSection}>
						<h2 className={styles.whatWeDoHeader}>{`What We Do`}</h2>
						<p
							className={styles.whatWeDoText}
						>{`We specialize in certified O&M inspections, septic system repairs and new installs, real estate inspections, and city sewer line services. We also offer excavation for foundations, basements, and site prep—no pumping, just solid, reliable work from the ground up.`}</p>
						<Link href="/services" className={styles.heroCtaButtonLink}>
							<button
								aria-label="Learn About Our Services"
								className={`${styles.heroCtaButton} cta-button`}
							>
								{`Learn About Our Services`}
							</button>
						</Link>
					</div>
					<div
						className={`${styles.imageContainer} ${styles.whatWeDoImageContainer}`}
					>
						<NextImage
							src="/images/home-what-we-do.png"
							alt="Septic tanks being installed"
							contain={true}
						/>
					</div>
				</div>
			</div>
			<div className="divider" />
			<div className={styles.learnAboutUsSection}>
				<div className={styles.largeImageContainer}>
					<NextImage
						src={"/images/home-parallax.png"}
						alt="An excavator working on a large hill in the snow."
						contain={false}
					/>
				</div>
				<Link href="/about" className={styles.learnAboutUsCtaButtonLink}>
					<button
						aria-label="Learn More About Us"
						className={`${styles.learnAboutUsCtaButton} cta-button`}
					>
						{`Learn More About Us`}
					</button>
				</Link>
			</div>
			<div className="divider" />

			<div className={styles.educationSection}>
				<div className={styles.educationBackground} />
				<div className={styles.educationContent}>
					<div className={styles.educationTextSection}>
						<h2
							className={styles.educationHeader}
						>{`Keep Your Septic System Running Smoothly`}</h2>
						<p
							className={styles.educationText}
						>{`A healthy septic system starts with smart habits. To avoid costly failures, be proactive: schedule regular inspections and watch what goes down the drain. County health regulations require regular inspections to keep your system up to code, so staying on top of this is not just good maintenance; it is also the law. Do not flush grease, “septic safe” wipes, feminine products, or birth control wrappers - they don't break down and can cause serious damage. Treat your system well now to avoid expensive repairs later!`}</p>
						<Link href="/contact" className={styles.educationCtaButtonLink}>
							<button
								aria-label="Schedule an Inspection"
								className={`${styles.educationCtaButton} cta-button`}
							>
								{`Schedule an Inspection today`}
							</button>
						</Link>
					</div>
					<div
						className={`${styles.imageContainer} ${styles.educationImageContainer}`}
					>
						<NextImage
							src="/images/home-education.png"
							alt="Septic tanks being installed"
							contain={true}
						/>
					</div>
				</div>
			</div>
			<div className="divider" />
			<div className={`testimonialsSection ${styles.homeTestimonialSection}`}>
				<div className="testimonialsBackground" />
				<h2 className="testimonialsHeader">{`What our Customers Say:`}</h2>
				<div className="testimonialsContainer">
					<Testimonial
						stars={5}
						referrer="• Rob James"
						text={`I hired Louie of Absolute SOS to build an RV pad including installing a holding tank and pump with connection to existing septic system. I'm a very picky customer and let me tell you I was extremely pleased with Louie, his workmanship and fair price. He designed the system, told me everything that he was going to do and he went above and beyond that. I was so pleased with Louie that I hired him for a second job. If you need any kind of septic related work or inspection done I highly recommend Louie and SOS.`}
					/>
					<Testimonial
						stars={5}
						referrer="• Beth Gavac"
						text="Planned on replacing our shower and sink/vanity, but, as these projects sometimes go, turned into replacing the toilet & flooring Due to unknown leak causing mold. Very happy with the results & work was done quickly and at a very fair price. Louie and Jenn are great to work with. Thanks a bunch for our new bathroom and being so flexible."
					/>
				</div>
			</div>
		</div>
	);
}
