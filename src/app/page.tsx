import { Carousel } from "@/components/shopify/carousel";
import { ThreeItemGrid } from "@/components/shopify/grid/three-items";
import Footer from "@/components/shopify/layout/footer";
export const metadata = {
	description:
		"High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
	openGraph: {
		type: "website",
	},
};

export default function HomePage() {
	return (
		<>
			<ThreeItemGrid />
			<Carousel />
			<Footer />
		</>
	);
}
