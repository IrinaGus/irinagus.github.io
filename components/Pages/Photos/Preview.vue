<script setup>
	const props = defineProps({
		items: Array,
	});
	

	//DATA
	const router = useRouter()
	const route = useRoute()
	const index = ref(null)


	//METHODS
	const init = () => {		
		if (props.items.length) {
			if (route.query.id) {
				select(route.query.id)
			} else {
				index.value = 0
			}
		} 
	}

	const select = (id) => {
		const newIndex = props.items.findIndex(item => item.id === id)
		if (newIndex === -1) return	
		index.value = newIndex
	}

	const arrow = (side) => {
		if (side === 'left') {
			if (index.value < props.items.length - 1) {
				index.value++;
			} else {
				index.value = 0;
			}
		}

		if (side === 'right') {
			if (index.value > 0) {
				index.value--;
			} else {
				index.value = props.items.length - 1;
			}
		}
	}

	const updateURL = () => {
		router.push({query: {id: props.items[index.value].id}})
	}


	watch(() => props.items, init, {deep: true})
	watch(index, updateURL)
	defineExpose({select})
</script>

<template>
	<div class="bigField">
		<div class="arrow" @click="arrow('left')"><</div>
		<img :src="props.items[index]?.src" class="Photo"/>
		<div class="arrow" @click="arrow('right')">></div>
	</div>
</template>

<style scoped>
	.bigField {
		display: flex;
		justify-content: space-between;
		place-items: center;
	}

	.Photo {
		border-radius: 12px;
		object-fit: cover;
	}

	@media (max-width: 700px) {
		.Photo {
			height: 200px;
			max-width: 80%;
		}

		.arrow {
			font-weight: 50;
			font-size: 45px;
		}
	}

	@media (min-width: 700.01px) {
		.bigField {
			padding: 0 120px;
		}

		.Photo {
			height: 500px;
		}

		.arrow {
			font-weight: 100;
			font-size: 64px;
		}
	}
</style>