import photo1 from '@/assets/photos/image1.png';
import photo2 from '@/assets/photos/image2.png';
import photo3 from '@/assets/photos/image3.png';
import photo4 from '@/assets/photos/image4.png';
import photo5 from '@/assets/photos/image5.png';

export default defineNuxtPlugin(() => {  
	
	const photos = reactive([
	  { id: 1, src: photo1, alt: 'Photo 1' },
	  { id: 2, src: photo2, alt: 'Photo 2' },
	  { id: 3, src: photo3, alt: 'Photo 3' },
	  { id: 4, src: photo4, alt: 'Photo 4' },
	  { id: 5, src: photo5, alt: 'Photo 5' },
	]);



	const get = () => {
		return photos; 
	};

	const add = (item) => {
		const newPhoto = ref({
			id: null,
			src: '',
			alt: '',
		});
	

		newPhoto.value.src = item;
		newPhoto.value.id = crypto.randomUUID();
		photos.push({ ...newPhoto.value })
		return newPhoto.value.id
	}

	return {
		provide: {
		  PhotosGet: get,
		  PhotosAdd: add,
		}
	}
  });
  