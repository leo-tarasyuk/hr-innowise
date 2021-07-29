<template>
  <div class="projects">
    <div class="projects-size">
      <div class="projects-block">
        <Description 
          :title="'Наши проекты'"
          :pre-title="{state: false}"
          :text="'Мы всегда поддерживаем инициативу. Если у тебя полно идей и ты хочешь повлиять на судьбу проекта  – предлагай свои решения и помоги стать ему еще лучше!'"
          :button-text="'Все проекты'"
          :light-mod="true"
        />
      </div>

      <Project
        v-for="(project, index) in projects"
        :key="index"
        :class="project.class"
        :img="project.img"
        :title="project.title" 
        :text="project.text" 
      />

      <div class="part-of-team">
        <h2 class="part-of-team-title">Стань частью команды</h2>
        <p class="part-of-team-text">
          Просто заполни форму и мы обязательно с тобой свяжемся!
        </p>
        <div>
          <button class="part-of-team-btn">Хочу в компанию</button>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
import Description from '../Generel/Description.vue';
import Project from './Project.vue'

export default {
  components: {
    Project,
    Description
  },

  data () {
    return {
      projects: [
        {
          class: 'project-surgeons-assistent',
          img: 'surgeons-assistent',
          title: 'VOKA.IO – AR ассистент хирурга',
          text: 'Это виртуальный ассистент хирурга, основанный на технологии смешанной реальности. С его помощью хирурги могут видеть повреждения пациента в формате 3D. Ассистент помогает ставить диагнозы и проводить сложнейшие операции.'
        },
        {
          class: 'project-pathology',
          img: 'pathology',
          title: 'VOKA Pathology 3D',
          text: 'Каталог патологий внутренних органов человека. Он создан в формате мобильного приложения и помогает студентам-медикам детально изучить анатомию человека, опираясь на 3D модели внутренних органов, костей и мышечной системы.'
        },
        {
          class: 'project-distance-learning',
          img: 'distance-learning',
          title: 'Платформа для дистанционного обучения',
          text: 'Образовательная онлайн-платформа для учителей, школьников и их родителей. Она помогает в интерактивной форме преподавать и изучать школьные предметы, а также контролировать процесс обучения и успеваемость учеников.'
        },
        {
          class: 'project-stock-analysis',
          img: 'stock-analysis',
          title: 'Мобильное приложение для анализа акций',
          text: 'Приложение для анализа прибыльности акций и просмотра прогнозов финансовых активов в режиме реального времени. Решение оценивает рискованность портфолио, выдает рейтинги пользователям и позволяет подписаться на топ трейдеров, чтобы следить за их последними транзакциями.'
        },
        {
          class: 'project-token-sale',
          img: 'token-sale',
          title: 'Маркетплейс для продажи токенов',
          text: 'Приложение помогает популярным брендам создавать и продавать уникальные NFT-токены, а пользователям – приобретать их и торговать между собой. С помощью этого решения можно разработать свой цифровой актив в формате 3D анимации и тем самым привлечь новую лояльную аудиторию.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

  .projects {
    width: 100%;
    height: 2400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, $color-white-1 0%, $color-black-3 7.07%), $color-white-3; 
    @media (max-width: $breakpointExtraLarge) {
      height: auto;
    }

    .projects-size {
      width: 72%;
      height: 90%;
      display: grid;
      grid-template-areas: 
      "area1 area2"
      "area1 area3"
      "area4 area3"
      "area4 area5"
      "area6 area5"
      "area6 area7";
      gap: 0 5%;
      grid-auto-rows: 358px;
      @media (max-width: $breakpointExtraLarge) {
        height: auto;
        grid-template-areas: 
        "area2"
        "area1"
        "area1"
        "area3"
        "area3"
        "area4"
        "area4"
        "area5"
        "area5"
        "area6"
        "area6"
        "area7";
        gap: 0;
        grid-auto-rows: 25%;
      }

      .projects-block {
        height: 328px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: area2;
        padding-bottom: 50px;
      }

      .project-surgeons-assistent {
        grid-area: area1;
        padding-bottom: 100px;
      }

      .project-pathology {
        grid-area: area3;
        padding-bottom: 100px; 
      }

      .project-distance-learning {
        grid-area: area4;
        padding-bottom: 100px;    
      }

      .project-stock-analysis {
        grid-area: area5;
        padding-bottom: 100px; 
      }

      .project-token-sale {
        grid-area: area6;
        padding-bottom: 100px;  
      }

      .part-of-team {
        max-width: 656px;
        height: 262px;
        background: linear-gradient(98.57deg, $color-white-4 -0.66%, $color-white-3 103.61%);
        border-radius: 8px;
        padding: 0 48px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-area: area7;
        margin-top: 50px;
        @media (max-width: $breakpointExtraExtraLarge) {
          margin: 0 0 50px 0;
          padding: 12px 24px;
          justify-self: center;
        }

        .part-of-team-title {
          font-family: $fontMontserrat;
          font-style: normal;
          font-weight: 800;
          font-size: 28px;
          line-height: 34px;
          padding-bottom: 14px;
          color: $color-black-2;
          @media (max-width: $breakpointExtraLarge) {
            font-size: 26px;
          }
        }

        .part-of-team-text {
          font-family: $fontManrope;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 32px;
          padding-bottom: 32px;
          color: $color-black-2;
          @media (max-width: $breakpointExtraLarge) {
            font-size: 16px;
            padding-bottom: 16px;
          }
        }

        .part-of-team-btn {
          height: 54px;
          font-family: $fontManrope;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
          border: none;
          box-sizing: border-box;
          border-radius: 50px;
          cursor: pointer;
          padding: 0 26px;
          color: $color-white-1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background-color: $color-red-1;
          transition: 0.5s;
          &:hover {
            border: 1px solid $color-grey-1;
            color: $color-black-1;
            background-color: transparent;
          }
        }
      }
    }
  }
</style>