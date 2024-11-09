import photo1 from '@/assets/photos/image1.png';
import photo2 from '@/assets/photos/image2.png';
import photo3 from '@/assets/photos/image3.png';
import photo4 from '@/assets/photos/image4.png';
import photo5 from '@/assets/photos/image5.png';

export default defineNuxtPlugin(() => {  
	
	const photos = reactive([
	  { id: '69fb7204-6fee-47b1-94c3-55100c118715', src: photo1, alt: 'Photo 1' },
	  { id: '89fac4db-3b93-4b65-b488-8c2830cf4497', src: photo2, alt: 'Photo 2' },
	  { id: '3hgr567f-dsd1-sfe4-sdf8-9eifj57jj3j9', src: photo3, alt: 'Photo 3' },
	  { id: '44h56hd8-sde3-12as-jrj6-kd83jnf56jd0', src: photo4, alt: 'Photo 4' },
	  { id: '5a2j4j77-s60g-povm-zmcf-58gj90dktgn6', src: photo5, alt: 'Photo 5' },
	]);



	const get = () => {
		return photos; 
	};

	const add = (item) => {
		const newPhoto = ref({
			id: '',
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
  