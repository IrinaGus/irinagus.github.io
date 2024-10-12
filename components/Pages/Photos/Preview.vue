<script setup>
	const props = defineProps({
		items: Array,
	});

	//DATA
	const index = ref(0)


	//METHODS
	const select = (photo) => {
		const newIndex = props.items.findIndex(item => item === photo)
		if (newIndex === -1) return
	
		index.value = newIndex
	}

	const next = (side) => {
		if (side === 'right') {
			if (index.value < props.items.length - 1) {
				index.value++;
			} else {
				index.value = 0;
			}
		}

		if (side === 'left') {
			if (index.value > 0) {
				index.value--;
			} else {
				index.value = props.items.length - 1;
			}
		}
	}


	defineExpose({select})
</script>

<template>
	<div>
		<div class="bigField">
			<div class="arrow" @click="next('left')"><</div>
			<img :src="props.items[index]?.src" class="Photo"/>
			<div class="arrow" @click="next('right')">></div>
		</div>
	</div>
</template>

<style scoped>
	.bigField {
		  display: flex;
		  justify-content: space-between;
	}

	.Photo {
		width: 500px;
		height: 500px;
		border-radius: 12px;
	}

	.arrow {
		font-weight: 100;
		font-size: 64px;
	}
</style>