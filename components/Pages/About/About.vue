<script setup>
	//DATA
	const paragraphs = [
	{ text: "ユキについて", className: "middleWeight" },
	{ text: "こんにちは！私たちは愛らしいポメラニアン、ユキ（雪）をご紹介します。ユキはその名前の通り、白くてふわふわの毛を持ち、まるで小さな雪のかたまりのような存在です。彼女は我が家に来てから、すぐに家族の中心的な存在になり、私たちの日々を明るく、幸せなものにしてくれています。", 
		className: "middleSlim" },
	{ text: "ユキの性格", className: "middleWeight" },
	{ text: "ユキはとても優しく、人懐っこい性格です。初めて会う人にもすぐに打ち解け、尻尾を振って挨拶をします。彼女は社交的で、他の犬や人ともすぐに仲良くなります。特に散歩のときは、近所の人たちに会うのが大好きで、みんなから「かわいい！」と言われると、得意げに歩き回ります。", 
		className: "middleSlim" },
	];

	const { $ReviewsGeneralRation } = useNuxtApp();
	const averageStars = $ReviewsGeneralRation();
</script>

<template>
	<div class="aboutPage">
		<div class="bigLabelField">
			<div class="hugeWeight">雪ちゃんについて</div>
			<div class="stars">
				<ReviewsStars :count=averageStars />
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
		justify-content: center;
	}

	.aboutContent {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bigAva {
		border-radius: 12px;
	}

	.aboutContentText {
		gap: 16px;
	}

	.paragraph {
		margin: 0;
	}

	@media (max-width: 700px) {
		.aboutPage {
			padding: 14px 14px 0;
		}

		.bigLabelField {
			display: grid;
        	justify-content: center;
			height: 60px;
		}

		.numberStars {
			padding-left: 6px;
			font-weight: 400;
			font-size: 10px;
		}

		.stars {
			display: flex;
			place-items: center;
			justify-content: center;
		}

		.bigAva {
			width: 200px;
			height: 200px;
		}

		.aboutContent {
			gap: 20px;
		}
	}

	@media (min-width: 700.01px) {
		.bigLabelField {
			display: flex;
			justify-content: center;
			height: 100px;
		}

		.aboutPage {
			padding: 48px 48px 0;
		}

		.stars {
			display: flex;
			justify-content: space-between;
			place-items: center;
			position: absolute;
			right: 48px;
		}

		.numberStars {
			padding-left: 16px;
			font-weight: 400;
			font-size: 20px;
		}

		.bigAva {
			width: 300px;
			height: 300px;
		}

		.aboutContent {
			gap: 48px;
		}
	}
</style>