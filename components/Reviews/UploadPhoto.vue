<script setup>
	const emit = defineEmits(['uploadedPhoto']);
	const { $PhotosAdd} = useNuxtApp();


	//DATA
	const buttonText = ref('写真を追加');
	const fileInput = ref(null);


	//METHODS
	const triggerFileInput = () => {
		fileInput.value.click();
	};

	const handleFile = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				emit('uploadedPhoto', $PhotosAdd(e.target.result));
				buttonText.value = '完了しました';
			}
			reader.readAsDataURL(file);
		}
	};
</script>
  

<template>
	<div>
		<input 
		type="file" 
		ref="fileInput" 
		style="display: none;" 
		accept="image/*" 
		@change="handleFile"
		/>
  
		<div @click="triggerFileInput" class="uploadArea">
			{{buttonText}}
		</div>
	</div>
</template>


<style scoped>
  	.uploadArea {
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		display: flex;
		align-items: center; 
		justify-content: center;
		color: #007AFF;
		font-weight: 500;
		cursor: pointer;
		transition: box-shadow 0.3s ease;
	}

	.uploadArea:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 700px) {
		.uploadArea {
			border-radius: 9px;
			width: 120px;
			height: 35px;
			font-size: 15px;
		}
	}

	@media (min-width: 700.01px) {
		.uploadArea {
			border-radius: 16px;
			width: 196px;
			height: 50px;
			font-size: 20px;
		}
	}
</style>
  