<template>
  <div class="project-block">
    <img
      class="project-image"
      :src="require(`@/assets/Projects/${img}.png`)"
      :alt="`project ${img}`"
    />
    <h2 class="project-title">
      {{ title }}
    </h2>
    <p class="project-text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.project-block {
  .project-image {
    width: 100%;
    height: auto;
    padding-bottom: 40px;
  }

  .project-title {
    font-family: $fontMontserrat;
    font-weight: 800;
    font-size: 26px;
    color: $color-black-2;
    padding-bottom: 16px;
  }

  .project-text {
    max-width: 656px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: $color-black-2;
  }
}
</style>