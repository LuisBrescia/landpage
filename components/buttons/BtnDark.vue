<template>
    <button class="font-semibold py-3 px-5 rounded-sm text-white
     bg-gray-900 hover:bg-gray-800 active:text-gray-300">
        <slot/>
    </button>
</template>

<style scoped>

button {
    transition: all 0.2s ease;
}

</style>