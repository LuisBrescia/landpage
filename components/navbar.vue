<template>
  <nav class="flex justify-center p-3 sticky top-0 mt-5 z-50 bg-white" :class="{ 'shadow': isScrolled }">

    <div class="container flex justify-between items-center">

      

        <div class="flex-1 flex items-center gap-2 text-gray-950">
          <Icon name="lucide:door-open" size="2em" class="text-blue-500"></Icon>
          <header id="nomeMarca" class="font-semibold text-2xl text-gray-950 py-2 rounded-md bg-white">
            atende<span class="text-blue-gradient">aí</span>
          </header>
        </div>

        <div class="hidden lg:flex gap-5">
          <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Como funciona</a>
          <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Benefícios</a>
          <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Contato</a>
          <a href="/" class="text-sm px-3 py-2 rounded-lg hover:bg-gray-100">Seja um parceiro</a>
        </div>
    

      <div class="hidden lg:inline flex-1 text-end">
        <PrimaryButton>
          Área do parceiro
        </PrimaryButton>
      </div>

      <div class="inline lg:hidden">
        <button @click="exibeMenu(this)">
          <Icon name="majesticons:menu" size="3em" />
          <!-- <Icon name="majesticons:close" size="3em" /> -->
        </button>
      </div>

    </div>
  </nav>
</template>

<script>

var aberto = false;

export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    exibeMenu() {
      console.log('clicou', aberto);
      aberto = !aberto;
    }
  },
};

</script>