import ContactForm from "@/components/contact-form";
import styles from "@/styles/contact.module.css";
import { facebookUrl, primaryEmail, primaryPhone } from "@/constants";
import ContactSeo from "@/components/seo/contact-seo";
export default function Contact() {
	return (
		<div className={styles.contactContainer}>
			<ContactSeo
				description="Contact Absolute SOS for expert septic services in Skagit & San Juan Counties. Call us or use our contact form to schedule installation, maintenance, or inspection."
				ogDescription="Have questions or need service? Contact Absolute SOS today for septic installation, maintenance, inspections, sewer hookups, and excavation in Skagit & San Juan Counties."
			/>
			<h1 className="title">Contact Us</h1>

			<div className={styles.blurbContainer}>
				<p
					className={styles.contactBlurb}
				>{`Have a septic issue or planning a new project? We offer free estimates, honest advice, and fast, professional service—whether you're on the mainland or one of the islands. Reach out today and let’s get it scheduled!`}</p>
			</div>
			<div className={styles.contactFormContainer}>
				<ContactForm />
			</div>
			<div className="divider" />
			<div className={styles.otherWaysToFindMeSection}>
				<h2 className={styles.otherWaysToFindMeHeading}>{`Or reach out:`}</h2>
				<div className={styles.contactInfo}>
					{`Jennifer (Office): `}
					<a href={`tel:+1${primaryPhone}`} className={styles.contactInfoItem}>
						{primaryPhone}
					</a>
				</div>
				<div className={styles.contactInfo}>
					{`Louie: `}
					<a href={`tel:+1${primaryPhone}`} className={styles.contactInfoItem}>
						{primaryPhone}
					</a>
				</div>
				<div className={styles.contactInfo}>
					{`Email: `}
					<a href={`mailto:${primaryEmail}`} className={styles.contactInfoItem}>
						{primaryEmail}
					</a>
				</div>

				<div className={styles.contactInfo}>
					{`Find us on facebook: `}
					<a href={facebookUrl} className={styles.contactInfoItem}>
						{facebookUrl}
					</a>
				</div>
			</div>
			<div className={`divider ${styles.extraPadding}`} />
		</div>
	);
}
