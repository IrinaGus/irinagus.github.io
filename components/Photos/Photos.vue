<script setup>
	const emit = defineEmits(["loaded", "select"]);
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const { $PhotosGet } = useNuxtApp();
	const photos = $PhotosGet(props.count);


	//METHODS
	const init = () => {
		emit("loaded", photos.value);
	};

	//INIT
	onMounted(() => {
		init();
	});
</script>

<template>
	<div class="photos">
		<img 
			v-for="(item, index) of photos" 
			:key="'photo' + index" 
			:src="item.src"
			@click="emit('select', item.id)"
		/>
	</div>
</template>

<style scoped>	
	img {
		height: 200px;
		width: 200px;
		border-radius: 12px;
		object-fit: cover;
	}

	@media (max-width: 700px) {
		.photos {
			gap: 28px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	@media (min-width: 700.01px) {
		.photos {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			padding: 0 80px;
			gap: 48px;
			justify-items: center;
		}
	}
</style>