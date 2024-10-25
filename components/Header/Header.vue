<template>
	<div class="headerContainer">
		<div class="miniLabel">
			<img src="@/assets/Yukino.jpg" alt="photo" class="miniAva" />
			<div class="miniName"> 雪ちゃんのウェブサイト</div>
		</div>
		<div class="linksBlock">
			<NuxtLink to="/" class="link" active-class="active-link">ホーム</NuxtLink>
			<NuxtLink to="/about" class="link" active-class="active-link">ユキちゃんについて</NuxtLink>
			<NuxtLink to="/photos" class="link" active-class="active-link">写真</NuxtLink>
			<NuxtLink to="/reviews" class="link" active-class="active-link">レビュー</NuxtLink>
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
		width: 290px;
		height: 50px;
		gap: 20px;
		display: flex;
		justify-content: space-between;
	}
	.miniAva {
		width: 50px;
		height: 50px;
		border-radius: 100px;
	}

	.miniName {
		font-weight: 600;
		font-size: 20px;
		letter-spacing: -10%;
		margin: auto;
	}

	.linksBlock {
		width: 480px;
		height: 24px;
		gap: 40px;
		display: flex;
		justify-content: space-between;
		place-items: center;
	}

	.link {
		font-weight: 500;
		font-size: 20px;
		color: #1C1C1C;
		text-align: center;
		text-decoration: none;
	}

	.link:hover {
		color: #007AFF;
	}

	.active-link {
		color: #007AFF;
	}
</style>