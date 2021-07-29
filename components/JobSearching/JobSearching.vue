<template>
  <div class="job-searching">
    <div class="job-searching-size">
      <div class="job-searching-specialist">
        <Description 
          class="specialist-description"
          :title="'Ищешь работу?'"
          :pre-title="{state: true, text: 'Выбирай вакансию для себя!'}"
          :text="'У нас ты можешь гибко управлять своим профессиональным и карьерным ростом, а также менять технологические направления.'"
          :button-text="'Все вакансии'"
          :without-point="false"
        />

        <div class="job-searching-vacations">
          <Vacation
            v-for="(vacation, index) in vacations"
            :key="index"
            :vacation="vacation.name"
            :type="vacation.type"
            :hot="vacation.hot"
          />
        </div>
      </div>

      <div class="job-searching-specialist">
        <Description 
          class="specialist-description"
          :title="'Ещё учишься?'"
          :pre-title="{state: true, text: 'Залетай на стажировку!'}"
          :text="'У нас ты можешь гибко управлять своим профессиональным и карьерным ростом, а также менять технологические направления.'"
          :button-text="'подробнее о стажировке'"
          :without-point="false"
        />

        <div class="intership-block">
          <IntershipDetails
            v-for="(details, index) in intershipDetails"
            :key="index"
            :class="details.class"
            :title="details.title"
            :text="details.text"
            :img="details.img" 
          />
        </div>
      </div>

      <div class="company-life">
        <div class="company-life-description">
          <div class="company-life-title">
            Мы команда <p class="red-point"></p>
          </div>

          <p class="company-life-text">
            Сотрудники в Innowise ценят поддержку коллектива, общение на равных и открытое обсуждение всех вопросов. Именно такой подход позволяет нам оставаться дружной командой и неформально общаться в свободное время.
          </p>

          <div class="company-life-instagram">
            <button class="company-life-btn">
              <img src="@/assets/Footer/link-instagram.svg" />
              Давай в инстаграм
            </button>
          </div>
        </div>

        <div class="slider">
          <input
            id="radio1"
            class="radio"
            type="radio"
            name="radio"
            checked
          />
          <label class="label1" for="radio1">
            <div class="label"></div>
          </label>

          <input
            id="radio2"
            class="radio"
            type="radio"
            name="radio"
          />
          <label class="label2" for="radio2">
            <div class="label"></div>
          </label>
  
          <input
            id="radio3"
            class="radio"
            type="radio"
            name="radio"
          />
          <label class="label3" for="radio3">
            <div class="label"></div>
          </label>

          <input
            id="radio4"
            class="radio"
            type="radio"
            name="radio" 
          />
          <label class="label4" for="radio4">
            <div class="label"></div>
          </label>

          <div class="pictures">
            <img src="@/assets/JobSearching/slider1.svg" />
            <img src="@/assets/JobSearching/slider2.svg" />
            <img src="@/assets/JobSearching/slider3.svg" />
            <img src="@/assets/JobSearching/slider4.svg" />
            <img src="@/assets/JobSearching/slider1.svg" />
            <img src="@/assets/JobSearching/slider2.svg" />
            <img src="@/assets/JobSearching/slider3.svg" />
            <img src="@/assets/JobSearching/slider4.svg" />
            <img src="@/assets/JobSearching/slider1.svg" />
            <img src="@/assets/JobSearching/slider2.svg" />
            <img src="@/assets/JobSearching/slider3.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Description from '../Generel/Description.vue';
import Vacation from './Vacation.vue'
import IntershipDetails from './IntershipDetails.vue'

