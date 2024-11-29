<script setup>
	//DATA
	const { $AddDialog } = useNuxtApp();
	const addReview = markRaw(resolveComponent('ReviewsAdd'))
	const reviewsToShow = 100;


	//METHODS
	const add = () => {
		$AddDialog(addReview)
	};

</script>

<template>
	<div class="reviewsPage">
		<div class="bigLabelField">
			<div class="hugeWeight">
				レビュー
			</div>
			<div class="addReview" @click="add">+新しい</div>
		</div>
		<Reviews :count="reviewsToShow"/>
	</div>
</template>

<style scoped>
	.bigLabelField {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		box-sizing: border-box;
		}

	.addReview {
		position: absolute;
		color: #007AFF;
		cursor: pointer;
	}

	@media (max-width: 700px) {
		.reviewsPage {
			padding: 15px;
		}

		.addReview {
			right: 15px;
			font-size: 13px;
		}
	}

	@media (min-width: 700.01px) {
		.addReview {
			right: 340px;
		}
	}
</style>