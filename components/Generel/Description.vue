<template>
  <div class="description" :class="{'description-mini': !withoutPoint}">
    <div class="description__title" :class="{'light-text': !lightMod}">
      {{ title }} <p v-if="withoutPoint" class="red-point"></p>
    </div>

    <p
      v-if="preTitle.state"
      class="description__pre-title"
      :class="{'light-text': !lightMod}"
    >
      {{ preTitle.text }}
    </p>

    <p class="description__text" :class="{'light-text': !lightMod}">
      {{ text }}
    </p>

    <div class="navigation-btn">
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

  .description__title {
    font-family: $fontMontserrat;
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

  .description__pre-title {
    font-weight: bold;
    font-size: 22px;
    line-height: 36px;
    padding-bottom: 20px;
  }

  .description__text {
    width: 100%;
    padding-bottom: 48px;
  }

  .light-text {
    color: $color-white-1; 
  }
}

.description-mini {
   max-width: 425px;
}

@media (max-width: $breakpointMedium) {
  .description {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;

    .description__title {
      font-size: 28px;
      line-height: 32px;
      padding-bottom: 16px;
      white-space: normal;

      .red-point {
        display: none;
      }
    }

    .description__pre-title {
      font-size: 20px;
      padding-bottom: 12px;
    }

    .description__text {
      padding-bottom: 16px;
    }

    .navigation-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .description-mini {
    max-width: none;
  }
}
</style>