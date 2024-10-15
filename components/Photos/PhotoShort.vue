<script setup>
	//DATA 
	const router = useRouter();
	const photosToShow = 2;
	// const refPreview = ref(null);


	//METHODS
	const photoPage = () => {
		router.push("/photos"); 
	};

	const selectPhoto = (id) => {
		router.push({name: "photos", query: {id}})	
	};
</script>

<template>
	<div>
		<div class="photoblock">
			<div class="label">写真</div>
			<Photos :count="photosToShow" @select="selectPhoto"/>
			<div class="photoButtom" @click="photoPage">
				<div class="photoButtomlabel">
					もっと見る
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.label {
		font-weight: 600;
		font-size: 48px;
	}

	.photoButtom {
		width: 300px;
		height: 50px;
		border-radius: 16px;
		gap: 10px;
		border: 1px;
		border-color: #007AFF;
		cursor: pointer;
		display: grid;            
  		place-items: center;
	}

	.photoButtomlabel {
		font-weight: 500;
		font-size: 20px;
		color: #007AFF;
	}
</style>