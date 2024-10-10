export default defineNuxtPlugin(async () => {
	const photo1 = await import('@/assets/photos/image 1.svg');
	const photo2 = await import('@/assets/photos/image 2.svg');
	const photo3 = await import('@/assets/photos/image 3.svg');
	const photo4 = await import('@/assets/photos/image 4.svg');

	const photos = [
		{ src: photo1, alt: 'Photo 1' },
		{ src: photo2, alt: 'Photo 2' },
		{ src: photo3, alt: 'Photo 3' },
		{ src: photo4, alt: 'Photo 4' },
	];

	return {
		provide: {
			photos,
		}
	}
});
  
  