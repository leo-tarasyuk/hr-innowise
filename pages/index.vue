<template>
  <main>
    <section class="search-block">
      <div class="search-form">
        <h1 class="search-title">We develop the <span class="red-color">world</span></h1>
        <p class="search-text">Мечтаешь трансформировать реальность в крутые IT-решения? Тогда нам по пути!</p>
        <div class="navigation-buttons">
          <NavigationButton class="margin-right" text="Я студент" />
          <NavigationButton text="Я специалист" />
        </div>

        <Search />
      </div>
    </section>

    <section class="information">
      <div class="information-size">
        <Description 
          title="Немного о компании"
          :pre-title="{ state: false }"
          text="Innowise Group занимается разработкой ПО с 2007 года. В нашем портфолио более 500 успешных проектов в сферах FinTech, MedTech, eLearning, eCommerce, Enterprise, Media   and Entertainment, а наши клиенты – крупные компании из Северной Америки, Европы, Азии и России."
          button-text="Подробнее о компании"
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
    </section>

    <section class="development">
      <div class="development__animation">
        <button class="play">
          <img src="@/assets/Development/tringle.svg" alt="tringle"/>
        </button>

        <div class="development__radar">
          <div class="mini-radar"></div>
        </div>
      </div>

      <Description 
        title="Твой успех в Innowise"
        :pre-title="{ state: true, text: 'Ты хочешь создавать крутые технологические решения, которые изменят мир? Тогда тебе в Innowise!' }"
        text="Вместе мы не просто разрабатываем инновационные решения, но и создаем собственную цифровую реальность. С нами ты быстро вольешься в коллектив, обучишься новому, станешь лидером на выбранных проектах и приблизишься на несколько ступенек ближе к своей мечте!"
        button-text="Развитие в компании"
      />
    </section>

    <section class="technology">
      <div class="technology-size">
        <Description 
          title="Технологии"
          :pre-title="{ state: false} "
          text="Мы работаем с широким спектром технологий. Наш основной стек: Java, JavaScript, .NET/С#, Python, PHP, Kotlin, Objective C/Swift и Unity. Ты сможешь попробовать себя в 20+ доменах, включая Artificial Intelligence, Data Science, Machine Learning, AR & VR."
          button-text="Подробнее о технологиях"
          :light-mod="true"
        />

        <div class="technology-images">
          <img
            class="images"
            src="@/assets/Technology/background.svg"
            alt="technology"
          />
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="projects-size">
        <div class="projects-block">
          <Description 
            title="Наши проекты"
            :pre-title="{state: false}"
            text="Мы всегда поддерживаем инициативу. Если у тебя полно идей и ты хочешь повлиять на судьбу проекта  – предлагай свои решения и помоги стать ему еще лучше!"
            button-text="Все проекты"
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
          <h2 class="part-of-team__title">Стань частью команды</h2>
          <p class="part-of-team__text">
            Просто заполни форму и мы обязательно с тобой свяжемся!
          </p>
          <div>
            <button class="part-of-team__btn">
              <span>Хочу в компанию</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="job-searching">
      <div class="job-searching-size">
        <div class="job-searching__specialist">
          <Description 
            class="specialist__description"
            title="Ищешь работу?"
            :pre-title="{ state: true, text: 'Выбирай вакансию для себя!' }"
            text="У нас ты можешь гибко управлять своим профессиональным и карьерным ростом, а также менять технологические направления."
            button-text="Все вакансии"
            :without-point="false"
          />

          <div class="job-searching__vacations">
            <Vacation
              v-for="(vacation, index) in vacations"
              :key="index"
              :vacation="vacation.name"
              :type="vacation.type"
              :hot="vacation.hot"
            />
          </div>
        </div>

        <div class="job-searching__specialist">
          <Description 
            class="specialist__description"
            title="Ещё учишься?"
            :pre-title="{ state: true, text: 'Залетай на стажировку!' }"
            text="У нас ты можешь гибко управлять своим профессиональным и карьерным ростом, а также менять технологические направления."
            button-text="подробнее о стажировке"
            :without-point="false"
          />

          <div class="intership-block">
            <IntershipDetails
              v-for="(details, index) in intershipDetails"
              :key="index"
              class="intership-description"
              :title="details.title"
              :text="details.text"
              :img="details.img" 
            />
          </div>
        </div>

        <div class="company-life">
          <div class="company-life__description">
            <div class="company-life__title">
              Мы команда <p class="red-point"></p>
            </div>

            <p class="company-life__text">
              Сотрудники в Innowise ценят поддержку коллектива, общение на равных и открытое обсуждение всех вопросов. Именно такой подход позволяет нам оставаться дружной командой и неформально общаться в свободное время.
            </p>

            <div class="company-life__instagram">
              <button class="company-life-btn">
                <img src="@/assets/Footer/link-instagram.svg" alt="instagram"/>
                <span class="btn-link-instagram">Давай в инстаграм</span>
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
              <img src="@/assets/JobSearching/slider1.svg" alt="slider1"/>
              <img src="@/assets/JobSearching/slider2.svg" alt="slider2"/>
              <img src="@/assets/JobSearching/slider3.svg" alt="slider3"/>
              <img src="@/assets/JobSearching/slider4.svg" alt="slider4"/>
              <img src="@/assets/JobSearching/slider1.svg" alt="slider5"/>
              <img src="@/assets/JobSearching/slider2.svg" alt="slider6"/>
              <img src="@/assets/JobSearching/slider3.svg" alt="slider7"/>
              <img src="@/assets/JobSearching/slider4.svg" alt="slider8"/>
              <img src="@/assets/JobSearching/slider1.svg" alt="slider9"/>
              <img src="@/assets/JobSearching/slider2.svg" alt="slider10"/>
              <img src="@/assets/JobSearching/slider3.svg" alt="slider11"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavigationButton from "../components/Generel/NavigationButton.vue";
