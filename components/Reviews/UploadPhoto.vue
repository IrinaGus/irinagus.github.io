<script setup>
	const emit = defineEmits(['uploadedPhoto']);
	const { $PhotosAdd } = useNuxtApp();


	//METHODS
	const triggerFileInput = async () => {
		try {
			const [fileHandle] = await window.showOpenFilePicker({
				types: [
					{
						description: 'Images',
						accept: {
							'image/*': ['.png', '.jpg', '.jpeg', '.gif']
						}
					}
				],
				excludeAcceptAllOption: true,
				multiple: false
			});
			const file = await fileHandle.getFile();

			const reader = new FileReader();
			reader.onload = (e) => {
				emit('uploadedPhoto', $PhotosAdd(e.target.result));
			};

			reader.readAsDataURL(file);
			
		} catch (error) {
			console.error("File selection cancelled or error occurred:", error);
		}
	};
</script>
  

<template>
	<div>
		<div @click="triggerFileInput" class="uploadArea">
			写真を追加
		</div>
	</div>
</template>


<style scoped>
  	.uploadArea {
		border-radius: 16px;
		width: 196px;
		height: 50px;
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		display: flex;
		align-items: center; 
		justify-content: center;
		font-size: 20px;
		color: #007AFF;
		font-weight: 500;
	}
</style>
  