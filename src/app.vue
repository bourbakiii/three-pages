<template>
  <div class="layout">
    <Navigation class="layout__navigation"/>
    <router-view v-slot="{ Component, route }">
<!--      <transition name="opacity-transition" mode="out-in">-->
        <component :key="$route.path" class="page" :is="Component"/>
<!--      </transition>-->
    </router-view>
    <Footer class="layout__footer"/>
  </div>
</template>

<script setup>
import Navigation from "@/components/navigation.vue";
import Footer from "@/components/Footer.vue";
</script>
<style lang="scss">
.layout {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  &__navigation {
    position:sticky;
    top:0;
    z-index: 100;
  }


}


.opacity-transition {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: 1s;
  }
}
</style>
