<template>
	<div class="buttons">
    <ButtonTen />
  </div>
</template>

<script>
import ButtonTen from "../components/buttons/ButtonTen.vue";
export default {
	components: {
		ButtonTen,
	},
};
</script>

<style scoped lang="scss">

.buttons {
  display: flex;
  flex-direction: column;
}

</style>