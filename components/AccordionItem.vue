<template>
    <header
        class="shadow-sm bg-blue-gradient-accordion text-white p-3 rounded-lg text-lg font-medium cursor-pointer flex justify-between items-center"
        @click="accordionAberto = !accordionAberto">
        <span class="pe-5 text-base flex-1">
            <slot name="accordionHeader" />
        </span>
        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.8em" :class="{ 'rotate-180': accordionAberto }"
            class="accordion-icon w-12" :data-expanded="accordionAberto" />
    </header>
    <div class="accordion-body mb-5 m-3" :class="{ 'active': accordionAberto }">
        <slot name="accordionBody" />
    </div>
</template>

<script setup>
// ? Por ser Nuxt3 não precisa de import { ref  } from "vue";
const accordionAberto = ref(false);
</script>

<style scoped>
.accordion-icon {
    transition: transform 0.3s ease-in-out;
}

.accordion-body {
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 1s ease;
}

.accordion-body.active {
    min-height: fit-content;
    height: 6rem;
    transform: scale(1);
}

@media screen and (min-width: 576px) {
    .accordion-body.active {
        height: 4.2rem;
    }
}

@media screen and (min-width: 768px) {
    .accordion-body.active {
        height: 3rem;
    }
}
</style>