import photo1 from '@/assets/photos/image1.svg';
import photo2 from '@/assets/photos/image2.svg';
import photo3 from '@/assets/photos/image3.svg';

export default defineNuxtPlugin(() => {  
	
	const photos = reactive([
	  { id: 1, src: photo1, alt: 'Photo 1' },
	  { id: 2, src: photo2, alt: 'Photo 2' },
	  { id: 3, src: photo3, alt: 'Photo 3' },
	]);
  
	const get = () => {
		return photos; 
	};

	return {
		provide: {
		  PhotosGet: get,
		}
	}
  });
  