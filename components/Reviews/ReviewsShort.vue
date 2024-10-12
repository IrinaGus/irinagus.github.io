<script setup>
	// import Photos from './Photos.vue';
	import { useRouter } from 'vue-router';

	
	//DATA 
	const router = useRouter();
	const reviewsToShow = 2;


	//METHODS
	const reviewPage = () => {
		router.push("/reviews"); 
	};
</script>

<template>
	<div>
		<div class="reviewblock">
			<div class="label">レビュー</div>
			<Reviews :count="reviewsToShow"/>
			<div class="reviewButtom" @click="reviewPage">
				<div class="reviewButtomlabel">
					もっと見る
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.label {
		font-weight: 600;
		font-size: 48px;
	}

	.reviewButtom {
		width: 300px;
		height: 50px;
		border-radius: 16px;
		gap: 10px;
		border: 1px;
		border-color: #007AFF;
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