<script setup>
	//DATA
	const reviewsToShow = 3
	const { $add, $getComponents } = useNuxtApp();
	const addReview = markRaw(resolveComponent('ReviewsAdd'))


	//METHODS
	const add = () => {
		$add(addReview)
		const components = $getComponents();
		console.log(components)
	};

</script>

<template>
	<div>
		<div class="reviewsPage">
			<div class="bigLabelField">
				<div class="bigLabel">
					レビュー
				</div>
				<div class="addReview" @click="add">+新しい</div>
			</div>
			<div><Reviews :count="reviewsToShow"/></div>
		</div>
	</div>
</template>

<style scoped>
	.reviewsPage {
		padding-top: 64px;
		padding-left: 48px;
		padding-right: 48px;
		background-color: lightgreen;
	}

	.bigLabelField {
		height: 100px;
		padding-top: 21px;
		padding-bottom: 21px;
		padding-right: 503px;
		padding-left: 503px;
		background-color: lightsalmon;
		display: grid;            
  		place-items: center;
		}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
	}
</style>