<template>
  <div class="intership-description">
    <img :src="require(`@/assets/JobSearching/${img}.png`)" />
    <div class="intership-description-block">
      <h2 class="intership-description-title">
        {{ title }}
      </h2>
      <p class="intership-description-text">
        {{ text }}
      </p>
    </div>
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
    },

    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.intership-description {
  width: 595px;
  height: 140px;
  display: flex;
  justify-content: space-between;

  img {
    width: 80px;
    height: 80px;
  }

  .intership-description-block {
    .intership-description-title {
      font-family: $fontMontserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 26px;
      line-height: 32px;
      padding-bottom: 11px;
      color: $color-white-1;
    }

    .intership-description-text { 
      max-width: 475px;
      font-family: $fontManrope;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      color: $color-white-1;
    }
  }
}
</style>