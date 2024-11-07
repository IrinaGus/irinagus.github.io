<template>
	<div class="headerContainer">
		<div class="miniLabel">
			<img src="@/assets/Yukino.jpg" alt="photo" class="miniAva" />
			<div class="middle-weight"> 雪ちゃんのウェブサイト</div>
		</div>
		<div class="linksBlock">
			<NuxtLink to="/" class="middle-slim" active-class="active-link">ホーム</NuxtLink>
			<NuxtLink to="/about" class="middle-slim" active-class="active-link">ユキちゃんについて</NuxtLink>
			<NuxtLink to="/photos" class="middle-slim" active-class="active-link">写真</NuxtLink>
			<NuxtLink to="/reviews" class="middle-slim" active-class="active-link">レビュー</NuxtLink>
		</div>
	</div>
</template>

<style>
	.headerContainer {
		display: flex;
		justify-content: space-between;
		padding: 10px 48px;
		place-items: center;
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
		gap: 40px;
		display: flex;
		justify-content: space-between;
	}

	.link:hover {
		color: #007AFF;
	}

	.active-link {
		color: #007AFF;
	}

	@media (max-width: 700px) {
		.headerContainer {
			display: flex;
			justify-content: space-between;
			padding: 10px 10px;
			box-sizing: border-box;
		}

		.miniLabel {
			gap: 20px;
			display: flex;
			justify-content: space-between;
		}

		.linksBlock {
			gap: 10px;
			display: flex;
			justify-content: space-between;
		}
	}
</style>