<script setup>
	//DATA
	const { $GetDialog, $RemoveDialog } = useNuxtApp();
	const dialogs = $GetDialog();


	//METHODS
	const close = () => {
		$RemoveDialog();
	}
	console.log(dialogs.length)
</script>

<template>
	<div>
		<div class="overlay">
			<div class="modal">
				<div class="close" @click="close">x</div>
				<div v-if="dialogs.length > 0">
					<component v-for="(dialog, index) in dialogs"
						:key="index"
						:is="dialog"			
					/>
				</div>
			</div>
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
		background-color: rgba(0, 0, 0, 0.5); 
		z-index: 1000;
		display: flex;
		align-items: center; 
		justify-content: center;
	}

	.modal {		
		width: 748px;
		height: 344px;
		border-radius: 24px;
		padding-top: 36px;
		padding-bottom: 36px;
		padding-right: 24px;
		padding-left: 24px;
		background-color: white;
		z-index: 1001;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		position: relative;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 15px;
		font-size: 24px;
		font-weight: 400;
		cursor: pointer;
	}

</style>