<script setup>
	import ava from '@/assets/icons/ava.svg';

	const emit = defineEmits(['uploadedAva']);
  
	//DATA
	const fileInput = ref(null); 
	const props = defineProps({
		newReview: {
			type: Object,
			required: true,
		}
	});
  

	//METHODS
	const triggerFileInput = () => {
		fileInput.value.click(); 
	};
  
	const onFileChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				emit('uploadedAva', e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};
</script>
  

<template>
	<div>
		<div @click="triggerFileInput" class="upload-area">
			<img :src="props.newReview.ava ? props.newReview.ava : ava" 
				:alt="props.newReview.ava ? 'uploadedAva' : 'dummyAva'" 
				:width="props.newReview.ava ? 100 : ''" 
				:class="{ realAva: props.newReview.ava }"/>
		</div>
		<input type="file" ref="fileInput" @change="onFileChange" 
			style="display: none;" accept="image/*" />
	</div>
</template>


<style scoped>
  	.upload-area {
		border-width: 1px;
		border-style: solid;
		border-color: #007AFF;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	@media (max-width: 700px) {
		.upload-area {
			border-radius: 60px;
			width: 40px;
			height: 40px;
		}

		.realAva {
			border-radius: 60px;
			width: 40px;
			height: 40px;
		}
	}

	@media (min-width: 700.01px) {
		.upload-area {
			border-radius: 100px;
			width: 72px;
			height: 72px;
		}

		.realAva {
			border-radius: 100px;
			width: 75px;
			height: 75px;
		}
	}
</style>
  