<script setup>
	//DATA
	const linksDisplay = ref('default')
	const miniLabelDisplay = ref('default')


	//METHODS
	const menu = () => {
		if (linksDisplay.value == 'unvisible' || linksDisplay.value == 'default') {
			miniLabelDisplay.value = 'unvisible'
			linksDisplay.value = 'visible'
		}
		else {
			linksDisplay.value = 'unvisible'
			miniLabelDisplay.value = 'visible'			
		}	
	}
</script>

<template>
	<div class="headerContainer">
		<div class="sandwich" @click="menu"> 
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>
		<div :class="{'miniLabel': true, [miniLabelDisplay]: true}">
			<img src="@/assets/Yukino.jpg" alt="photo" class="miniAva" />
			<div class="middleWeight"> 雪ちゃんのウェブサイト</div>
		</div>
		<div :class="{'linksBlock': true, [linksDisplay]: true}">
			<NuxtLink to="/" class="middleSlim" active-class="activeLink">ホーム</NuxtLink>
			<NuxtLink to="/about" class="middleSlim" active-class="activeLink">ユキちゃんについて</NuxtLink>
			<NuxtLink to="/photos" class="middleSlim" active-class="activeLink">写真</NuxtLink>
			<NuxtLink to="/reviews" class="middleSlim" active-class="activeLink">レビュー</NuxtLink>
		</div>
	</div>
</template>

<style>
	.headerContainer {
		display: flex;
		box-sizing: border-box;
	}

	.miniLabel {
		gap: 20px;
		display: flex;
		justify-content: space-between;
	}

	.miniAva {
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}

	.linksBlock {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.link:hover {
		color: #007AFF;
	}

	.activeLink {
		color: #007AFF !important;
	}

	@media (max-width: 700px) {
		.headerContainer {
			padding: 10px 20px;
			flex-wrap: wrap;			
		}

		.miniLabel.unvisible,
		.linksBlock.unvisible,
		.linksBlock.default {
			display: none;
		}

		.miniLabel.visible,
		.linksBlock.visible,
		.miniLabel.default {
			display: flex;
		}

		.linksBlock {
			gap: 20px;
		}

		.sandwich {
			height: 50px;
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: space-evenly;
			margin-right: 15px;
		}

		.line {
			height: 1px; 
			background-color: #007AFF; 
			width: 20px;
		}
	}

	@media (min-width: 700.01px) {
		.headerContainer {
			justify-content: space-between;
			padding: 10px 48px;
			place-items: center;
		}

		.sandwich {
			display: none;
		}

		.linksBlock {
			gap: 40px;
		}

		.miniLabel.default,
		.linksBlock.default {
			display: flex;
		}
	}
</style>