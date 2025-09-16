import React from "react";
import Image from "next/image";
import { primaryPhone, primaryEmail } from "@/constants";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";

type FormData = {
	name: string;
	email: string;
	phone: string;
	message: string;
};

export default function Contact2404() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [showToast, setShowToast] = useState(false);

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

		formData.message = formData.message.concat(`\n\nFrom: ${formData.email}`);
		console.log("Form submitted:", formData);

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formData,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setShowToast(true);
				setFormData({ name: "", email: "", phone: "", message: "" });
				setTimeout(() => setShowToast(false), 3000);
			})
			.catch((error) => {
				console.error("EmailJS error:", error);
			});
		setShowToast(true);
		setTimeout(() => setShowToast(false), 10000);

		setFormData({ name: "", email: "", phone: "", message: "" });
	};

	return (
		/* ============================================ */
		/*                   Contact                    */
		/* ============================================ */

		<section id="contact-2404">
			<div className="cs-container">
				<div className="cs-content">
					<div className="cs-content-group">
						<span className="cs-topper">Contact Us</span>
						<h2 className="cs-title">Ready for Service? We’re Here to Help.</h2>
						<p className="cs-text">
							Call, text, or send us a message below to schedule your
							appointment
						</p>
					</div>
					<ul className="cs-card-group">
						<li className="cs-item">
							<Image
								src="/images/contact-phone.svg"
								alt="icon"
								width={120}
								height={120}
							/>
							<div className="cs-flex-group">
								<h3 className="cs-header">Phone</h3>
								<Link className="cs-link" href={`tel:${primaryPhone}`}>
									{primaryPhone}
								</Link>
							</div>
						</li>
						<li className="cs-item">
							<Image
								src="/images/contact-pin.svg"
								alt="icon"
								width={120}
								height={120}
							/>
							<div className="cs-flex-group">
								<h3 className="cs-header">Location</h3>
								<Link className="cs-link" href="" target="_blank">
									Serving Skagit and Whatcom counties{" "}
								</Link>
							</div>
						</li>
						<li className="cs-item">
							<Image
								src="/images/contact-mail.svg"
								alt="icon"
								width={120}
								height={120}
							/>
							<div className="cs-flex-group">
								<h3 className="cs-header">Email</h3>
								<Link className="cs-link" href={`mailto:${primaryEmail}`}>
									4seasonsheatingandcooling1&#8203;@gmail.com
								</Link>
							</div>
						</li>
					</ul>
				</div>
				<div className="cs-group">
					<div className="cs-picture">
						<Image
							src="/images/contact-truck.jpg"
							alt="people"
							width={630}
							height={300}
						/>
					</div>
					<form
						className="cs-form"
						id="cs-form-2404"
						name="Contact Form"
						method="post"
						onSubmit={handleSubmit}
					>
						<label className="cs-label">
							<input
								className="cs-input cs-name"
								required
								type="text"
								id="name-2404"
								name="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleChange}
							/>
						</label>
						<label className="cs-label cs-phone">
							<input
								className="cs-input"
								required
								type="number"
								id="phone-2404"
								name="phone"
								placeholder="Phone"
								value={formData.phone}
								onChange={handleChange}
							/>
						</label>
						<label className="cs-label cs-email">
							<input
								className="cs-input"
								required
								type="email"
								id="email-2404"
								name="email"
								placeholder="Email"
								value={formData.email}
								onChange={handleChange}
							/>
						</label>

						<label className="cs-label">
							<textarea
								className="cs-input cs-textarea"
								required
								name="message"
								id="message-2404"
								placeholder="Write message..."
								value={formData.message}
								onChange={handleChange}
							></textarea>
						</label>
						{showToast && <div className="toast">Thanks for reaching out!</div>}

						<button className="cs-button-solid cs-submit" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
