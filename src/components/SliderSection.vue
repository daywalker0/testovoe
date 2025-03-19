<template>
  <section class="slider-section">
    <div class="slider-section__container">
      <div class="slider-section__title">
        Weekly - Top NFT
      </div>
      <div class="slider-wrapper">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="4"
          :space-between="40"
          :loop="true"
          @swiper="onSwiperInit"
          class="mySwiper"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }"
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <div class="nft-card">
              <div class="nft-card__image">
                <img :src="slide.image" :alt="slide.title" />
                <div class="nft-card__timer">
                  {{ String(slide.timer.hours).padStart(2, '0') }}h 
                  {{ String(slide.timer.minutes).padStart(2, '0') }}m 
                  {{ String(slide.timer.seconds).padStart(2, '0') }}s
                </div>
              </div>
              <div class="nft-card__info">
                <h3>{{ slide.title }}</h3>
                <p>Current bid</p>
                <div class="nft-card__bid">
                  <div class="nft-card__bid-item">
                    <img src="@/assets/img/ethereum.svg" alt="ethereum">
                    <span>{{ slide.bid }}</span>
                  </div>
                  <button class="bid-button">PLACE BID</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Кастомные стрелки под слайдером -->
        <div class="custom-navigation">
          <button ref="prevButton" class="custom-prev">←</button>
          <button ref="nextButton" class="custom-next">→</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import blockImage1 from '../assets/img/slider/block-1.jpg';
import blockImage2 from '../assets/img/slider/block-2.jpg';
import blockImage3 from '../assets/img/slider/block-3.jpg';
import blockImage4 from '../assets/img/slider/block-4.jpg';
import blockImage5 from '../assets/img/slider/block-5.jpg';

const slides = ref([
  { image: blockImage1, title: 'Sun-Glass', timer: '', bid: 0 },
  { image: blockImage2, title: 'Sun-Glass', timer: '', bid: 0 },
  { image: blockImage3, title: 'Sun-Glass', timer: '', bid: 0 },
  { image: blockImage4, title: 'Sun-Glass', timer: '', bid: 0 },
  { image: blockImage5, title: 'Sun-Glass', timer: '', bid: 0 },
]);

const prevButton = ref(null);
const nextButton = ref(null);

const onSwiperInit = (swiper) => {
  swiper.params.navigation.prevEl = prevButton.value;
  swiper.params.navigation.nextEl = nextButton.value;
  swiper.navigation.init();
  swiper.navigation.update();
};

const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  return { hours, minutes, seconds };
};

const generateRandomBid = () => {
  return (Math.random() * (5 - 0.5) + 0.5).toFixed(2);
};

onMounted(() => {
  slides.value = slides.value.map(slide => {
    const time = generateRandomTime();
    return {
      ...slide,
      timer: { ...time },
      bid: generateRandomBid()
    };
  });

  setInterval(() => {
    slides.value.forEach(slide => {
      if (slide.timer.seconds > 0) {
        slide.timer.seconds--;
      } else if (slide.timer.minutes > 0) {
        slide.timer.minutes--;
        slide.timer.seconds = 59;
      } else if (slide.timer.hours > 0) {
        slide.timer.hours--;
        slide.timer.minutes = 59;
        slide.timer.seconds = 59;
      }
    });
  }, 1000);
});
</script>

<style scoped lang="scss">
.slider-section {
  background-color: #f1f1f1;
  text-align: center;

  &__container {
    padding: 70px 0;
    margin: auto;
    @media screen and (max-width: 375px) {
      padding: 50px 0;
    }
  }

  &__title {
    font-size: 46px;
    line-height: 48px;
    font-weight: 600;
    color: #c5c5c5;
    margin-bottom: 70px;
    @media screen and (max-width: 375px) {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 50px;
    }
  }
}

.slider-wrapper {
  position: relative;
}

.mySwiper {
  width: 100%;
  padding-bottom: 40px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nft-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  padding: 15px;
  width: 281px;

  &__image {
    position: relative;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 253px;
      height: 253px;
      object-fit: cover;
      border-radius: 24px;
    }
  }

  &__timer {
    font-family: 'Poppins', sans-serif;
    position: absolute;
    top: 14px;
    right: 11px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 14px;
    line-height: 100%;
    font-weight: 500;
    padding: 10px 14px;
    border-radius: 10px;
  }

  &__info {
    padding: 10px 0;

    h3 {
      font-size: 22px;
      line-height: 24px;
      font-weight: 600;
      margin-bottom: 24px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 100%;
      color: #94A3B8;
    }
  }

  &__bid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;

    &-item {
      display: flex;
      gap: 4px;
    }

    span {
      font-size: 16px;
      font-weight: 500;
    }
  }
}

.bid-button {
  background: #000;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
}

/* Кастомные стрелки */
.custom-navigation {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.custom-prev,
.custom-next {
  background: #fff;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
  outline: none;

  &:hover {
    background: #f5f5f5;
  }
}

.custom-prev {
  border-radius: 12px 0 0 12px;
  border-right: 1px solid #E0E0E0;
}

.custom-next {
  border-radius: 0 12px 12px 0;
  border-left: 1px solid #E0E0E0;
}
</style>
