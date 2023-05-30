<template>
  <input class='checkbox-input' type="checkbox" v-bind="$attrs">
  <label :tabindex="$attrs.disabled?-1:0" class="checkbox" :for="$attrs.id">
    <icon class="checkbox__icon" name="checkbox-mark"/>
  </label>

</template>

<script setup>
import Icon from "@/components/icon.vue";
</script>

<style lang="scss" scoped>
.checkbox-input {
  display: none;

  &:checked + .checkbox > .checkbox__icon {
    display: block;
  }

  &:disabled + .checkbox > .checkbox__icon {
    stroke: $gray-200;
  }

  &:disabled + .checkbox {
    cursor: default;
    background: $gray-100;
    border: 1.57361px solid $gray-200;
  }

  &:not(&:disabled) + .checkbox:hover {
    background: $primary-50;
    border-color: $primary-600;
  }

  &:not(&:disabled) + .checkbox:focus {
    box-shadow: 0 0 0 6.29px #F4EBFF;
    border: 1.57361px solid $primary-300;
  }

}

.checkbox {
  cursor: pointer;
  width: 25.18px;
  height: 25.18px;
  border: 1.57361px solid $gray-300;
  border-radius: 6.29444px;
  background-color: white;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    display: none;
    stroke: $primary-600;
  }

}

</style>