import Search from "../components/Generel/Search.vue"
import Description from "../components/Generel/Description.vue";
import Square from "../components/Generel/Square.vue"
import Project from "../components/Generel/Project.vue"
import Vacation from "../components/Generel/Vacation.vue"
import IntershipDetails from "../components/Generel/IntershipDetails.vue"

export default {
  components: {
    NavigationButton,
    Search,
    Description,
    Square,
    Project,
    Vacation,
    IntershipDetails
  },

  layout: 'default',

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
      ],
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
      ],
      intershipDetails: [
        {
          img: 'mug',
          title: 'Индивидуальный подход',
          text: 'Мы помогаем тебе выяснить, по каким темам нужно подтянуть свои знания, и готовим индивидуальный план стажировки'
        },
        {
          img: 'messages',
          title: 'Личный ментор',
          text: 'У тебя будет личный ментор, который передаст тебе бесценный опыт и поможет в любой ситуации.'
        },
        {
          img: 'arrows',
          title: 'Гибкий график стажировки',
          text: 'Программа позволяет легко совмещать стажировку с учебой и длится в среднем 3 месяца.'
        },
        {
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

main {
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
        font-size: 64px;
        font-weight: 800;
        line-height: 78px;
        padding-bottom: 32px;

        .red-color {
          font-family: $fontMontserrat;
          font-size: 64px;
          font-weight: 800;
          line-height: 78px;
          color: $color-red-1;
        }
      }

      .search-text {
        max-width: 750px;
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

  .information {
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $color-black-2;

    .information-size {
      width: 72%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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

  .development {
    width: 100%;
    height: 905px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('@/assets/Development/background.svg');
    background-size: cover;
    background-repeat: no-repeat;

    .development__animation {
      max-width: 726px;
      min-width: 726px;
      height: 726px;
      position: relative; 

      .development__radar {
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

        .mini-radar {
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

      .technology-images {
        width: 50%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .images {
          height: 550px;
          position: absolute;
          left: 190px;
        }
      }
    }
  }

  .projects {
    width: 100%;
    height: 2400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, $color-white-1 0%, $color-black-3 7.07%), $color-white-3; 

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

        .part-of-team__title {
          font-family: $fontMontserrat;
          font-weight: 800;
          font-size: 28px;
          line-height: 34px;
          padding-bottom: 14px;
          color: $color-black-2;
        }

        .part-of-team__text {
          padding-bottom: 32px;
          color: $color-black-2;
        }

        .part-of-team__btn {
          height: 54px;
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

  .job-searching {
    width: 100%;
    height: 2350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, $color-black-4 0%, $color-black-5 100%);

    .job-searching-size {
      width: 72%;
      height: 100%;

      .job-searching__specialist {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;

        .specialist__description {
          padding-top: 156px;
        }

        .job-searching__vacations {
          max-width: 980px;
          max-height: 464px;
          overflow: hidden;
          margin-top: 124px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .intership-block {
          height: 100%;
          padding-top: 150px;

          .intership-description {
            padding-bottom: 80px;
          }
        }
      }
    }

    .company-life {
      width: 100%;
      padding: 44px 0;

      .company-life__description {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;

        .company-life__title {
          min-width: 300px;
          display: flex;
          font-family: $fontMontserrat;
          font-weight: 800;
          font-size: 40px;
          line-height: 49px;
          color: $color-white-1;

          .red-point {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin: 5px 4px;
            background-color: $color-red-1;
          }
        }

        .company-life__text {
          max-width: 676px;
          padding: 0 20px;
          color: $color-white-1;
        }

        .company-life__instagram {
          display: flex;
          align-items: center;

          .company-life-btn {
            width: 278px;
            height: 54px;
            display: flex;
            justify-content: space-between;
            align-items: center;
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

            .btn-link-instagram {
              font-weight: bold;
              font-size: 16px;
              line-height: 22px;
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

@media (max-width: $breakpointExtraExtraLarge) {
  main {
    .information {
      height: 1100px;
      
      .information-size {
        flex-direction: column;
      }
    }

    .job-searching {
      .company-life {
        .slider {
          height: 400px;

          .pictures {
            img {
              width: 250px;
              height: 250px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: $breakpointExtraLarge) {
  main {
    .development__animation {
      display: none;
    }

    .technology-size {
      justify-content: center;

      .technology-images {
        display: none;
      }
    }

    .projects {
      height: auto;

      .projects-size {
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

        .part-of-team {
          margin: 0 0 50px 0;
          padding: 12px 24px;
          justify-self: center;

          .part-of-team__title {
            font-size: 26px;
          }

          .part-of-team__text {
            font-size: 16px;
            padding-bottom: 16px;
          }
        }
      }
    }

    .job-searching {
      height: auto;

      .job-searching-size {
        width: 90%;

        .job-searching__specialist {
          height: auto;
          flex-direction: column;
          align-items: center;

          .job-searching__vacations {
            overflow: initial;
            max-height: none;
          }
          
          .intership-block {
            padding-top: 100px;
          }
        }
      }

      .company-life {
        .company-life__description {
          .company-life__title {
            display: none;
          }
        }

        .slider {
          height: 350px;

          .pictures {
            img {
              width: 200px;
              height: 200px;
            }
          }
        }
      }
    }
  }
}
</style>
