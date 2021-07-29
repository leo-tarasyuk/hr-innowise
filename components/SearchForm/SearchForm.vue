<template>
  <div class="search-block">
    <div class="search-form">
      <h1 class="search-title">We develop the <span class="red-color">world</span></h1>
      <p class="search-text">Мечтаешь трансформировать реальность в крутые IT-решения? Тогда нам по пути!</p>
      <div class="navigation-buttons">
        <NavigationButton class="margin-right" :text="'Я студент'" />
        <NavigationButton :text="'Я специалист'" />
      </div>
      <Search />
    </div>
  </div>
</template>

<script>
import NavigationButton from '../Generel/NavigationButton.vue';
import Search from './Search.vue'

export default {
  components: {
    Search,
    NavigationButton
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.search-block {
  width: 100%;
  height: 1082px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('@/assets/SearchForm/background.svg');
  background-size: cover;
  background-repeat: no-repeat;

  .search-form {
    width: 72%;
    padding-top: 256px;
    color: $color-white-1;

    .search-title {
      font-family: $fontMontserrat;
      font-style: normal;
      font-size: 64px;
      font-weight: 800;
      line-height: 78px;
      padding-bottom: 32px;

      .red-color {
        color: $color-red-1;
      }
    }

    .search-text {
      max-width: 750px;
      font-family: $fontManrope;
      font-style: normal;
      font-size: 22px;
      font-weight: bold;
      line-height: 36px;
      padding-bottom: 48px;
    }

    .navigation-buttons {
      display: flex;
      padding-bottom: 226px;

      .margin-right {
        margin-right: 16px;
      }
    }
  }
}
</style>