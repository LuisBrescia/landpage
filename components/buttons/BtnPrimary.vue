<template>

    <button class="shadow bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 hover:from-blue-600 hover:via-sky-500 hover:to-blue-600  font-semibold py-2 px-5 rounded-full outline-sky-400 text-white">
        <slot/>
    </button>

</template>

<style scoped>

button {
    background-size: 200%;
    animation: background-pan 3s linear infinite;
}

</style>