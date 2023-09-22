<template>
  <div class="relative p-5">
    <div class="absolute bg-blue-gradient text-white text-center py-3 w-16 mb-5 font-bold text-2xl rounded-sm">
      {{ numero }}
    </div>
    <img :src="caminhoPublic" class="rounded-sm shadow w-full" />
    <p class="text-gray-900 mt-5 font-medium">
      <slot name="conteudo" />
    </p>
  </div>
</template>

<script setup>

const props = defineProps({
  filename: String,
  numero: String
});

const caminhoPublic = ref(`/img/${props.filename}.jpg`);
// > Por algum motivo não funciona const caminhoAssets = ref(`@/assets/img/${props.filename}.jpg`);

</script>