<script setup>
	import fillstar from '@/assets/icons/star.svg'
	import emptystar from '@/assets/icons/emptystar.svg'

	const props = defineProps({
  		star: Number, 
		color: String 
	});
	const emit = defineEmits(['selectStar']);


	//DATA
	const roundedStars = Math.round(props.star);
	const hoveredStar = ref(null);
	const selectedStar = ref(null);


	//METHODS
	const mouseUnder = (index) => {
		hoveredStar.value = index; 
	}

	const mouseLeave = () => {
		hoveredStar.value = null;
	};

	const getStarImg = (index) => {
		if ((hoveredStar.value !== null && index <= hoveredStar.value)
			|| (selectedStar.value !== null && index <= selectedStar.value) 
			|| (props.color == 'fill')
		) {
			return fillstar;
		} else {
			return emptystar;
		}
	};

	const selectStar = (index) => {
		emit('selectStar', index);
		selectedStar.value = index;
		console.log(selectedStar.value) 
	};
</script>

<template>
	<div @mouseleave="mouseLeave">
		<img
			v-for="index in roundedStars"  
			:key="'star' + index"        
			:src="getStarImg(index - 1)"              
			alt="Star"                  
			width="24"                  
			height="24"  
			@mouseenter="() => mouseUnder(index - 1)"   
			@click="selectStar(index - 1)"           
		/>
	</div>
</template>