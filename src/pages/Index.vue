<template>
    <div class="page index-page">
        <!-- [frame heading start] -->
        <img class='back-image absolute -z-10 w-full' :src=frameHeading alt='Frame heading'/>
        <!-- [frame heading end] -->

        <!-- [main start] -->
        <main class="index-page__content anim-up" id='scrollspy' role='main'>

            <!-- banner start -->
            <section class="index-page__banner-start  anim-up"
                     id='home' role="banner">

                <!-- hero start -->
                <div class="2xl:max-w-[90em] max-w-[82em] w-full mx-auto px-4 sm:px-6 lg:px-8">

                    <!-- grid start -->
                    <div
                        class="flex lg:gap-x-8 xl:gap-x-12 flex-wrap lg:flex-nowrap place-items-center justify-between items-center">

                        <!-- col start -->
                        <div class="lg:basis-2/3">
                            <div class='space-y-[25px]'>
                                <p class="mt-3 text-lg font-semibold text-[15.59] text-blue-600 dark:text-gray-400">
                                    Improve your
                                    worklife</p>
                                <h1 class="block text-3xl leading-[60px] font-bold text-gray-800 text-[50.68px] sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                                    Remote work
                                    made easy with
                                    better tools.</h1>
                            </div>
                            <div class="mt-3 lg:mt-6 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <div class="checks w-full sm:w-auto flex gap-16">
                                    <div class='flex items-center gap-4' v-for='c in checks' :key='c.label'>
                                        <img :src="checkIcon" alt='Check'/>
                                        <p class='font-semibold text-lg'>{{ c.label }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 lg:mt-12">
                                <p class='text-[#060F51] text-2xl'>Lorem ipsum dolor sit amet consectetur. At elementum
                                    enim et aliquam
                                    donec dis accumsan. Integer feugiat
                                    convallis nisl odio cursus aliquet metus
                                    lobortis eget.</p>
                            </div>
                            <div class="mt-6 lg:mt-12">
                                <a class='bg-primary text-white rounded-full w-full lg:w-max py-3 font-semibold px-14 text-center'
                                   href='#'>Заказать</a>
                            </div>
                        </div>
                        <!-- col end -->

                        <!-- col start -->
                        <div class="lg:basis-1/3 mt-10 lg:mt-0  main-image-wrapper">
                            <img class='w-full h-auto lg:w-auto' :src=heading alt="Heading"/>
                        </div>
                        <!-- col end -->

                    </div>
                    <!-- grid end -->

                </div>
                <!-- hero end -->

            </section>
            <!-- banner end -->

            <!-- about start -->
            <section
                class="anim-up index-page__our-company 2xl:bg-bottom bg-no-repeat bg-center 2xl:bg-cover"
                id='about'>
                <div class="2xl:max-w-[90em] max-w-[82em] max-w-2xl mx-auto text-center ">
                    <h2 class="2xl:text-3xl font-bold text-6xl md:leading-tight dark:text-white">Our company</h2>
                    <p class="mt-4 text-base text-gray-600 mx-auto max-w-md">Clarity gives you the blocks & components
                        you need
                        to create a truly professional website,
                        landing page or admin panel for your SaaS.</p>
                </div>
                <!--        <div>-->
                <!--          <div-->
                <!--              class="inline-block absolute rotate-[3.82deg] z-40 overflow-hidden 2xl:left-[940px] left-[260px] top-[1555px] 2xl:top-[1295px]">-->
                <!--            <div-->
                <!--                class="h-[17px] w-[32px] origin-top-left -rotate-45 drop-shadow-md transform rounded-lg bg-white">-->
                <!--              123123-->
                <!--            </div>-->
                <!--          </div>-->
                <!--        </div>-->

                <div class="index-page__company-image">
                    <img src="@/assets/images/team.png" alt="Company image">
                    <div
                        class='index-page__jenny shadow-md rounded-xl z-30 text-center bg-[rgba(255, 255, 255, 0.85)] backdrop-blur-md rotate-[2.18deg]'>
                        <p class='text-[#090914] font-semibold text-[14px]'>Jenny Wilson</p>
                        <p class='text-gray-600 text-[12px]'>Co-Founder, CEO</p>
                    </div>
                </div>
            </section>
            <!-- about end -->

            <!-- portofilo start -->
            <section
                class=" anim-up index-page__portfolio z-10 relative"
                id='projects'>
                <div class="2xl:max-w-[90em] max-w-[82em] w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div class='flex flex-col  max-w-2xl'>
                        <div class='space-y-[60px]'>
                            <div class='space-y-[30px]'>
                                <h2 class='text-white font-bold text-5xl'>Portfolio</h2>
                                <p class='text-[24px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. In nunc nisl
                                    eu consectetur. Mi massa elementum odio eu
                                    viverra amet.</p>
                            </div>
                            <div class='flex items-center gap-[30px]'>
                                <a class='text-black font-semibold py-3 px-6 rounded-md text-center block text-sm bg-white'>Show
                                    more</a>
                                <a class='2xl:text-white font-semibold py-3 px-6 text-center block text-sm text-white'>Open
                                    galery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="@/assets/images/portfolio-mockup.png" alt="Mockup" class="index-page__portfolio-mockup">
            </section>
            <!-- portfolio end -->

            <!-- services start -->
            <section class='anim-up index-page__services z-0' id='services'>
                <div class='w-full bg-[#F9F5FF] cards-title'>
                    <div class='max-w-md mx-auto text-center space-y-4 pt-32'>
                        <h2 class='text-[#42307D] text-5xl font-semibold'>Service</h2>
                        <p class='text-[#6941C6] text-lg'>All services what we do</p>
                    </div>
                </div>
                <div
                    class="index-page__cards">
                    <div class="2xl:max-w-[90em] max-w-[82em] w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div class='grid lg:grid-cols-3 grid-cols-1 gap-[32px]'>
                            <div class="flex flex-col bg-white border border-[#EAECF0] rounded-xl shadow-lg"
                                 v-for='s in services'
                                 :key='s.label'>
                                <div class="p-[32px] 2xl:p-10">
                                    <div class='flex flex-col items-center'>
                                        <img class='mb-[20px]' :src='s.icon' alt='Icon'/>
                                        <h3 class="text-lg mb-[8px] font-semibold text-[#6941C6]">
                                            {{ s.label }}
                                        </h3>
                                        <p class="text-gray-600">
                                            {{ s.sublabel }}
                                        </p>
                                    </div>
                                    <div class='mt-[32px] flex flex-col gap-[16px]'>
                                        <div class='flex items-center gap-[12px]' v-for='i in s.items' :key='i.label'>
                                            <img :src='checkIconPrimary' alt='Icon'/>
                                            <p class='text-gray-600 text-base'>{{ i.label }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-100 border-t rounded-b-xl p-[32px]">
                                    <router-link  :to="s.path" class='block w-full bg-[#7F56D9] text-white text-center py-[12px] rounded-md text-lg'>Заказать</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- services end -->

            <!-- guaranties start -->
            <section class=' anim-up index-page__guarantees' id='why'>
                <div class="2xl:max-w-[90em] max-w-[82em] px-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 class="guaranties-text font-boldmd:leading-tight text-[#42307D]">Our guaranties</h2>
                        <p class="mt-4 text-base text-gray-600 mx-auto max-w-md">Lorem ipsum dolor sit amet, consectetur
                            adipis
                            elit</p>
                    </div>
                    <div
                        class='mt-[54px] grid 2xl:grid-cols-3 gap-[100px] justify-between place-items-center grid-cols-1'>
                        <div class='flex flex-col items-center text-center gap-[22px]' v-for='g in guaranties'
                             :key='g.label'>
                            <div class='gap-[45px] flex flex-col justify-center items-center'>
                                <img :src='g.icon' alt='Icon'/>
                                <p class='text-[21px] font-semibold'>{{ g.label }}</p>
                            </div>
                            <p class='text-gray-600'>{{ g.description }} </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- guaranties end -->

            <!-- trust start -->
            <section class=" anim-up index-page__trust" id='trust'>
                <div class="xl:max-w-[90em] max-w-[82em] px-4  sm:px-6 lg:px-8  mx-auto">
                    <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                        <h2 class="text-[20px] text-[#667085] md:leading-tight dark:text-gray-200">Trusted by 4,000+
                            companies</h2>
                    </div>
                    <div class="index-page__trust-partners my-8 md:my-16">
                        <a class="flex-shrink-0 transition hover:-translate-y-1" href="#" v-for='c in companies'
                           :key='c.logo'>
                            <img :src='c.logo' alt='Brand'/>
                        </a>
                    </div>
                </div>
            </section>
            <!-- trust end -->

            <!-- record start -->
            <section class='anim-up bg-[#0F172A] relative w-full z-40'>
                <div class="2xl:max-w-[90em] max-w-[82em] w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div class='flex items-center 2xl:flex-row flex-col place-items-center justify-between'>
                        <img class='2xl:h-[700px] 2xl:w-auto 2xl:absolute -top-[60px] w-full z-50' :src='note'
                             alt='Note'/>
                        <div
                            class='2xl:relative left-[calc(140px+50%)] max-w-min 2xl:py-20 py-8 w-full 2xl:w-auto text-white'>
                            <div class='space-y-[16px]'>
                                <h3 class='consult-text  font-semibold'>Проконсультироваться</h3>
                                <p class='text-[#94A3B8]'>Clarity gives you the blocks and components you need to create
                                    a truly
                                    professional website.</p>
                            </div>
                            <form class='mt-[40px]' @submit.prevent='handleSubmitRecord'>
                                <div class='mb-[20px]'>
                                    <label for="name" class="block text-sm mb-2 dark:text-[#E4E4E7]">Имя</label>
                                    <input type="text" id="name" v-model='data.name'
                                           class="py-3 px-4 block w-full rounded-full border-[#334155] bg-transparent border text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                           placeholder="Введите ваше имя">
                                </div>
                                <div class='mb-[37px]'>
                                    <label for="tel" class="block text-sm mb-2 dark:text-[#E4E4E7]">Телефон</label>
                                    <input type="tel" id="tel" v-model='data.tel'
                                           class="py-3 px-4 block w-full rounded-full border-[#334155] bg-transparent border text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                           placeholder="Введите ваше имя">
                                </div>
                                <button
                                    class='block bg-blue-600 text-white rounded-full py-[12px] px-[54px] font-semibold text-sm '
                                    type='submit'>Записаться
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <!-- record end -->

        </main>
        <!-- [main end] -->

        <!-- [footer start] -->
    </div>
    <!-- [footer end] -->
</template>

<style lang="scss">
$index-page-maxwidth: 1269px;
.back-image {
    top: 0;
    left: 0;
}
.main-image-wrapper {
    @media screen and (max-width: $notebook) {
        margin: 30px auto 0;
    }
}
.checks {
    @media screen and (max-width: $phone_start) {
        gap: 10px;
        flex-direction: column;

    }
}

.consult-text {
    font-size: font-calculate(36px);
}

.guaranties-text {
    font-weight: bold;
    font-size: font-calculate(60px);
}
.cards-title{
    padding-bottom: 30px;
}

.index-page {
    margin-top: viewport-calculate($notebook_start, $phone, 97px, 50px);
    margin-bottom: viewport-calculate($notebook_start, $phone, 112px, 64px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        max-width: $index-page-maxwidth;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    &__banner-start {
        margin-bottom: viewport-calculate($notebook_start, $phone, 74px, 40px);
    }

    &__our-company {
        position: relative;
        width: 100%;
    }

    &__company-image {
        position: relative;
        width: 100%;
        height: max-content;
        margin-top: viewport-calculate($notebook_start, $phone, 154px, 100px);
        margin-bottom: viewport-calculate($notebook_start, $phone, 106px, 60px);

        img {
            width: 100%;
            height: max-content;
        }
    }

    &__jenny {
        background-color: white;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -130%) rotate(2.18deg);
        padding: 12px 35px;
        background-color: rgba(255, 255, 255);

        &::after {
            content: '';
            position: absolute;
            top: calc(100% - 2px);
            left: 50%;
            width: 32.4px;
            height: 17.1px;
            background-color: rgba(255, 255, 255);
            clip-path: polygon(50% 100%, 0 0, 100% 0);
            border-radius: 90px;
            transform: translateX(-50%);
            filter: drop-shadow(0 0 32.4px rgba(0, 0, 0, 0.42));
        }
    }

    &__portfolio {
        width: 100%;
        background: url('@/assets/images/portfolio-bg.png') no-repeat center;
        background-size: cover;
        padding: viewport-calculate($notebook_start, $phone, 178px, 100px) 0 viewport-calculate($notebook_start, $phone, 242px, 160px);
        &-mockup{
            position: absolute;
            right:0;
            bottom: calc(viewport-calculate($notebook_start, $phone, 140px, 60px) * -1);
            z-index: -1;
        }
    }

    &__services {
        width: 100%;
        margin-bottom: viewport-calculate($notebook_start, $phone, 96px, 60px);
    }

    &__cards {
        background: url('@/assets/images/card-lines.png') 0 -64px;
        background-size: cover;
        padding-top:viewport-calculate($notebook_start,$phone, 64px, 30px);
        @media screen and (max-width:1100px) {
            background:             #F9F5FF;
            padding-bottom: 30px;

        }
    }

    &__trust {
        &-partners {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto viewport-calculate($notebook_start, $phone, 194px, 70px);
            gap: viewport-calculate($notebook_start, $notebook, 82px, 30px);
            @media screen and (max-width: $notebook) {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;

            }
            @media screen and (max-width: $phone_start) {
                grid-template-columns: 1fr 1fr;
            }
            @media screen and (max-width: $phone) {
                grid-template-columns: 1fr;
                width: max-content;
            }
        }

    }

    &__guarantees {
        margin-bottom: viewport-calculate($notebook_start, $phone, 72px, 40px);
    }
}
</style>

<script setup>
import axios from 'axios'
import {onMounted, reactive} from 'vue'

import {default as frameHeading} from '@/assets/images/frames/frame_heading.png'

import {default as note} from '@/assets/images/go_record.png'
import {default as heading} from '@/assets/images/heading.png'

import {default as company2} from '@/assets/images/companies/Company logo-1.png'
import {default as company3} from '@/assets/images/companies/Company logo-2.png'
import {default as company4} from '@/assets/images/companies/Company logo-3.png'
import {default as company5} from '@/assets/images/companies/Company logo-4.png'
import {default as company6} from '@/assets/images/companies/Company logo-5.png'
import {default as company1} from '@/assets/images/companies/Company logo.png'

import {default as checkIcon} from '@/assets/images/icons/check_circle.png'
import {default as checkIconPrimary} from '@/assets/images/icons/check_circle_primary.png'
import {default as featuredIconFirst} from '@/assets/images/icons/featured_1.png'
import {default as featuredIconSecond} from '@/assets/images/icons/featured_2.png'
import {default as featuredIconThird} from '@/assets/images/icons/featured_3.png'
import {default as productIcon} from '@/assets/images/icons/product.png'
import {default as salesIcon} from '@/assets/images/icons/sales.png'
import {default as supportIcon} from '@/assets/images/icons/support.png'

import {default as socialTwitter} from '@/assets/images/socials/Social-1.png'
import {default as socialTelegram} from '@/assets/images/socials/Social-2.png'
import {default as socialFacebook} from '@/assets/images/socials/Social.png'

import {BASE_URL} from '@/config'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    console.log(document.querySelectorAll(".index-page .anim-up").length);
    document.querySelectorAll(".index-page .anim-up").forEach(function (element, index) {
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
                autoAlpha: 0, y: window.screen.height / 10,
                ease: Expo.easeOut, clearProps: "all",
            }    // "+=0.3"
        );
    });
})


