<script lang="ts" setup></script>

<template>
  <navbar />
  <slot />
  <section class="bg-blue-gradient py-12 px-4">
    <PreFooter />
  </section>

  <section class="bg-gray-950 pt-16 pb-4 px-4">
    <Footer />
  </section>
</template>

<style scoped></style>
