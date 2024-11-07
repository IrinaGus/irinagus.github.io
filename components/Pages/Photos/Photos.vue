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
			<div class="huge-weight">
				写真
			</div>
		</div>
		<PagesPhotosPreview ref="refPreview" :items="photos"/>
		<div class="smallLabelField">
			<div class="huge-slim">
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
		height: 100px;
		padding: 21px 503px;
  		place-items: center;
		box-sizing: border-box;
		}


	.bigPhotoBlock {
		padding: 0 120px;
	}

	.smallLabelField {
		height: 148px;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	@media (max-width: 700px) {
		.photoPage {
			padding: 34px 28px 0;
			box-sizing: border-box;
		}

		.bigLabelField {
			height: 70px;
			padding: 21px 150px;
			place-items: center;
			box-sizing: border-box;
		}
	}
</style>