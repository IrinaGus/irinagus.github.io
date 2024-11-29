<script setup>
	//DATA
	const photos = reactive([]);
	const refPreview = ref(null);


	//METHODS
	const fetchPhotos = (event) => {
		photos.push(...event)
	}

	const selectPhoto = (id) => {
		refPreview.value.select(id)
	}
</script>

<template>
	<div class="photoPage">
		<div class="bigLabelField">
			<div class="hugeWeight">
				写真
			</div>
		</div>
		<PagesPhotosPreview ref="refPreview" :items="photos"/>
		<div class="smallLabelField">
			<div class="hugeSlim">
				写真12枚
			</div>
		</div>
		<Photos @loaded="fetchPhotos" @select="selectPhoto" />
	</div>
</template>

<style scoped>
	.photoPage {
		padding: 64px 48px 0;
	}

	.bigLabelField {
		display: flex;
		justify-content: center;
		}

	.smallLabelField {
		display: flex;
		place-items: center;
		justify-content: center;
	}

	@media (max-width: 700px) {
		.photoPage {
			padding: 34px 15px 0;
			box-sizing: border-box;
		}

		.bigLabelField {
			height: 60px;
		}

		.smallLabelField {
			height: 80px;
			align-items: flex-end;
		}
	}

	@media (min-width: 700.01px) {
		.bigLabelField {
			height: 100px;
		}

		.smallLabelField {
			height: 148px;
		}
	}
</style>