<template>
  <div class="container">
    <div style="margin-left: 50px;">
      <LoaderPulse />
    </div>
  </div>
</template>

<script>
import LoaderPulse from "../components/loader/loaderPulse.vue";

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    LoaderPulse,
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: #4c757f;
  color: #fff;
  padding: 20px 40px;
}
</style>
