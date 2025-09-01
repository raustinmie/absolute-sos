import styles from "../styles/services.module.css";
import { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import NextImage from "@/components/next-image/next-image";
import { useWindowScroll } from "react-use";
import ServicesSeo, { Service } from "@/components/seo/services-seo";
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
		<div className={styles.servicesContainer}>
			<ServicesSeo
				description="Explore septic services from Absolute SOS: installation, inspections, maintenance, sewer hookups, and excavation in Skagit & San Juan Counties."
				ogDescription="From septic installation to sewer hookups and excavation, Absolute SOS provides reliable services in Skagit & San Juan Counties. See our full list of services."
				services={services}
			/>
			<h1
				className={styles.servicesTitle}
				id="servicesTitle"
			>{`Our Services`}</h1>
			<p className={styles.servicesIntro}>
				{`At Absolute Septic, we’re committed to providing reliable, professional, and timely service for every job—big or small. Whether you need a new septic system, an inspection before buying a home, or expert excavation work, we’ve got the experience and local knowledge to do it right the first time. Proudly serving Skagit and San Juan Counties since 2009.`}
			</p>
			<div className="divider" />
			<div className={`${styles.serviceSection} ${styles.sewerLineSection}`}>
				<div className={`${styles.serviceContent}`}>
					<div
						className={`${styles.serviceImageContainer} ${styles.sewerLineImageContainer}`}
					>
						<NextImage
							src={"/images/services-sewer-line.png"}
							alt="Louie in a deep hole."
							contain={true}
						/>
					</div>
					<div className={styles.infoAndCtaColumn}>
						<div className={styles.headers}>
							<h2
								className={styles.serviceHeader}
							>{`City Sewer Line Services`}</h2>
							<h2
								className={styles.serviceSubheader}
							>{`Repair & New Hookups`}</h2>
						</div>
						<p className={`${styles.serviceDescription}`}>
							{` If your private sewer line (also known as a side sewer) is failing or needs a new connection to the city main, we can help. A damaged line can lead to costly backups and health hazards in your home. We provide inspections, repairs, and new hook-ups to city sewer systems, helping you prevent problems before they start.`}
						</p>
						<Link href="/contact">
							<button aria-label="Schedule Inspection" className="cta-button">
								Schedule Inspection
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={`${styles.serviceSection} ${styles.newInstallSection}`}>
				<div className={`${styles.serviceContent} ${styles.newInstallContent}`}>
					<div
						className={`${styles.serviceImageContainer} ${styles.newInstallImageContainer}`}
					>
						<NextImage
							src={"/images/services-new-home.png"}
							alt="Jennifer working the excavator"
							contain={true}
						/>
					</div>
					<div className={styles.infoAndCtaColumn}>
						<div className={styles.headers}>
							<h2
								className={styles.serviceHeader}
							>{`New Home? We’ve Got You Covered`}</h2>
							<h2
								className={styles.serviceSubheader}
							>{`New Septic System Installs & Repairs`}</h2>
						</div>
						<p className={`${styles.serviceDescription}`}>
							{` Whether you’re building your dream home or buying an existing one, septic systems are a key part of the process. We work with septic designers, assist with permits and county paperwork, and handle full installations or repairs. We also understand time-sensitive real estate deadlines—so we’re fast, reliable, and certified to help.`}
						</p>
						<Link href="/contact">
							<button aria-label="Start Your Project" className="cta-button">
								Start Your Project
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={`${styles.serviceSection} ${styles.inspectionSection}`}>
				<div className={`${styles.serviceContent} ${styles.inspectionContent}`}>
					<div className={styles.infoAndCtaColumn}>
						<div className={styles.headers}>
							<h2
								className={styles.serviceHeader}
							>{`Certified Septic System Inspections`}</h2>
							<h2
								className={styles.serviceSubheader}
							>{`O&M Inspections | Real Estate Inspections`}</h2>
						</div>
						<p className={`${styles.serviceDescription}`}>
							{` Routine inspections are required in Skagit and San Juan Counties—every year for most systems, and every 3 years for gravity systems. We’re certified to perform O&M and real estate inspections, helping homeowners, buyers, and sellers stay in compliance and avoid future issues.`}
						</p>
						<Link href="/contact">
							<button aria-label="Book An Inspection" className="cta-button">
								Book An Inspection
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={`${styles.serviceSection} ${styles.maintenanceSection}`}>
				<div className={`${styles.serviceContent}`}>
					<div className={styles.infoAndCtaColumn}>
						<div className={styles.headers}>
							<h2
								className={styles.serviceHeader}
							>{`Septic System Maintenance`}</h2>
							<h2
								className={styles.serviceSubheader}
							>{`Keep Your System Healthy`}</h2>
						</div>
						<p className={`${styles.serviceDescription}`}>
							{` Avoid costly failures with proactive care. Regular maintenance—along with smart use habits—can extend the life of your septic system for decades. Don’t flush: grease, “septic-safe” wipes, feminine products, or birth control wrappers. These cause clogs and system damage.`}
						</p>
						<Link className={styles.maintenanceCtaButtonLink} href="/contact">
							<button
								aria-label="GET HELP WITH SEPTIC maintenance "
								className={`cta-button`}
							>
								GET HELP WITH SEPTIC maintenance
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={`${styles.serviceSection} ${styles.excavationSection}`}>
				<div className={`${styles.serviceContent} ${styles.excavationContent}`}>
					<div
						className={`${styles.serviceImageContainer} ${styles.excavationImageContainer}`}
					>
						<NextImage
							src={"/images/services-experience.png"}
							alt="An excavator"
							contain={false}
						/>
					</div>
					<div className={styles.infoAndCtaColumn}>
						<div className={styles.headers}>
							<h2 className={styles.serviceHeader}>{`Excavation Services`}</h2>
							<h2
								className={styles.serviceSubheader}
							>{`30+ Years of Hands-On Experience`}</h2>
						</div>
						<p className={`${styles.serviceDescription}`}>
							{`  We provide skilled excavation services for foundations, driveways, and septic prep. With decades of experience and respect for your property, we get the job done right—no mess left behind.\n- Foundations\n- Driveways\n- Brush Clearing`}
						</p>
						<Link href="/contact">
							<button aria-label="Request a Quote" className="cta-button">
								Request a Quote
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="divider" />

			<div className={`${styles.craft3Section}`}>
				<h2 className={styles.craft3Header}>Need financial help?</h2>
				<p
					className={styles.craft3Text}
				>{`If your property is in Washington state, you may be eligible to borrow up to the full cost of your septic repair or replacement with help from Craft3.`}</p>
				<Link href="https://www.craft3.org/homeowner-loans/clean-water/washington">
					<button
						aria-label="Learn More about Craft 3"
						className={`cta-button ${styles.craft3CtaButton}`}
					>
						Learn More
					</button>
				</Link>
				<div className={`${styles.craft3CardContainer}`}>
					<NextImage
						src={"/images/craft3.png"}
						alt="An excavator"
						contain={false}
					/>
				</div>
			</div>
			<div className={`divider ${styles.finalDivider}`} />
		</div>
	);
}
