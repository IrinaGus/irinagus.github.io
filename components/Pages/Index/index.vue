<script setup>
	import photoSrc from '@/assets/Yukino.jpg';
	import { useRouter } from 'vue-router';
	import ReviewsShort from '~/components/Reviews/ReviewsShort.vue';

	const router = useRouter();
	const reviewsToShow = 2;

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
				<img :src="photoSrc" alt="photo" class="bigAva" />
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
		<div class="photoBlock">
			<PhotosPhotoShort />
		</div>
		<div class="reviewBlock">
			<ReviewsShort />
		</div>
	</div>
</template>

<style scoped>
	.intro {
		height: 448px;
		padding-top: 48px;
		padding-left: 48px;
		padding-right: 48px;
		background-color: aquamarine;
		
	}

	.bigLabelField {
		height: 100px;
		padding-top: 21px;
		padding-bottom: 21px;
		padding-left: 503px;
		padding-right: 503px;
		background-color: bisque;
		display: grid;            
  		place-items: center;
	}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
	}

	.shortAbout {
		background-color: aqua;
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
		padding-left: 50px;
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