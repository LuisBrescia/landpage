<template>

    <button class="shadow font-semibold py-3 px-5 rounded-sm
    bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 hover:from-blue-600 hover:via-sky-500 hover:to-blue-600 outline-sky-400 text-white">
        <slot/>
    </button>

</template>

<style scoped>

button {
    background-size: 200%;
    animation: background-pan 3s linear infinite;
}

</style>