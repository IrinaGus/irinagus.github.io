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
			<div class="huge-weight">レビュー</div>
		</div>
		<Reviews :count="reviewsToShow"/>
		<div class="white" @click="reviewPage">
			もっと見る
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
		height: 100px;
		padding: 21px 503px;
		box-sizing: border-box;
	}
</style>