<script setup>
	import { onMounted } from 'vue';
	const props = defineProps({
  		star: Number, 
		newReview: {
			type: Object,
			required: true,
		}, 
		defaultColor: {
			type: String,
			default: '#FAE100'
		},
	});
	const emit = defineEmits(['selectStars']);

	//METHODS
	onMounted(() => {
		document.querySelectorAll('.star-rating .star').forEach((star, index, stars) => {
			star.addEventListener('click', () => {
				stars.forEach((s) => s.classList.remove('selected'));
				
				for (let i = stars.length - 1; i >= index; i--) {
					stars[i].classList.add('selected');
				}

				emit('selectStars', star.getAttribute('data-value'));
			});
		});
	});
</script>

<template>
	<div class="star-rating">
		<span class="star"
            v-for="value in props.star"
            :data-value="props.star - value + 1">
            &#9733;
        </span>
	</div>
</template>

<style scoped>
	.star-rating {
		display: flex;
		cursor: pointer;
	}

	.star {
		font-size: 2rem;
		color: #fdf5c6;
		transition: color 0.2s;
		text-shadow: 0 0 1px #FAE100,
					0 0 2px #FAE100,
					0 0 3px #FAE100;
	}

	.star.selected {
		color: #FAE100;
	}

	.star:hover,
	.star:hover ~ .star {
		color: #FAE100;
	}
</style>