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
		display: grid;            
  		place-items: center;
	}

	.labelfield {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 700px) {
		.labelfield {
			height: 60px;
			box-sizing: border-box;
		}

		.photoblock {
			padding: 44px 28px 0 28px;
		}
	}

	@media (min-width: 700.01px) {
		.photoblock {
			padding: 64px 48px 0 48px;
		}

		.labelfield {
			height: 100px;
		}
	}
</style>