<template>
  <div class="bit-dot-stretching" role="alertdialog" aria-busy="true" aria-live="assertive"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
/**
 * ==============================================
 * Dot Stretching
 * ==============================================
 */

// var(--bit-pulse-width, 10px);
// var(--bit-pulse-height, 10px);
// var(--bit-pulse-br, 5px);
// var(--bit-pulse-bg-color, #376570);
// var(--bit-pulse-color, #376570);
// var(--bit-stretch-scale-1, 0.8)
// var(--bit-stretch-scale-2, 0.8)

.bit-dot-stretch {
  width: var(--bit-stretch-width, 10px);
  height: var(--bit-stretch-height, 10px);
  border-radius: var(--bit-stretch-br, 5px);
  background-color: var(--bit-stretch-bg-color, #376570);
  color: var(--bit-stretch-color, #376570);
}

.bit-dot-stretching {
  position: relative;

  @extend .bit-dot-stretch;

  transform: scale(1.25, 1.25);
  animation: dot-stretching 2s infinite ease-in;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    @extend .bit-dot-stretch;

    animation: dot-stretching-before 2s infinite ease-in;
  }

  &::after {
    @extend .bit-dot-stretch;

    animation: dot-stretching-after 2s infinite ease-in;
  }
}

@keyframes dot-stretching {
  0% {
    transform: scale(1.25, 1.25);
  }

  50%,
  60% {
    transform: scale(var(--bit-stretch-scale-1, 0.8), var(--bit-stretch-scale-1, 0.8));
  }

  100% {
    transform: scale(1.25, 1.25);
  }
}

@keyframes dot-stretching-before {
  0% {
    transform: translate(0) scale(var(--bit-stretch-scale-2, 0.7), var(--bit-stretch-scale-2, 0.7));
  }

  50%,
  60% {
    transform: translate(-20px) scale(1, 1);
  }

  100% {
    transform: translate(0) scale(var(--bit-stretch-scale-2, 0.7), var(--bit-stretch-scale-2, 0.7));
  }
}

@keyframes dot-stretching-after {
  0% {
    transform: translate(0) scale(var(--bit-stretch-scale-2, 0.7), var(--bit-stretch-scale-2, 0.7));
  }

  50%,
  60% {
    transform: translate(20px) scale(1, 1);
  }

  100% {
    transform: translate(0) scale(var(--bit-stretch-scale-2, 0.7), var(--bit-stretch-scale-2, 0.7));
  }
}
</style>
