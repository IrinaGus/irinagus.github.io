<script setup>
	const emit = defineEmits(['selectStars']);


	//METHODS
	onMounted(() => {
		document.querySelectorAll('.NewRatio .NewRatioStar').forEach((NewRatioStar, index, stars) => {
			NewRatioStar.addEventListener('click', () => {

				stars.forEach((s) => s.classList.remove('selected'));
				
				for (let i = stars.length - 1; i >= index; i--) {
					stars[i].classList.add('selected');
				}
				emit('selectStars', parseInt(NewRatioStar.getAttribute('data-value')));
			});
		});
	});
</script>

<template>
	<div class="NewRatio">
		<span v-for="index in 5"
			:key="index"
			class="NewRatioStar"
			:data-value="5 - index + 1"
			>
            &#9733;
        </span>
	</div>
</template>

<style scoped>
	.NewRatio {
		display: flex;
		cursor: pointer;
	}

	.NewRatioStar {
		font-size: 2rem;
		color: #fdf5c6;
		transition: color 0.2s;
		text-shadow: 0 0 1px #FAE100,
					0 0 2px #FAE100,
					0 0 3px #FAE100;
	}

	.NewRatioStar.selected {
		color: #FAE100;
	}

	.NewRatioStar:hover,
	.NewRatioStar:hover ~ .NewRatioStar {
		color: #FAE100;
	}
</style>