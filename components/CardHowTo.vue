<template>
  <div class="relative md:w-1/2 p-12">
    <div class="top-0 absolute bg-blue-gradient text-white text-center py-3 w-16 mb-5 font-bold text-4xl">
      {{ numero }}
    </div>
    <img ref="imagem" :src="caminho" class="mb-5 rounded-sm shadow" />
    <div class="mb-5 rounded-sm shadow text-center">
      {{ filename }}
    </div>
    <p class="text-gray-900 text-lg md:text-xl mt-8 mb-12">
      <slot name="conteudo" />
      <br>
    </p>
  </div>
</template>

<script setup>

const caminho = ref("~/assets/img/passos-1.jpg");
const imagem = ref(null);

onMounted(() => {
  imagem.value.src = "~/assets/img/passos-1.jpg";
  console.log("sadasddsd", imagem.value.src)
});

console.log(props.filename)
console.log(typeof props.filename)

// const passo = document.getElementById('passo');

// passo.src = props.filename;

const props = defineProps({
  filename: String,
  numero: String
});

</script>