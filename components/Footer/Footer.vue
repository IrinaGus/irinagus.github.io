<template>
	<div class="footerContainer">
		<div class="line"></div>
		<div class="label">
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
		display: grid;            
  		place-items: center;
		box-sizing: border-box;
	}

	.line {
		height: 1px; 
		background-color: #007AFF; 
		width: 100%;
	}

	.icons {
		display: flex;
		justify-content: space-between;
		gap: 16px;
	}


	@media (max-width: 700px) {
		.footerContainer {
			height: 50px;
			padding: 30px 12px;
		}

		.label {
			font-size: 9px;
			font-weight: 300;
		}

		img {
			width: 10px;
			height: 10px;
			opacity: 50%;
		}
	}

	@media (min-width: 700.01px) {
		.footerContainer {
			height: 200px;
			padding: 64px 48px;
		}

		.label {
			font-size: 16px;
			font-weight: 500;
		}

		img {
			width: 24px;
			height: 24px;
			opacity: 50%;
		}
	}
</style>