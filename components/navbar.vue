<template>
    <nav class="flex justify-center p-3 sticky top-0 mt-5 z-50 bg-white" :class="{ 'shadow': isScrolled }">
        <div class="container flex justify-between items-center">

            <div class="flex-1 flex items-center gap-1">
                <!-- <Icon name="lucide:door-open" size="1.2em"></Icon> -->
                <header id="nomeMarca" class="text-gray-950 px-5 rounded-md bg-white">
                  atende<span class="text-blue-gradient">aí</span>
                </header>
            </div>

            <div class="hidden lg:flex gap-4">
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-gray-100">Como funciona</a>
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-gray-100">Benefícios</a>
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-gray-100">Contato</a>
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-gray-100">Seja um parceiro</a>
            </div>

            <div class="flex-1 text-end">
                <button class="btn-primario">
                    Área do parceiro
                </button>
            </div>

        </div>
    </nav>
</template>

<script>

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
  },
};

</script>