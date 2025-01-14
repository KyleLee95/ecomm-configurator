import OpengraphImage from '@/components/shopify/opengraph-image';

export const runtime = 'edge';

export default async function Image() {
	return await OpengraphImage();
}
