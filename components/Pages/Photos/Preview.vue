<script setup>
	const props = defineProps({
		items: Array,
	});

	//DATA
	const index = ref(0)

	const select = (photo) => {
		const newIndex = props.items.findIndex(item => item === photo)
		console.log(props.items)
		if (newIndex === -1) return
	
		index.value = newIndex
	}


	defineExpose({select})
</script>

<template>
	<div>
		<img :src="props.items[index]?.src" />
	</div>
</template>