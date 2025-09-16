import React from "react";
import Image from "next/image";

export default function Gallery379() {
	return (
		/* ============================================ */
		/*                   Gallery                    */
		/* ============================================ */

		<section id="gallery-379">
			<div className="cs-container">
				<div className="cs-content">
					<h2 className="cs-title">Proud to Support Our Community</h2>
					<p className="cs-text">
						Lynden isn’t just where we work - it’s home. We love giving back by
						sponsoring local sports teams, joining in community events like
						trunk-or-treats, and showing up for the families who support us. At
						Four Seasons, being part of the community matters just as much as
						the work we do inside your home.
					</p>
				</div>
				<div className="cs-gallery">
					<div className="cs-image">
						<Image
							src="/images/about-basketball.jpg"
							alt="gallery"
							width={305}
							height={400}
						/>
					</div>
					<div className="cs-image">
						<Image
							src="/images/about-soccer.jpg"
							alt="gallery"
							width={305}
							height={400}
						/>
					</div>
					<div className="cs-image">
						<Image
							src="/images/about-trunk-or-treat.jpg"
							alt="gallery"
							width={305}
							height={400}
						/>
					</div>
					<div className="cs-image double-wide">
						<Image
							src="/images/about-firetruck.jpg"
							alt="gallery"
							width={610}
							height={400}
						/>
					</div>
					<div className="cs-image">
						<Image
							src="/images/about-coach.jpg"
							alt="gallery"
							width={305}
							height={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
