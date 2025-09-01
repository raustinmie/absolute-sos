import React, { useState, useEffect, useRef } from "react";
import styles from "./slideshow.module.css";

interface SlideshowTestimonial {
	text: string;
	reviewer: string;
}

interface SlideshowProps {
	testimonials: SlideshowTestimonial[];
	containerRef: React.RefObject<HTMLDivElement | null>;
}
const Slideshow = ({ testimonials, containerRef }: SlideshowProps) => {
	const [randomValue, setRandomValue] = useState<number | null>(null);

	useEffect(() => {
		setRandomValue(Math.random());
	}, []);
	const [current, setCurrent] = useState(
		Math.floor((randomValue ? randomValue : 0) * testimonials.length)
	);
	const [height, setHeight] = useState<number | undefined>(undefined);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			const newHeight = contentRef.current.offsetHeight;
			setHeight(newHeight);
		}
	}, [current]);

	const scrollToTop = () => {
		if (containerRef.current) {
			containerRef.current.scrollTo({
				top: -100,
				behavior: "smooth", // for smooth scrolling
			});
		}
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % testimonials.length);
		scrollToTop();
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
		scrollToTop();
	};
	return (
		<div className={styles.carouselWrapper}>
			<div
				className={styles.review}
				style={{ height: height ? `${height}px` : "auto" }}
			>
				<div key={current} className={styles.slide}>
					<p className={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</p>
					<div ref={contentRef}>
						<p className={styles.reviewText}>{testimonials[current].text}</p>
						<p>{testimonials[current].reviewer}</p>
					</div>
				</div>
			</div>
			<div className={styles.arrows}>
				<button
					className={`${styles.arrow} ${styles.leftArrow}`}
					onClick={prevSlide}
					aria-label="Previous"
				>
					‹
				</button>
				<button
					className={`${styles.arrow} ${styles.rightArrow}`}
					onClick={nextSlide}
					aria-label="Next"
				>
					›
				</button>
			</div>
		</div>
	);
};

export default Slideshow;
