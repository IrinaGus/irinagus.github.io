<script setup>
	const emit = defineEmits(["loaded", "select"]);
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const { $PhotosGet } = useNuxtApp();
	const photos = $PhotosGet();

	const displayedPhotos = computed(() => {
    	return photos.slice(0, props.count);
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
	<div>
		<img 
			v-for="(item, index) of displayedPhotos" 
			:key="'photo' + index" 
			:src="item.src"
			@click="emit('select', item.id)"
		/>
	</div>
</template>