import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact-form.module.css";

type FormData = {
	name: string;
	email: string;
	message: string;
	website: string;
};

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
		website: "",
	});

	const [showToast, setShowToast] = useState(false);
	const [startTime, setStartTime] = useState<number>(0);
	useEffect(() => {
		setStartTime(Date.now());
	}, []);
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const timeElapsed = Date.now() - startTime;
		const minTime = 4000 + Math.random() * 3000;
		if (timeElapsed < minTime) {
			console.warn("Spam blocked: submitted too fast.");
			return;
		}
		if (formData.website) {
			return;
		}
		const submissionData = {
			...formData,
			message: formData.message + `\n\nFrom: ${formData.email}`,
		};
		console.log("Form submitted:", submissionData);
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				submissionData,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setShowToast(true);
				setFormData({ name: "", email: "", message: "", website: "" });
				setTimeout(() => setShowToast(false), 5000);
			})
			.catch((error) => {
				console.error("EmailJS error:", error);
			});
	};

	return (
		<div className={styles.contactFormContainer}>
			<form onSubmit={handleSubmit} className={styles.formContainer}>
				<input
					name="name"
					type="text"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					className={styles.formInput}
					required
				/>
				<input
					name="email"
					type="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					className={styles.formInput}
					required
				/>
				<textarea
					name="message"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}
					rows={5}
					className={styles.formTextarea}
					required
				/>
				<textarea
					name="website"
					placeholder="Website"
					value={formData.website}
					onChange={handleChange}
					rows={5}
					className={styles.website}
					tabIndex={-1}
					aria-hidden="true"
				/>
				<button type="submit" className={styles.formButton}>
					Submit
				</button>
			</form>
			{showToast && (
				<div className={styles.toast}>Thanks for reaching out!</div>
			)}
		</div>
	);
}
