<template>
    <div class="navigation-wrapper">
        <nav class="navigation">
            <icon class="navigation__logo" name="og-nav-logo"/>
            <router-link class="navigation__logo-wrapper" to="#">
            </router-link>
            <div class="navigation__links-wrapper">
                <button class="navigation__burger">
                    Меню
                </button>

                <div class="navigation__links">
                    <router-link v-for="link in links" class="navigation__link" :to="link.to">{{
                            link.name
                        }}
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";

const links = [{
    name: 'Главная',
    to: '/',
},
    {
        name: 'О нас',
        to: '#',
    },

    {
        name: 'Наши проекты',
        to: '#',
    },
    {
        name: 'Об услугах',
        to: '#',
    },
    {
        name: 'Почему мы',
        to: '#',
    },
    {
        name: 'Нам доверяют',
        to: '#',
    },
    {
        name: 'Контакты',
        to: '#',
    }]
</script>

<style lang="scss">

.navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;
    max-width: 1262px;
    height: max-content;
    color: $nav-purple;

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: viewport-calculate($notebook_start, $phone, 20px, 10px)  $basic_side_padding 10px;
        background-color: white;

        &:hover, &:active, &:focus-within {

            & .navigation__links {
                display: flex;
            }
        }
    }

    &__logo {
        width: viewport-calculate($notebook_start,$phone,83px, 65px);
        height: viewport-calculate($notebook_start,$phone,45px, 37px);
        flex-shrink: 0;
    }

    &__burger {
        background: radial-gradient(98.52% 170.5% at 1.48% -21.11%, #9303EB 0%, #4C0083 100%);
        border-radius: 56.314px;
        height: 43px;
        padding: 0 32px;
        width: -moz-max-content;
        width: max-content;
        margin: auto 0;
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 400;
        color: white;
        font-size: font-calculate(20px);
        display: none;

        @media screen and (max-width: $notebook) {
            display: block;


        }
    }

    &__links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: viewport-calculate($notebook_start, $tablet, 40px, 15px);
        width: max-content;


        &-wrapper {
            position: relative;
        }

        @media screen and (max-width: $notebook) {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 10px;
            background-color: white;
            padding: 10px;
            justify-content: flex-start;
            align-items: stretch;
            flex-direction: column;
            gap: 14px;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, .3);
            border-radius: 10px;
            display: none;
        }
    }

    &__link {
        color: inherit;
        text-decoration: none;

        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: font-calculate(22px);
        line-height: calc(27 / 22 * 100%);
        @media screen and (max-width: $notebook) {
            font-size: 14px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
