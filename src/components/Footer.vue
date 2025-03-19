<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__top-content">
        <div class="logo footer__logo">
          <img src="@/assets/img/footer/footer-logo.svg" alt="Logo" />
          <div class="footer__logo-text">DiveSea</div>
        </div>
        <nav class="footer__menu">
          <ul class="footer__menu-list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Term & Conditions</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <hr class="footer__divider">
      <div class="footer__privacy">
        <div class="footer__privacy-text">© 2023</div>
        <div class="footer__privacy-text--mobile">DiveSea All Rights Reserved.</div>
        <div class="footer__social">
          <ul class="footer__social-list">
            <li><a href="#"><img src="@/assets/img/footer/insta.svg" alt="Instagram" /></a></li>
            <li><a href="#"><img src="@/assets/img/footer/linkedin.svg" alt="Linkedin" /></a></li>
            <li><a href="#"><img src="@/assets/img/footer/facebook.svg" alt="Facebook" /></a></li>
            <li><a href="#"><img src="@/assets/img/footer/twitter.svg" alt="Twitter" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
.footer {
  background-color: #141416;
  color: #B9B9B9;
  &__container {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 80px;
    @media screen and (max-width: 768px) {
      position: relative;
      padding-top: 60px;
      padding-bottom: 40px;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 65px;
    height: 65px;
    @media screen and (max-width: 768px) {
      width: 45px;
      height: 45px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    &-text {
      font-size: 2.15rem;
      line-height: 130%;
      font-weight: 600;
      color: #fff;
      @media screen and (max-width: 375px) {
        font-size: 22px;
        line-height: 24px;
      }
    }
  }
  &__divider {
    margin: 25px 0 56px;
    @media screen and (max-width: 820px) {
      margin: 48px 0 26px
    }
  }
  &__top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
  &__menu {
    &-list {
      display: flex;
      gap: 70px;
      @media screen and (max-width: 820px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
      }
      li {
        a {
          font-family: 'Inter', sans-serif;
          color: #B9B9B9;
          text-decoration: none;
          font-size: 1.29rem;
          line-height: 1.85rem;
          font-weight: 500;
          @media screen and (max-width: 375px) {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
  }
  &__privacy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    @media screen and (max-width: 375px) {
      min-height: 0;
    }
    &-text {
      font-family: 'Inter', sans-serif;
      color: #999999;
      font-size: 1.29rem;
      line-height: 1.85rem;
      font-weight: 500;
      @media screen and (max-width: 768px) {
        color: #999999;
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
      }
    }
    &-text--mobile {
      display: none;
    }
    @media screen and (max-width: 768px) {
      &-text--mobile {
        display: block;
        margin-left: 10px;
        color: #999999;
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
      }

      justify-content: center;
    }
  }
  &__social {
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 70px;
      right: 30px;
    }
    @media screen and (max-width: 375px) {
      top: 73px;
    }
    @media screen and (max-width: 330px) {
      top: 130px;
    }
    &-list {
      display: flex;
      align-items: center;
      gap: 40px;
      @media screen and (max-width: 768px) {
        gap: 10px;
      }
      @media screen and (max-width: 330px) {
        flex-direction: column;
        gap: 30px;
      }
      li {
        a {
          img {
            width: 24px;
            height: 24px;
            @media screen and (max-width: 768px) {
              width: 17px;
              height: 17px;
            }
          }
        }
      }
    }
  }
}
</style>
