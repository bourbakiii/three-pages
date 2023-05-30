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

      <div class="cards">
        <div class="cards__item card" v-for="item in 3">
          <span class="card__type">Personal</span>
          <span class="card__price-row">
              <span class="card__price">
                $19
              </span>
              <span class="card__price-duration">/ month</span>
            </span>
          <p class="card__description">All the basic features to boost your freelance career</p>
          <hr/>
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
        <button v-for="status in 8" class="statuses__item" :class="status==1?'active':''">
          Status
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import Icon from "@/components/icon.vue";
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
  border: 1px solid black;
  padding: 0 $basic_side_padding;

  &__title {
    text-transform: uppercase;
    margin-bottom: 114px;
  }
}

.content {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  &__title {
    text-align: center;
  }
}

.progress-bar {
  height: 8.35px;
  border-radius: 60px;
  background-color: #A5F4FF;
  position: relative;

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
    font-size: 13px;
    line-height: 21px;
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
  margin-top: 63px;
  display: flex;
  gap: 30px;

  &__item {
    background: rgba(120, 146, 251, 0.86);
  }
}

.card {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  padding: 31px 33px 39px 34px;
  color: white;
  flex-grow: 1;
  flex-shrink: 0;

  &__type {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
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
    font-size: 60px;
    line-height: 66px;
  }

  &__price-duration {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #00EEEE;
  }

  &__description {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
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

    }

    background: rgba(120, 146, 251, 0.86);

    width: 100%;
    height: 100%;
    border-radius: 42px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

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
  font-size: 16px;
  line-height: 24px;

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
  &__item {
    border-radius: 90px;
    padding: 9.56px 12.74px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22.3014px;
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



</style>