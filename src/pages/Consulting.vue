<template>
  <main class="page consulting-page">
    <h1 class="consulting-page__title main-title">
      CONSULTING
    </h1>
    <div class="consulting-page__content content">
      <h2 class="content__title big-title">Simple, easy pricing</h2>
      <span class="content__small-text small-after-title-text"> Amet minim mollit non deserunt  ullamco.
        </span>

      <div class="progress-bar">
        <span v-for="item in 6" class="progress-bar__indicator"/>
        <div class="progress-bar__coating">
          <div class="progress-bar__circle"></div>
          <div class="progress-bar__count">100 users</div>
        </div>
      </div>

      <div class="cards anim-fadeinup">
        <div class="cards__item card" v-for="item in 3">
          <div class="card__content">
            <span class="card__type">Personal</span>
            <span class="card__price-row">
              <span class="card__price">
                $19
              </span>
              <span class="card__price-duration">/ month</span>
            </span>
            <p class="card__description">All the basic features to boost your freelance career</p>
          </div>
          <hr class="card_hr"/>
          <div class="card__options">
            <div class="option" v-for="option in 5">
              <icon class="option__check" name="card-check"/>
              <p class="option__text">Full Access to Landingfolio</p>
              <icon class="option__mark" name="card-mark"/>
            </div>
          </div>
          <div class="card__button-wrapper">
            <button class="card__button">Get 14 Days Free Trial</button>
          </div>
        </div>
      </div>

      <div class="content__statuses statuses">
        <button v-for="status in 8" class="statuses__item" :class="status===1?'active':''">
          Status
        </button>
      </div>

      <div class="content__selects selects anim-fadeinup">
        <div v-for="(select, index) in 8" class="selects__item select">
          <checkbox class="select__checkbox" :id="`some-id-${index}`"
                    v-bind="{'checked': index%2===1, 'disabled': index>=6}"/>
          <div class="select__text">
            <p class="select__name">Remember me</p>
            <p class="select__description">Save my login details for next time.</p>
          </div>
        </div>
      </div>
      <div class="total-price anim-fadeinup">
        <div class="total-price__price">
        <span class="total-price__bold">
          Total price: $49
        </span>
          <span class="total-price__duration">/ month</span>
        </div>
        <button class="total-price__button">

          Заказать

        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import Checkbox from "@/components/checkbox.vue";
import {onMounted} from "vue";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  console.log('all-', document.querySelectorAll(".anim-fadeinup").length);
  document.querySelectorAll(".anim-fadeinup").forEach(function (element, index) {
    console.log(index);
    let tl_FadeInUp = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        // start: "top bottom",      start: "top bottom",
        markers: false,
      },
    });
    tl_FadeInUp.from(element,
        {
          duration: 1,
          autoAlpha: 0, x: (index % 2 == 0) ? 100 : -100,
          ease: Expo.easeOut, clearProps: "all",
        }    // "+=0.3"
    );
  });
  console.log('App mounted');
})

</script>

<style lang="scss">
.consulting-page {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: calc($page-maxwidth + $basic_side_padding * 2);
  margin-top: 173px;
  padding: 0 $basic_side_padding;

  &__title {
    text-transform: uppercase;
    margin-bottom: 0 auto 114px;
    text-align: center;
  }
}

.content {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: viewport-calculate($notebook_start, $phone, 32px, 20px);

  &__title {
    margin-bottom: viewport-calculate($notebook_start, $phone, 20px, 15px);
    text-align: center;
  }
}

