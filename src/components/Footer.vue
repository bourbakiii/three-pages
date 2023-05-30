<template>
  <footer class="footer-wrapper">
      <h5 class="footer__title">Contact us</h5>
      <p class="footer__text">Lorem ipsum dolor sit amet, consectetur</p>

    <p class="footer__after-text">
      <span class="footer__after-bold">Phone: </span>
      +998 (99) 999-99-99
    </p>
    <p class="footer__after-text">
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
  padding: 44px 0 83px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  &__title{

  }
}
</style>