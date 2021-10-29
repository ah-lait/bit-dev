<template>
  <div class="row">
    <div class="col-md-7 col-sm-12">
      <slot name="col-1" />
    </div>
    <div class="col-md-5 col-sm-12">
      <slot name="col-2" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout-60-40",
};
</script>
