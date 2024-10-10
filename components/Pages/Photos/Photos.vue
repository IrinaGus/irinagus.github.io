<script setup>
	const { $nuxt } = useNuxtApp();
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
				a big photo will be here
			</div>
			<div class="allPhotos">
				photos will be here
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

	.allPhotos {
		padding-left: 80px;
		padding-right: 80px;
		gap: 48px;
		background-color: blanchedalmond;
	}
</style>