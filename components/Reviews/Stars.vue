<script setup>
	const props = defineProps({
  		star: Number, 
	});

	//DATA
	const WholeStars = Math.floor(props.star);
	const hasHalfStar = computed(() => props.star % 1 !== 0);
</script>

<template>
	<div class="star-rating">
		<span v-for="index in WholeStars"
			:key="index"
			class="star">
            &#9733;
        </span>
		<span v-if="hasHalfStar" class="star half">&#9733;</span>
	</div>
</template>

<style scoped>
	.star-rating {
		display: flex;
		cursor: pointer;
	}

	.star {
		font-size: 2rem;
		color: #FAE100;
	}

	.star.half {
		background: linear-gradient(90deg, #FAE100 50%, #ddd 50%);
		background-clip: text;
		color: transparent;
	}
</style>