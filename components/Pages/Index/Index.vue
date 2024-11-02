<script setup>
	//DATA
	const router = useRouter();


	//METHODS
	const aboutPage = () => {
		router.push("/about"); 
	};
</script>

<template>
	<div>
		<div class="intro">
			<div class="bigLabelField">
				<div class="huge-weight">雪ちゃん</div>
			</div>
			<div class="shortAbout">
				<img src="@/assets/Yukino.jpg" alt="photo" class="bigAva" />
				<div class="introContent">
					<div class="middle-slim">
						こんにちは！このかわいい白いポメラニアンの名前はユキ（雪）です。名前の通り、彼女はふわふわの白い毛を持ち、まるで小さな雪のかたまりのようです。ユキはとても優しく、みんなの心を癒す存在です。散歩のときには、彼女の小さな足で元気に歩き、多くの人を笑顔にしています。もし可愛らしいポメラニアンに興味があれば、ぜひ彼女のストーリーをフォローしてみてください！
					</div>
					<div class="blue" @click="aboutPage">
						雪ちゃんは
					</div>
				</div>
			</div>
		</div>
		<PhotosWidget />
		<ReviewsWidget />
	</div>
</template>


<style scoped>
	.intro {
		padding: 48px 48px 0;
	}

	.bigLabelField {
		height: 100px;
		padding: 21px 503px;
  		place-items: center;
		box-sizing: border-box;
	}

	.shortAbout {
		display: flex;
	}

	.bigAva {
		width: 300px;
		height: 300px;
		border-radius: 12px;
	}

	.introContent {
		display: flex;
		flex-direction: column; 
		align-items: center;
		justify-content: space-between; 
		padding-left: 40px;
	}
</style>