<template>
  <div class="vacation">
    <div class="vacation-size">
      <a href="#"  class="vacation__position">
        <h2 class="vacation__position__name">{{ vacation }}</h2>
        <img 
          v-if="hot"
          src="@/assets/JobSearching/fire.svg"
          alt="vacation" 
        />
      </a>
      <p class="vacation-type">
        {{ type }}
      </p>
    </div>
  </div>    
</template>

<script>
export default {
  props: {
    vacation: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: ''
    },

    hot: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.vacation {
  width: 440px;
  height: 200px;
  margin: 16px;
  background: linear-gradient(98.2deg, $color-black-6 2.85%, $color-black-9 100.44%);
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  .vacation-size {
    width: 100%;
    height: 100%;
    &:hover {
      background: url('@/assets/JobSearching/vacation-background.svg');
      background-repeat: no-repeat;
      background-position-x: right;
    }
    
    .vacation__position {
      width: 100%;
      display: flex;
      position: absolute;
      bottom: 64px;
      left: 24px;
      text-decoration: none;

      .vacation__position__name {
        font-family: $fontMontserrat;
        font-weight: 800;
        font-size: 22px;
        line-height: 27px;
        color: $color-white-1;
      }

      img {
        margin: 0 0 1px 10px;
      }
    }

    .vacation-type {
      font-size: 16px;
      line-height: 24px;
      color: $color-grey-2;
      position: absolute;
      bottom: 32px;
      left: 24px;
    }
  }

  
}
</style>