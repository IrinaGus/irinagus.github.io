<script setup>
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const router = useRouter();
	const { $ReviewsGet } = useNuxtApp();
	const reviews = $ReviewsGet();
	const displayedReviews = computed(() => {
    	return reviews.slice(0, props.count);	
  	});


	//METHODS
	const selectPhoto = (id) => {
		router.push({name: "photos", query: {id}})	
	};
	  
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
					<div>{{ item.name }}</div>
					<ReviewsStars :star="item.stars" color="fill" />
				</div>				
				<div class="text">{{ item.text }}</div>
				<img v-if="item.photo" :src="item.photo" class="photo"
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

	.ava {
		width: 72px;
		height: 72px;
		border-radius: 100px;
	}

	.review {
		width: 700px;
		display: flex;
		justify-content: space-between;
	}

	.header {
		display: flex;
		justify-content: space-between;
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