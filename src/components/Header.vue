<template>
  <header class="header">
    <div class="container header__container">
      <div class="logo header__logo">
        <img src="@/assets/img/Logo.svg" alt="Logo" />
        <span>DiveSea</span>
      </div>
      <nav class="header__menu" :class="{ 'is-open': isMenuOpen }">
        <ul class="header__menu-list">
          <li><a href="#">discover</a></li>
          <li><a href="#">creators</a></li>
          <li><a href="#">sell</a></li>
          <li><a href="#">stats</a></li>
        </ul>
        <div class="social-links mobile-only">
          <a href="#"><img src="@/assets/img/footer/insta.svg" alt="Instagram" /></a>
          <a href="#"><img src="@/assets/img/footer/linkedin.svg" alt="Linkedin" /></a>
          <a href="#"><img src="@/assets/img/footer/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="@/assets/img/twitter-mobile.svg" alt="Twitter" /></a>
        </div>
        <div class="header__divider mobile-only"></div>
        <button class="button header__cta-button mobile">
          Connect Wallet
        </button>
      </nav>
      <button class="button header__cta-button desktop">
        Connect Wallet
      </button>
      <button class="header__menu-toggle" @click="toggleMenu">
        <span v-if="!isMenuOpen" class="menu-icon"></span>
        <span v-else class="close-icon">✕</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = this.$el;
      const container = this.$el.querySelector('.header__container');
      if (window.scrollY > 0) {
        header.classList.add('sticky');
        container.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
        container.classList.remove('sticky');
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #F9F9F9;
  z-index: 100;
  transition: all 0.3s ease;
  
  &.sticky {
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    @media screen and (max-width: 768px) {
      border-radius: 0;
    }
  }
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
    transition: min-height 0.3s ease;
    &.sticky {
      min-height: 88px;
    }
    @media screen and (max-width: 768px) {
      position: relative;
    }
  }
  &__cta-button {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    border-radius: 16px;
    padding: 16px 25px;
    
    &.desktop {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    
    &.mobile {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        padding: 16px 25px;
        margin: 0 20px 30px 20px;
        width: calc(100% - 40px);
        background-color: #000;
        color: #fff;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  
  .mobile-only {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  &__divider {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 100%;
      height: 0.5px;
      background-color: #CBCBCB;
      position: absolute;
      bottom: 0;
    }
  }
  &__logo {
    width: 53px;
    height: 53px;
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      z-index: 999;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    span {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        margin-left: 7px;
        font-size: 22px;
        line-height: 24px;
        font-weight: 600;
      }
    }
  }
  
  &__menu {
    width: 50%;
    margin: 0 66px;
    margin-left: -55px;
    @media screen and (max-width: 768px) {
      margin-left: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      background-color: #fff;
      border-radius: 0 0 20px 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      transform: translateX(100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
      z-index: 15;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 120px;
      &.is-open {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        width: 100%;
      }
    }
    @media screen and (max-width: 375px) {
      margin-left: 0;
      margin-right: 0;
    }
    &-list {
      display: flex;
      gap: 50px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 44px 20px;
      }

      li {
        font-size: 1.29rem;
        line-height: 1.85rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        @media screen and (max-width: 1300px) {
          font-size: 14px;
          line-height: 16px;
        }
        @media screen and (max-width: 768px) {
          font-size: 32px;
          line-height: 38px;
        }
        a {
          color: #606060;
          text-decoration: none;
          text-transform: uppercase;
          @media screen and (max-width: 768px) {
            display: block;
            width: 100%;
          }
        }
        &:hover {
          a {
            color: #000;
          }
          @media screen and (min-width: 769px) {
            margin-top: -7px;
            padding: 8px 20px;
            background-color: #C3C3C3;
            border-radius: 10px;
          }
        }
      }
    }
  }
  &__menu-toggle {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
      position: relative;
      margin-left: 15px;
      z-index: 20;
      .menu-icon {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #606060;
        position: relative;
        transition: all 0.3s ease;
        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 3px;
          background-color: #606060;
          transition: all 0.3s ease;
        }
        &::before {
          top: -8px;
        }
        &::after {
          top: 8px;
        }
      }
      .close-icon {
        font-size: 24px;
        color: #606060;
      }
    }
  }
  .social-links {
    display: none;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 42px;
    }
    a {
      color: #606060;
      text-decoration: none;
      font-size: 18px;
      &:hover {
        color: #000;
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>

