<script setup>
	//DATA
	// const { $PhotosGet } = useNuxtApp();
	const photos = reactive([]);
	const refPreview = ref(null);
	// const lastPhoto = photos[photos.length - 1];

	const fetchPhotos = (event) => {
		photos.push(...event)
	}

	const selectPhoto = (event) => {
		refPreview.value.select(event)
	}
</script>

<template>
	<div>
		<div class="photoPage">
			<div class="bigLabelField">
				<div class="bigLabel">
					写真
				</div>
			</div>
			<div class="bigPhotoBlock">
				<PagesPhotosPreview ref="refPreview" :items="photos"/>
			</div>
			<div class="smallLabelField">
				<div class="smallLabel">
					写真12枚
				</div>
			</div>
			<div class="allPhotos">
				<Photos @loaded="fetchPhotos" @select="selectPhoto" />
			</div>
		</div>
	</div>
</template>

<style scoped>
	.photoPage {
		padding-top: 64px;
		padding-left: 48px;
		padding-right: 48px;
		background-color: lightpink;
	}

	.bigLabelField {
		height: 100px;
		padding-top: 21px;
		padding-bottom: 21px;
		padding-right: 503px;
		padding-left: 503px;
		background-color: lightsalmon;
		display: grid;            
  		place-items: center;
		}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
	}

	.bigPhotoBlock {
		padding-left: 120px;
		padding-right: 120px;
		background-color: lightblue;
	}

	.smallLabelField {
		height: 148px;
		background-color: lightcyan;
		display: grid;            
  		place-items: center;
	}

	.smallLabel {
		font-weight: 400;
		font-size: 36px;
	}

	.allPhotos {
		padding-left: 80px;
		padding-right: 80px;
		gap: 48px;
		background-color: blanchedalmond;
	}
</style>