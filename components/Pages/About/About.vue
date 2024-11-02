<script setup>
	//DATA
	const paragraphs = [
	{ text: "ユキについて", className: "middle-weight" },
	{ text: "こんにちは！私たちは愛らしいポメラニアン、ユキ（雪）をご紹介します。ユキはその名前の通り、白くてふわふわの毛を持ち、まるで小さな雪のかたまりのような存在です。彼女は我が家に来てから、すぐに家族の中心的な存在になり、私たちの日々を明るく、幸せなものにしてくれています。", 
		className: "middle-slim" },
	{ text: "ユキの性格", className: "middle-weight" },
	{ text: "ユキはとても優しく、人懐っこい性格です。初めて会う人にもすぐに打ち解け、尻尾を振って挨拶をします。彼女は社交的で、他の犬や人ともすぐに仲良くなります。特に散歩のときは、近所の人たちに会うのが大好きで、みんなから「かわいい！」と言われると、得意げに歩き回ります。", 
		className: "middle-slim" },
	];

	const { $ReviewsGet } = useNuxtApp();
	const reviews = reactive([...$ReviewsGet()]);
	
	
	
	//METHODS 
	const calculateAverageStars = (reviews) => {
		if (reviews.length === 0) return 0;
		const sum = reviews.reduce((acc, review) => acc + review.stars, 0); 
		return (sum / reviews.length).toFixed(1);
	};

	const averageStars = calculateAverageStars(reviews);
	
</script>

<template>
	<div class="aboutPage">
		<div class="bigLabelField">
			<div class="huge-weight">雪ちゃんについて</div>
			<div class="stars">
				<ReviewsStars :star="averageStars" color="fill"/>
				<div class="numberStars">{{ averageStars }}</div>
			</div>
		</div>	
		<div class="aboutContent">
			<img src="@/assets/Yukino.jpg" alt="photo" class="bigAva" />
			<div class="aboutContentText">
				<p
					v-for="(item, index) in paragraphs"
					:key="index"
					:class="item.className"
					class="paragraph"
					>
					{{ item.text }}
					</p>
			</div>
		</div>	
		<PhotosWidget />
		<ReviewsWidget />	
	</div>
</template>

<style scoped>
	.aboutPage {
		padding: 48px 48px 0;
		justify-content: center;
	}

	.bigLabelField {
		height: 100px;
		padding: 21px 503px;
		display: grid;            
  		place-items: center;
		position: relative;
		box-sizing: border-box;
	}

	.stars {
		display: flex;
		justify-content: space-between;
		place-items: center;
		position: absolute;
		right: 0;
	}

	.numberStars {
		padding-left: 16px;
		font-weight: 400;
		font-size: 20px;
	}

	.aboutContent {
		gap: 48px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bigAva {
		width: 300px;
		height: 300px;
		border-radius: 12px;
	}

	.aboutContentText {
		gap: 16px;
	}

	.paragraph {
		margin: 0;
	}
</style>