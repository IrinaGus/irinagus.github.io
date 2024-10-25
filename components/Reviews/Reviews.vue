<script setup>
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const router = useRouter();
	const { $ReviewsGet, $PhotosGet } = useNuxtApp();
	const reviews = $ReviewsGet();
	const photos = $PhotosGet();


	//METHODS
	const selectPhoto = (id) => {
		router.push({name: "photos", query: {id}})	
	};

	const displayPhoto = (photoid) => {
		const photo = photos.find(p => p.id === photoid);
		return photo ? photo.src : null;
	};
	  

	//COMPUTEDS
	const displayedReviews = computed(() => {
		return props.count ? reviews.slice(0, props.count) : reviews;
  	});
</script>

<template>
	<div class="bigField">
		<div
			v-for="(item, index) of displayedReviews" 
			:key="'review' + index"
			class="review">
			<img :src="item.ava" class="ava">
			<div>
				<div class="header">
					<div class="name">{{ item.name }}</div>
					<ReviewsStars :star="item.stars" color="fill" />
				</div>				
				<div class="text">{{ item.text }}</div>
				<img v-if="displayPhoto(item.photoid)" :src="displayPhoto(item.photoid)" class="photo"
					@click="selectPhoto(item.photoid)">
			</div>
		</div> 
	</div>
</template>


<style scoped>
	.bigField {
		display: grid;            
  		place-items: center;
	}

	.review {
		width: 700px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 24px;
	}

	.ava {
		width: 72px;
		height: 72px;
		border-radius: 100px;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.name {
		font-size: 24px;
		font-weight: 400;
	}

	.text {
		width: 604px;
		font-weight: 400;
		font-size: 12px;
	}

	.photo {
		border-radius: 12px;
		width: 100px;
		height: 100px;
	}
</style>