<script setup>
	//DATA
	const { $GetDialog } = useNuxtApp();
	const dialogs = $GetDialog();
</script>

<template>
	<div v-if="dialogs.length > 0" class="overlay">
		<div class="modal">
			<component v-for="(dialog, index) in dialogs"
				:key="index"
				:is="dialog"			
			/>
		</div>
	</div>	
</template>


<style scoped>

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color:rgba(28, 28, 28, 0.7); 
		z-index: 1000;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	.modal {		
		background-color: white;
		z-index: 1001;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 700px) {
		.modal {
			width: 100%;
			border-radius: 6px;
		}
	}

	@media (min-width: 700.01px) {
		.modal {
			width: 748px;
			border-radius: 24px;
		}
	}
</style>