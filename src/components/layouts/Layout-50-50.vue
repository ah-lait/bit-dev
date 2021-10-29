<template>
  <div class="row">
    <div class="col-lg-6 col-sm-12">
      <slot name="v-col-1" />
    </div>
    <div class="col-lg-6 col-sm-12">
      <slot name="v-col-2" />
    </div>
  </div>
</template>

//
<script>
export default {
  name: "Layout5050",
  data() {
    return {};
  },
};
</script>
