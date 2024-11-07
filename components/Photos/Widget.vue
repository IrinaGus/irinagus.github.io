<script setup>
	//DATA 
	const router = useRouter();
	const photosToShow = 4;


	//METHODS
	const photoPage = () => {
		router.push("/photos"); 
	};

	const selectPhoto = (id) => {
		console.log('from widget', id)
		router.push({name: "photos", query: {id}})	
	};
</script>

<template>
	<div class="photoblock">
		<div class="labelfield">
			<div class="huge-weight">写真</div>
		</div>
		<Photos :count="photosToShow" @select="selectPhoto"/>
		<div class="white" @click="photoPage">
			もっと見る
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
		height: 100px;
		padding: 21px 503px;
		box-sizing: border-box;
	}

	@media (max-width: 360px) {
		.photoblock {
			width: 100%;
			padding: 44px 28px 0 28px;
			display: grid;            
  			place-items: center;
		}
	}
</style>