"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Faq1720.module.css"; // optional CSS module

export default function Faq1720() {
	// categories for the filter buttons
	const filters = [
		{ key: "one", label: "All available starter feature" },
		{ key: "two", label: "Home service 24/7" },
		{ key: "three", label: "Customer agent service" },
		{ key: "four", label: "Professional Service" },
		{ key: "five", label: "2 dedicated consultant" },
	];

	const [activeFilter, setActiveFilter] = useState("one");
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (id: string) => {
		setOpenItems((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
		);
	};

	const renderFaqGroup = (category: string, items: string[]) => (
		<ul
			key={category}
			className={`cs-faq-group ${activeFilter === category ? "" : "cs-hidden"}`}
			data-category={category}
		>
			{items.map((text, idx) => {
				const id = `${category}-${idx}`;
				const isOpen = openItems.includes(id);
				return (
					<li key={id} className={`cs-faq-item ${isOpen ? "active" : ""}`}>
						<button
							className="cs-button"
							onClick={() => toggleItem(id)}
							aria-expanded={isOpen}
						>
							<span className="cs-button-text">{text}</span>
						</button>
						{isOpen && (
							<p className="cs-item-p">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
								convallis nunc neque, bibendum pulvinar vitae commodo velit.
								Proin diam tortor sed malesuada nunc.
							</p>
						)}
					</li>
				);
			})}
		</ul>
	);

	const faqContent = {
		one: [
			"What is the best way to start investing?",
			"What are the tax implications of investing in the stock market?",
			"How can I improve my credit score?",
			"What is the difference between a traditional IRA and a Roth IRA?",
			"How can I reduce my tax liability as a self-employed individual?",
		],
		two: [
			"How can I improve my credit score?",
			"What is the best way to start investing?",
			"What are the tax implications of investing in the stock market?",
		],
		three: [
			"How can I reduce my tax liability as a self-employed individual?",
			"What is the best way to start investing?",
			"What are the tax implications of investing in the stock market?",
		],
		four: [
			"How can I reduce my tax liability as a self-employed individual?",
			"What is the best way to start investing?",
			"What are the tax implications of investing in the stock market?",
		],
		five: [
			"How can I reduce my tax liability as a self-employed individual?",
			"What is the best way to start investing?",
			"What are the tax implications of investing in the stock market?",
		],
	};

	return (
		<section id="faq-1720" className="faq">
			<div className="cs-container">
				<div className="cs-content">
					<span className="cs-topper">Faq</span>
					<h2 className="cs-title">Frequently Asked Questions</h2>
				</div>

				<div className="cs-flex-group">
					<div className="cs-button-group">
						<div className="cs-flex">
							{filters.map((f) => (
								<button
									key={f.key}
									className={`cs-option ${
										activeFilter === f.key ? "cs-active" : ""
									}`}
									onClick={() => setActiveFilter(f.key)}
								>
									<Image
										src="/images/faq-plus.svg"
										alt="plus"
										width={12}
										height={12}
										className="cs-icon"
									/>
									{f.label}
								</button>
							))}
						</div>

						<div className="cs-picture">
							<Image
								src="/images/faq-logo.png"
								alt="people"
								width={353}
								height={493}
							/>
						</div>
					</div>

					<div className="cs-wrapper">
						{Object.entries(faqContent).map(([cat, items]) =>
							renderFaqGroup(cat, items)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
