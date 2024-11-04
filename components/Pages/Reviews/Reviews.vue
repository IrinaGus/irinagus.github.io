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
			<div class="huge-weight">
				レビュー
			</div>
			<div class="addReview" @click="add">+新しい</div>
		</div>
		<Reviews :count="reviewsToShow"/>
	</div>
</template>

<style scoped>
	.reviewsPage {
		padding: 64px 48px 0;
	}

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
		right: 340px;
		color: #007AFF;
		cursor: pointer;
	}
</style>