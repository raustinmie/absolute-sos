import GenericSeo from "./generic-seo";
import { companyName, canonicalUrl, siteDescription } from "@/constants";

export interface GalleryImage {
	absoluteUrl: string;
	caption: string;
}

interface GallerySeoProps {
	description: string;
	ogDescription: string;
	galleryImages: GalleryImage[];
}
export default function GallerySeo({
	description,
	ogDescription,
	galleryImages,
}: GallerySeoProps) {
	const images: { "@type": "ImageObject"; url: string; caption: string }[] =
		galleryImages.map((image) => ({
			"@type": "ImageObject",
			url: image.absoluteUrl,
			caption: image.caption,
		}));
	return (
		<GenericSeo
			title={`Gallery | ${companyName}`}
			description="View our landscaping projects across Whatcom County. See stunning hardscapes, retaining walls, irrigation installs, and lush garden designs from Spruce It Up Landscaping."
			ogDescription={ogDescription}
			canonicalUrlPath="/gallery"
			jsonLd={{
				"@context": "https://schema.org",
				"@type": "ImageGallery",
				name: `${companyName} Gallery`,
				url: `${canonicalUrl}/gallery`,
				description: description,
				image: images,
			}}
		/>
	);
}
