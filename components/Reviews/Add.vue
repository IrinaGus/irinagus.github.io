<script setup>
	//DATA
	const { $ReviewsGet, $RemoveDialog } = useNuxtApp();
	const reviews = $ReviewsGet();
	const newReview = ref({
		name: '',
		text: '',
		stars: null,
		ava: null,
		photo: null,
		photoid: null,
	});


	//METHODS
	const saveReview = () => {
		if (newReview.value.name && newReview.value.text) {
			reviews.push({ ...newReview.value });
		}
		
		newReview.value.name = ''
		newReview.value.text = ''
		

		$RemoveDialog()
	}

	const starClick = (index) => {
		newReview.value.stars = index
	}

	const reviewersAva = (ava) => {
		newReview.value.ava = ava
	}

	const reviewersPhoto = (photo, id) => {
		newReview.value.photo = photo
		newReview.value.photoid = id
	}

</script>

<template>
	<div class="field">
		<div class="labelField">
			<div class="label">レビューを書く</div> 
		</div>
		<div class="contentField">
			<div class="ava">
				<ReviewsUploadAva @uploadedAva="reviewersAva"/>
			</div>
			<div class="inputField">
				<div class="namestars">
					<input class="name" placeholder="名前" 
						v-model="newReview.name"/>
					<ReviewsStars :star="5" color="empty" 
						@selectStar="starClick"/>
				</div>
				<input class="review" placeholder="レビュー" 
						v-model="newReview.text"/>
				<div class="buttons">
					<ReviewsUploadPhoto @uploadedPhoto="reviewersPhoto" />
					<div class="save" @click="saveReview">
						<div class="saveLabel">送る</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.field {
		width: 748px;
		height: 344px;
		border-radius: 24px;
		padding-left: 24px;
		padding-right: 24px;
		padding-top: 36px;
		padding-bottom: 36px;
		position: relative;

	}

	.labelField {
		width: 700px;
		height: 36px;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	.label {
		font-size: 24px;
		font-weight: 400;
	}

	.contentField {
		display: flex;
		justify-content: space-between;
		padding-top: 24px;
		gap: 24px;
	}

	.ava {
		border-radius: 100px;
		width: 72px;
		height: 72px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	.inputField {
		width: 604px;
		height: 212px;
		gap: 12px;
	}

	.namestars {
		display: flex;
		justify-content: space-between;
	}

	.name {
		width: 300px;
		height: 46px;
		border-radius: 12px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		padding-left: 16px;
		padding-right: 16px;
	}

	.name::placeholder {
		color: #9A9A9A; 
		opacity: 1;
		font-size: 20px;
		font-weight: 400
		
	}

	.review {
		width: 550px;
		height: 92px;
		border-radius: 12px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-right: 16px;
		padding-left: 16px;
		gap: 10px;

	}

	.review::placeholder {
		color: #9A9A9A; 
		opacity: 1;
		font-size: 20px;
		font-weight: 400
		
	}

	.buttons {
		display: flex;
		justify-content: space-between;
	}

	.save {
		width: 144px;
		height: 50px;
		border-radius: 16px;
		padding-right: 48px;
		padding-left: 48px;
		gap: 10px;
		background-color: #007AFF;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	.saveLabel {
		font-size: 24px;
		font-weight: 500;
		color: #FFFFFF;
		;
	}
</style>