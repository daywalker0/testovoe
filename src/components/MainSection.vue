<template>
  <section class="main-section">
    <div class="container main-section__container">
      <div class="main-section__content">
        <div class="upper-title--mobile">
          <div class="main-section__divider">
          </div>
          <span>
            OVER 1M CREATORS
          </span>
        </div>
        <div class="main-section__title" :class="{ show: showTitle }">
          Discover And Create NFTs
        </div>
        <div class="main-section__subtitle" :class="{ show: showSubtitle }">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a 
          <span>$20 bonus.</span>
        </div>
        <div class="main-section__actions" :class="{ show: showActions }">
          <button class="button">
            explore More
          </button>
          <button class="button button--white">
            create NFT
          </button>
        </div>
        <div class="main-section__counters" :class="{ show: showCounters }">
          <ul class="main-section__counters-list">
            <li class="main-section__counters-item">
              <div class="main-section__counters-item-counter">
                430K+
              </div>
              <div class="main-section__counters-item-text">
                Art Works
              </div>
            </li>
            <li class="main-section__counters-item">
              <div class="main-section__counters-item-counter">
                159K+
              </div>
              <div class="main-section__counters-item-text">
                Creators
              </div>
            </li>
            <li class="main-section__counters-item">
              <div class="main-section__counters-item-counter">
                87K+
              </div>
              <div class="main-section__counters-item-text">
                Collections
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-section__dots">
      <img src="@/assets/img/main-section-dots.svg">
    </div>

    <div class="main-section__image" :class="{ show: showImage }">
      <img src="@/assets/img/main-section-img.jpg" alt="main-section-image">
    </div>

    <div class="main-section__arrow" :class="{ show: showArrow }">
      <img src="@/assets/img/arrow.svg" alt="main-section-image">
    </div>

    <div class="main-section__image2" :class="{ show: showImage }">
      <img src="@/assets/img/main-section-img2.jpg" alt="main-section-image2">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showImage = ref(false)
const showArrow = ref(false)

const showTitle = ref(false)
const showSubtitle = ref(false)
const showActions = ref(false)
const showCounters = ref(false)


onMounted(() => {
  setTimeout(() => {
    showImage.value = true
  }, 300)
  setTimeout(() => {
    showArrow.value = true
  }, 900)
  setTimeout(() => {
    showTitle.value = true
  }, 300)
  setTimeout(() => {
    showSubtitle.value = true
  }, 600)
  setTimeout(() => {
    showActions.value = true
  }, 900)
  setTimeout(() => {
    showCounters.value = true
  }, 1200)
})
</script>

