<template>
  <footer>
    <div class="footer-size">
      <div class="navigation">
        <div class="navigation-size">
          <div class="logo">
            <img src="@/assets/Header/logo.svg" alt="">
            <p class="logo-text">We develop the world</p>
          </div>

          <div class="navigation-links">
            <div class="links-group">
              <a href="" class="link">О нас</a>
              <a href="" class="link">Проекты</a>
              <a href="" class="link">Карьера</a>
            </div>
            <div class="links-group">
              <a href="" class="link">Вакансии</a>
              <a href="" class="link">Стажировка</a>
              <a href="" class="link">Бенефиты</a>
            </div>
            <div class="links-group">
              <a href="" class="link">Контакты</a>
            </div>
          </div>

          <div class="navigation-contacts">
            <div class="contacts">
              <p class="contact">
                <span>job@innowise-group.com</span>
              </p>
              <p class="contact">
                <span>(29) 371 73 45</span>
              </p>
            </div>

            <div class="social-links">
              <a href="">
                <img src="@/assets/Footer/link-instagram.svg" alt="">
              </a>
              <a href="">
                <img src="@/assets/Footer/link-facebook.svg" alt="">
              </a>
              <a href="">
                <img src="@/assets/Footer/link-youtube.svg" alt="">
              </a>
              <a href="">
                <img src="@/assets/Footer/link-linkedin.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright">
        Copyright © 2007-2021 Innowise Group. All Rights
      </div>
    </div>
  </footer>    
</template>

<style lang="scss" scoped>
@import '@/styles';

footer {
  width: 100%;
  height: 390px;
  background-color: $color-black-5;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-size {
    width: 72%;
    height: 100%;

    .navigation {
      width: 100%;
      height: 287px;

      .navigation-size {
        width: 100%;
        height: 237px;
        padding-top: 50px;
        display: flex;
        justify-content: space-between;

        .logo {
          width: 210px;
          @media (max-width: $breakpointExtraExtraLarge) {
            display: none;
          }

          img {
            padding-bottom: 24px;
          }

          .logo-text {
            font-family: $fontManrope;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: $color-white-1;
          }
        }

        .navigation-links {
          width: 45%;
          height: 135px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          @media (max-width: $breakpointExtraExtraLarge) {
            width: 50%;
          }

          .links-group {
            display: flex;
            flex-direction: column;
            padding-right: 20px;

            a {
              font-family: $fontManrope;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 25px;
              cursor: pointer;
              text-decoration: none;
              outline: none;
              padding-bottom: 20px;
              color: $color-grey-2;
            }
          }
        }

        .navigation-contacts {
          width: 217px;
          height: auto;
          font-family: $fontManrope;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          color: $color-red-1;

          .contacts {
            height: 150px;

            .contact {
              margin-bottom: 24px;
              
              span {
                padding-bottom: 6px;
                border-bottom: 1px solid $color-red-1;
              }
            }
          }

          .social-links {
            width: 190px;
            display: flex;
            justify-content: space-between;

            a {
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
          }
        }
      }
    }

    .copyright {
      border-top: 1px solid $color-grey-5;
      width: 100%;
      height: 103px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: $fontManrope;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: $color-grey-2
    }
  }
}
</style>