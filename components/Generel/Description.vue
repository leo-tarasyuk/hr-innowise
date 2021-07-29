<template>
  <div class="description" :class="{'description-mini': !withoutPoint}">
    <div class="description-title" :class="{'light-text': !lightMod}">
      {{ title }} <p v-if="withoutPoint" class="red-point"></p>
    </div>

    <p
      v-if="preTitle.state"
      class="description-pre-title"
      :class="{'light-text': !lightMod}"
    >
      {{ preTitle.text }}
    </p>

    <p class="description-text" :class="{'light-text': !lightMod}">
      {{ text }}
    </p>

    <div>
      <NavigationButton :light="lightMod" :text="buttonText" />
    </div>
  </div>
</template>

<script>
import NavigationButton from './NavigationButton.vue'

export default {
  components: {
    NavigationButton
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    preTitle: {
      type: Object,
      default: () =>  {
        return {
          state: false,
          text: ''
        }
      }
    },

    text: {
      type: String,
      default: ''
    },

    buttonText: {
      type: String,
      default: ''
    },

    lightMod: {
      type: Boolean,
      default: false 
    },

    withoutPoint: {
      type: Boolean,
      default: true 
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.description {
  max-width: 543px;

  .description-title {
    font-family: $fontMontserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
    padding-bottom: 32px;
    display: flex;
    white-space: nowrap;      

    .red-point {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      margin: 5px 4px;
      background-color: $color-red-1;
    }
  }

  .description-pre-title {
    font-family: $fontManrope;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 36px;
    padding-bottom: 20px;
  }

  .description-text {
    width: 100%;
    font-family: $fontManrope;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    padding-bottom: 48px;
  }

  .light-text {
    color: $color-white-1; 
  }
}

.description-mini {
   max-width: 425px;
}
</style>