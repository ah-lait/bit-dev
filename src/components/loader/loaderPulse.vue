<template>
  <div class="bit-pulse-dot" role="alertdialog" aria-busy="true" aria-live="assertive"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss">
/**
 * ==============================================
 * Dot Pulse
 * ==============================================
 */

$x1: calc(var(--bit-pulse-left-pos, 9999px) - var(--bit-pulse-dot-space, 15px));
$x2: var(--bit-pulse-left-pos, 9999px);
$x3: calc(var(--bit-pulse-left-pos, 9999px) + var(--bit-pulse-dot-space, 15px));

// var(--bit-pulse-width, 10px);
// var(--bit-pulse-height, 10px);
// var(--bit-pulse-br, 5px);
// var(--bit-pulse-bg-color, #376570);
// var(--bit-pulse-color, #376570);
// var(--bit-pulse-dot-space, 10px);
// var(--bit-pulse-left-pos, -9999px);
// var(--bit-pulse-x1, #{-var(--bit-pulse-left-pos) - var(--bit-pulse-dot-space, 10px))} );
// var(--bit-pulse-x2, #{-var(--bit-pulse-left-pos)} );
// var(--bit-pulse-x3, #{-var(--bit-pulse-left-pos, -9999px) + var(--bit-pulse-dot-space, 10px))});
// var(--bit-pulse-left-pos-neg, -9999px);

.bit-pulse-dot-size {
  width: var(--bit-pulse-width, 10px);
  height: var(--bit-pulse-height, 10px);
  border-radius: var(--bit-pulse-br, 5px);
  background-color: var(--bit-pulse-bg-color, #376570);
  color: var(--bit-pulse-color, #376570);
}

.bit-pulse-dot {
  position: relative;
  left: var(--bit-pulse-left-pos-neg, -9999px);
  box-shadow: 0 0 0 -5px;
  animation: dot-pulse 1.5s infinite linear;
  animation-delay: 0.25s;
  @extend .bit-pulse-dot-size;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;

    @extend .bit-pulse-dot-size;
  }

  &::before {
    box-shadow: $x1 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    box-shadow: $x3 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }
}

@keyframes dot-pulse-before {
  0% {
    box-shadow: $x1 0 0 -5px;
  }

  30% {
    box-shadow: $x1 0 0 2px;
  }

  60%,
  100% {
    box-shadow: $x1 0 0 -5px;
  }
}

@keyframes dot-pulse {
  0% {
    box-shadow: $x2 0 0 -5px;
  }

  30% {
    box-shadow: $x2 0 0 2px;
  }

  60%,
  100% {
    box-shadow: $x2 0 0 -5px;
  }
}

@keyframes dot-pulse-after {
  0% {
    box-shadow: $x3 0 0 -5px;
  }

  30% {
    box-shadow: $x3 0 0 2px;
  }

  60%,
  100% {
    box-shadow: $x3 0 0 -5px;
  }
}
</style>
