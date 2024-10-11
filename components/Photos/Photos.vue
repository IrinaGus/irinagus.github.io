<script setup>
	const emit = defineEmits(["loaded", "select"]);


	//DATA
	const { $PhotosGet } = useNuxtApp();
	const photos = reactive([...$PhotosGet()]);


	//METHODS
	const init = () => {
		emit("loaded", photos);
	};


	//INIT
	init()
</script>

<template>
	<div>
		<img 
			v-for="(item, index) of photos" 
			:key="'photo' + index" 
			:src="item.src"
			@click="emit('select', item)"
		/>
	</div>
</template>