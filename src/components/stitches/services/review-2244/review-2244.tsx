import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Review2244B() {
	return (
		/* ============================================ */
		/*                   Reviews                    */
		/* ============================================ */

		<section id="reviews-2244">
			<div className="cs-container">
				<div className="cs-content">
					<div className="cs-wrapper">
						<span className="cs-topper">Testimonials</span>
						<h2 className="cs-title">What Our Clients Say</h2>
					</div>
					<Link
						aria-label="read more reviews"
						href="https://www.google.com/search?q=four+seasons+heating+and+cooling&sca_esv=5b71cfa89013eb9f&rlz=1C5OZZY_enUS1173US1174&sxsrf=AE3TifPTlsecfx6q_KXG1TCBaC8u97WrKg%3A1757970368563&ei=wH_IaP-VIveV0PEPjZ3GoAs&ved=0ahUKEwj_9d_61duPAxX3CjQIHY2OEbQQ4dUDCBM&uact=5&oq=four+seasons+heating+and+cooling&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGZvdXIgc2Vhc29ucyBoZWF0aW5nIGFuZCBjb29saW5nMgoQIxiABBgnGIoFMgQQIxgnMhEQLhiABBiRAhjHARiKBRivATILEAAYgAQYkQIYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgARI5AxQxwhYowpwAngBkAEAmAFwoAGUA6oBAzIuMrgBA8gBAPgBAZgCBKAC6QHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAgcQIxiwAhgnwgINEC4YgAQYxwEYDRivAcICBxAAGIAEGA3CAgYQABgHGB6YAwCIBgGQBgu6BgQIARgIkgcDMi4yoAfqObIHAzAuMrgH2QHCBwUyLTIuMsgHGw&sclient=gws-wiz-serp#lrd=0x5485a48062cc3bdb:0xfdfc60207424228e,1,,,,"
						className="cs-button-solid"
					>
						See More Reviews
					</Link>
				</div>
				<ul className="cs-card-group">
					<li className="cs-item">
						<div className="cs-image-group">
							<div className="cs-picture">
								<Image
									src="/images/services-review-1.png"
									alt="profile picture"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<p className="cs-item-text">
							The thermostat in my house completely stopped working and I wasn't
							able to turn on the heat so I called around to a few places. Four
							seasons was able to get out to my home same day within about an
							hour of calling which was amazing. I have several animals that
							require a warmer temperature and with the snow coming I was really
							worried for them but thanks to Aaron everything was fixed right
							away. They were so polite and explained everything to me. I would
							HIGHLY recommend four seasons!
						</p>
						<span className="cs-name">Michelle Marie</span>
					</li>
					<li className="cs-item">
						<div className="cs-image-group">
							<div className="cs-picture">
								<Image
									src="/images/services-review-2.png"
									alt="profile picture"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<p className="cs-item-text">
							We've worked with Aaron multiple times over the last 5 years
							including new furnace, new hot water heaters (in a house and a
							condo) and new AC install. Aaron is knowledgable, responsive,
							helpful and friendly -- and his prices are more than reasonable.
							Can't say enough good things about this company and highly
							recommend him to anyone in the area looking for high quality,
							super reliable heating/cooling jobs.
						</p>
						<span className="cs-name">Chad G.</span>
					</li>
					<li className="cs-item">
						<div className="cs-image-group">
							<div className="cs-picture">
								<Image
									src="/images/services-review-3.png"
									alt="profile picture"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<p className="cs-item-text">
							We had an issue with our furnace and Four Seasons was able to get
							out right away. The repair required a new part and I was really
							surprised with how fast it arrived and then how fast he was able
							to install it. His attention to detail and responsiveness was
							amazing and I highly recommend him to anyone who needs an HVAC
							repair.
						</p>
						<span className="cs-name">Stacy Salyer</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
