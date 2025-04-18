<script setup>
	//DATA
	const { $GetDialog, $RemoveDialog } = useNuxtApp();
	const dialogs = $GetDialog();

	// METHODS
	watch(
		() => dialogs.length,
		(newLength) => {
			if (newLength > 0) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	);

	const close = (item) => {
		$RemoveDialog(item);
	}
</script>

<template>
	<div v-if="dialogs.length > 0" class="overlay">
		<div v-for="(dialog, index) in dialogs" class="modal">
			<div @click="close(dialog)" class="close">x</div>
			<component :key="index" :is="dialog" :dialog="dialog" />
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
		position: relative;
	}

	.close {
		position: absolute;
		cursor: pointer;
		font-weight: 400;
		z-index: 1002;
	}

	@media (max-width: 700px) {
		.modal {
			width: 100%;
			border-radius: 6px;
		}

		.close {
			top: 5px;
			right: 40px;
			font-size: 18px;
		} 
	}

	@media (min-width: 700.01px) {
		.modal {
			width: 748px;
			border-radius: 24px;
		}

		.close {
			top: 10px;
			right: 15px;
			font-size: 24px;
		}
	}
</style>