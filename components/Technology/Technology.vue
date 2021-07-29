<template>
  <div class="technology">
    <div class="technology-size">
      <Description 
        :title="'Технологии'"
        :pre-title="{state: false}"
        :text="'Мы работаем с широким спектром технологий. Наш основной стек: Java, JavaScript, .NET/С#, Python, PHP, Kotlin, Objective C/Swift и Unity. Ты сможешь попробовать себя в 20+ доменах, включая Artificial Intelligence, Data Science, Machine Learning, AR & VR.'"
        :button-text="'Подробнее о технологиях'"
        :light-mod="true"
      />

      <div class="technology-images">
        <img class="images" src="@/assets/Technology/background.svg" />
      </div>
    </div>
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

.technology {
  width: 100%;
  height: 712px;
  background-color: $color-white-1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .technology-size {
    width: 72%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $breakpointExtraLarge) {
      justify-content: center;
    }

    .technology-images {
      width: 50%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: $breakpointExtraLarge) {
        display: none;
      }

      .images {
        height: 550px;
        position: absolute;
        left: 150px;
      }
    }
  }
}
</style>