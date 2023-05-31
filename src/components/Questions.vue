<template>
  <div class="questions">
    <small class="questions__pre">
      FAQ
    </small>
    <h3 class="questions__title">Answers to our frequently asked questions</h3>
    <div class="question__content">
      <div class="question">
        <button class="question__button">
          What is Tailwind CSS?
        </button>
        <div class="question__content">
          Tailwind CSS is a CSS framework like Bootstrap, that speeds up development time for developers. Tailwind CSS
          uses classes to style elements, meaning you do not have to write any CSS.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.questions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: viewport-calculate($notebook_start, $phone_start, 128px, 30px) viewport-calculate($notebook_start, $phone_start, 272px, 30px) viewport-calculate($notebook_start, $phone_start, 171px, 80px);
  width: 100%;
  background: #060F51;
  color: white;

  &__pre {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11.7px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background: linear-gradient(98.24deg, #6DDCFF 0%, #7F60F9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__title {
    margin: viewport-calculate($notebook_start, $phone, 29px, 14.5px) 0 viewport-calculate($notebook_start, $phone, 96.3px, 45px);
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(72px, 2.4);
    line-height: calc(81 / 72 * 100%);
  }
  &__content{
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }
}

.question {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

  &__button {
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(32.4px);
    line-height: 150%;
    min-height: 121.5px;
    padding: viewport-calculate($notebook_start, $phone, 30px, 10px) 0;
    text-align: left;
    border-bottom: 0.9px solid $gray-500;

    &:first-of-type{
      border-top: 0.9px solid $gray-500;
    }
  }
}
</style>