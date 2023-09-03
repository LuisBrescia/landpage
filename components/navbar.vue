<template>
    <nav class="flex justify-center p-3 sticky top-0 bg-white mt-5" :class="{ 'shadow': isScrolled }">
        <div class="container flex justify-between items-center max-w-7xl">

            <div class="flex-1 flex items-center gap-1">
                <!-- <Icon name="lucide:door-open" size="1.2em"></Icon> -->
                <img src="~/assets/img/logo.png" alt="Logo" class="logoAtendeAi bg-black"/>
            </div>

            <div class="hidden md:flex gap-4">
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-blue-50">Como funciona</a>
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-blue-50">Benefícios</a>
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-blue-50">Contato</a>
                <a href="/" class="px-3 py-2 rounded-lg hover:bg-blue-50">Seja um parceiro</a>
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