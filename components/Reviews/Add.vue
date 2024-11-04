<script setup>
	//DATA
	const { $ReviewsGet, $RemoveDialog } = useNuxtApp();
	const reviews = $ReviewsGet();
	const newReview = ref({
		name: '',
		text: '',
		stars: null,
		ava: null,
		photoid: null,
	});


	//METHODS
	const saveReview = () => {
		if (newReview.value.name && newReview.value.text) {
			reviews.push({ ...newReview.value });
		}
		newReview.value.name = ''
		newReview.value.text = ''
		
		$RemoveDialog("Add")
	}
	

	const close = () => {
		$RemoveDialog("Add");
	}

</script>

<template>
	<div class="field">
		<div class="close" @click="close">x</div>
		<div class="labelField">
			<div class="big-slim">レビューを書く</div> 
		</div>
		<div class="contentField">
			<div class="ava">
				<ReviewsUploadAva @uploadedAva="newReview.ava = $event"
				:newReview="newReview"/>
			</div>
			<div class="inputField">
				<div class="namestars">
					<input v-model="newReview.name" placeholder="名前" 
						type="text" class="name" />
					<ReviewsRationSet @selectStars="newReview.stars = $event"/> 
				</div>
				<textarea v-model="newReview.text" placeholder="レビュー"
					type="text" class="review" />
				<div class="buttons">
					<ReviewsUploadPhoto @uploadedPhoto="newReview.photoid = $event" />
					<div class="blue" @click="saveReview">
						送る
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.field {
		width: 700px;
		border-radius: 24px;
		padding: 36px 24px;
		position: relative;
	}

	.labelField {	
		display: flex;
		justify-content: center;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 15px;
		font-size: 24px;
		font-weight: 400;
		cursor: pointer;
	}

	.contentField {
		display: flex;
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

	.namestars {
		display: flex;
		justify-content: space-between;
	}

	.name {
		min-width: 300px;
		min-height: 46px;
		border-radius: 12px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		padding: 0 16px;
		margin-bottom: 10px;
		font-size: 20px;
	}

	.name::placeholder {
		color: #9A9A9A; 
		opacity: 1;
		font-size: 20px;
		font-weight: 400
		
	}

	.review {
		min-width: 572px;
		min-height: 92px;
		border-radius: 12px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		padding: 5px 16px;
		gap: 10px;
		margin-bottom: 10px;
		resize: none;
		font-size: 20px;

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
		width: 48px;
		height: 50px;
		border-radius: 16px;
		padding: 0 48px;
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