<template>
	<div class="navbar">
		<router-link to="/modal">Modal</router-link>
		<router-link to="/video-modal">Video Modal</router-link>
		<router-link to="/dropdown-search-single-select">Dropdown Search Single Select</router-link>
		<router-link to="/dropdown-multy-select">Dropdown Multy Select</router-link>
		<router-link to="/accordion">Accordion</router-link>
		<router-link to="/read-more">Read More</router-link>
		<router-link to="/buttons">Buttons</router-link>
		<router-link to="/jotforms">Jotforms</router-link>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.navbar {
	font-family: "Roboto", sans-serif;
	text-decoration: none;
	color: black;
}

.navbar a {
  margin-right: 20px;
}

</style>