.progress-bar {
  height: 8.35px;
  border-radius: 60px;
  background-color: #A5F4FF;
  position: relative;

  margin-top: viewport-calculate($notebook_start, $phone, 100px, 50px);

  &__indicator {
    height: 15.76px;
    width: 2px;
    background-color: $gray-700;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;

    &:nth-child(1) {
      left: calc(100% / 7);
    }

    &:nth-child(2) {
      display: none;
      left: calc(100% / 7 * 2);
    }

    &:nth-child(3) {
      left: calc(100% / 7 * 3);
    }

    &:nth-child(4) {
      left: calc(100% / 7 * 4);
    }

    &:nth-child(5) {
      left: calc(100% / 7 * 5);
    }

    &:nth-child(6) {
      left: calc(100% / 7 * 6);
    }

  }

  &__coating {
    position: absolute;
    height: calc(100% - 2px);
    width: calc(100% / 7 * 2);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: linear-gradient(98.24deg, #6DDCFF 0%, #7F60F9 100%);
    border-radius: 60px;

  }

  &__circle {
    position: absolute;
    top: 50%;
    right: 0;
    content: '';
    border-radius: 50%;
    transform: translate(50%, -50%);
    background: linear-gradient(98.24deg, #6DDCFF 0%, #7F60F9 100%);
    width: 15.6px;
    height: 15.6px;

    &::before {
      content: '';
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 11px;
      height: 11px;
      background-color: black;
    }
  }

  &__count {
    position: absolute;
    bottom: 100%;
    left: 100%;
    transform: translate(-50%, -13px);
    display: flex;
    padding: 0 6px;
    width: min-content;
    height: 25px;
    white-space: nowrap;
    text-align: center;
    background-color: $gray-800;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(13px);
    line-height: calc(21 / 13 * 100%);
    border-radius: 5px;
    color: white;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 14px;
      height: 5px;
      transform: translate(-50%, -2px);
      background-color: $gray-800;
      clip-path: polygon(50% 100%, 0 0, 100% 0)
    }
  }
}

.cards {
  margin-top: viewport-calculate($notebook_start, $phone, 63px, 40px);
  display: flex;
  gap: viewport-calculate($notebook_start, $notebook_start, 30px, 10px);
  @media screen and (max-width: $notebook) {
    flex-direction: column;
  }

  @media screen and (max-width: $tablet) {
    max-width: 350px;
    align-items: center;
    align-self: center;
  }


  &__item {
    background: rgba(120, 146, 251, 0.86);
  }
}

.card {
  padding: viewport-calculate($notebook_start, $notebook, 31px, 16px) viewport-calculate($notebook_start, $notebook, 33px, 10px) viewport-calculate($notebook_start, $notebook, 39px, 20px) viewport-calculate($notebook_start, $notebook, 34px, 10px);

  color: white;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 6px;


  @media screen and (max-width: $notebook) {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &__hr {
      display: none;
    }
  }

  @media screen and (max-width: $tablet) {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    &__hr {
      display: block;
    }
  }

  &__type {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(18px);
    line-height: calc(30 / 18 * 100%);
  }

  &__price-row {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
  }

  &__price {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(60px);
    line-height: calc(66 / 60 * 100%);
  }

  &__price-duration {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(16px);
    line-height: calc(24 / 16 * 100%);
    color: #00EEEE;
  }

  &__description {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(16px);
    line-height: calc(24 / 16 * 100%);

    width: 100%;
    max-width: 259px;
    margin-bottom: 31px;
  }

  &__options {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;
    @media screen and (max-width: $notebook) {
      gap: 10px;
      margin-top: 0;
    }
    @media screen and (max-width: $tablet) {
      margin-top: 15px !important;
    }
  }

  &__button {
    &-wrapper {
      background: linear-gradient(0deg, #6DDCFF 100%, #E3F960 100%);
      border-radius: 41px;
      height: 52px;
      padding: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 36px;
      @media screen and (max-width: $notebook) {
        margin: 0;
      }
      @media screen and (max-width: $tablet) {
        margin-top: 15px;
      }

    }

    background: rgba(120, 146, 251, 0.86);
    padding: 0 30px;
    width: 100%;
    height: 100%;
    border-radius: 42px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(16px);
    line-height: calc(24 / 16 * 100%);
  }
}

.option {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: font-calculate(16px);
  line-height: calc(24 / 16 * 100%);

  &__check {
    flex-shrink: 0;
    margin-right: 8px;
  }

  &__mark {
    flex-shrink: 0;
    margin-left: 12px;
  }

}

.statuses {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: viewport-calculate($notebook_start, $phone, 109px, 50px);
  margin-bottom: viewport-calculate($notebook_start, $phone, 70px, 50px);
  @media screen and (max-width: $tablet) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
  }
  @media screen and (max-width: $phone) {
    grid-template-columns: 1fr 1fr;
  }

  &__item {
    border-radius: 90px;
    padding: 9.56px 12.74px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: font-calculate(22.3014px);
    line-height: 100%;
    background-color: #E8F1FF;
    color: #0250EC;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      color: white;
      background-color: #0250EC;
    }
  }
}

.selects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: viewport-calculate($notebook_start, $phone, 40px, 20px) viewport-calculate($notebook_start, $phone, 50px, 25px);
  @media screen and (max-width: $tablet) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.select {
  display: flex;
  gap: 12.6px;
  justify-content: flex-start;
  align-items: flex-start;

  &__text {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
  }

  &__name {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: font-calculate(22px);
    line-height: 100%;

    color: $gray-700;
  }

  &__description {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(22px);
    line-height: calc(31 / 22 * 100%);
    color: $gray-500;
  }


}


.total-price {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: flex-end;
  margin-top: viewport-calculate($notebook_start, $phone, 86px, 40px);
  @media screen and (max-width: $notebook) {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
  @media screen and (max-width: $tablet) {
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  &__price {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(60px, 2.3);
    line-height: calc(66 / 60 * 100%);

    color: #414141;
  }

  &__duration {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(16px);
    line-height: calc(24 / 16 * 100%);

    color: #909090;
  }

  &__button {
    background: radial-gradient(98.52% 170.5% at 1.48% -21.11%, #9303EB 0%, #4C0083 100%);
    border-radius: 56.314px;
    height: 48.73px;
    padding: 0 52px;
    width: max-content;
    margin: auto 0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(23.8252px);
    line-height: calc(29 / 23.8 * 100%);

    color: white;

  }
}


</style>