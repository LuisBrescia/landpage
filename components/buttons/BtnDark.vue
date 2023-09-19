<template>
    <button class="border-2 font-semibold py-3 px-5 rounded-full text-white
    border-gray-900 bg-gray-900 hover:bg-gray-800 hover:border-gray-800 active:text-gray-300">
        <slot/>
    </button>
</template>

<style scoped>

button {
    transition: all 0.2s ease;
}

</style>