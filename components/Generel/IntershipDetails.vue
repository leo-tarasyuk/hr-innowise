<template>
  <div class="intership-description">
    <img :src="require(`@/assets/JobSearching/${img}.png`)" :alt="`${img}`"/>
    <div>
      <h2 class="intership-description__title">
        {{ title }}
      </h2>
      <p class="intership-description__text">
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

  .intership-description__title {
    font-family: $fontMontserrat;
    font-weight: bold;
    font-size: 26px;
    padding-bottom: 11px;
    color: $color-white-1;
  }

  .intership-description__text { 
    max-width: 475px;
    color: $color-white-1;
  }
}

@media (max-width: $breakpointMedium) {
  .intership-description {
    width: 90%;
    height: auto;

    img {
      width: 40px;
      height: 40px;
      padding-right: 10px;
    }

    .intership-description__title {
      font-size: 20px;
      line-height: 20px;
    }

    .intership-description__text { 
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>