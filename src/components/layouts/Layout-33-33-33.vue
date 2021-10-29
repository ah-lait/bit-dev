<template>
  <div class="row">
    <div class="col-md-4 col-sm-12">
      <slot name="col-1" />
    </div>
    <div class="col-md-4 col-sm-12">
      <slot name="col-2" />
    </div>
    <div class="col-md-4 col-sm-12">
      <slot name="col-3" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Layout-33",
};
</script>
