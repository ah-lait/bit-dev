<template>
  <div class="container">
    <Layout5050>
      <template #v-col-1>
        TEST
      </template>
      <template #v-col-2>
        TEST
      </template>
    </Layout5050>
  </div>
</template>

//
<script>
import Layout5050 from "../components/layouts/Layout-50-50.vue";

export default {
  components: {
    Layout5050,
  },
  data() {
    return {};
  },
};
</script>
