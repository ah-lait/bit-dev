<template>
  <div class="container">
    <Layout5050>
      <template #col-1>
        <div class="content"></div>
      </template>
      <template #col-2>
        <div class="content"></div>
      </template>
    </Layout5050>
    <Layout33>
      <template #col-1>
        <div class="content"></div>
      </template>
      <template #col-2>
        <div class="content"></div>
      </template>
      <template #col-3>
        <div class="content"></div>
      </template>
    </Layout33>
    <Layout7030>
      <template #col-1>
        <div class="content"></div>
      </template>
      <template #col-2>
        <div class="content"></div>
      </template>
    </Layout7030>
  </div>
</template>

//
<script>
import Layout5050 from "../components/layouts/Layout-50-50.vue";
import Layout33 from "../components/layouts/Layout-33-33-33.vue";
import Layout7030 from "../components/layouts/Layout-70-30.vue";

export default {
  components: {
    Layout5050,
    Layout33,
    Layout7030,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.content {
  background-color: blue;
  width: 100%;
  height: 350px;
  margin-bottom: 15px;
}
</style>
