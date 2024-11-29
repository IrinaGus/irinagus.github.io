<script setup>
	//DATA 
	const router = useRouter();
	const reviewsToShow = 2;


	//METHODS
	const reviewPage = () => {
		router.push("/reviews"); 
	};
</script>

<template>
	<div class="reviewblock">
		<div class="labelfield">
			<div class="hugeWeight">レビュー</div>
		</div>
		<Reviews :count="reviewsToShow"/>
		<div class="white" @click="reviewPage">
			もっと見る
		</div>
	</div>
</template>


<style scoped>
	.reviewblock {
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
		}

		.reviewblock {
			padding: 44px 6px 0 6px;
		}
	}

	@media (min-width: 700.01px) {
		.labelfield {
			height: 100px;
		}

		.reviewblock {
			padding: 64px 48px 0 48px;
		}
	}
</style>