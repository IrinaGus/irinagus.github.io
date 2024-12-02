import ava1 from '@/assets/photos/reviewava1.png';
import ava2 from '@/assets/photos/reviewava2.png';
import ava3 from '@/assets/photos/reviewava3.png';
import dummyAva from '@/assets/icons/dummyReviewer.png';


export default defineNuxtPlugin(() => {  
	//DATA
	const { $PhotosGet } = useNuxtApp();
	const photos = $PhotosGet();
	const reviews = reactive([
		{alt: 'Review 1', 
			text: 'ユキちゃんは完璧なパートナーです！彼女はとても賢くて、お座りや待ての指示をすぐに覚えました。それに、彼女と一緒にいるときはいつも幸せな気持ちになります。彼女の笑顔を見るたびに、疲れが吹き飛びます。友達にもユキちゃんを自慢したくなります！',
			name: '田中',
			ava: ava1,
			stars: 5,
			photoid: '3hgr567f-dsd1-sfe4-sdf8-9eifj57jj3j9' },
		{alt: 'Review 2', 
			text: 'ユキちゃんは完璧なパートナーです！彼女はとても賢くて、お座りや待ての指示をすぐに覚えました。それに、彼女と一緒にいるときはいつも幸せな気持ちになります。彼女の笑顔を見るたびに、疲れが吹き飛びます。友達にもユキちゃんを自慢したくなります！',
			name: '田中',
			ava: ava2,
			stars: 5 },
		{alt: 'Review 3', 
			text: 'ユキちゃんは本当にかわいいです！彼女の白くてふわふわの毛はまるで小さな雪玉のようで、見るたびに癒されます。とても人懐っこくて、すぐに家族の一員になりました。毎日一緒に散歩するのが楽しみです！このポメラニアンを迎え入れて、本当によかったです。',
			name: 'さくら',
			ava: ava3,
			stars: 4 },
	  ]);


	//METHODS
	const avaValidation = () => {
		reviews.forEach((review) => {
			if (!review.ava) {
				review.ava = dummyAva;
			}
		});
	};

	avaValidation();
  
	const get = (count) => {
		return computed(() => {
			return reviews.slice(-count).reverse().map((review) => {
				const photo = photos.value.find((p) => p.id === review.photoid);
				return {...review, src: photo ? photo.src : null, };
			});
		});
	};

	const add = (item) => {
		if (item.name && item.text) {
			reviews.push({...item});
			avaValidation();
		}
	}

	const generalRation = () => {
		if (reviews.length === 0) return 0;

		const sum = reviews.reduce((acc, review) => acc + review.stars, 0); 
		return parseFloat((sum / reviews.length).toFixed(1));
	}

	return {
		provide: {
			ReviewsGet: get,
			ReviewsAvaVal: avaValidation,
			ReviewsAdd: add,
			ReviewsGeneralRation: generalRation,
		}
	}
  });
  