<template>
  <footer class="footer">
      <h5 class="footer__title">Contact us</h5>
      <p class="footer__text">Lorem ipsum dolor sit amet, consectetur</p>

    <p class="footer__after-text">
      <span class="footer__after-bold">Phone: </span>
      +998 (99) 999-99-99
    </p>
    <p class="footer__after-text second">
      <span class="footer__after-bold">E-mail: </span>
      forexample@gmail.com
    </p>

    <div class="footer__socials">
      <router-link class="footer__social" to="#">
        <icon name="facebook-footer"/>
      </router-link>
      <router-link class="footer__social" to="#">
        <icon name="tweeter-footer"/>
      </router-link>
      <router-link class="footer__social" to="#">
        <icon name="telegram-footer"/>
      </router-link>
    </div>
  </footer>
</template>

<script setup>
import Icon from "@/components/icon.vue";
</script>

<style lang="scss">
.footer{
  width: 100%;
  padding:viewport-calculate($notebook_start,$phone,44px, 30px)  0 viewport-calculate($notebook_start,$phone,83px, 30px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__title{
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: font-calculate(48px);
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.25px;
    background: radial-gradient(201.23% 208.87% at -96.19% 45.19%, #6072B2 48.46%, #3B095F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: viewport-calculate($notebook_start, $phone, 50px, 20px);
  }
  &__text{
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(24px);
    line-height: 140%;
    text-align: center;
    margin-bottom: viewport-calculate($notebook_start, $phone, 48px, 24px);

  }
  &__after-text{
    white-space: nowrap;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: font-calculate(18px);
    line-height: 140%;
    text-align: center;
    &.second{
      margin-top:8px;
    }
  }
  &__socials{
    display: flex;
    gap: 12px;
    margin-top: viewport-calculate($notebook_start, $phone, 20px, 13px);
  }
  &__social{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 10px;
    width: 32px;
    height: 32px;
    background: radial-gradient(201.23% 208.87% at -96.19% 45.19%, #6072B2 48.46%, #3B095F 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(77.5px);
    border-radius: 48px;
  }

}
</style>