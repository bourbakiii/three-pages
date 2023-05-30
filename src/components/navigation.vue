<template>
  <div class="navigation-wrapper">
    <nav class="navigation">
      <icon class="navigation__logo" name="og-nav-logo"/>
      <router-link class="navigation__logo-wrapper" to="#">
      </router-link>
      <div class="navigation__links">
        <router-link class="navigation__link" to="#">Главная</router-link>
        <router-link class="navigation__link" to="#">О нас</router-link>
        <router-link class="navigation__link" to="#">Наши проекты</router-link>
        <router-link class="navigation__link" to="#">Об услугах</router-link>
        <router-link class="navigation__link" to="#">Почему мы</router-link>
        <router-link class="navigation__link" to="#">Нам доверяют</router-link>
        <router-link class="navigation__link" to="#">Контакты</router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
</script>

<style lang="scss">

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border: 1px solid black;
  width: 100%;
  max-width: 1262px;
  height: 50px;
  background-color: rgba(100, 0, 0, .2);
  color: $nav-purple;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }

  &__logo {
    width: 83px;
    height: 48px;
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: viewport-calculate($notebook_start, $tablet, 40px, 15px);
    width: max-content;
  }

  &__link {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>