<template>
  <div class="development">
    <div class="development-animation">
      <button class="play">
        <img src="@/assets/Development/tringle.svg" />
      </button>

      <div class="development-radar">
        <div class="development-radar-circle"></div>
      </div>
    </div>

    <Description 
      :title="'Твой успех в Innowise'"
      :pre-title="{state: true, text: 'Ты хочешь создавать крутые технологические решения, которые изменят мир? Тогда тебе в Innowise!'}"
      :text="'Вместе мы не просто разрабатываем инновационные решения, но и создаем собственную цифровую реальность. С нами ты быстро вольешься в коллектив, обучишься новому, станешь лидером на выбранных проектах и приблизишься на несколько ступенек ближе к своей мечте!'"
      :button-text="'Развитие в компании'"
    />
  </div>
</template>

<script>
import Description from '../Generel/Description.vue';

export default {
  components: {
    Description
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.development {
  width: 100%;
  height: 905px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('@/assets/Development/background.svg');
  background-size: cover;
  background-repeat: no-repeat;

  .development-animation {
    max-width: 726px;
    min-width: 726px;
    height: 726px;
    position: relative;
    @media (max-width: $breakpointExtraLarge) {
      display: none;
    } 

    .development-radar {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: $color-grey-3;
      animation: radar 3s linear infinite;
      @keyframes radar {
        0% {
            transform: scale(.3,.3);
            opacity: 1
        }
        100%  {
            transform: scale(1,1);
            opacity: 0
        }
      }

      .development-radar-circle {
        width: 43%;
        height: 43%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: $color-grey-3;
      }
    }
    
    .play {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background: $color-grey-3;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: calc(50% - 50px);
      left: calc(50% - 50px);
      z-index: 2;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
