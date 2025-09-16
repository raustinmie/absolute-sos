import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Review2244() {
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
									src="/images/home-review-1.png"
									alt="profile picture"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<p className="cs-item-text">
							I recently had some work done by Aaron and he was wonderful to
							deal with incredibly knowledgeable and very likeable guy. I would
							highly recommend anyone considering having heating air
							conditioning or hot water heater work done to trust Aaron with the
							work. Great guy and very grounded and easy to talk with.
						</p>
						<span className="cs-name">James C.</span>
					</li>
					<li className="cs-item">
						<div className="cs-image-group">
							<div className="cs-picture">
								<Image
									src="/images/home-review-2.png"
									alt="profile picture"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<p className="cs-item-text">
							Aaron was great. We had our furnace poop out with winter coming
							and needed a new one asap. I called a bunch of hvac companies,
							half didn't answer the phone and half were over a month out. Aaron
							gave me an estimate on a Friday and had the unit installed and
							done by Wednesday. Could not be more happy.
						</p>
						<span className="cs-name">Knute Olsen</span>
					</li>
					<li className="cs-item">
						<div className="cs-image-group">
							<div className="cs-picture">
								<Image
									src="/images/home-review-3.png"
									alt="profile picture"
									width={64}
									height={64}
								/>
							</div>
						</div>
						<p className="cs-item-text">
							I caught Aaron at Four Seasons in the nick of time, right before
							the first few really cold nights this fall. He was able to come
							give me a quote the same day, and was in three days later for the
							install, which took less than four hours. The other quote I got
							was several hundred dollars more, and was estimated to take three
							afternoons to accomplish. Aaron was communicative about what he
							was going to do, and did phenomenal work on the install. Thank you
							much!
						</p>
						<span className="cs-name">Dan Perl</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
