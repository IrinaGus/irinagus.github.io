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
				<div class="bigLabel">雪ちゃん</div>
			</div>
			<div class="shortAbout">
				<img src="@/assets/Yukino.jpg" alt="photo" class="bigAva" />
				<div class="introContent">
					<div class="introContentText">
						こんにちは！このかわいい白いポメラニアンの名前はユキ（雪）です。名前の通り、彼女はふわふわの白い毛を持ち、まるで小さな雪のかたまりのようです。ユキはとても優しく、みんなの心を癒す存在です。散歩のときには、彼女の小さな足で元気に歩き、多くの人を笑顔にしています。もし可愛らしいポメラニアンに興味があれば、ぜひ彼女のストーリーをフォローしてみてください！
					</div>
					<div class="aboutButtom" @click="aboutPage">
						<div class="aboutButtomlabel">
							雪ちゃんは
						</div>
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
		height: 448px;
		padding: 48px 48px 0;
	}

	.bigLabelField {
		height: 100px;
		padding: 21px 503px;
		display: grid;            
  		place-items: center;
	}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
		color: #1C1C1C;
	}

	.shortAbout {
		display: flex;
		justify-content: space-between;
	}

	.bigAva {
		width: 300px;
		height: 300px;
		border-radius: 12px;
	}

	.introContent {
		display: flex;
		justify-content: center;
		flex-direction: column; 
		align-items: center;
		justify-content: space-between; 
	}

	.introContentText {
		font-weight: 400;
		font-size: 20px;
		line-height: 40px;
		padding-left: 40px;
	}

	.aboutButtom {
		width: 300px;
		height: 50px;
		border-radius: 16px;
		gap: 10px;
		background-color: #007AFF;
		cursor: pointer;
		display: grid;            
  		place-items: center;
	}

	.aboutButtomlabel {
		font-weight: 500;
		font-size: 24px;
	}
</style>