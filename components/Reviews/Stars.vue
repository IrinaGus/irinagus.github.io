<script setup>
	const props = defineProps({
  		count: Number, 
	});

	//DATA
	const WholeStars = Math.floor(props.count);

	//COMPUTEDS
	const hasHalfStar = computed(() => props.count % 1 !== 0);
</script>

<template>
	<div class="starRating">
		<span v-for="index in WholeStars"
			:key="index"
			class="star">
			&#9733;
        </span>
		<span v-if="hasHalfStar" class="star half">&#9733;</span>
	</div>
</template>

<style scoped>
	.starRating {
		display: flex;
	}

	.star {
		font-size: 35px;
		color: #FAE100;
	}

	.star.half {
		background: linear-gradient(90deg, #FAE100 50%, #ddd 50%);
		background-clip: text;
		color: transparent;
	}

	@media (max-width: 700px) {
		.star {
			font-size: 20px;
		}
	}
</style>