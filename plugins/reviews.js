import ava1 from '@/assets/photos/reviewava1.png';
import ava2 from '@/assets/photos/reviewava2.png';
import ava3 from '@/assets/photos/reviewava3.png';
import photo1 from '@/assets/photos/reviewphoto1.png';


export default defineNuxtPlugin(() => {  
	
	const reviews = reactive([
		{alt: 'Review 1', 
			text: 'ユキちゃんは完璧なパートナーです！彼女はとても賢くて、お座りや待ての指示をすぐに覚えました。それに、彼女と一緒にいるときはいつも幸せな気持ちになります。彼女の笑顔を見るたびに、疲れが吹き飛びます。友達にもユキちゃんを自慢したくなります！',
			name: '田中',
			ava: ava1,
			stars: 5,
			photoid: 3 },
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
  
	const get = () => {
		return reviews; 
	};

	return {
		provide: {
			ReviewsGet: get,
		}
	}
  });
  