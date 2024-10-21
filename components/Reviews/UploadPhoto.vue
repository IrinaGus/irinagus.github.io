<script setup>
	import ava from '@/assets/icons/ava.svg';

	const emit = defineEmits(['uploadedAva']);
  
	//DATA
	const image = ref(null);
	const fileInput = ref(null); 
  

	//METHODS
	const triggerFileInput = () => {
		fileInput.value.click(); 
	};
  
	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				image.value = e.target.result; 
				emit('uploadedAva', image.value);
			};
			reader.readAsDataURL(file);
		}
	};

	
</script>
  

<template>
	<div>
		<div @click="triggerFileInput" class="upload-area">
			<img v-if="image" :src="image" alt="uploadedAva" width="100" />
			<img v-else :src='ava' alt="dummyAva"/>
		</div>
		<input type="file" ref="fileInput" @change="onFileChange" 
			style="display: none;" accept="image/*" />
	</div>
</template>


<style scoped>
  	.upload-area {
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
</style>
  