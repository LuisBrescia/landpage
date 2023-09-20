<template>
    <header
        class="shadow bg-blue-gradient-accordion text-white p-3 rounded-sm teext-sm md:text-base font-medium cursor-pointer flex justify-between items-center"
        @click="accordionAberto = !accordionAberto">
        <span class="pe-5 flex-1">
            <slot name="accordionHeader" />
        </span>
        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.5rem" :class="{ 'rotate-180': accordionAberto }"
            class="accordion-icon w-12" :data-expanded="accordionAberto" />
    </header>

    <div class="accordion-body mb-3 mt-2" :class="{ 'active': accordionAberto }">
        <div class="p-3 border rounded-sm bg-gray-50 text-gray-800 shadow font-light text-sm md:text-base">
            <slot name="accordionBody" />
        </div>
    </div>
</template>

<script setup>
// ? Por ser Nuxt3 não precisa de import { ref  } from "vue";
const accordionAberto = ref(false);
</script>

<style scoped>
.accordion-icon {
    transition: transform 0.5s ease;
}

.accordion-body {
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: height 0.5s ease;
}

.accordion-body.active {
    height: 8rem;
}

@media screen and (min-width: 576px) {
    .accordion-body.active {
        height: 8.4rem;
    }
}

@media screen and (min-width: 768px) {
    .accordion-body.active {
        height: 6.2rem;
    }
}
</style>