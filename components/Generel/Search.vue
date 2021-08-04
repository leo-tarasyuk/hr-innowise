<template>
  <div class="search-component">
    <label v-if="stateTags" for="search-input">
      <span 
        v-for="(language, index) in languages"
        :key="index"
        class="tag"
        @click="pickLanguage(language)"
      >
        {{ language }}
      </span>
    </label>
    <input
      id="search-input"
      ref="searchInput"
      class="search-input"
      type="text"
      placeholder="Я ищу вакансию, например"
      @input="checkInputValue"
    >
    <button class="search-button" @click="checkVacation($refs.searchInput.value)"></button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      stateTags: true,
      languages: [
        'Python',
        'Java',
        'JavaScript'
      ]
    }
  },

  methods: {
    checkInputValue(e) {
      if (e.target.value) {
        this.stateTags = false;
      } else {
        this.stateTags = true;
      }
    },

    pickLanguage(language) {
      this.$refs.searchInput.value = language;
      this.stateTags = false;
    },

    checkVacation(language) {
      if (language) {
        this.$emit('show-page', language)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/styles';

.search-component {
  position: relative;
  width: 100%;
  margin: 0 auto;

  label {
    width: auto;
    position: absolute;
    top: 17px;
    left: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: $breakpointExtraLarge) {
      display: none;
    }

    .tag {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 23px;
      font-weight: 500;
      line-height: 25px;
      color: $color-grey-2;
      background: $color-white-2;
      margin-right: 8px;
      padding: 0 24px;
      cursor: pointer;
    }
  }

  .search-input {
    width: 100%;
    height: 84px;
    box-sizing: border-box;
    border: 2px solid $color-grey-2;
    border-radius: 20px;
    font-size: 20px;
    outline: none;
    background-color: $color-white-1;
    background-image: url('@/assets/SearchForm/search.svg');
    background-position: 27px 24px; 
    background-repeat: no-repeat;
    padding: 12px 78px;

    &::placeholder {
      color: #8C8C8C;
    }
  }

  .search-button {
    height: 60px;
    width: 60px;
    position: absolute;
    top: 12px;
    right: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: $color-white-1;
    background-image: url('@/assets/SearchForm/button.svg');
    background-repeat: no-repeat;
  }
}

@media (max-width: $breakpointMedium) {
  .search-component {
    .search-input {
      height: 42px;
      font-size: 14px;
      background-position: 12px 4px;
      padding: 12px 50px; 
    }

    .search-button {
      height: 30px;
      width: 30px;
      top: 6px;
      right: 18px;
      background-size: cover;
    }
  }
}
</style>