<template>
  <div class="info-square">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <img src="@/assets/Description/Square.svg" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.info-square {
  width: 196px;
  height: 138px;
  position: relative;
  margin: 30px 10px;

  h2 {
    font-family: $fontManrope;
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 76px;
    color: $color-white-1;
    padding-bottom: 5px;
  }

  p {
    font-family: $fontManrope;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: $color-white-1;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>