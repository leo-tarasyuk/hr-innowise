<template>
  <button class="navigation-button" :class="{ 'light': light }">
    <span class="button-text">{{ text }}</span>
    <img
      class="button-img"
      src="@/assets/SearchForm/arrow-right.svg"
      alt="arrow"
    />
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.navigation-button {
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $color-grey-4;
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  padding: 0 26px;
  color: $color-white-1;
  background-color: transparent;
  transition: 0.5s;
  &:hover {
    color: $color-black-1;
    background-color: $color-white-1;
  }

  .button-text {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .button-img {
    padding-left: 11px;
  }
}

.light {
  color: $color-black-1;
  background-color: transparent;
  &:hover {
    color: $color-white-1;
    background-color: $color-black-1;
  }
}
</style>