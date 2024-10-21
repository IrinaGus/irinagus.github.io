<script setup>
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const { $ReviewsGet } = useNuxtApp();
	const reviews = $ReviewsGet();
	console.log('from Rev page', reviews)
	const displayedReviews = computed(() => {
    	return reviews.slice(0, props.count);	
  	});
	  
</script>

<template>
	<div class="bigField">
		<div
			v-for="(item, index) of displayedReviews" 
			:key="'review' + index"
			class="review">
			<img :src="item.ava">
			<div>
				<div class="reviewHeader">
					<div>{{ item.name }}</div>
					<ReviewsStars :star="item.stars" color="fill" />
				</div>				
				<div class="reviewText">{{ item.text }}</div>
			</div>
		</div> 
	</div>
</template>


<style scoped>
	.bigField {
		display: grid;            
  		place-items: center;
	}

	img {
		width: 72px;
		height: 72px;
		border-radius: 100px;
	}

	.review {
		width: 700px;
		display: flex;
		justify-content: space-between;
	}

	.reviewHeader {
		display: flex;
		justify-content: space-between;
	}

	.reviewText {
		width: 604px;
		font-weight: 400;
		font-size: 12px;
	}
</style>