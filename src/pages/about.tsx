import NextImage from "@/components/next-image/next-image";
import styles from "../styles/about-us.module.css";
import Testimonial from "@/components/testimonials/testimonial";
import AboutSeo from "@/components/seo/about-seo";

export default function About() {
	return (
		<div className={styles.aboutPage}>
			<AboutSeo
				description="Meet Christy, the artist behind Pilgrim’s Quill Studio. She specializes in wedding calligraphy and custom lettering nationwide, plus local in-person classes."
				ogDescription="Christy, founder of Pilgrim’s Quill Studio, brings elegance and artistry to wedding calligraphy and custom lettering across the U.S., with local in-person classes."
			/>
			<h1 className={styles.aboutHeader}>About Us</h1>
			<div className={styles.aboutHeroImageContainer}>
				<NextImage
					src="/images/about-hero.png"
					alt="Headshot of Christy"
					contain={true}
				/>
			</div>
			<h2 className={styles.aboutSubheader}>About Absolute SOS</h2>
			<p className={styles.aboutIntroText}>
				{`Locally Owned. Island Tested. Built on Trust.`}
			</p>
			<p
				className={styles.mainText}
			>{`At Absolute SOS, “We Love Referrals” isn’t just a tagline - it’s how we’ve grown our family-run business since 2009. Based in Skagit County and proudly serving the surrounding areas (including San Juan County), we specialize in septic system repairs, new installations, inspections, and excavation.

Many of our clients come back again and again- and they send their friends, too.

We’re Louie and Jennifer Pantano, a husband-and-wife team who care deeply about the quality of your home and the safety of your family. With decades of hands-on experience (including Louie’s early days in plumbing), we bring practical knowledge, strong work ethic, and a genuine commitment to doing things right the first time.

We love working in the islands - whether it's Decatur, Orcas, or Friday Harbor - and yes, sometimes we bring the boat! Every project is an adventure. But no matter where the job takes us, our goal stays the same: reliable work, clear communication, and lasting results.

We offer free estimates, honest advice, and dependable service - every time.`}</p>
			<div className="divider" />
			<div className={`testimonialsSection ${styles.homeTestimonialSection}`}>
				<div className="testimonialsBackground" />
				<h2 className="testimonialsHeader">{`What our Customers Say:`}</h2>
				<div className="testimonialsContainer">
					<Testimonial
						stars={5}
						referrer="• Judith Merchant"
						text={`This company goes above and beyond what is asked or required!! Initially Absolute SOS was hired to do the required County inspection. Louie installed risers, replaced the pump and cleared the drain field lines. While here, Louie detected a gas smell, used his "sniffer" to locate the problem and made the necessary repairs. Discovering Louie's multi-talented skillset, we asked him to clear/level an area with his backhoe which he did quickly, perfectly and reasonably.
							Jennifer, the 'voice' of the company, is equally conscientious, making all communications easy. This team is a real find!!!`}
					/>
					<Testimonial
						stars={5}
						referrer="• Emily Price"
						text="Louis replaced our old water tank with a larger one in the pump house, and the whole experience was great. He showed up on time, gave a fair and consistent bid, communicated clearly, and completed the job efficiently. His helper was kind and polite, and the work was solid. It was a breath of fresh air after being burned by another contractor. Louis even offered to help with an unrelated project when he saw us struggling. He’s busy—but makes time and follows through. Highly recommend!"
					/>
				</div>
			</div>
		</div>
	);
}
