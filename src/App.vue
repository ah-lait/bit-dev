<template>
	<div id="app">
		<Navbar />
		<div class="content-spacing">
			<RouterView />
		</div>
	</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>
<style scoped lang="scss">
.content-spacing {
	margin-top: 100px;
}
</style>