<style scoped lang="scss">
.main-section {
  background-color: #F9F9F9;
  position: relative;
  min-height: 90vh;
  @media screen and (max-width: 375px) {
    margin-bottom: 115px;
  }
  &__dots {
    position: absolute;
    top: 60px;
    right: -60px;
    @media screen and (max-width: 880px) {
      width: 100px;
      top: 50%;
    }
    @media (max-width: 375px) {
      width: 93px;
      top: 60%;
      img {
        height: 180px;
      }
    }
  }
  &__image {
    position: absolute;
    top: 100px;
    right: 300px;
    width: 391px;
    height: 395px;
    border-radius: 25px;
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease;
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    @media (max-width: 1300px) {
      width: 280px;
      height: 280px;
      right: 200px;
      top: 50px;
    }
    @media (max-width: 1024px) {
      width: 280px;
      height: 280px;
      top: 80px;
    }
    @media screen and (max-width: 880px) {
      top: 60%;
      width: 300px;
      height: 250px;
      left: 25%;
    }
    @media screen and (max-width: 599px) {
      top: 50%;
      left: 10%;
      width: 250px;
    }

    @media (max-width: 375px) {
      width: 210px;
      height: 210px;
      left: 30px;
      border-radius: 14px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 25px;
      @media (max-width: 375px) {
        border-radius: 14px;
      }
    }
  }
  &__image2 {
    position: absolute;
    top: 300px;
    right: -50px;
    width: 320px;
    height: 325px;
    border-radius: 22px;
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease;
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    @media (max-width: 1300px) {
      width: 230px;
      height: 230px;
      top: 250px;
    }
    @media screen and (max-width: 880px) {
      top: 70%;
    }
    @media (max-width: 375px) {
      width: 170px;
      height: 170px;
      right: -70px;
      top: 75%;
      border-radius: 14px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 22px;
      @media (max-width: 375px) {
        border-radius: 14px;
      }
    }
  }
  &__container {
    padding-top: 70px;
    padding-bottom: 170px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 490px;
    @media (max-width: 1300px) {
      max-width: 350px;
    }
    @media screen and (max-width: 880px) {
      max-width: 100%;
      align-items: center;
      text-align: center;
    }
  }
  &__title {
    font-size: 5.35rem;
    line-height: 6rem;
    letter-spacing: -3px;
    font-weight: 600;
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease;
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    @media (max-width: 1300px) {
      font-size: 54px;
      line-height: 62px;
      letter-spacing: -2px;
    }
    @media screen and (max-width: 375px) {
      font-size: 48px;
      list-height: 54px;
    }
  }
  &__subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;
    margin: 2rem 0 3.142rem;
    color: #676767;
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease;
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    span {
      color: #000;
      font-weight: 600;
    }

    @media (max-width: 1300px) {
      font-size: 13px;
      line-height: 18px;
      margin: 15px 0 36px;
    }

    @media screen and (max-width: 375px) {
      font-size: 11px;
      line-height: 17px;
    }
  }
  &__divider {
    width: 195px;
    height: 1px;
    background-color: #201F1F;
    margin-bottom: 0.715rem;
    opacity: 0.2;
    @media screen and (max-width: 599px) {
      width: 33px;
    }
  }
  &__actions {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 5.78rem;
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease;
    button {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      border-radius: 12px;
      padding: 18px 31px;
      @media (max-width: 1300px) {
        padding: 15px 21px;
        font-size: 11px;
        border-radius: 10px;
      }
    }
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    @media (max-width: 1300px) {
      margin-bottom: 58px;
    }
  }
  &__counters {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease;
    @media screen and (max-width: 599px) {
      display: none;
    }
    &.show {
      opacity: 1;
      transform: translateX(0);
    }
    &-list {
      display: flex;
      gap: 4.2rem;
      @media screen and (max-width: 1300px) {
        gap: 40px;
      }
    }
    &-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.715;
      &-counter {
        font-size: 2.57rem;
        line-height: 3rem;
        font-weight: 600;
        font-family: 'PublicSans', sans-serif;
        margin-bottom: 10px;
        @media screen and (max-width: 1300px) {
          font-size: 26px;
          line-height: 30px;
        }
      }
      &-text {
        font-size: 0.85rem;
        line-height: 1.15rem;
        font-weight: 500;
        color: #848586;
        font-family: 'Inter', sans-serif;
        @media screen and (max-width: 1300px) {
          font-size: 9px;
          line-height: 13px;
        }
      }
    }

  }
  &__arrow {
    position: absolute;
    top: 150px;
    right: 150px;
    opacity: 0;
    transition: all 3s ease;
    transform: rotate(-7deg);
    &.show {
      opacity: 1;
    }
    @media screen and (max-width: 1300px) {
      right: 100px;
      width: 91px;
      height: 88px;
    }
    @media screen and (max-width: 880px) {
      top: 60%;
      right: 180px;
    }
    @media screen and (max-width: 599px) {
      top: 55%;
      right: 100px;
    }
    @media (max-width: 375px) {
      width: 58px;
      height: 58px;
      right: 40px;
      top: 65%;
    }
  }
}

.upper-title--mobile {
  display: none;
  @media screen and (max-width: 599px) {
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 12px;
    font-weight: 600;
    color: #676767;
    white-space: nowrap;
    span {
      margin-left: 4px;
      margin-top: -6px;
    }
  }
}
</style>
