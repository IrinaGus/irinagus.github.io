<script setup>
	import photoSrc from '@/assets/Yukino.jpg';
</script>

<template>
	<div>
		<div class="headerContainer">
			<div class="miniLabel">
				<img :src="photoSrc" alt="photo" class="miniAva" />
				<div class="miniName"> 雪ちゃんのウェブサイト</div>
			</div>
			<div class="linksBlock">
				<NuxtLink to="/" class="linkHome" active-class="active-link">ホーム</NuxtLink>
				<NuxtLink to="/about" class="linkAbout" active-class="active-link">ユキちゃんについて</NuxtLink>
				<NuxtLink to="/photos" class="linkPhotos" active-class="active-link">写真</NuxtLink>
				<NuxtLink to="/reviews" class="linkReviews" active-class="active-link">レビュー</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style>
.headerContainer {
	width: 100%;
	max-width: 1165px;
	height: 100%;
	max-height: 70px;
	display: flex;
	justify-content: space-between;
	padding-top: 10px;
	padding-right: 48px;
	padding-bottom: 10px;
	padding-left: 48px;
	background-color: lightcoral
}

.miniLabel {
	display: flex;
	justify-content: space-between;
}
.miniAva {
	width: 50px;
	height: 50px;
	border-radius: 100px;
}

.miniName {
	width: 220px;
	height: 24px;
	font-weight: 600;
	font-size: 20px;
	line-height: 24.2px;
	letter-spacing: -10%;
	margin: auto;
}

.linksBlock {
	width: 480px;
	/* max-width: 480px; */
	height: 24px;
	/* max-height: 24px; */
	gap: 40px;
	background-color: lightblue;
	display: flex;
	justify-content: space-between;


}

.linkHome {
	width: 60px;
	height: 24px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24.2px;
	color: #1C1C1C;
	text-align: center;
	text-decoration: none;
}

.linkHome:hover {
  color: #007AFF;
}

.linkAbout {
	width: 180px;
	height: 24px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24.2px;
	color: #1C1C1C;
	text-align: center;
	text-decoration: none;
}

.linkAbout:hover {
  color: #007AFF;
}

.linkPhotos {
	width: 40px;
	height: 24px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24.2px;
	color: #1C1C1C;
	text-align: center;
	text-decoration: none;
}

.linkPhotos:hover {
  color: #007AFF;
}

.linkReviews {
	width: 80px;
	height: 24px;
	font-weight: 500;
	font-size: 20px;
	line-height: 24.2px;
	color: #1C1C1C;
	text-align: center;
	text-decoration: none;
}

.linkReviews:hover {
  color: #007AFF;
}

.active-link {
  color: #007AFF; /* Цвет активной ссылки */
}
</style>