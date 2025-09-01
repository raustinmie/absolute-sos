import Link from "next/link";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import styles from "./footer.module.css";
import PrivacyPolicy from "../legalese/privacy-policy";
import TermsOfService from "../legalese/terms-of-service";
import {
	facebookUrl,
	instagramUrl,
	primaryEmail,
	primaryPhone,
} from "@/constants";
import NextImage from "../next-image/next-image";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.left}>
				<h2 className={styles.companyName}>{`Absolute SOS`}</h2>
				<div className={styles.socialIcons}>
					{facebookUrl && (
						<a href={facebookUrl} className={styles.icon}>
							<SiFacebook />
						</a>
					)}
					{instagramUrl && (
						<a href={instagramUrl} className={styles.icon}>
							<SiInstagram />
						</a>
					)}
				</div>

				<div className={styles.desktopCopyright}>
					<PrivacyPolicy />
					<TermsOfService />
					&copy; 2025{" "}
					<a
						href="https://www.harborviewwebdesign.com"
						className={styles.harborviewLink}
					>
						Harborview Web Design
					</a>
					. All rights reserved.
				</div>
			</div>

			<div className={styles.center}>
				<div className={styles.contactInfoSection}>
					<div
						className={styles.contactInfoItem}
					>{`Louie and Jennifer Pantano`}</div>
					<Link href="/contact" className={styles.ctaButtonLink}>
						<button className={`${styles.inquireButton} cta-button`}>
							{`Contact Us`}
						</button>
					</Link>
					<div className={styles.contactInfo}>
						{`Jennifer (Office):\u00A0`}
						<a
							href={`tel:+1${primaryPhone}`}
							className={styles.contactInfoItem}
						>
							{primaryPhone}
						</a>
					</div>
					<div className={styles.contactInfo}>
						{`Louie:\u00A0`}
						<a href={`tel:+13609130691`} className={styles.contactInfoItem}>
							{`360-913-0691`}
						</a>
					</div>
					<div className={styles.contactInfo}>
						<a
							href={`mailto:${primaryEmail}`}
							className={styles.contactInfoItem}
						>
							{primaryEmail}
						</a>
					</div>
					<div className={`${styles.socialIcons} ${styles.mobile}`}>
						{facebookUrl && (
							<a href={facebookUrl} className={styles.icon}>
								<SiFacebook />
							</a>
						)}
						{instagramUrl && (
							<a href={instagramUrl} className={styles.icon}>
								<SiInstagram />
							</a>
						)}
					</div>
				</div>
			</div>

			<div className={styles.right}>
				<h3 className={styles.siteMapHeader}>Site Map</h3>
				<nav className={styles.navLinks}>
					<Link href="/" className={styles.navLink}>
						Home
					</Link>
					<Link href="/services" className={styles.navLink}>
						Services
					</Link>
					<Link href="/about" className={styles.navLink}>
						About Us
					</Link>
					<Link href="/contact" className={styles.navLink}>
						Contact
					</Link>
				</nav>
			</div>

			<div className={styles.mobileCopyright}>
				<PrivacyPolicy />
				<TermsOfService />
				<div className={styles.copyrightLine}>
					&copy; 2025
					<a
						href="https://www.harborviewwebdesign.com"
						className={styles.harborviewLink}
					>
						{` Harborview Web Design`}
					</a>
					. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