export default {
  components: {
    Description,
    Vacation,
    IntershipDetails
  },

  data () {
    return {
      vacations: [
        {
          name: 'Build / SRE Engineer',
          type: 'Middle, Витебск',
          hot: true
        },
        {
          name: 'C++ Toolset Developer',
          type: 'Middle, Витебск',
          hot: false
        },
        {
          name: 'Technical Designer',
          type: 'Middle, Витебск',
          hot: false
        },
        {
          name: 'Python Developer',
          type: 'Middle, Витебск',
          hot: true
        }
      ],
      intershipDetails: [
        {
          class: 'intership-description-block',
          img: 'mug',
          title: 'Индивидуальный подход',
          text: 'Мы помогаем тебе выяснить, по каким темам нужно подтянуть свои знания, и готовим индивидуальный план стажировки'
        },
        {
          class: 'intership-description-block',
          img: 'messages',
          title: 'Личный ментор',
          text: 'У тебя будет личный ментор, который передаст тебе бесценный опыт и поможет в любой ситуации.'
        },
        {
          class: 'intership-description-block',
          img: 'arrows',
          title: 'Гибкий график стажировки',
          text: 'Программа позволяет легко совмещать стажировку с учебой и длится в среднем 3 месяца.'
        },
        {
          class: 'intership-description-block',
          img: 'users',
          title: 'Работа в команде Innowise',
          text: 'Демонстрируешь хорошие результаты? Значит, сможешь пройти стажировку еще быстрее и получить Job Offer!'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles';

.job-searching {
  width: 100%;
  height: 2350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, $color-black-4 0%, $color-black-5 100%);
  @media (max-width: $breakpointExtraLarge) {
    height: auto;
  }

  .job-searching-size {
    width: 72%;
    height: 100%;
    @media (max-width: $breakpointExtraLarge) {
      width: 90%;
    }

    .job-searching-specialist {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      @media (max-width: $breakpointExtraLarge) {
        height: auto;
        flex-direction: column;
        align-items: center;
      }

      .specialist-description {
        padding-top: 156px;
      }

      .job-searching-vacations {
        max-width: 980px;
        max-height: 464px;
        overflow: hidden;
        margin-top: 124px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        @media (max-width: $breakpointExtraLarge) {
          overflow: initial;
          max-height: none;
        }
      }

      .intership-block {
        height: 100%;
        padding-top: 150px;
        @media (max-width: $breakpointExtraLarge) {
          padding-top: 100px;
        }

        .intership-description-block {
          padding-bottom: 80px;
          @media (max-width: $breakpointExtraLarge) {
            padding-bottom: 50px;
          }
        }
      }
    }

    .company-life {
      width: 100%;
      padding: 44px 0;

      .company-life-description {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;

        .company-life-title {
          min-width: 300px;
          display: flex;
          font-family: $fontMontserrat;
          font-style: normal;
          font-weight: 800;
          font-size: 40px;
          line-height: 49px;
          color: $color-white-1;
          @media (max-width: $breakpointExtraExtraLarge) {
            display: none;
          }

          .red-point {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin: 5px 4px;
            background-color: $color-red-1;
          }
        }

        .company-life-text {
          max-width: 676px;
          font-family: $fontManrope;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 32px;
          padding: 0 20px;
          color: $color-white-1;
        }

        .company-life-instagram {
          display: flex;
          align-items: center;

          .company-life-btn {
            width: 278px;
            height: 54px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: $fontManrope;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            box-sizing: border-box;
            border-radius: 50px;
            cursor: pointer;
            padding: 0 26px;
            color: $color-white-1;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            background-color: transparent;
            border: 1px solid $color-grey-1;
            transition: 0.5s;
            &:hover {
              color: $color-black-1;
              background-color: $color-white-1;
            }
          }
        }
      }

      .slider {
        width: 100%;
        height: 450px;
        position: relative;
        overflow: hidden;
        z-index: 4;
        padding-top: 50px;
        @media (max-width: $breakpointExtraLarge) {
          height: 350px;
        }

        .radio {
          display: none;
        }

        label {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: absolute;
          bottom: 50px;
          background-color: $color-black-6;
        }

        .label1 {
          left: calc(50% - 17px);
        }

        .label2 {
          left: calc(50% + 11px);
        }
        
        .label3 {
          left: calc(50% + 39px);
        }

        .label4 {
          left: calc(50% + 67px);
        }

        .pictures {
          width: auto;
          height: auto;
          display: flex;
          padding-top: 30px;
          transform: translate(0%);
          transition: 1s;
          position: absolute;

          img {
            width: 322px;
            height: 322px;
            margin-right: 32px;
            border-radius: 10px;
            @media (max-width: $breakpointExtraLarge) {
              width: 200px;
              height: 200px;
            }
          }
        }

        #radio1:checked ~ .label1 {
          background-color: $color-red-1;
        }

        #radio1:checked ~ .pictures {
          transform: translate(0%);
        }

        #radio2:checked ~ .label2 {
          background-color: $color-red-1;
        }

        #radio2:checked ~ .pictures {
          transform: translate(-27.25%);
        }

        #radio3:checked ~ .label3 {
          background-color: $color-red-1;
        }

        #radio3:checked ~ .pictures {
          transform: translate(-54.5%);
        }

        #radio4:checked ~ .label4 {
          background-color: $color-red-1;
        }

        #radio4:checked ~ .pictures {
          transform: translate(-81.75%);
        }
      }
    }
  }
}
</style>