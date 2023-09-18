<template>
    <header 
    class="shadow-sm bg-blue-gradient-accordion text-white p-3 rounded-lg text-lg font-medium cursor-pointer flex justify-between items-center"
    @click="exibeAccordion()">
        <span class="pe-5 text-base flex-1">
            <slot/>
        </span>
        <Icon name="material-symbols:keyboard-arrow-down-rounded" size="1.8em" class="accordion-icon w-12"
            :class="{ 'rotate-180': accordionAberto }" :data-expanded="accordionAberto" />
    </header>
</template>

<script setup>
    var accordionAberto = false;

    function exibeAccordion() {
        accordionAberto = !accordionAberto;
        console.log(accordionAberto);
    }

</script>