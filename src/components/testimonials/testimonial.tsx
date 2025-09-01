import Image from "next/image";
import ReactStars from "react-stars";
import styles from "./testimonial.module.css";

interface TestimonialProps {
	imageSrc?: string;
	imageAlt?: string;
	imagePlacement?: string;
	text: string;
	referrer: string;
	stars?: number;
}
export default function Testimonial({
	imageSrc,
	imageAlt,
	imagePlacement,
	text,
	referrer,
	stars,
}: TestimonialProps) {
	return (
		<div className={styles.testimonial}>
			<p className={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</p>
			{imagePlacement != "bottom" && imageSrc && (
				<div className={styles.imageContainer}>
					<Image
						className={styles.testimonialImage}
						src={imageSrc}
						alt={imageAlt ?? ""}
						fill
					/>
				</div>
			)}
			<p className={styles.testimonialText}>{text}</p>
			<p className={styles.testimonialAuthor}>{referrer}</p>
			{imagePlacement == "bottom" && imageSrc && (
				<div className={styles.imageContainer}>
					<Image
						className={styles.testimonialImage}
						src={imageSrc}
						alt={imageAlt ?? ""}
						fill
					/>
				</div>
			)}
		</div>
	);
}
