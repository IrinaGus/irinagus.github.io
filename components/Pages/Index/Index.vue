<script setup>
	//DATA
	const router = useRouter();
</script>

<template>
	<div>
		<div class="intro">
			<div class="bigLabelField">
				<div class="hugeWeight">雪ちゃん</div>
			</div>
			<div class="shortAbout">
				<img src="@/assets/Yukino.jpg" alt="photo" class="bigAva" />
				<div class="introContent">
					<div class="middleSlim">
						こんにちは！このかわいい白いポメラニアンの名前はユキ（雪）です。名前の通り、彼女はふわふわの白い毛を持ち、まるで小さな雪のかたまりのようです。ユキはとても優しく、みんなの心を癒す存在です。散歩のときには、彼女の小さな足で元気に歩き、多くの人を笑顔にしています。もし可愛らしいポメラニアンに興味があれば、ぜひ彼女のストーリーをフォローしてみてください！
					</div>
					<NuxtLink to="/about" class="blue">雪ちゃんは</NuxtLink>
				</div>
			</div>
		</div>
		<PhotosWidget />
		<ReviewsWidget />
	</div>
</template>


<style scoped>
	.bigLabelField {
		display: flex;
		justify-content: center;
	}

	.shortAbout {
		display: flex;
	}

	.bigAva {
		border-radius: 12px;
	}

	.introContent {
		display: flex;
		flex-direction: column; 
		align-items: center;
		justify-content: space-between; 
	}

	@media (max-width: 700px) {
		.intro {
			padding: 14px 14px 0;
		}

		.bigLabelField {
			height: 60px;
		}

		.shortAbout {
			flex-wrap: wrap;
			justify-content: center;
		}

		.bigAva {
			width: 200px;
			height: 200px;
		}

		.introContent {
			padding-left: 10px;
		}
	}

	@media (min-width: 700.01px) {
		.intro {
			padding: 48px 48px 0;
		}

		.bigLabelField {
			height: 100px;
		}

		.introContent {
			padding-left: 40px;
		}

		.bigAva {
			width: 300px;
			height: 300px;
		}
	}
</style>