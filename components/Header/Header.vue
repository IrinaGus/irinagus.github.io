<script setup>
	const menu = () => {
		const MiniLabelElements = document.getElementsByClassName("miniLabel");
		const Links = document.getElementsByClassName("linksBlock");
		for (let element of MiniLabelElements) {
			if (element.style.display == "none") {
				element.style.display = "flex";
				for (let link of Links) {
					link.style.display = "none";
				}
			}
			else {
				element.style.display = "none";
				for (let link of Links) {
					link.style.display = "flex";
				}
			}
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
		<div class="miniLabel">
			<img src="@/assets/Yukino.jpg" alt="photo" class="miniAva" />
			<div class="middleWeight"> 雪ちゃんのウェブサイト</div>
		</div>
		<div class="linksBlock">
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

		.linksBlock {
			display: none;
			gap: 20px;
			align-items: center;
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

		.linksBlock {
			gap: 40px;
		}

		.sandwich {
			display: none;
		}
	}
</style>