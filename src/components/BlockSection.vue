<template>
  <section class="block-section">
    <div class="container block-section__container">
      <div class="block-section__block">
        <div class="block-section__block_wrapper">
          <div class="block-section__block_content">
            <h2 class="block-section__block_title">
              Create and Sell NFTs
            </h2>
            <div class="block-section__block_subtitle">
              World’s Largest NFT Place
            </div>
            <div class="block-section__block_actions">
              <button class="button block-section__block_button button--white">
                Explore More
              </button>
              <button class="button block-section__block_button">
                Sell Artwork
              </button>
            </div>
          </div>

          <div class="block-section__block_image">
            <img src="@/assets/img/block-img.png" alt="block-section-image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.block-section {
  background-color: #F9F9F9;
  margin: 120px 0 260px;
  @media screen and (max-width: 375px) {
    margin: 70px 0 160px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__block {
    background-color: #141416;
    width: 100%;
    border-radius: 30px;
    padding: 31px;
    @media (max-width: 1124px) {
      padding: 23px;
      padding-bottom: 100px;
      border-radius: 15px;
    }
    &_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1124px) {
        flex-direction: column;
        text-align: center;
        position: relative;
      }
    }
    &_title {
      font-size: 45px;
      line-height: 48px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #fff;
      @media (max-width: 1124px) {
        font-size: 33px;
        line-height: 36px;
        margin-bottom: 9px;
      }
      @media (max-width: 599px) {
        font-size: 24px;
        line-height: 24px;
      }
    }
    &_subtitle {
      font-size: 20px;
      line-height: 22px;
      font-weight: 500;
      margin-bottom: 57px;
      color: #D4D4D4;
      @media (max-width: 1124px) {
        font-size: 15px;
        line-height: 16.5px;
        margin-bottom: 22px;
      }
      @media (max-width: 599px) {
        font-size: 10px;
        line-height: 130%;
      }
    }
    &_actions {
      display: flex;
      gap: 24px;
      @media screen and (max-width: 1024px) {
        justify-content: center;
      }
    }
    &_content {
      padding: 17px 32px;
      @media (max-width: 1124px) {
        padding: 13px 24px;
      }
      @media (max-width: 768px) {
        padding: 0
      }
    }
    &_image {
      border-radius: 15px;
      @media (max-width: 1124px) {
        position: absolute;
        bottom: -300px;
      }
      @media (max-width: 768px) {
        width: 100%;
        height: 200px;
        bottom: -250px;
      }
      @media (max-width: 599px) {
        width: 251px;
        height: 130px;
        bottom: -170px;
      }
      @media (max-width: 375px) {
        bottom: -170px;
      }
      img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-box-shadow: 0px 16px 33px 19px rgba(79, 84, 88, 0.2);
        -moz-box-shadow: 0px 16px 33px 19px rgba(79, 84, 88, 0.2);
        box-shadow: 0px 16px 33px 19px rgba(79, 84, 88, 0.2);
      }
    }
    &_button {
      font-family: 'Outfit', sans-serif;
      text-transform: capitalize;
      font-weight: 600;
      padding: 20px 24px;
      border-radius: 12px;
      font-size: 22px;
      @media (max-width: 1024px) {
        padding: 15px 18px;
        font-size: 16px;
        line-height: 130%;
        border-radius: 9px;
      }
      @media screen and (max-width: 599px) {
        padding: 10px 13px;
        font-size: 11px;
        line-height: 130%;
      }
    }
    
  }
}
</style>