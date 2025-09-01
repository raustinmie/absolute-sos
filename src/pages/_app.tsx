import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "../styles/globals.css";
import "../components/stitches/nav-1.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CartProvider } from "@/lib/cart-context";
import { companyName, siteDescription } from "@/constants";
import Slideshow from "@/components/slideshow/slideshow";
function MyApp({ Component, pageProps }: AppProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [isSlideoutOpen, setIsSlideOutOpen] = useState(true);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const updateSize = () => {
			setIsMobile(window.innerWidth < 1000 || window.innerHeight < 700);
		};
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const y = window.scrollY;
			const shouldScroll = isMobile || y > 1000;
			setIsScrolled(shouldScroll);
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isMobile]);

	return (
		<>
			<Head>
				<title>{`${companyName} | ${siteDescription}`}</title>
				<meta name={siteDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="app-container">
				<CartProvider>
					<div className="header-container">
						<Header />
					</div>
					<div className="spacer" style={{ height: "8rem" }} />
					<main className="main-content">
						<Component {...pageProps} />
						{mounted && !isMobile && (
							<SlideOutButton
								isOpen={isSlideoutOpen && isScrolled}
								onClick={() => {
									console.log("closing");
									setIsSlideOutOpen(false);
								}}
							/>
						)}
					</main>
				</CartProvider>
				<div className="footer-container">
					<Footer />
				</div>
			</div>
		</>
	);
}
export default MyApp;

type SlideOutButtonProps = {
	isOpen: boolean;
	onClick: () => void;
	// children: React.ReactNode;
};

function SlideOutButton({ isOpen, onClick }: SlideOutButtonProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const testimonials = [
		{
			text: "I hired Louie of Absolute SOS to build an RV pad including installing a holding tank and pump with connection to existing septic system. I'm a very picky customer and let me tell you I was extremely pleased with Louie, his workmanship and fair price. He designed the system, told me everything that he was going to do and he went above and beyond that. I was so pleased with Louie that I hired him for a second job. If you need any kind of septic related work or inspection done I highly recommend Louie and SOS.",
			reviewer: "Rob James",
		},
		{
			text: "Planned on replacing our shower and sink/vanity, but, as these projects sometimes go, turned into replacing the toilet & flooring Due to unknown leak causing mold. Very happy with the results & work was done quickly and at a very fair price. Louie and Jenn are great to work with. Thanks a bunch for our new bathroom and being so flexible.",
			reviewer: "Beth Gavac",
		},
		{
			text: `Would definitely hire again!
We had Louis come out and replace our older water tank with a new much larger water tank in our pump house! He was recommended to me by a friend who had worked with him on jobs in the past and said he did a good job there. He kept our initial appointment to go over what I wanted to do. He gave me a bid right away, he didn't change the numbers drastically and randomly on me. We took some time to set the stage (order supplies, get the floors cleaned) the communication was good. We both kept in touch. We made an apt when we both were ready after about 2 weeks. He came on the day he said he would come, when I asked for a time, he gave it, and he came at that time. He brought all the necessary supplies he'd need to complete the job. He worked efficiently and did a good job! His helper was kind and polite! My hubby signed off on his work, he gave me my bill and I paid in full after it was all finished. I mean what more could someone possibly ask for when hiring someone to work on their property!!! Would definitely hire him again! It was a huge breath of fresh air, as we've been burned this summer by a different worker. Louis Even offered to help up tear up the slab we have to remove as it was poorly installed. As he could see us struggling. Such a kind thing. He's busy and quick. But he will make time for you and he will reply.`,
			reviewer: "Emily Price",
		},
		{
			text: `This company goes above and beyond what is asked or required!!!
Initially Absolute Septic was hired to do the required County inspection. Louie installed risers, replaced the pump and cleared the drain field lines. While here, Louie detected a gas smell, used his "sniffer" to locate the problem and made the necessary repairs. Discovering Louie's multi-talented skillset, we ask him to clear/level an area with his backhoe which he did quickly, perfectly and reasonably.
Jennifer, the 'voice' of the company, is equally consciencious making all communications easy. This team is a real find!!!!`,
			reviewer: "Judith Merchant",
		},
		{
			text: `Our wall mounted kitchen faucet replacement turned out beautifully. We were expecting to have some tile repairs needed, but he skillfully and quickly got it done with no tile needed. Thanks for a job well done.`,
			reviewer: `Jeff Camp`,
		},
		{
			text: `Louie, Jen, Joe and Lucas. Absolutely thrilled with these folks. After the January 2021 storm there was significant damage on my garage roof. I mean a tree literally went through it. They assessed the damage and were right on it!! Not once did Louie not return a call or text. Louie is a ball of energy. I felt totally comfortable with all the guys having access to our personal property. Very honest and super kind people. They went above and beyond for me. The price was right and the work done was quality. Kudos to Joe. He’s the best!! Don’t hesitate a minute using this company. Anyone that complains about this company has their head up their you know what!!!!!`,
			reviewer: "Laura P",
		},
		{
			text: `Without a doubt the best business I could have hoped to encounter for my system. Kind, courteous, professional, and down to earth people.`,
			reviewer: "Derek Schoolcraft",
		},
		{
			text: `Very professional job completed timely and would highly recommend them for any home repair.`,
			reviewer: "Lynn White",
		},
		{
			text: `I provice Property Management Services for a Family Trust here in Washington. Louis and Jennifer Pantano have provided exceptional yearly septic inspections, repair, and 3 new system installations for our 9 properties over the last 5 years. I couldn't recommend them more highly.`,
			reviewer: "Christopher C",
		},
		{
			text: `You have been SUCH A BLESSING to me and my business of owning rental homes for both fixing, repairing,
and replacing drain fields and septic tanks and leaking water lines and emergency large
plumbing problems. I can&#39;t thank you enough for the dozens of times you have come to
my rescue...and in a very timely manner! Louie always does the right thing the right
way, with fair, affordable pricing, and leaves the sight cleaned up and put back in order.
Now you are putting in a brand spanking new tank and drain field in a brand new home
being built in Gold Bar, WA and I am so excited to see you working with the general
contractor to make my dreams come true on this property.`,
			reviewer: "Paul H",
		},
	];

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			ref={containerRef}
			className={`slideoutContainer ${isOpen ? "open" : ""}`}
		>
			<div className="slideoutContent">
				<button className="closeButton" onClick={onClick}>
					{`X`}
				</button>
				(mounted &&
				<Slideshow testimonials={testimonials} containerRef={containerRef} />)
			</div>
		</div>
	);
}