const navs = [
    {label: 'Главная', path: '/home'},
    {label: 'О нас', path: '/about'},
    {label: 'Наши проекты', path: '/projects'},
    {label: 'Об услугах', path: '/services'},
    {label: 'Почему мы', path: '/we'},
    {label: 'Нам доверяют', path: '/trust'},
    {label: 'Контакты', path: '/contacts'}
]

const checks = [
    {label: 'SMM'},
    {label: 'Consulting'},
    {label: 'Develope'},
]

const services = [
    {
        label: 'Consulting', sublabel: 'Billed annualy.', icon: featuredIconFirst, path:'/consulting', items: [
            {label: 'Access to all basic features'},
            {label: 'Access to all basic features'},
            {label: 'Access to all basic features'},
            {label: 'Access to all basic features'},
            {label: 'Access to all basic features'}
        ]
    },
    {
        label: 'SMM', sublabel: 'Billed annualy.', icon: featuredIconSecond, path:'/smm', items: [
            {label: '200+ integrations'},
            {label: 'Advanced reporting and analytics'},
            {label: 'Up to 20 individual users'},
            {label: '40GB individual data each user'},
            {label: 'Priority chat and email support'}
        ]
    },
    {
        label: 'Develope', sublabel: 'Billed annualy.', icon: featuredIconThird,  path:'/develope', items: [
            {label: 'Advanced custom fields'},
            {label: 'Audit log and data history'},
            {label: 'Unlimited individual users'},
            {label: 'Unlimited individual data'},
            {label: 'Personalised+priotity service'}
        ]
    }
]

const guaranties = [
    {
        label: 'Support',
        icon: supportIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.'
    },
    {
        label: 'Product',
        icon: productIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.'
    },
    {
        label: 'Sales',
        icon: salesIcon,
        description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.'
    },
]

const companies = [
    {logo: company1, path: ''},
    {logo: company2, path: ''},
    {logo: company3, path: ''},
    {logo: company4, path: ''},
    {logo: company5, path: ''},
    {logo: company6, path: ''},
]

const socials = [
    {icon: socialFacebook, path: ''},
    {icon: socialTwitter, path: ''},
    {icon: socialTelegram, path: ''},
]

const data = reactive({
    name: '',
    tel: ''
})

const handleSubmitRecord = () => {
    axios.post(BASE_URL, {
        name: data.name,
        tel: data.tel
    }).then((res) => {
        alert('Success')
        console.log(res)
    }).catch((e) => console.log(e))
}
</script>
