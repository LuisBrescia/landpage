<template>
  <button class="border-2 font-semibold rounded-sm py-3 px-5
  bg-white border-gray-200 active:border-gray-300 hover:border-gray-300 active:bg-gray-100 text-gray-900">
      <slot/>
  </button>
</template>

<style scoped>

button {
    transition: all 0.2s ease;
}

</style>
