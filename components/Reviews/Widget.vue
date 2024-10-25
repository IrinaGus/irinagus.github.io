<script setup>
	//DATA 
	const router = useRouter();
	const reviewsToShow = 2;


	//METHODS
	const reviewPage = () => {
		router.push("/reviews"); 
	};
</script>

<template>
	<div class="reviewblock">
		<div class="labelfield">
			<div class="label">レビュー</div>
		</div>
		<Reviews :count="reviewsToShow"/>
		<div class="buttomfield">
			<div class="reviewButtom" @click="reviewPage">
				<div class="reviewButtomlabel">
					もっと見る
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.reviewblock {
		padding: 64px 48px 0 48px;
		display: grid;            
  		place-items: center;
	}

	.labelfield {
		height: 58px;
		padding: 21px 503px;
		gap: 10px;
		display: grid;            
  		place-items: center;
	}

	.label {
		font-weight: 600;
		font-size: 48px;
	}

	.buttomfield {
		padding: 24px 10px 0 10px;
	}

	.reviewButtom {
		width: 300px;
		height: 50px;
		border-radius: 16px;
		gap: 10px;
		border: 1px;
		border-color: #007AFF;
		border-style: solid;
		cursor: pointer;
		display: grid;            
  		place-items: center;
	}

	.reviewButtomlabel {
		font-weight: 500;
		font-size: 20px;
		color: #007AFF;
	}
</style>