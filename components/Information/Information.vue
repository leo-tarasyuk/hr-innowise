<template>
  <div class="information">
    <div class="information-size">
      <Description 
        :title="'Немного о компании'"
        :pre-title="{state: false}"
        :text="'Innowise Group занимается разработкой ПО с 2007 года. В нашем портфолио более 500 успешных проектов в сферах FinTech, MedTech, eLearning, eCommerce, Enterprise, Media   and Entertainment, а наши клиенты – крупные компании из Северной Америки, Европы, Азии и России.'"
        :button-text="'Подробнее о компании'"
      />

      <div class="information-block">
        <Square
          v-for="(info, index) in company" 
          :key="index"
          :title="info.title"
          :text="info.text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Description from '../Generel/Description.vue';
import Square from './Square.vue';

export default {
  components: {
    Description,
    Square
  },
  
  data () {
    return {
      company: [
        {
          title: '500+',
          text: 'профессионалов'
        },
        {
          title: '14',
          text: 'лет опыта работы'
        },
        {
          title: '70+',
          text: 'активных проектов'
        },
        {
          title: '6',
          text: 'городов Беларуси'
        },
        {
          title: '30+',
          text: 'стран-клиентов'
        },
        {
          title: '20+',
          text: 'доменов'
        },
      ] 
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.information {
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-black-2;
  @media (max-width: $breakpointExtraExtraLarge) {
    height: 1100px;
  }

  .information-size {
    width: 72%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: $breakpointExtraExtraLarge) {
      flex-direction: column;
    }
  }  

  .information-block {
    max-width: 750px;
    min-width: 440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 50px;
  }
}
</style>