<template>
	<div class="footerContainer">
		<div class="line"></div>
		<div class="foolLabel">
			連絡先
		</div>
		<div class="icons">
			<img src='@/assets/icons/tg.svg' alt="photo"/>
			<img src='@/assets/icons/cat.svg' alt="photo"/>
			<img src='@/assets/icons/vk.svg' alt="photo"/>
		</div>
	</div>
</template>

<style scoped>
	.footerContainer {
		height: 74px;
		padding: 64px 48px;
		display: grid;            
  		place-items: center;
	}

	.line {
		height: 1px; 
		background-color: #007AFF; 
		width: 100%;
	}

	.foolLabel {
		font-size: 16px;
		font-weight: 500;
	}

	.icons {
		display: flex;
		justify-content: space-between;
		gap: 16px;
	}

	img {
		width: 24px;
		height: 24px;
		opacity: 50%;
	}
</style>