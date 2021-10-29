<template>
  <div class="container">
    <div style="margin-left: 50px;">
      <LoaderPulse class="spacing" />
      <LoaderStretch class="spacing" />
    </div>
  </div>
</template>

<script>
import LoaderPulse from "../components/loader/loaderPulse.vue";
import LoaderStretch from "@bit/lait.vue-components.loaders.loader-stretch";

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    LoaderPulse,
    LoaderStretch,
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

.spacing {
  margin-top: 50px;
  margin-bottom: 50px;
}

.bit-dot-stretching {
  --bit-stretch-scale-1: 0.4;
  --bit-stretch-scale-2: 0.2;
}
</style>
