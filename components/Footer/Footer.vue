<script setup>
	import tg from '@/assets/icons/tg.svg';
	import cat from '@/assets/icons/cat.svg';
	import vk from '@/assets/icons/vk.svg';
</script>

<template>
	<div>
		<div class="footerContainer">
			<div style="height: 1px; background-color: black; width: 100%;"></div>
			<div class="foolLabel">
				連絡先
			</div>
			<div class="icons">
				<img :src='tg' alt="photo"/>
				<img :src='cat' alt="photo"/>
				<img :src='vk' alt="photo"/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.footerContainer {
		height: 202px;
		padding-top: 64px;
		padding-bottom: 64px;
		padding-left: 48px;
		padding-right: 48px;
		background-color: lightyellow;
		display: grid;            
  		place-items: center;
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