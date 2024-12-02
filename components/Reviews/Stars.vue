<script setup>
	const props = defineProps({
  		count: Number, 
		default: null
	});
	const emit = defineEmits(['selectStars']);


	//COMPUTEDS
	const halfStar = computed(() => props.count % 1 !== 0);
	const WholeStars = computed(() => {
  		return props.count !== null ? Math.floor(props.count) : 5;
	});


	//DATA
	const starStyles = reactive([]);
	if (props.count == null) {
		for (let i = 0; i < 5; i++) {
			starStyles.push('pale'); 
		}
	}
	else {	
		for (let i = 0; i < WholeStars.value; i++) {
			starStyles.push('bright'); 
		}
	}
	

	//METHODS
	const select = (index) => {
		for (let i = 0; i < starStyles.length; i++) {
			starStyles[i] = i < index ? 'pale' : 'bright';
		}
		emit('selectStars', 5-index);		
	}
</script>

<template>
	<div class="starRating">
		<span v-for="index in WholeStars"
			:key="index" @click="select(index-1)"
			:class="[starStyles[index - 1]]">
			&#9733;
        </span>
		<span v-if="halfStar" class="star half">&#9733;</span>
	</div>
</template>

<style scoped>
	.starRating {
		display: flex;
		flex-direction: row-reverse;
	}

	.star.half {
		font-size: 35px;
		background: linear-gradient(90deg, #FAE100 50%, #ddd 50%);
		background-clip: text;
		color: transparent;
	}

	.bright {
		font-size: 35px;
		color: #FAE100;
	}

	.pale {
		font-size: 35px;
		color: #fdf5c6;
		transition: color 0.2s;
		text-shadow: 0 0 1px #FAE100,
					0 0 2px #FAE100,
					0 0 3px #FAE100;
	}

	.pale:hover,
	.pale:hover ~ .pale {
		color: #FAE100;
	}

	@media (max-width: 700px) {
		.star.bright {
			font-size: 20px;
		}

		.star.pale {
			font-size: 20px;
		}
	}
</style>