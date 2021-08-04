<template>
  <footer>
    <div class="footer-size">
      <div class="navigation">
        <div class="navigation-size">
          <div class="logo">
            <img src="@/assets/Header/logo.svg" alt="logo">
            <p class="logo-text">We develop the world</p>
          </div>

          <nav class="navigation__links">
            <ul class="links-group">
              <li>
                <a href="#" class="link">О нас</a>
              </li>
              <li>
                <a href="#" class="link">Проекты</a>
              </li>
              <li>
                <a href="#" class="link">Карьера</a>
              </li>
            </ul>

            <ul class="links-group">
              <li>
                <a href="#" class="link">Вакансии</a>
              </li>
              <li>
                <a href="#" class="link">Стажировка</a>
              </li>
              <li>
                <a href="#" class="link">Бенефиты</a>
              </li>
            </ul>

            <ul class="links-group">
              <li>
                <a href="#" class="link">Контакты</a>
              </li>
            </ul>
          </nav>

          <nav class="navigation__contacts">
            <ul class="contacts">
              <li class="contact">
                <a href="mailto:job@innowise-group.com">job@innowise-group.com</a>
              </li>
              <li class="contact">
                <a href="tel:+375293717345">(29) 371 73 45</a>
              </li>
            </ul>

            <ul class="social-links">
              <li class="social-link">
                <a href="#">
                  <img src="@/assets/Footer/link-instagram.svg" alt="instagram">
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <img src="@/assets/Footer/link-facebook.svg" alt="facebook">
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <img src="@/assets/Footer/link-youtube.svg" alt="youtube">
                </a>
              </li>
              <li class="social-link">
                <a href="#">
                  <img src="@/assets/Footer/link-linkedin.svg" alt="linkedin">
                </a>
              </li>
            </ul>
          </nav>
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

          img {
            padding-bottom: 24px;
          }

          .logo-text {
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: $color-white-1;
          }
        }

        .navigation__links {
          width: 45%;
          height: 135px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .links-group {
            display: flex;
            flex-direction: column;

            li {
              list-style: none;
              padding-bottom: 20px;

              a {
                font-weight: 500;
                line-height: 25px;
                cursor: pointer;
                text-decoration: none;
                outline: none;
                color: $color-grey-2;
              }
            }
          }
        }

        .navigation__contacts {
          width: 217px;
          height: auto;
          font-weight: 500;
          line-height: 25px;
          color: $color-red-1;

          .contacts {
            height: 150px;

            .contact {
              list-style: none;
              margin-bottom: 24px;
              
              a {
                text-decoration: none;
                color: $color-red-1;
                border-bottom: 1px solid $color-red-1;
                padding-bottom: 6px;
              } 
            }
          }

          .social-links {
            width: 190px;
            display: flex;
            justify-content: space-between;

            .social-link {
              list-style: none;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;

              a {
                display: flex;
                justify-content: center;
                align-items: center;
              }
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
      text-align: center;
      font-size: 16px;
      line-height: 22px;
      color: $color-grey-2
    }
  }
}

@media (max-width: $breakpointExtraExtraLarge) {
  .logo {
    display: none;
  }
  
  .navigation__links {
    width: 50%;
  }
}

@media (max-width: $breakpointMedium) {
  footer {
    height: auto;

    .footer-size {
      .navigation {
        height: auto;

        .navigation-size {
          height: auto;
          flex-direction: column;
          align-items: center;
          padding-top: 0;

          .navigation__links {
            width: 100%;
            height: auto;

            .links-group {
              li {
                a {
                  font-size: 14px;
                }
              }
            }
          }

          .navigation__contacts {
            width: 100%;

            .contacts {
              height: auto;
              margin-bottom: 24px;
              
              .contact {
                margin-bottom: 14px;

                a {
                  font-size: 14px;
                }
              }
            }

            .social-links {
              width: 100%;
              padding-bottom: 20px;
            }
          }
        }
      }
      
      .copyright {
        font-size: 12px;
        height: 53px;
      }
    }
  }
}
</style>