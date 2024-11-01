<script setup>
	//DATA
	const { $AddDialog } = useNuxtApp();
	const addReview = markRaw(resolveComponent('ReviewsAdd'))


	//METHODS
	const add = () => {
		$AddDialog(addReview)
	};

</script>

<template>
	<div class="reviewsPage">
		<div class="bigLabelField">
			<div class="bigLabel">
				レビュー
			</div>
			<div class="addReview" @click="add">+新しい</div>
		</div>
		<div><Reviews :count="reviewsToShow"/></div>
	</div>
</template>

<style scoped>
	.reviewsPage {
		padding: 64px 48px 0;
	}

	.bigLabelField {
		height: 100px;
		padding: 21px 503px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
	}

	.addReview {
		position: absolute;
		right: 340px;
		color: #007AFF;
		cursor: pointer;
	}
</style>