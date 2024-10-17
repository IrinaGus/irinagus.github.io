<script setup lang="ts">
	const { $GetDialog } = useNuxtApp();


	//DATA
	const components = $GetDialog();
</script>

<template>
	<div>
		<Header />
		<NuxtPage />
		<Footer />
		<div v-if="components.length > 0">
			<Dialog />
		</div>
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

	body {
		font-family: 'Inter', sans-serif;
		width: 100%;
		/* padding: 48px; */
	}
</style>
