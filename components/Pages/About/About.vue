<script setup>
	import photoSrc from '@/assets/Yukino.jpg';

	//DATA
	const paragraphs = [
	{ text: "ユキについて", className: "headerText" },
	{ text: "こんにちは！私たちは愛らしいポメラニアン、ユキ（雪）をご紹介します。ユキはその名前の通り、白くてふわふわの毛を持ち、まるで小さな雪のかたまりのような存在です。彼女は我が家に来てから、すぐに家族の中心的な存在になり、私たちの日々を明るく、幸せなものにしてくれています。", 
		className: "restText" },
	{ text: "ユキの性格", className: "headerText" },
	{ text: "ユキはとても優しく、人懐っこい性格です。初めて会う人にもすぐに打ち解け、尻尾を振って挨拶をします。彼女は社交的で、他の犬や人ともすぐに仲良くなります。特に散歩のときは、近所の人たちに会うのが大好きで、みんなから「かわいい！」と言われると、得意げに歩き回ります。", 
		className: "restText" },
	];
</script>

<template>
	<div>
		<div class="aboutPage">
			<div class="bigLabelField">
				<div class="bigLabel">雪ちゃんについて</div>
			</div>	
			<div class="aboutContent">
				<img :src="photoSrc" alt="photo" class="bigAva" />
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
		</div>
	</div>
</template>

<style scoped>
	.aboutPage {
		padding-top: 48px;
		padding-left: 48px;
		padding-right: 48px;
		background-color: lightgoldenrodyellow;
	}

	.bigLabelField {
		height: 100px;
		padding-top: 21px;
		padding-bottom: 21px;
		padding-left: 503px;
		padding-right: 503px;
		gap: 10px;
		background-color: bisque;
		display: flex;
		justify-content: center;
	}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
		line-height: 58.09px;
	}

	.aboutContent {
		gap: 48px;
		background-color: azure;
		display: flex;
		justify-content: center;
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
		background-color: lightgray;
	}

	.headerText {
		font-weight: 700;
		font-size: 20px;
		line-height: 40px;
	}

	.restText {
		font-weight: 400;
		font-size: 20px;
		line-height: 40px;
	}

	.paragraph {
		margin: 20px 0;
	}
</style>