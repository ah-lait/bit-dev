<template>
	<div class="fontpage">
		<h1 class="frontpage__title">LAIT - bitdev component collection, 2021®</h1>
    <h2 class="frontpage__body">Workspace repository</h2>
	</div>
</template>

<script>
export default {
	name: "Frontpage",
};
</script>

<style style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.frontpage {
	&__title {
		font-family: "Roboto", sans-serif;
		text-decoration: none;
		color: black;
	}

  &__body {
		font-family: "Roboto", sans-serif;
    text-decoration: underline;
  }
}
</style>