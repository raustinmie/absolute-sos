import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import {
	ogIconPath,
	ogImagePath,
	appleTouchIconPath,
	companyName,
	canonicalUrl,
	siteDescription,
} from "../constants";
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
						rel="stylesheet"
					/>

					{/* Icons & Manifest */}
					{/* <link rel="icon" href="/favicon.ico" /> */}
					<link rel="apple-touch-icon" href={appleTouchIconPath} />
					<link rel="canonical" href="https://absolutesos.com/" />
					<link rel="manifest" href="/manifest.json" />
					{/* Structured Data (JSON-LD) */}
					<Script
						id="structured-data"
						strategy="afterInteractive"
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								"@context": "https://schema.org",
								"@type": "ProfessionalService",
								name: { companyName },
								url: { canonicalUrl },
								image: { ogIconPath },
								description: { siteDescription },
							}),
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
