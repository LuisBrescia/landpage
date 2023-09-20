<template>
    <button class="shadow font-semibold py-3 px-5 rounded-sm text-white
     bg-gray-900 hover:bg-gray-800">
        <slot/>
    </button>
</template>

<style scoped>

button:active {
    transform: translateY(1px);
}

</style>