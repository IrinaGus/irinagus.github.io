<script setup>
	const emit = defineEmits(["loaded", "select"]);
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const { $PhotosGet } = useNuxtApp();
	const photos = $PhotosGet();

	const displayedPhotos = computed(() => {
    	return props.count ? photos.slice(0, props.count) : photos;
  	});


	//METHODS
	const init = () => {
		emit("loaded", displayedPhotos.value);
	};

	//INIT
	onMounted(() => {
		init();
	});
</script>

<template>
	<div class="photos">
		<img 
			v-for="(item, index) of displayedPhotos" 
			:key="'photo' + index" 
			:src="item.src"
			@click="emit('select', item.id)"
		/>
	</div>
</template>

<style scoped>
	.photos {
		padding: 0 80px;
		gap: 48px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-items: center;
	}
	
	img {
		height: 200px;
		width: 200px;
		border-radius: 12px;
	}
</style>