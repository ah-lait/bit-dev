<template>
  <li class="bit-checkmark-item">
    <div class="bit-checkmark-item__icon">
      <slot name="checkmark-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" class="bit-checkmark-item__icon-svg">
          <path
            fill="#37805F"
            d="M22.5,45 C10.0937109,45 0,34.9062891 0,22.5 C0,10.0937109 10.0937109,0 22.5,0 C34.9062891,0 45,10.0937109 45,22.5 C45,34.9062891 34.9062891,45 22.5,45 Z M22.5,2.8125 C11.6441016,2.8125 2.8125,11.6441016 2.8125,22.5 C2.8125,33.3558984 11.6441016,42.1875 22.5,42.1875 C33.3558984,42.1875 42.1875,33.3558984 42.1875,22.5 C42.1875,11.6441016 33.3558984,2.8125 22.5,2.8125 Z M19.2754688,30.5254688 L33.3379688,16.4629688 C33.8874609,15.9134766 33.8874609,15.0236719 33.3379688,14.4745313 C32.7884766,13.9253906 31.8986719,13.9250391 31.3495312,14.4745313 L18.28125,27.5428125 L13.6504688,22.9120312 C13.1009766,22.3625391 12.2111719,22.3625391 11.6620313,22.9120312 C11.1128906,23.4615234 11.1125391,24.3513281 11.6620313,24.9004688 L17.2870312,30.5254688 C17.5616016,30.8000391 17.9216016,30.9375 18.28125,30.9375 C18.6408984,30.9375 19.0008984,30.8000391 19.2754688,30.5254688 Z"
          ></path>
        </svg>
      </slot>
    </div>
    <div class="bit-checkmark-item__text">
      <slot name="checkmark-text"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "CheckmarkItem",
};
</script>

<style lang="scss">
$icon-size: var(--bit-checkmark-item-size, 25px);
$icon-space: var(--bit-checkmark-item-icon-space, 15px);
$item-spacing: var(--bit-checkmark-item-spacing, 25px);

.bit-checkmark-item {
  display: flex;
  align-items: center;
  margin-bottom: $item-spacing;

  &__icon {
    margin-right: $icon-space;
    height: $icon-size;
    width: $icon-size;
  }

  &__icon-svg {
    height: $icon-size;
    width: $icon-size;
  }
}
</style>
