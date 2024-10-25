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
</template>

<style scoped>
	.photoPage {
		padding: 64px 48px 0;
	}

	.bigLabelField {
		height: 100px;
		padding: 21px 503px;
		display: grid;            
  		place-items: center;
		}

	.bigLabel {
		font-weight: 600;
		font-size: 48px;
		color: #1C1C1C;
	}

	.bigPhotoBlock {
		padding: 0 120px;
	}

	.smallLabelField {
		height: 148px;
		display: grid;            
  		place-items: center;
	}

	.smallLabel {
		font-weight: 400;
		font-size: 36px;
	}

	.allPhotos {
		padding: 0 80px;
		gap: 48px;
	}
</style>