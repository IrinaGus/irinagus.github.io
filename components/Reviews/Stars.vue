<script setup>
	import starImg from '@/assets/icons/star.svg'

	const props = defineProps({
  		star: Number,      
	});

	const roundedStars = Math.round(props.star);
</script>

<template>
	<div>
		<img
			v-for="index in roundedStars"  
			:key="'star' + index"        
			:src="starImg"              
			alt="Star"                  
			width="24"                  
			height="24"                  
		/>
	</div>
</template>