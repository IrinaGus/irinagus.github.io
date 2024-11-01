<script setup>
	//DATA 
	const router = useRouter();
	const photosToShow = 4;


	//METHODS
	const photoPage = () => {
		router.push("/photos"); 
	};

	const selectPhoto = (id) => {
		router.push({name: "photos", query: {id}})	
	};
</script>

<template>
	<div class="photoblock">
		<div class="labelfield">
			<div class="label">写真</div>
		</div>
		<Photos :count="photosToShow" @select="selectPhoto"/>
		<div class="buttomfield">
			<div class="photoButtom" @click="photoPage">
				<div class="photoButtomlabel">
					もっと見る
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.photoblock {
		padding: 64px 48px 0 48px;
		display: grid;            
  		place-items: center;
	}

	.labelfield {
		height: 58px;
		padding: 21px 503px;
		gap: 10px;
		display: grid;            
  		place-items: center;
	}

	.label {
		font-weight: 600;
		font-size: 48px;
	}

	.buttomfield {
		padding: 24px 10px 0 10px;
	}

	.photoButtom {
		width: 300px;
		height: 50px;
		border-radius: 16px;
		gap: 10px;
		border: 1px;
		border-color: #007AFF;
		border-style: solid;
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