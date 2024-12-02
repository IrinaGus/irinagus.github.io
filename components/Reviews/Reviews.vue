<script setup>
	const props = defineProps({
  		count: Number,      
	});


	//DATA
	const router = useRouter();
	const { $ReviewsGet } = useNuxtApp();
	const reviews = $ReviewsGet(props.count);

	
	//METHODS
	const selectPhoto = (id) => {
		router.push({name: "photos", query: {id}})	
	};
</script>

<template>
	<div class="bigField">
		<div
			v-for="(item, index) of reviews" 
			:key="'review' + index"
			class="review">
			<img :src="item.ava" class="ava">
			<div class="content">
				<div class="header">
					<div class="bigSlim">{{ item.name }}</div>
					<ReviewsStars :count="item.stars"/>
				</div>				
				<div class="tiny">{{ item.text }}</div>
				<img v-if="item.src" :src="item.src" 
					@click="selectPhoto(item.photoid)" class="photo">
			</div>
		</div> 
	</div>
</template>


<style scoped>
	.bigField {
		display: grid;            
	}

	.review {
		display: flex;
		margin-bottom: 24px;
	}

	.content {
		flex-grow: 1;
	}

	.ava {
		width: 72px;
		height: 72px;
		border-radius: 100px;
		flex-shrink: 0;
		object-fit: cover;
	}

	.header {
		display: flex;
		justify-content: space-between;	
		width: 100%;
	}

	.photo {
		border-radius: 12px;
		height: 100px;
		margin-top: 12px;
		object-fit: cover;
		box-sizing: border-box;
	}

	@media (max-width: 700px) {
		.review {
			padding: 0 10px;
		}

		.content {
			padding-left: 14px;
		}

		.ava {
			width: 50px;
			height: 50px;
			border-radius: 100px;
			flex-shrink: 0;
		}
	}

	@media (min-width: 700.01px) {
		.review {
			display: flex;
			margin-bottom: 24px;
			padding: 0 290px;
		}

		.content {
			padding-left: 24px;
		}
	}
</style>