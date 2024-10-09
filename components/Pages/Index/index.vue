<script setup>
	import photoSrc from '@/assets/Yukino.jpg';
	import Photo from '~/components/Photo/Photo.vue';
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
					<div class="aboutButtom">
						<router-link to="/about">
							雪ちゃんは
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="photoBlock">
			<Photo />
		</div>
	</div>
</template>

<style scoped>
	.intro {
		width: 1165px;
		height: 448px;
		padding-top: 48px;
		padding-left: 48px;
		padding-right: 48px;
		background-color: aquamarine;
	}

	.bigLabelField {
		width: 1040;
		height: 100px;
		padding-top: 21px;
		padding-bottom: 21px;
		padding-left: 503px;
		padding-right: 503px;
		background-color: bisque;
	}

	.bigLabel {
		width: 240px;
		height: 58px;
		font-weight: 600;
		font-size: 48px;
		line-height: 58.09px;
	}

.shortAbout {
	width: 100%;
	max-width: 160px;
	height: 100%;
	max-height: 100px;
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
	width: 100%;
	max-width: 160px;
	height: 100%;
	max-height: 100px;
}

.introContentText {
	width: 836px;
	height: 200px;
	font-weight: 400;
	font-size: 20px;
	line-height: 40px;
}

.aboutButtom {
	width: 300px;
	height: 50px;
	border-radius: 16px;
	gap: 10px;
	background-color: #007AFF;
}
</style>