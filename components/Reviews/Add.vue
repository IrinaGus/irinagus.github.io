<script setup>
	//DATA
	const props = defineProps({
		dialog: Object, 
	});
	const { $RemoveDialog, $ReviewsAdd } = useNuxtApp();
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
			$ReviewsAdd(newReview.value)
			$RemoveDialog(props.dialog)
		}
		
		newReview.value.name = ''
		newReview.value.text = ''
		newReview.value.stars = null	
	}
</script>

<template>
	<div class="field">
		<div class="labelField">
			<div class="bigSlim">レビューを書く</div> 
		</div>
		<div class="contentField">
			<ReviewsUploadAva @uploadedAva="newReview.ava = $event"
			:newReview="newReview"/>
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
		position: relative;
	}

	.labelField {	
		display: flex;
		justify-content: center;
	}

	/* .close {
		position: absolute;
		cursor: pointer;
		font-weight: 400;
	} */

	.contentField {
		display: flex;
	}

	.namestars {
		display: flex;
		justify-content: space-between;
	}

	.name {
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		padding: 0 16px;
		margin-bottom: 10px;
	}

	.name::placeholder {
		color: #9A9A9A; 
		opacity: 1;
		font-weight: 400	
	}

	.review {
		min-height: 92px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		padding: 5px 16px;
		gap: 10px;
		margin-bottom: 10px;
		resize: none;
	}

	.review::placeholder {
		color: #9A9A9A; 
		opacity: 1;
		font-weight: 400	
	}

	.buttons {
		display: flex;
		justify-content: space-between;
	}

	.saveLabel {
		font-size: 24px;
		font-weight: 500;
		color: #FFFFFF;
		;
	}

	@media (max-width: 700px) {
		.field {
			width: 100%;
			padding: 16px 14px;
			position: relative;
		}

		/* .close {
			top: 5px;
			right: 40px;
			font-size: 18px;
		}  */

		.contentField {
			padding-top: 14px;
			gap: 14px;
		}

		.name {
			width: 100px;
			min-height: 40px;
			border-radius: 9px;
			font-size: 15px;
		}

		.name::placeholder {
			font-size: 15px;
		}

		.review {
			min-width: 230px;
			border-radius: 9px;
			font-size: 15px; 
		}

		.review::placeholder {
			font-size: 15px;
		}

	}

	@media (min-width: 700.01px) {
		.field {
			width: 700px;
			border-radius: 24px;
			padding: 36px 24px;
		}

		/* .close {
			top: 10px;
			right: 15px;
			font-size: 24px;
		} */

		.contentField {
			padding-top: 24px;
			gap: 24px;
		}

		.name {
			min-width: 300px;
			min-height: 46px;
			border-radius: 12px;
			font-size: 20px;

		}

		.name::placeholder {
			font-size: 20px;
		}

		.review {
			min-width: 572px;
			border-radius: 9px;
			font-size: 20px; 
		}

		.review::placeholder {
			font-size: 20px;
		}


	}
</style>